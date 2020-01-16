# Commands in Linux

## Basic Commands

There are some basic commands in linux:

`ls` - List Directory

```
# Example (shows all files and all info in directory)
ls -la

# Output
drwxrwxrwx 1 nathan nathan 4096 Jan  6 13:57 . drwxrwxrwx 1 nathan nathan 4096 Nov 17 12:39 .. 
```

`cd` - Change Directory

```
Example (Changes directory back one level):

cd ../
```

`pwd` - Lists the path up to the current working directory

```
Example (Echos current working directory path):
pwd

Output:
/var/www/G2T
```

`clear` - Clears the shell

```
Example:

clear
```

`less` - Open file for reading

```
Example (Open the file foo.txt):

less foo.txt
```

`vim` or `vi` - Simple text editor

```
Example (Edit the file foo.txt):

vi foo.txt

## OR

vim foo.txt
```

`mkdir` and `rmdir` - Creates and deletes a directory

```
Example (Creates the folder foo/ and then deletes it):

mkdir foo
rmdir foo
```

`rm` - Removes a file

```
Example (Removes the file foo.txt):

rm foo.txt
```

`mv` - Moves a file

```
Example (Moves the file foo.txt back one directory):

mv foo.txt ../
```

`cp` - Copies a file

```
Example (Makes a copy of foo.txt in the home dir):

cp foo.txt ~/
```

`touch` - 'Touches' or creates a file

```
Example (Creates file foo.txt in the home directory):
touch ~/foo
```

`chown` - Changes perosn and group ownership of a file

```
Example (Changes ownership of foo.txt to nathan user and www-data group):

chown nathan:www-data foo.txt 
```

`chmod` - Changes permissions of a file

```
Example (Changes permissions of foo.txt to 755):

chmod 755 foo.txt
```

`ln` - Creates a link of a file

```
ln -s /home/nathan/myProject /var/www/myProject
```

`ssh` - Secure Shell (remote connection to the device)

```
Example (SSH to the localhost on port 2222 using nathan user):
ssh -p 2222 nathan@localhost
```

`rsync` - Remote Sync (transfer files remotely)

```
Example (Syncs the cygdrive folder on your local machiene onto the home directory on the server):
rsync -rvz -e 'ssh -p 2222' /cygdrive/c/Users/Nathan/MyProject nathan@localhost:/home/nathan/MyProject
```

`sudo` - Runs a command as root

```
# Please don't do this in real life, it is bad practise to just assume a required 755 or 777

Example (runs command chmod as root):
sudo chmod 755 /var/www/myProject
```

**And Most Importantly**
If you do not understand a command, you can use the `man` command

`man` - Opens the manual page about the command

```
man chmod
```

## Variables and Operators

`>` writes data to a file (overwrite) ` echo 'sometext' > myFile.txt`

```
Example (Overwrites 'foo' into a file foo.txt):
echo "Foo! " > foo.txt
```

`>>` appends data to a file (adds the data to the end of the file) `echo 'sometext' >> myFile.txt`

```
Example (Appends the string to the foo.txt file): 
echo "This is a file with foo in it" >> foo.txt
```

`|` - Also known as a pipe, this redirects all data on the left hand side into the right. For example you could do `cat myFile.txt | grep "sometext"`

```
Example (prints out foo.txt file and finds all references to "foo" in the file):

less foo.txt | grep "foo"

Output:

Foo! This is a file with foo in it
```

`~` Represents the link to your $HOME directory which can be changed.

```
Example (Changes to your home directory):
cd ~
```

---
<small>© Nathan Nesbitt, 2019. Not to be copied, used, or revised without express written permission from the copyright owner. </small>