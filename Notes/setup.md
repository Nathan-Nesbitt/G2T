# Set up virtualbox for LAMP server development

## Setting up virtualbox with a ubuntu VM
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
2. Install apache2 `sudo apt-get install apache2` 
3. Install mysql-server `sudo apt-get install mysql-server`
4. Install PHP `sudo apt-get install php libapache2-mod-php php-mysql`

## Setting up apache2
1. Creating a working directory for your project `sudo mkdir /var/www/<projectName>`
2. Create a link for your projecty directory somewhere else so you can work/push to it `ln -s /var/www/<projectName> ~/<prohectName>`
3. Change the ownership of that directory `chown g2t:g2t ~/<prohectName>`
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
1. Optionally run the secure installation script `sudo mysql_secure_installation`
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

---
<small>© Nathan Nesbitt, 2019. Not to be copied, used, or revised without express written permission from the copyright owner.</small>