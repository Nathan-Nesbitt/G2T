/* Create the database */

CREATE database G2T;

/* Create a user for this database */

CREATE USER 'nathan'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

/* Grant */
GRANT ALL ON G2T.* TO 'nathan'@'localhost';
FLUSH PRIVILEGES;

/* Use the database */

USE G2T;

/* Create the contacts table */

CREATE table contactList (
    name varchar(30) PRIMARY KEY,
    email varchar(40),
    phoneNumber varchar(10),
    notes text
);