# Introduction to Databases and MySQL

## What is a database
A database is a structured collection or set of data. Technically a database could be any sort of structure: A text file, a CSV, an Excel file. But when we discuss databases in programming we most often mean a **relational database**. 

## What is a relational database?
A relational database is a database based on the relational data model (created by E.F. Codd). It essentially means that we will break our data down into tables (also known as relations) which will contain columns (also known as attributes) of data. Each row (also known as a tuple) contains a unique set of data (using a **Primary Key**) which allows us to identify any row in a database. The tables are linked together using **Foreign Keys** that point to Keys in other tables. Using these links, in a properly created database, we should be able to link any piece of data in the database together. 

## Why would we want to use a relational database?
Relational Databases are very efficient if used properly. Companies often use relational databases to store and query millions of entries efficiently (to the point where you are not even aware that they are searching for data before sending it to us). For example, your school would have a relational database of all of the students in the district. They would be able to query this data to get any sort of information about any individual at any time. Other examples could be login information for a website, or product information for a store. 

## What other types of databases are there?
We will only be discussing relational databases as they are the most commonly used, but it is useful to know of the other types of 'NoSQL' databases:

1. Map Reduce (fault tollerant, distributed database)

    - Map Reduce is often used for 
    - Hadoop is an example of map reduce

2. Key Value Stores (wide column store distributed database)

    - Values are stores in key-value relationships
    - Apache Cassandra is an example of a key-value store

3. Document Oriented

    - Similar to the Key-Value stores, but data is stored in structured documents.
    - MongoDB is an example of a document oriented database

4. Graph Databases

    - Graph databases are most commonly used in social networks
    - Neo4J is an example of a graph database

## Why use a DBMS
A Database Management System (DBMS) provides the following qualities:

- **Efficient**: They are able to process the data without having to touch all values in the DB.
- **Convenient**: They are easily queried.
- **Safe**: The DBMS keeps the data secure from intruders and corruption.
- **Massive**: The DBMS can handle large amounts of datab (>petabytes).
- **Persistent**: We don't loose the data after a program closes.
- **Multi-User**: Multiple users can access/insert data at the same time.


## What is MySQL
MySQL is a relational SQL database management system (DBMS) that we will be using. It is one of the more commonly used databases, along with PostgreSQL. MySQL is open source and owned and maintained by Oracle. We can access the database using:

## Definitions in SQL

**Relation** 
- Table
- Contains columns and rows

**Column** 
- Attribute

**Row** 
- Tuple

**Domain** 
- Allowed values in an attribute (e.g. Must be a string, or can only be a number < 10) 

**Degree**
- Number of Columns/Attributes a table contains

**Cardinality**
- Number of Rows/Tuples a table contains

## Keys in a Relational Database

### Superkey
- Set of attributes that uniquely identify a row/tuple in a relation.
- This means if we had Social Insurance Number (SIN) and School ID, the Candidate Key would be SIN, or the School ID, or the combination of SIN and School ID. 

### (Candidate) Key
- **Minimal** set of attributes that uniquely identify a row/tuplue in a relation.
- This means if we had Social Insurance Number (SIN) and School ID, the Candidate Key would be SIN or School ID but not both.

### Primary Key
- The chosen Candidate Key to identify a relation. 
- Let's assume that we chose to identify people by their SIN number, that would make the SIN number the Primary Key for our relation. 

### Foreign Key
- Set of attributes that reference another table's/relation's primary key.
- If we had a table of birthdates of all students, it could have a foreign key that points to the table of student's primary keys.

## MySQL Basics

### Logging into MySQL

If you have root: ``sudo mysql``

If you don't have root but already have a user: ``mysql -u <username> -p``

### Creating a database
Before we can start to code anything, we need to create a database. To do this we can use:

```
CREATE DATABASE <databaseName>
```

Where `<databaseName>` is the name of the database you want to create

### Creating a new user
If you want to create a new user you must have admin/root privileges on the account. You need to login to MySQL as this user, you can then create a new user with the syntax:

```
CREATE USER '<username>'@'localhost' IDENTIFIED BY '<password>';
```

Where `<username>` is the chosen username and `<password>` is the chosen password.

### Granting Access to a database
Since we don't want all users to be able to access any database, we must allow our new user access to the database. We can do that by using the following code: 

```
GRANT <Permissions> ON <database>.* TO '<username>'@'localhost';
FLUSH PRIVILEGES;
```

Where `<Permissions>` is the permission levels to be granted, `<username>` is the chosen username and `<database>` is the chosen database.

`FLUSH PRIVILEGES;` ensures that the changes were applied.

### Accessing a Database
To access a database from within MySQL we can use

```
USE DATABASE <databaseName>
```

## Datatypes in MySQL
There are some main datatypes in MySQL

### Numbers
#### Integers
- `TINYINT` (1 Byte) A very small integer 
- `SMALLINT` (2 Byte) A small integer
- `MEDIUMINT` (3 Byte) A medium-sized integer
- `INT` (4 Byte) A standard integer
- `BIGINT` (8 Byte) A large integer
#### Floating Point Numbers
- `DECIMAL`(Range) 
- `FLOAT`  (4 Bytes)
- `DOUBLE` (8 Bytes)

#### Other
- `BIT` A bit field

### Strings
#### Char Based Strings
- `CHAR`	    A fixed-length string (up to 255 characters)
- `VARCHAR`	    A variable-length string (up to 255 characters)
 
#### Blob Based Strings
- `TINYBLOB`	A very small binary large object (up to 255 characters)
- `BLOB`	    A normal binary large object (up to 65,535 characters)
- `MEDIUMBLOB`	A medium-sized binary large object (up to 16,777,215 characters)
- `LONGBLOB`	A large binary large object (up to 4,294,967,295 characters)

- `TINYTEXT`	A very small non-binary string (up to 255 characters)
- `TEXT`	    A small non-binary string (up to 65,535 characters)
- `MEDIUMTEXT`	A medium-sized non-binary string (up to 16,777,215 characters)
- `LONGTEXT`	A large non-binary string (up to 4,294,967,295 characters)

## Dates
- `DATE`	    Date in YYYY-MM-DD
- `TIME`	    Time in hh:mm:ss
- `DATETIME`	Date and time in YYYY-MM-DD hh:mm:ss
- `TIMESTAMP`	A timestamp in YYYY-MM-DD hh:mm:ss 
- `YEAR`	    A year value in YYYY or YY 

## Basic SQL DDL 
SQL DDL or Standard Query Language - Data Definition Language is how we define/create the structure that our data will be stored in. 

### Create
We can use a create statement to create either a database or a table. The database creation call normally does not take any arguments, but the table creation call takes the Columns/Attributes that we want to exist within the table. 
```
CREATE DATABASE <databaseName>; 

## OR CREATE A TABLE

CREATE TABLE <tableName> (
    <columnName>  <Type>  (<Size>);
    <columnName2> <Type2> (<Size2>);
);
```

An example of a table that we could create would be a basic contact table with a unique name of max length 20 and a phone number of 10 characters:

```
CREATE TABLE phoneNumbers (
    name VARCHAR(20),
    phoneNumber CHAR(10)
);
```


### Drop

```
DROP DATABASE <databaseName>;

# OR DROP A TABLE

DROP TABLE <tableName>;
```

### Alter
You can use alter to modify a table without deleting it, for example if you want to alter the table to add a column you can do:

```
ALTER TABLE <tableName> ADD COLUMN `<columnName>` `<columnDataType>`;
```

You can also do other things like adding a primary key:

```
ALTER TABLE <tableName> ADD PRIMARY KEY (<columnName>);
```

## Basic SQL DML/DQL
SQL Data Management Language and Data Query Language are used to access and modify the data within a database. 

### Insert

```
INSERT INTO <tableName> (<column1>, <column2>) VALUES (<value1>, <value2>);
```

For example if I wanted to insert 2 phone number into my adressBook from before I could do:

```
INSERT INTO phoneNumbers (name, phoneNumber) VALUES ('Nathan', '1112223333'), ('Jeff', '4445556666'); 
```

### Update

If we want to change a row that is in the table we can use the update call:

```
UDATE <tableName> SET <columnName2> = <value2> WHERE <columnName1> = <value1>;
``` 

For example if we wanted to update Jeff's phone number to be '7778889999'

```
UDATE phoneNumbers SET phoneNumber = '7778889999' WHERE name = 'Jeff';
```

### Delete
If we want to delete a row from a relation we can use the DELETE statement:

```
DELETE FROM <tableName> WHERE <column> = <value>; 
```

So if we want to delete 'nathan' from our contacts we can do:

```
DELETE FROM phoneNumbers WHERE name = 'nathan'; 
```

**Don't forget the where clause when doing this, as it will delete all entries!**

### Select

```
SELECT <column1>, <column2> FROM <table> WHERE <column> = <value>
```

So if we want to get all of the names from our database we can simply do:

```
SELECT name FROM phoneNumbers;
```

Or if we want to get nathan's phone number:

```
SELECT phoneNumber FROM phoneNumbers WHERE name = 'nathan';
```

Or if we want to get all of the information for a phone number we can do:

```
SELECT * FROM phoneNumbers WHERE phoneNumber = '1112223333';
```

## Joining 
We often want to get data that is related, we can do this by using joins.

### Basic Join Syntax

```
SELECT * FROM <table1>, <table2> WHERE <table1>.<ID> = <table2>.ID;
```

For example if we had two tables of students and ages which both had a Unique Identifier for a student called `ID`, we could join them together by doing:

```
SELECT * FROM students, studentAges WHERE students.ID = studentAges.ID;
```

### Searching for similar values
In SQL there is the `LIKE` operator, which allows you to search the database for a value that is similar to some input. 

There are 2 wildcards that can be used with the LIKE operator:

#### '%' - Zero to many values
If you want to match any range of values (e.g. I know that someones name ends with SAR) we can use the `%` wildcard.

So if we know that someone's name ends in 'SAR' we can find them in the database by doing:

```
LIKE "%SAR"
```

Or if it starts with 'SAR' we can do:

```
LIKE "SAR%"
```

Or if we only know that the name contains SAR in some place, we can say:

```
LIKE "%SAR%"
```

#### '_' - One value
If you want to match exactly 1 value (e.g. if we know 3/4 of the characters in someone's name) we can use the `_` wildcard.

So if we wanted to find the names that are 4 letters and start with 'SAR' we could use:
```
LIKE "SAR_"
```

For example if I wanted to search for someone in my contact list who's name starts with 'Sar' I could use:

```
SELECT * FROM contactList WHERE name LIKE "SAR%";
```

This searches the database for any names in the contactList table that start with `SAR`.

Note that we can also use these wildcards together! So you could check the 2nd-4th character matches 'SAR' using:

```
SELECT * FROM contactList WHERE name LIKE "_SAR%";
```

As any character could match the `_`.

---
<small>© Nathan Nesbitt, 2019. Not to be copied, used, or revised without express written permission from the copyright owner.</small>