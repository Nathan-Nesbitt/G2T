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

### `<table>`, `<tr>`, and `<th>` or `<td>` 

#### Creating a table
A basic table layout involves the `<table>` tag which indicates a table. We also will contain multiple `<tr>` tags which is a table row.  

Within each of those `<tr>` tags you will have either a set of `<th>` (table header) which shows information about each of the columns, or `<td>` (table data) which shows the data.

An example of a simple table
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

#### Changing the size of a column in a table
If we want to change the size of a cell you can use the `colspan` or `rowspan` attribute.

```
<table>
    <caption>My Table</caption>
    <tr>
        <th colspan="2">Thing 1</th>
        <th rowspan="2">Thing 2</th>
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
        <th colspan="2">Thing 1</th>
        <th rowspan="2">Thing 2</th>
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

## Layout/Structure/Semantics of page
Along with the `<head>` and `<body>` tags, HTML5 also defines some 
other tags to organize the page.

### `<div>`
A div is what we will be using to create divisions in our page. 
<div style="float: right">
    <p>This allows me to put objects in weird places</p>
    <p>And do it consistently for all objects inside of a div</p>
</div>

### `<section>`
A section is a way of representing or separating a part of a page. 
Use this when you have a unique header for a section of a page.

```
<section>
    <h1>Contacts</h1>
    <p>This is my section, because it has a header and unique data (all is contacts)</p>
</section>
<section>
    <h1>Phone Number</h1>
    <p>This is my second section, because it is separate from the first section due to it's header</p> 
</section>
```

### `<article>`
An article element is used when we have a self-contained, composition that could be re-usable. For example if we had:
```
<article>
    <p>This is my article, because it has a self-contained composition</p>
</article>
<article>
    <p>This is my article, because it has a self-contained composition</p>
</article>
```
### `<figure>`
A figure is most commonly used if the content is an image, illustration, or code. 

```
<figure>
    <img src="img.png" alt="My Image">
</figure>
```

### `<figcaption>`
Adds a caption to a figure.

```
<figure>
    <img src="img.png" alt="My Image">
    <figcaption>This is my caption</figcaption>
</figure>
```

### `<aside>`
If the information is related to the main content but is not essential you should nest
the data inside of an `<aside>` tag. 

```
<aside>
  <h2>My Aside</h2>
  <p>Some aside content</p>
</aside>
```

### `<time>`
Time allows web crawlers to index the page and find the dates.

```
<time datetime="2020-01-28">January 28, 2020<time>
```

## Forms and Inputs

### `<form>`

A form outlines where and how the values will be sent.
```
<form method="post" action="myScript.php">

</form>
```

<form method="post" action="myScript.php">


</form>

### `<input>`

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

### `<select>`

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

### `<textarea>`

```
<textarea name="textArea" rows="4" cols="40" >
    Enter your input in here.
</textarea>
```

<textarea name="textArea" rows="4" cols="40" >
    Enter your input in here.
</textarea>

### `<input type="reset"/>`

If you want to reset all of the values in the form

<input type="reset"/>

### \<input type="submit"/>

If you want to submit the form

<input type="submit"/>

### `<input type="button"/>`

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

Italicizes the text

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