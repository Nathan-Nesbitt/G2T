# Basics of HTML

## Tags

## Comments

`<!-- Hello There -->` - This is a comment, you can put this inside of an html document without it showing up.

## Structure of an HTML Document

`<!DOCTYPE html>` - You should always put the declarator of the html file at the top

`<html>` - Main part or rather root of the HTML document. contains all HTML encoding.

`<head>` - The head of the document, it is the first element within the html tag. You put all of your metadata inside of the head

`<body>` - The body of the HTML document, this is where all of the displayed tags go

`<footer>` - This is a bottom tag that was introduced in HTML5. It goes below the body.

### Basic Structure
```{html}

<!DOCTYPE html>
<html>

<head></head>

<body></body>

<footer></footer>

</html>

```

## Head Tags

### `<title>` 

This is the title of the document. You can only have 1 of these.
```
<head>
    <title>Nathan's Great Example Website<title>
</head>
```

### `<style>` 
This allows you to specify CSS inside of the HTML document. Although you can do this, it's usually better practice to use a separate file.

```
<head>
    <style>
    
    body {
        background-color: black;
    }
    
    </style>
</head>

```
### `<script>`
This tag allows you to write JavaScript inside of the HTML document. This will run when it gets to the client.

```
<head>
    <script>
        
        console.log("Hello World!");
    
    </script>
</head>
```

### `<meta>`
This allows you to specify other metadata.

#### This specifies the character set used in the webpage.
        
        <head>
            <meta charset="UTF-8">
        </head>


#### This allows us to create a description about the website.
        
        <head>
            <meta name="description" content="This is a website about Nathan Nathan">
        </head>

#### We can also define keywords about the webpage. This helps search engines to find our page.
        
        <head>
            <meta name="keywords" content="G2T, Programming, HTML">
        </head>

#### This allows us to tell the world that this is our page.

        <head>
            <meta name="author" content="Nathan Nesbitt">
        </head>

#### We can also set the document to fit on devices.

        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>

## Body Tags

### `<h>` 
Header tag, can range from 1 to 6, where 1 is the largest and 6 is the smallest. 

```
<head>
    <body>
        <h1>Big</h1>

        <h2>Less big</h2>
        
        <h3>Even Less big</h3>
        
        <h4>Even Even Less big</h4>
        
        <h5>Even Even Even  Less big</h5>
        
        <h6>This is getting small</h6>
    </body>
</head>
```

### `<link>` 

The link element

### `<a>` 

Links to a page

### `<img>` 

Inserts an image

### `<hr/>` 

Puts a horizontal line through the page

### `<ul>` and `<li>` 

#### Unordered List

```
<ul>
  <li>Python</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul> 
```
<ul>
  <li>Python</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul> 

### `<ol>` and `<li>` 

#### Ordered List

```
<ol>
  <li>Python</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>
```
<ol>
  <li>Python</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol> 

### `<table>`, `<tr>`, and `<th>` 

#### Creating a table

```
<table>
    <caption>My Table</caption>
    <tr>
        <th>Thing 1</th>
        <th>Thing 2</th>
        <th>Thing 3</th>
    </tr>
    <tr>
        <td>Item 1</td>
        <td>Item 2</td>
        <td>Item 3</td>
    </tr>
    <tr>
        <td>Item 4</td>
        <td>Item 5</td>
        <td>Item 6</td>
    </tr>
    <tr>
        <td>Item 7</td>
        <td>Item 8</td>
        <td>Item 9</td>
    </tr>
</table>

```
<table>
    <caption>My Table</caption>
    <tr>
        <th>Thing 1</th>
        <th>Thing 2</th>
        <th>Thing 3</th>
    </tr>
    <tr>
        <td>Item 1</td>
        <td>Item 2</td>
        <td>Item 3</td>
    </tr>
    <tr>
        <td>Item 4</td>
        <td>Item 5</td>
        <td>Item 6</td>
    </tr>
    <tr>
        <td>Item 7</td>
        <td>Item 8</td>
        <td>Item 9</td>
    </tr>
</table>


## Forms and Inputs

### \<form>

A form outlines where and how the values will be sent.
```
<form method="post" action="myScript.php">

</form>
```

<form method="post" action="myScript.php">


</form>

### \<input>

```
<form method="post" action="myScript.php">
	<input type="text" name="name">
	<input type="email" name="email">
</form>
```

<form method="post" action="myScript.php">
	<input type="text" name="name">
	<input type="email" name="email">
</form>

### \<select>

```
<select name="colors">
    <option selected="selected" value="Python">Python</option>
    <option value="Javascript">Javascript</option>
    <option value="PHP">PHP</option>
    <option value="Perl">Perl</option>
</select>
```
<select name="colors">
    <option selected="selected" value="Python">Python</option>
    <option value="Javascript">Javascript</option>
    <option value="PHP">PHP</option>
    <option value="Perl">Perl</option>
</select>

### \<textarea>

```
<textarea name="textArea" rows="4" cols="40" >
    Enter your input in here.
</textarea>
```

<textarea name="textArea" rows="4" cols="40" >
    Enter your input in here.
</textarea>

### \<input type="reset"/>

If you want to reset all of the values in the form

<input type="reset"/>

### \<input type="submit"/>

If you want to submit the form

<input type="submit"/>

## \<input type="button"/>

This creates a button. 

<input type="button" value="Button" name="myButton"/>

## Styling Tags

### `<p>` 

This is a paragraph tag

    <p>paragraph</p>

<p>paragraph</p>

### `<b>` 

Makes text bold

    <b>bold</b>

<b>bold</b>

### `<mark>` 

Highlights text

    <mark>mark</mark>

<mark>mark</mark>

Strong Text

### `<strong>` 

    <strong>strong</strong>

<strong>strong</strong>

### `<em>`

Emphasizes text 

    <em>em</em>

<em>em</em>

### `<i>`

Italicises the text

    <i>i<i>

<i>i<i>

### `<del>`
Puts a line through the text

    <del>del</del>

<del>del</del>

### `<pre>`

Allows for preformatted text, so if you want to leave spaces in your text you can put it in a \<pre>

<pre>foobar</pre>

### Special Symbols 

`&lt;`			&lt;

`&gt;`			&gt;

`&ntilde;`		&ntilde;

`&amp;`		    &amp;


---
<small>© Nathan Nesbitt, 2019. Not to be copied, used, or revised without express written permission from the copyright owner.</small>