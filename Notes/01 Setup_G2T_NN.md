# Set up virtualbox for LAMP server development

## (Optimal) Just run linux
If you have your own machine, just run some distribution of linux. Real development is easiest when done on linux as you
will have to do less hacky workarounds.

## WSL
If you are lucky you may be able to install WSL or Windows Subsystem for Linux. This is the linux kernel/ubuntu operating system
which runs on top of Windows. You can simply install this from the Windows store, and requires a powershell command to be run for
it to be enabled. I will not be running through that installation in this document because there are many good resources which can
be found online for installing it.

If installing through WSL simply skip to the Installing LAMP Stack section.

## Setting up virtualbox with an ubuntu VM
1. Install virtualbox from https://www.virtualbox.org/
2. Install all required dependencies
3. Download the ubuntu server https://ubuntu.com/download/server
4. Create a new VM, follow basic steps
5. Once the vm has been created, right click on the new VM -> settings->storage->controller:IDE and create a new disk with the ISO for ubuntu server
6. We also need to go into settings->network->advanced->port forwarding and add an apache TCP port forward for host port 8080 and guest port 80 and an SSH TCP port for host port 2222 and guest port 22.
6. Start the VM
7. Install OPENSSH server using the prompt 
8. Follow the rest of the instructions to create the VM
9. Reboot the server when all on-screen steps have completed

Once the server has rebooted, we now want to ensure that all packages are updated
1. `sudo apt-get update`
2. `sudo apt-get upgrade`

## Installing LAMP stack
1. Ensure that all packages are installed `sudo apt update` 
2. Install apache2 `sudo apt install apache2` 
3. Install mysql-server `sudo apt install mysql-server`
4. Install PHP `sudo apt install php libapache2-mod-php php-mysql`

## Setting up apache2
1. Creating a working directory for your project `sudo mkdir /var/www/<projectName>`
2. Create a link for your projecty directory somewhere else so you can work/push to it `ln -s  ~/<projectName> /var/www/<projectName>`
3. Change the ownership of that directory `chown g2t:g2t ~/<projectName>`
2. Create a temporary file to show that it is working `sudo touch ~/<projectName>/index.html`
3. Open the index file you created `vim ~/<projectName>/index.html`
4. Write the 'hello world' to the index file so it looks like...

    ```
    <html>
        <body>
            <h1>Success! Or hello world or whatever!</h1>
        </body>
    </html>

    ```
5. Modify the apache .conf files so they server up your page when you access the server `sudo vim /etc/apache2/sites-available/000-default.conf`  
    ```
    # Change the line 

    DocumentRoot /var/www/html/

    # to be the folder you created earlier

    DocumentRoot /var/www/<projectName>

    ## OR

    # If you have multiple projects on one server and don't care about proper redirects you can set it to

    DocumentRoot /var/www/
    ```

You should now be able to go to a local browser, and type in localhost:8080 and connect to your webserver. If this doesn't work you may have to restart apache `sudo systemctl restart apache2`

If you want to make it so you have your own file for each project you work on and you are hosting with a domain name, you can use the following [note we do not have a domain name, or a public server so this will not work for you]:
1. Create a new config file for the server `sudo vim /etc/apache2/sites-available/<projectName>.conf`
    ```
    <VirtualHost *:80>
        ServerAdmin webmaster@localhost
        ServerName <DomainName>
        ServerAlias www.<DomainName>
        DocumentRoot /var/www/<projectName>
        ErrorLog ${APACHE_LOG_DIR}/<DomainName>-error.log
        CustomLog ${APACHE_LOG_DIR}/<DomainName>-access.log combined
    </VirtualHost>
    ```
2. Add this new config file `sudo a2ensite <DomainName>.conf`
3. Remove the default config file `sudo a2dissite 000-default.conf`
4. Restart apache `sudo systemctl restart apache2`


The ErrorLog and the CustomLog lines can optionally be left without the <DomainName> attribute if you want all of the logs in one file.

## Setting up mysql
1. Optionally run the secure installation script (this will force you to use strong passwords) `sudo mysql_secure_installation`
2. Make sur that mysql is running `sudo systemctl start mysql`

We will go into creating users and databases later in the course.

## Setting up PHP
1. Tell apache to serve up index.php files `sudo vim /etc/apache2/mods-enabled/dir.conf`
    ```
    # Change this line
    DirectoryIndex index.html index.cgi index.pl index.xhtml index.htm

    # So it has index.php
    DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
    ```

2. Restart apache to see the changes `sudo systemctl restart apache2`
3. Install the command line interface for PHP [optional, as this is more for debugging] `sudo apt install php-cli`
4. Now if you want to go check to see if your server is running PHP properly you can create a new file in the server working directory `vim ~/<projectName>/test.php` and put the following code in it
    ```
    <?php
    phpinfo();
    ?>
    ```
Now if you go to `localhost:8080/test.php` the PHP info page should show up. **Don't leave this page up after this as there is information about the server in this file**

# Setting up your local device for development

For the following example we are going to be using unix commands to transfer and connect to our server/VM. Since we need to use SSH and rsync to connect and transfer files, the 'easiest' way of getting these tools is to install the WSL or [windows subsystem for linux ](https://docs.microsoft.com/en-us/windows/wsl/install-win10) or, if you are working in an environment where you cannot install WSL, you can use [Cygwin](https://www.cygwin.com/). Since in the current environment we cannot install WSL, the following steps will outline the cygwin installation process.

1. Go to the Cygwin site and download the Windows executable
2. Follow the instructions for the basic installation, until you get to the available download sites
3. Choose a domain to download from (e.g. mirroir.csclub.waterloo.ca)
4. Change the view from *pending* to *not installed*
5. Search for `rsync` and `openssh`
6. For `rsync` and `openssh`change the 'new' column from `skip` to the version number

We can now run cygwin and use SSH, and rsync on our system. 

## SSH into your box
Earlier we port-forwarded both port 80 (HTTP) and 22 (SSH) on our virtual machine to ports 8080 and 2222. From the previous steps we can see that we used port 8080 to connect to the sample website we have created, but why would we want to port forward 22? 

In most 'real' situations we are often not able to plug a keyboard and monitor into the machine where our webserver is running. Some servers are even hosted in other countries. So how would we connect and manage these servers without having a direct connection to them? Simple! Use SSH!

### How to use SSH
`ssh [-p portNumber] [username@]host`

An example for how I would connect to my server:

`ssh -p 2222 g2t@localhost`

This will ask you for a password, and then will allow you to remote connect in. You will be able to use the same commands as when you were logged into the VM.

## Setting up rsync

Rsync is a useful command for syncing files between two devices. In our case, we are going to be writing code on our devices and will be transferring it to our server (the VM). We don't want to have to manually move the files every time we make a change, so we can write a little script to run every time to update the files on the server using rsync.

### How to use rsync

`rsync -rvz -e 'ssh -p [port number]' /some/path/on/our/device [user@]host:/path/on/the/server`

So for example I can use the following:

`rsync -rvz -e 'ssh -p 2222' ~/Documents/G2T/myProject g2t@localhost:/home/g2t/myProject`

## Setting up a script for this command

So anytime we want to sync our project from the desktop to our server, we can run that command. But it is really long, so we can put it in a shell script instead, and just run the shell script when we want to sync our project. 

1. Create a new file called syncScript.sh `touch syncScript.sh`
2. Edit that file `vim syncScript.sh` and add our code:
```
rsync -rvz -e 'ssh -p 2222' ~/Documents/G2T/myProject g2t@localhost:/home/g2t/myProject
```
3. Change the permissions on the file so it is executable. `chmod +x syncScript.sh`

Now we can simply run `./syncScript.sh` anytime we want to sync our project to a folder.

## GitHub (ONLY FOR REFERENCE)
Once you get more experienced it is useful to know how to use the git CLI, but for now we can use the github desktop client which can be found [here](https://desktop.github.com/). 

### Setting up git
1. Download it and run the installer
2. Log in
3. Create a new repository (file -> new repository) 
    
    a. Call the repository your project name
    
    b. Give it a description (what is this code)

    c. Point it to the directory where your code is on the machine

4. Create the repository

### Using git
This is not the best way of using git, as there is a workflow for when you are working on a project with other people. But for now we will be using it to back up our code. 

When you make changes to any code in the git directory, the changes are reflected in the git client. 

When you have made a sufficient amount of changes, you can choose which files to commit to the master branch (on your computer) and simply click the `commit to master` button. This should be done for every problem that you solve (I normally do it for each bug I solve).

When you want to push your changes to github (so they are saved outside your machine) you can click on the `push origin` button. You should now be able to visit your git page and view the changes.

---
<small>© Nathan Nesbitt, 2019. Not to be copied, used, or revised without express written permission from the copyright owner.</small>