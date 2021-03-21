---
layout:     post
title:      CSS Borders
date:       2021-03-21
author:     PengPengQi
header-img: img/BackGround.png
catalog: true
tags:
    - 背景
    - CSS
    - Borders
    - Notes
---
## CSS Border Style
```css
p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}
```
<html>
<head>
<style>
p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}
</style>
</head>
<body>
<p>This property specifies what kind of border to display:</p>

<p class="dotted">A dotted border.</p>
<p class="dashed">A dashed border.</p>
<p class="solid">A solid border.</p>
<p class="double">A double border.</p>
<p class="groove">A groove border.</p>
<p class="ridge">A ridge border.</p>
<p class="inset">An inset border.</p>
<p class="outset">An outset border.</p>
<p class="none">No border.</p>
<p class="hidden">A hidden border.</p>
<p class="mix">A mixed border.</p>

</body>
</html>
### CSS Border Width
The `border-width` property specifies the width of the four borders.  
  
The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: thin, medium, or thick:  
```css
p.one {
  border-style: solid;
  border-width: 5px;
}

p.two {
  border-style: solid;
  border-width: medium;
}

p.three {
  border-style: dotted;
  border-width: 2px;
}

p.four {
  border-style: dotted;
  border-width: thick;
}

p.five {
  border-style: double;
  border-width: 15px;
}

p.six {
  border-style: double;
  border-width: thick;
}
```
<html>
<head>
<style>
p.one {
  border-style: solid;
  border-width: 5px;
}

p.two {
  border-style: solid;
  border-width: medium;
}

p.three {
  border-style: dotted;
  border-width: 2px;
}

p.four {
  border-style: dotted;
  border-width: thick;
}

p.five {
  border-style: double;
  border-width: 15px;
}

p.six {
  border-style: double;
  border-width: thick;
}
</style>
</head>
<body>

<p>This property specifies the width of the four borders:</p>

<p class="one">Some text.</p>
<p class="two">Some text.</p>
<p class="three">Some text.</p>
<p class="four">Some text.</p>
<p class="five">Some text.</p>
<p class="six">Some text.</p>

<p><b>Note:</b> The `border-width` property does not work if it is used alone. 
Always specify the "border-style" property to set the borders first.</p>

</body>
</html> 
```css
p.one {
  border-style: solid;
  border-width: 5px 20px; /* 5px top and bottom, 20px on the sides */
}

p.two {
  border-style: solid;
  border-width: 20px 5px; /* 20px top and bottom, 5px on the sides */
}

p.three {
  border-style: solid;
  border-width: 25px 10px 4px 35px; /* 25px top, 10px right, 4px bottom and 35px left */
}
```
<html>
<head>
<style>
p.one {
  border-style: solid;
  border-width: 5px 20px; /* 5px top and bottom, 20px on the sides */
}

p.two {
  border-style: solid;
  border-width: 20px 5px; /* 20px top and bottom, 5px on the sides */
}

p.three {
  border-style: solid;
  border-width: 25px 10px 4px 35px; /* 25px top, 10px right, 4px bottom and 35px left */
}
</style>
</head>
<body>

<p>The border-width property can have from one to four values (for the top border, right border, bottom border, and the left border):</p>

<p class="one">Some text.</p>
<p class="two">Some text.</p>
<p class="three">Some text.</p>

</body>
</html>
### CSS Border Color
The `border-color` property is used to set the color of the four borders.  
  
The color can be set by:  
  
- `name` - specify a color name, like "red"  
- `HEX` - specify a HEX value, like "#ff0000"  
- `RGB` - specify a RGB value, like "rgb(255,0,0)"  
- `HSL` - specify a HSL value, like "hsl(0, 100%, 50%)"  
- `transparent`  
  
```css
p.one {
  border-style: solid;
  border-color: red;
}

p.two {
  border-style: solid;
  border-color: green;
}

p.three {
  border-style: dotted;
  border-color: blue;
}
```
<html>
<head>
<style>
p.one {
  border-style: solid;
  border-color: red;
}

p.two {
  border-style: solid;
  border-color: green;
} 

p.three {
  border-style: dotted;
  border-color: blue;
} 
</style>
</head>
<body>

<p>This property specifies the color of the four borders:</p>

<p class="one">A solid red border</p>
<p class="two">A solid green border</p>
<p class="three">A dotted blue border</p>

<p><b>Note:</b> The `border-color` property does not work if it is used alone. Use the "border-style" property to set the borders first.</p>

</body>
</html>
### Specific Side Colors
The `border-color` property can have from one to four values (for the top border, right border, bottom border, and the left border).   
  
```css
p.one {
  border-style: solid;
  border-color: red green blue yellow; /* red top, green right, blue bottom and yellow left */
}
```
<html>
<head>
<style>
p.one {
  border-style: solid;
  border-color: red green blue yellow; /* red top, green right, blue bottom and yellow left */
}
</style>
</head>
<body>

<p>The border-color property can have from one to four values (for the top border, right border, bottom border, and the left border):</p>

<p class="one">A solid multicolor border</p>

</body>
</html>
### CSS Border Sides
```css
p {
  border-top-style: dotted;
  border-right-style: solid;
  border-bottom-style: dotted;
  border-left-style: solid;
}
```
<html>
<head>
<style>
p {
  border-top-style: dotted;
  border-right-style: solid;
  border-bottom-style: dotted;
  border-left-style: solid;
}
</style>
</head>
<body>
<p>2 different border styles.</p>

</body>
</html>
<ul>
<li><b>border-style: dotted solid double dashed; </b>
<ul><li>top border is dotted</li>
<li>right border is solid</li>
<li>bottom border is double</li>
<li>left border is dashed</li>
</ul>
</li>
</ul>
<ul>
<li><b>border-style: dotted solid double;</b>
<ul><li>top border is dotted</li>
<li>right and left borders are solid</li>
<li>bottom border is double</li></ul>
</li>
</ul>
<ul>
<li><b>border-style: dotted solid;</b>
<ul><li>top and bottom borders are dotted</li>
<li>right and left borders are solid</li></ul>
</li>
</ul>
<ul>
<li><b>border-style: dotted;</b><ul><li>all four borders are dotted</li></ul>
</li>
</ul>
```css
/* Four values */
p {
  border-style: dotted solid double dashed;
}

/* Three values */
p {
  border-style: dotted solid double;
}

/* Two values */
p {
  border-style: dotted solid;
}

/* One value */
p {
  border-style: dotted;
}

```
<html>
<head>
<style>
body {
  text-align: center;
}
/* Four values */
p.four {
  border-style: dotted solid double dashed;
}

/* Three values */
p.three {
  border-style: dotted solid double;
}

/* Two values */
p.two {
  border-style: dotted solid;
}

/* One value */
p.one {
  border-style: dotted;
}
</style>
</head>
<body>

<h2>Individual Border Sides</h2>
<p class="four">4 different border styles.</p>
<p class="three">3 different border styles.</p>
<p class="two">2 different border styles.</p>
<p class="one">1 border style.</p>

</body>
</html>
### CSS Border - Shorthand Property
<ul>
<li><code>border-width</code></li>
<li><code>border-style</code> (required)</li>
<li><code>border-color</code></li>
</ul>
### CSS Rounded Borders
The `border-radius` property is used to add rounded borders to an element:  
```css
p.normal {
  border: 2px solid red;
}

p.round1 {
  border: 2px solid red;
  border-radius: 5px;
}

p.round2 {
  border: 2px solid red;
  border-radius: 8px;
}

p.round3 {
  border: 2px solid red;
  border-radius: 12px;
}
```
<html>
<head>
<style>
p.normal {
  border: 2px solid red;
}

p.round1 {
  border: 2px solid red;
  border-radius: 5px;
}

p.round2 {
  border: 2px solid red;
  border-radius: 8px;
}

p.round3 {
  border: 2px solid red;
  border-radius: 12px;
}
</style>
</head>
<body>

<h2>The border-radius Property</h2>
<p>This property is used to add rounded borders to an element:</p>

<p class="normal">Normal border</p>
<p class="round1">Round border</p>
<p class="round2">Rounder border</p>
<p class="round3">Roundest border</p>

</body>
</html>
### All CSS Border Properties
<table class="w3-table-all notranslate">
  <tbody><tr>
    <th style="width:25%">Property</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="/cssref/pr_border.asp">border</a></td>
    <td>Sets all the border properties in one declaration</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr_border-bottom.asp">border-bottom</a></td>
    <td>Sets all the bottom border properties in one declaration</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr_border-bottom_color.asp">border-bottom-color</a></td>
    <td>Sets the color of the bottom border</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr_border-bottom_style.asp">border-bottom-style</a></td>
    <td>Sets the style of the bottom border</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr_border-bottom_width.asp">border-bottom-width</a></td>
    <td>Sets the width of the bottom border</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr_border-color.asp">border-color</a></td>
    <td>Sets the color of the four borders</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr_border-left.asp">border-left</a></td>
    <td>Sets all the left border properties in one declaration</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr_border-left_color.asp">border-left-color</a></td>
    <td>Sets the color of the left border</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr_border-left_style.asp">border-left-style</a></td>
    <td>Sets the style of the left border</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr_border-left_width.asp">border-left-width</a></td>
    <td>Sets the width of the left border</td>
  </tr>
  <tr>
    <td><a href="/cssref/css3_pr_border-radius.asp">border-radius</a></td>
    <td>Sets all the four border-*-radius properties for rounded corners</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr_border-right.asp">border-right</a></td>
    <td>Sets all the right border properties in one declaration</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr_border-right_color.asp">border-right-color</a></td>
    <td>Sets the color of the right border</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr_border-right_style.asp">border-right-style</a></td>
    <td>Sets the style of the right border</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr_border-right_width.asp">border-right-width</a></td>
    <td>Sets the width of the right border</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr_border-style.asp">border-style</a></td>
    <td>Sets the style of the four borders</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr_border-top.asp">border-top</a></td>
    <td>Sets all the top border properties in one declaration</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr_border-top_color.asp">border-top-color</a></td>
    <td>Sets the color of the top border</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr_border-top_style.asp">border-top-style</a></td>
    <td>Sets the style of the top border</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr_border-top_width.asp">border-top-width</a></td>
    <td>Sets the width of the top border</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr_border-width.asp">border-width</a></td>
    <td>Sets the width of the four borders</td>
  </tr>
</tbody></table>