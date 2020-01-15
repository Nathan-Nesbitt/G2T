rsync -rvz -e 'ssh -p 2222' <PATH TO LOCAL CODE> <username>@localhost:<PATH ON SERVER>

## FOR EXAMPLE

rsync -rvz -e 'ssh -p 2222' /mnt/c/Users/nathan/Documents/program nathan@localhost:/home/nathan/program/