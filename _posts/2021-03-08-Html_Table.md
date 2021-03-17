---
layout:     post
title:      HTML 表格
date:       2021-03-08
author:     PengPengQi
header-img: img/BackGround.png
catalog: true
tags:
    - 表格
    - HTML
    - Notes
---
# 表格
## 定义一个表格
```html
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
## 跨越许多行的单元格
```html
<table style="width:100%">
  <tr>
    <th>Name:</th>
    <td>Bill Gates</td>
  </tr>
  <tr>
    <th rowspan="2">Telephone:</th>
    <td>55577854</td>
  </tr>
  <tr>
    <td>55577855</td>
  </tr>
</table>
```
<table style="width:100%">
  <tr>
    <th>Name:</th>
    <td>Bill Gates</td>
  </tr>
  <tr>
    <th rowspan="2">Telephone:</th>
    <td>55577854</td>
  </tr>
  <tr>
    <td>55577855</td>
  </tr>
</table>
## 跨许多列的单元格
```html
<table style="width:100%">
  <tr>
    <th>Name</th>
    <th colspan="2">Telephone</th>
  </tr>
  <tr>
    <td>Bill Gates</td>
    <td>55577854</td>
    <td>55577855</td>
  </tr>
</table>
```
<table style="width:100%">
  <tr>
    <th>Name</th>
    <th colspan="2">Telephone</th>
  </tr>
  <tr>
    <td>Bill Gates</td>
    <td>55577854</td>
    <td>55577855</td>
  </tr>
</table>
## 添加标题
```html
<table style="width:100%">
  <caption>Monthly savings</caption>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$50</td>
  </tr>
</table>
```
<table style="width:100%">
  <caption>Monthly savings</caption>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$50</td>
  </tr>
</table>
## 添加边框
```css
table, th, td {
  border: 1px solid black;
}
```
<html>
<head>
<style>
table, th, td {
  border: 1px solid black;
}
</style>
</head>
<body>

<p>If you want the borders to collapse into one border, add the CSS border-collapse property.</p>

<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>80</td>
  </tr>
</table>

</body>
</html>
> 由于显示问题，详细视图请[见](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table_border)  

## 塌陷的边框
要使边框折叠成一个边框，请添加CSS `border-collapse` 属性：
```css
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
```
<html>
<head>
<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
</head>
<body>

<p>If you want the borders to collapse into one border, add the CSS border-collapse property.</p>

<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>80</td>
  </tr>
</table>

</body>
</html>
## 添加单元格填充
单元格填充指定单元格内容及其边界之间的空间。
```css
th, td {
  padding: 15px;
}
```
<html>
<head>
<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 15px;
}
</style>
</head>
<body>
<p>Cell padding specifies the space between the cell content and its borders.</p>

<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>80</td>
  </tr>
</table>

<p><strong>Tip:</strong> Try to change the padding to 5px.</p>

</body>
</html>
## 其他特性
```css
/* 左对齐标题 */
th {
  text-align: left;
}

/* 添加边框间距 */
table {
  border-spacing: 5px;
}
```
<hr>
```html
<table>
  <colgroup>
    <col span="2" style="background-color:red">
    <col style="background-color:yellow">
  </colgroup>
  <tr>
    <th>ISBN</th>
    <th>Title</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>3476896</td>
    <td>My first HTML</td>
    <td>$53</td>
  </tr>
</table>
```
<table>
  <colgroup>
    <col span="2" style="background-color:red">
    <col style="background-color:yellow">
  </colgroup>
  <tr>
    <th>ISBN</th>
    <th>Title</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>3476896</td>
    <td>My first HTML</td>
    <td>$53</td>
  </tr>
</table>
## scope属性
`scope`属性指定标题单元格是列，行还是一组列或行的标题。该scope属性在普通的Web浏览器中没有视觉效果，但是可以由屏幕阅读器使用。
```html
<table>
  <tr>
    <th></th>
    <th scope="col">Month</th>
    <th scope="col">Savings</th>
  </tr>
  <tr>
    <td>1</td>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>2</td>
    <td>February</td>
    <td>$80</td>
  </tr>
</table>
```
语法：
```html
<th scope="col|row|colgroup|rowgroup">
```
如果要替代 scope 属性，可以使用 id 和 headers 属性来创造标题与单元格之间的联系。使用方法如下:  
  
* 为每个`<th>` 元素添加一个唯一的 id 。  
* 为每个 `<td>` 元素添加一个 headers 属性。每个单元格的headers 属性需要包含它从属于的所有标题的id，之间用空格分隔开。  
  
```html
<thead>
  <tr>
    <th id="purchase">Purchase</th>
    <th id="location">Location</th>
    <th id="date">Date</th>
    <th id="evaluation">Evaluation</th>
    <th id="cost">Cost (€)</th>
  </tr>
</thead>
<tbody>
<tr>
  <th id="haircut">Haircut</th>
  <td headers="location haircut">Hairdresser</td>
  <td headers="date haircut">12/09</td>
  <td headers="evaluation haircut">Great idea</td>
  <td headers="cost haircut">30</td>
</tr>

  ...

</tbody>
```
## 更多特性
```css
#t01 tr:nth-child(even) {
  background-color: #eee;
}
#t01 tr:nth-child(odd) {
  background-color: #fff;
}
#t01 th {
  color: white;
  background-color: black;
}
```
<!DOCTYPE html>
<html>
<head>
<style>
table {
  width:100%;
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 15px;
  text-align: left;
}
#t01 tr:nth-child(even) {
  background-color: #eee;
}
#t01 tr:nth-child(odd) {
 background-color: #fff;
}
#t01 th {
  background-color: black;
  color: white;
}
</style>
</head>
<body>
<table id="t01">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>80</td>
  </tr>
</table>

</body>
</html>

<dl>
 <dt><code>tr:nth-child(2n+1)</code></dt>
 <dd>表示HTML表格中的奇数行。</dd>
 <dt><code>tr:nth-child(odd)</code></dt>
 <dd>表示HTML表格中的奇数行。</dd>
 <dt><code>tr:nth-child(2n)</code></dt>
 <dd>表示HTML表格中的偶数行。</dd>
 <dt><code>tr:nth-child(even)</code></dt>
 <dd>表示HTML表格中的偶数行。</dd>
 <dt><code>span:nth-child(0n+1)</code></dt>
 <dd>表示子元素中第一个且为span的元素，与&nbsp;<span style="background-color: #ffffff; color: #4d4e53; font-family: open sans,arial,sans-serif; font-size: 14px; line-height: 21px;"><a href="/zh-CN/docs/Web/CSS/:first-child"><code>:first-child</code></a>&nbsp;</span>选择器作用相同。</dd>
 <dt><code>span:nth-child(1)</code></dt>
 <dd>表示父元素中子元素为第一的并且名字为span的标签被选中</dd>
 <dt><code>span:nth-child(-n+3)</code></dt>
 <dd>匹配前三个子元素中的span元素。</dd>
</dl>
## HTML Table Tags
<table>
<tbody>
<tr>
<th>Tag</th>
<th>Description</th>
</tr>
<tr>
<td>&lt;table&gt;</td>
<td>Defines a table</td>
</tr>
<tr>
<td>&lt;th&gt;</td>
<td>Defines a header cell in a table</td>
</tr>
<tr>
<td>&lt;tr&gt;</td>
<td>Defines a row in a table</td>
</tr>
<tr>
<td>&lt;td&gt;</td>
<td>Defines a cell in a table</td>
</tr>
<tr>
<td>&lt;caption&gt;</td>
<td>Defines a table caption</td>
</tr>
<tr>
<td>&lt;colgroup&gt;</td>
<td>Specifies a group of one or more columns in a table for formatting</td>
</tr>
<tr>
<td>&lt;col&gt;</td>
<td>Specifies column properties for each column within a &lt;colgroup&gt; element</td>
</tr>
<tr>
<td>&lt;thead&gt;</td>
<td>Groups the header content in a table</td>
</tr>
<tr>
<td>&lt;tbody&gt;</td>
<td>Groups the body content in a table</td>
</tr>
<tr>
<td>&lt;tfoot&gt;</td>
<td>Groups the footer content in a table</td>
</tr>
</tbody></table>

----

reference: [W3C](https://www.w3schools.com/html/html_tables.asp)

持续更新中...