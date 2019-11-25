# Basics of CSS

## What is CSS?
CSS or cascading style sheets is a language used to style an HTML web page.

## Language Basics

```
p {
    color: purple;
    // <property>:<value> //
}
```

## The Box Model
All elements in HTML can be thought of as boxes. 

Around these boxes there are elements that we can change, for example we can change the *margin* property to increase the space between the object and the objects around it.

For example if you put the following in an html document, you will see that the third div is significantly padded on all sides

```
<div id="1" style="background-color:orange;">
    <p>This is my first div</p>
</div>
<div id="2" style="margin: 100; background-color:blue; height: 50%; width: 50%;">
     <p>This is my second div</p>
</div>
<div id="3" style="background-color:red;">
    <p>This is my third div</p>
</div>
```

We can also change the *border* of the boxes. 

```
<div id="1" style="border: 10px solid;">
    <p>This is my first div</p>
</div>
<div id="2" style="border: 10px solid purple;">
     <p>This is my second div</p>
</div>
<div id="3" style="border: 10px solid red;">
    <p>This is my third div</p>
</div>

```

---

<div id="1" style="border: 10px solid;">
    <p>This is my first div</p>
</div>
<div id="2" style="border: 10px solid purple;">
     <p>This is my second div</p>
</div>
<div id="3" style="border: 10px solid red;">
    <p>This is my third div</p>
</div>

---

There is also the option to add *padding* (margin but on the inside of the div). This makes it so our material inside doesn't get too close to the edges.

---

<div id="1" style="padding:20px; border: 10px solid;">
    <p>This is my first div</p>
</div>
<div id="2" style="padding:20px; border: 10px solid purple;">
     <p>This is my second div</p>
</div>
<div id="3" style="padding:20px; border: 10px solid red;">
    <p>This is my third div</p>
</div>

---

## Selecting Elements

Since we want to be able to apply theses styles using CSS, we need to be able to identify which elements should recive the changes. This is done using CSS selectors.

### `*` - (Universal Selector)

This applies a style to everything on the page.

### `p` - (Element Selector)

The element selector applies a style to all tags that match it. This can be done with **any** tag value.

```
<style>
    p  {
        background-color: green;
    }
</style>

```

### `div p` (Descendent Selector)

This applies to all paragraphs that are inside of a div. This can be done with **any** set of tag values.
```
<style>
    div p {
        background-color: green;
    }
</style>

<div>
    <p>asdasd</p>
</div>
```
---
<html>
<style>
div p {
    background-color: green;
}
</style>
<div>
    <p>My paragraph within a div</p>
</div>
</html>

---

### `h6 ~ p` General Sibling Combinator

This allows us to apply a style to a paragraph tag after a header of size 6. For example:

```
<html>
<style>
    h6 ~ p {
        color: blue;
    }
</style>
    <h6>Here is my heading </h4>
    <p>My Paragraph</p>
</html>
```

---
<html>
<!-This is my way of showing what it would look like without breaking the document ->
<style>
    #divp {
        color: blue;
    }
</style>
    <h6>Here is my heading </h4>
    <p id="divp">My Paragraph</p>
    <p id="divp">My Paragraph</p>
</html>

---

### `h6 + p` Adjacent Sibling Combinator

This allows us to do a similar thing but only with the first tag.

```
<html>
<style>
    h6 + p {
        color: red;
    }
</style>
    <h6>Here is my heading </h4>
    <p>My Paragraph</p>
</html>
```
---
<html>
<!-This is my way of showing what it would look like without breaking the document ->
<style>
    #divp {
        color: red;
    }
</style>
    <h6>Here is my heading </h4>
    <p id="divp">My Paragraph</p>
    <p>My Paragraph</p>
</html>

---

### `#myID` - (ID Selector)

This applies a style to all tags that have this ID.

```
<html>
<style>
    #newp {
        color: orange;
    }
</style>
    <h6>Here is my heading </h4>
    <p id="newp">My Paragraph</p>
    <p>My Paragraph</p>
</html>
```

---

<html>
<style>
    #newp {
        color: orange;
    }
</style>
    <h6>Here is my heading </h4>
    <p id="newp">My Paragraph</p>
    <p>My Paragraph</p>
</html>

---

### `.myClass` - (Class Selector)

This applies the style to any tag with this class.

```
<html>
<style>
    .myClass {
        color: purple;
    }
</style>
    <h6>Here is my heading </h4>
    <p>My Paragraph</p>
    <p class="myClass">My Paragraph</p>
</html>
```

---

<html>
<style>
    .myClass {
        color: purple;
    }
</style>
    <h6>Here is my heading </h4>
    <p>My Paragraph</p>
    <p class="myClass">My Paragraph</p>
</html>

---

### Grouping 

If you find yourself repeating the same code for a bunch of tags, you can group them into one:

```
<html>
<style>
    h6, p, h1 {
        color: powderblue;
    }
</style>
    <h1>Here is my heading </h1>
    <h6>My Sub-Heading</h6>
    <p>My Paragraph</p>
</html>
```

---
<html>
<!-This is my way of showing what it would look like without breaking the document ->
<style>
    #hOne {
        color: powderblue;
    }
</style>
    <h1 id="hOne">Here is my heading </h1>
    <h6 id="hOne">My Sub-Heading</h6>
    <p  id="hOne">My Paragraph</p>
</html>

---

## Setting ID or Class

If you want to assign a tag an ID you can do so by nesting the `id` or the `class` attributes in a tag. For example if you wanted to give our paragraph the id of `myParagraph` we could do so like this:

```
<p id="myParagraph">This is a paragraph about me</p>
```

Or if we wanted to give it the class of `myParagraphClass` we could do so like this:
```
<p class="myParagraphClass">This is a paragraph about me</p>
```


## Basic Properties

There are some general properties that you can change. If you want a full list, there are resources on the web like [W3Schools](https://www.w3schools.com/cssref/) that fully document all possible properties.

For divs we will be looking at:

- position
- left, right, top, bottom
- float
- overflow
- border-style
- padding
- margin
- width
- height
- display
- visibility

For text we will be looking at:

- font-family
- font-style
- font-weight
- font-size
- text-align
- text-decoration
- text-transform

## Including a stylesheet

If we want to be more tidy, we can store all of our CSS in a different file. You can do this by creating a `<someFileName>.css` file and including it in your main HTML file. This can be done with the following code in the head:

```
<head>
    <link rel="stylesheet" type="text/css" href="<someFileName>.css">
</head>
```

## Bootstrap

Bootstrap is our friend, if you do not like CSS that much. Go to [Bootstrap's Website](https://getbootstrap.com/) and follow the instructions to use it. This will simplify the process of creating a much slicker website. **USE THE BOOTSTRAP CDN FOR NOW.** 

---
<small>© Nathan Nesbitt, 2019. Not to be copied, used, or revised without express written permission from the copyright owner.</small>