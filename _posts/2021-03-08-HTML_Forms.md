---
layout:     post
title:      HTML 表单
date:       2021-03-08
author:     PengPengQi
header-img: img/BackGround.png
catalog: true
tags:
    - 表单
    - form
    - HTML
    - Notes
---
# HTML 表单
HTML 表单用于搜集不同类型的用户输入。  
## 表单元素
### <code>form</code> 元素
```html
<form>
 .
form elements
 .
</form>
```
<p>The HTML <code>&lt;form&gt;</code> element can contain one or more of the following form elements:</p>
<ul>
<li> <code>&lt;input&gt;</code></li>
  <li> <code>&lt;label&gt;</code></li>
  <li> <code>&lt;select&gt;</code></li>
<li> <code>&lt;textarea&gt;</code></li>
<li> <code>&lt;button&gt;</code></li>
<li> <code>&lt;fieldset&gt;</code></li>
  <li> <code>&lt;legend&gt;</code></li>
  <li> <code>&lt;datalist&gt;</code></li>
  <li> <code>&lt;output&gt;</code></li>
<li> <code>&lt;option&gt;</code></li>
<li> <code>&lt;optgroup&gt;</code></li>
</ul>
### <code>input</code> 元素
`<input>` 元素有很多形态，根据不同的 type 属性。  
  
[HTML Input Type](#HTML_Input_Types)
### <code>label</code>元素
`<label>`元素定义了几个形式的元素的标签。  
`<label>`元素对屏幕阅读器用户很有用，因为当用户将注意力集中在输入元素上时，屏幕阅读器会大声读出标签。  
`<label>`元素还可以帮助难以单击很小区域（例如单选按钮或复选框）的用户-因为当用户单击`<label>`元素内的文本时，它会切换单选按钮/复选框。  
  
标签的`for`属性`<label>`应等于将它们绑定在一起`id`的`<input>`元素的属性  
```html
<form action="/action_page.php">
  <label for="cars">Choose a car:</label>
  <select id="cars" name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select>
  <input type="submit">
</form>
```
<form action="/action_page.php">
  <label for="cars">Choose a car:</label>
  <select id="cars" name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select>
  <input type="submit">
</form>
<hr>
### <code>select</code> 元素(下拉列表)
```html
<select name="cars">
<option value="volvo">Volvo</option>
<option value="saab">Saab</option>
<option value="fiat">Fiat</option>
<option value="audi">Audi</option>
</select>
```
<select name="cars">
<option value="volvo">Volvo</option>
<option value="saab">Saab</option>
<option value="fiat">Fiat</option>
<option value="audi">Audi</option>
</select>
### <code>option</code>元素
列表通常会把首个选项显示为被选选项。  
  
您能够通过添加 selected 属性来定义预定义选项。  
  
```html
<option value="fiat" selected>Fiat</option>
```
<form action="/action_page.php">
  <label for="cars">Choose a car:</label>
  <select id="cars" name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat" selected>Fiat</option>
    <option value="audi">Audi</option>
  </select>
  <input type="submit">
</form>
#### <code>size</code>属性
用`size`属性指定可见值的数量：
```html
<label for="cars">Choose a car:</label>
<select id="cars" name="cars" size="3">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
```
<label for="cars">Choose a car:</label>
<select id="cars" name="cars" size="3">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
#### <code>multiple</code>属性
```html
<label for="cars">Choose a car:</label>
<select id="cars" name="cars" size="4" multiple>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
```
<label for="cars">Choose a car:</label>
<select id="cars" name="cars" size="4" multiple>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
### <code>textarea</code> 元素
`<textarea>`元素限定了多行输入字段（文本区域）  
```html
<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>
```
<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>
### <code>fieldset</code> and <code>legend</code> Elements
The `<fieldset>` element is used to group related data in a form.  
  
The `<legend>` element defines a caption for the `<fieldset>` element.  
```html
<form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>
```
<form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>  

### <code>datalist</code> 元素
The `<datalist>` element specifies a list of pre-defined options for an `<input>` element.  
  
The list attribute of the `<input>` element, must refer to the `id` attribute of the `<datalist>` element.
```html
<form action="/action_page.php">
  <input list="browsers">
  <datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
</form>  
```  
<!--
<form action="/action_page.php">
  <input list="browsers">
  <datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
</form>  
-->
### <code>button</code> 元素
`<button>` 元素定义可点击的按钮：
```html
<button type="button" onclick="alert('Hello World!')">Click Me!</button>
```
<button type="button" onclick="alert('Hello World!')">Click Me!</button>  
### <code>output</code> 属性
The `<output>` element represents the result of a calculation (like one performed by a script).  
```html
<form action="/action_page.php"
  oninput="x.value=parseInt(a.value)+parseInt(b.value)">
  0
  <input type="range"  id="a" name="a" value="50">
  100 +
  <input type="number" id="b" name="b" value="50">
  =
  <output name="x" for="a b"></output>
  <br><br>
  <input type="submit">
</form>
```
<form action="/action_page.php"
  oninput="x.value=parseInt(a.value)+parseInt(b.value)">
  0
  <input type="range"  id="a" name="a" value="50">
  100 +
  <input type="number" id="b" name="b" value="50">
  =
  <output name="x" for="a b"></output>
  <br><br>
  <input type="submit">
</form>
### <code>HTML Form</code> Elements
<table class="w3-table-all notranslate">
<tbody><tr>
<th>Tag</th>
<th>Description</th>
</tr>
<tr>
<td><a href="/tags/tag_form.asp">&lt;form&gt;</a></td>
<td> Defines an HTML form for user input</td>
</tr>
<tr>
<td><a href="/tags/tag_input.asp">&lt;input&gt;</a></td>
<td>Defines an input control</td>
</tr>
<tr>
<td><a href="/tags/tag_textarea.asp">&lt;textarea&gt;</a></td>
<td>Defines a multiline input control (text area)</td>
</tr>
<tr>
<td><a href="/tags/tag_label.asp">&lt;label&gt;</a></td>
<td>Defines a label for an &lt;input&gt; element</td>
</tr>
<tr>
<td><a href="/tags/tag_fieldset.asp">&lt;fieldset&gt;</a></td>
<td>Groups related elements in a form</td>
</tr>
<tr>
<td><a href="/tags/tag_legend.asp">&lt;legend&gt;</a></td>
<td>Defines a caption for a &lt;fieldset&gt; element</td>
</tr>
<tr>
<td><a href="/tags/tag_select.asp">&lt;select&gt;</a></td>
<td>Defines a drop-down list</td>
</tr>
<tr>
<td><a href="/tags/tag_optgroup.asp">&lt;optgroup&gt;</a></td>
<td>Defines a group of related options in a drop-down list</td>
</tr>
<tr>
<td><a href="/tags/tag_option.asp">&lt;option&gt;</a></td>
<td>Defines an option in a drop-down list</td>
</tr>
<tr>
<td><a href="/tags/tag_button.asp">&lt;button&gt;</a></td>
<td>Defines a clickable button</td>
</tr>
<tr>
<td><a href="/tags/tag_datalist.asp">&lt;datalist&gt;</a></td>
<td>Specifies a list of pre-defined options for input controls</td>
</tr>
<tr>
<td><a href="/tags/tag_output.asp">&lt;output&gt;</a></td>
<td>Defines the result of a calculation</td>
</tr>
</tbody></table>

## 表单属性
### The Action Attribute
The <code>action</code> attribute defines the action to be performed when the form is submitted.
```html
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>
```
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>
> Tip: If the action attribute is omitted(省略), the action is set to the current page.

### The Target Attribute
该`target`属性指定提交表单后在何处显示收到的响应。  
  
<table notranslate> 
  <tbody>
  <tr>
    <th style="width:20%">Value</th>
    <th>Description</th>
  </tr>  
  <tr>
    <td>_blank</td>
    <td>The response is displayed in a new window or tab</td>
  </tr>
  <tr>
    <td>_self</td>
    <td>The response is displayed in the current window</td>
  </tr>
  <tr>
    <td>_parent</td>
    <td>The response is displayed in the parent frame</td>
  </tr>
  <tr>
    <td>_top</td>
    <td>The response is displayed in the full body of the window</td>
  </tr>
  <tr>
    <td><i>framename</i></td>
    <td>The response is displayed in a named iframe</td>
  </tr>
  </tbody>
</table>  

```html
<form action="/action_page.php" method="get">
```
### The Method Attribute
该`method`属性指定提交表单数据时要使用的HTTP方法。  
  
表单数据可以作为URL变量（带有`method="get"`）或作为HTTP发布交易记录（带有`method="post"`）发送。  
  
提交表单数据时，默认的HTTP方法是GET。  
```html
<form action="/action_page.php" method="get">
```
关于GET的注意事项：  
  
* 以名称/值对的形式将表单数据追加到URL  
* 永远不要使用GET发送敏感数据！（提交的表单数据在URL中可见！）  
* URL的长度受到限制（2048个字符）  
* 对于用户希望将结果添加为书签的表单提交很有用  
* GET适用于非安全数据，例如Google中的查询字符串  
  
关于POST的注意事项：  
  
* 将表单数据附加在HTTP请求的正文中（提交的表单数据未显示在URL中）  
* POST没有大小限制，可用于发送大量数据。  
* 带有POST的表单提交无法添加书签  
  
> 如果表单数据包含敏感信息或个人信息，请始终使用POST！

### The Autocomplete Attribute
该`autocomplete`属性指定表单是应该打开还是关闭自动完成功能。  
  
启用自动完成功能后，浏览器会根据用户之前输入的值自动完成值。  
```html
<form action="/action_page.php" autocomplete="on">
```
### The Novalidate Attribute
The `novalidate` attribute is a boolean attribute.  
  
When present, it specifies that the form-data (input) should not be validated when submitted.  
```html
<form action="/action_page.php" novalidate>
```
### Others Attribute
<table>
  <tbody><tr>
    <th style="width:20%">Attribute</th>
    <th style="width:37%">Value</th>
    <th style="width:43%">Description</th>
  </tr>
  <tr>
    <td>accept-charset</td>
    <td><i>character_set</i></td>
    <td>Specifies the character encodings that are to be used for the form submission</td>
  </tr>
  <tr>
    <td>action</td>
    <td><i>URL</i></td>
    <td>Specifies where to send the form-data when a form is submitted</td>
  </tr>
  <tr>
    <td>autocomplete</td>
    <td>on<br>off</td>
    <td>Specifies whether a form should have autocomplete on or off</td>
  </tr>
  <tr>
    <td>enctype</td>
    <td>application/x-www-form-urlencoded<br>
 multipart/form-data<br>
 text/plain</td>
    <td>Specifies how the form-data should be encoded when submitting it to the server (only for method="post")</td>
  </tr>
  <tr>
    <td>method</td>
    <td>get<br>
      post</td>
    <td>Specifies the HTTP method to use when sending form-data</td>
  </tr>
  <tr>
    <td>name</td>
    <td><i>text</i></td>
    <td>Specifies the name of a form</td>
  </tr>
  <tr>
    <td>novalidate</td>
    <td>novalidate</td>
    <td>Specifies that the form should not be validated when submitted</td>
  </tr>
  <tr>
    <td>rel</td>
    <td>external<br>help<br>license<br>next<br>nofollow<br>noopener<br>
    noreferrer<br>opener<br>prev<br>search</td>
    <td>Specifies the relationship between a linked resource and the current 
    document</td>
  </tr>
  <tr>
    <td>target</td>
    <td>_blank<br>
      _self<br>
      _parent<br>
      _top</td>
    <td>Specifies where to display the response that is received after submitting the form</td>
  </tr>
</tbody></table>  
更多详情请[见](https://www.w3schools.com/tags/tag_form.asp)  
  
## <a name="HTML_Input_Types">HTML Input 类型
<ul>
  <li><code>&lt;input type="button"&gt;</code></li>
  <li><code>&lt;input type="checkbox"&gt;</code></li>
  <li><code>&lt;input type="color"&gt;</code></li>
  <li><code>&lt;input type="date"&gt;</code></li>
  <li><code>&lt;input type="datetime-local"&gt;</code></li>
  <li><code>&lt;input type="email"&gt;</code></li>
  <li><code>&lt;input type="file"&gt;</code></li>
  <li><code>&lt;input type="hidden"&gt;</code></li>
  <li><code>&lt;input type="image"&gt;</code></li>
  <li><code>&lt;input type="month"&gt;</code></li>
  <li><code>&lt;input type="number"&gt;</code></li>
  <li><code>&lt;input type="password"&gt;</code></li>
  <li><code>&lt;input type="radio"&gt;</code></li>
  <li><code>&lt;input type="range"&gt;</code></li>
  <li><code>&lt;input type="reset"&gt;</code></li>
  <li><code>&lt;input type="search"&gt;</code></li>
  <li><code>&lt;input type="submit"&gt;</code></li>
  <li><code>&lt;input type="tel"&gt;</code></li>
  <li><code>&lt;input type="text"&gt;</code></li>
  <li><code>&lt;input type="time"&gt;</code></li>
  <li><code>&lt;input type="url"&gt;</code></li>
  <li><code>&lt;input type="week"&gt;</code></li>
</ul>  
详情请[见](https://www.w3schools.com/html/html_form_input_types.asp)  
### Input Type Text
`<input type="text">` defines a single-line text input field:  
```html
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
```
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
### Input Type Password
`<input type="password">` defines a password field:  
```html
<form>
  <label for="username">Username:</label><br>
  <input type="text" id="username" name="username"><br>
  <label for="pwd">Password:</label><br>
  <input type="password" id="pwd" name="pwd">
</form>
```
<form>
  <label for="username">Username:</label><br>
  <input type="text" id="username" name="username"><br>
  <label for="pwd">Password:</label><br>
  <input type="password" id="pwd" name="pwd">
</form>
### Input Type Submit
`<input type="submit">` defines a button for submitting form data to a form-handler.  
```html
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>
```
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>
### Input Type Reset
`<input type="reset">` defines a reset button that will reset all form values to their default values:  
```html
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
  <input type="reset">
</form>
```
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
  <input type="reset">
</form>
### Radio Buttons
The `<input type="radio">` defines a radio button.
```html
<form action="/action_page.php">
  <label for="male">Male</label>
  <input type="radio" name="gender" id="male" value="male"><br>
  <label for="female">Female</label>
  <input type="radio" name="gender" id="female" value="female"><br>
  <label for="other">Other</label>
  <input type="radio" name="gender" id="other" value="other"><br><br>
  <input type="submit" value="Submit">
</form>
```
<form action="/action_page.php">
  <label for="male">Male</label>
  <input type="radio" name="gender" id="male" value="male"><br>
  <label for="female">Female</label>
  <input type="radio" name="gender" id="female" value="female"><br>
  <label for="other">Other</label>
  <input type="radio" name="gender" id="other" value="other"><br><br>
  <input type="submit" value="Submit">
</form>

### Checkboxes
The `<input type="checkbox">` defines a checkbox.
```html
<form>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label><br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
  <label for="vehicle2"> I have a car</label><br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> I have a boat</label>
</form>
```
<form>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label><br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
  <label for="vehicle2"> I have a car</label><br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> I have a boat</label>
</form>
### Input Type Button
`<input type="button">` defines a button:  
```html
<input type="button" onclick="alert('Hello World!')" value="Click Me!">
```
<input type="button" onclick="alert('Hello World!')" value="Click Me!">
### Input Type Color
The `<input type="color">` is used for input fields that should contain a color.  
```html
<form>
  <label for="favcolor">Select your favorite color:</label>
  <input type="color" id="favcolor" name="favcolor">
</form>
```
<form>
  <label for="favcolor">Select your favorite color:</label>
  <input type="color" id="favcolor" name="favcolor">
</form>
### Input Type Date
The `<input type="date">` is used for input fields that should contain a date.  
  
```html
<form>
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday">
</form>
```
<form>
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday">
</form>
You can also use the `min` and `max` attributes to add restrictions to dates:  
  
```html
<form>
  <label for="datemax">Enter a date before 1980-01-01:</label>
  <input type="date" id="datemax" name="datemax" max="1979-12-31"><br><br>
  <label for="datemin">Enter a date after 2000-01-01:</label>
  <input type="date" id="datemin" name="datemin" min="2000-01-02">
</form>
```
<form>
  <label for="datemax">Enter a date before 1980-01-01:</label>
  <input type="date" id="datemax" name="datemax" max="1979-12-31"><br><br>
  <label for="datemin">Enter a date after 2000-01-01:</label>
  <input type="date" id="datemin" name="datemin" min="2000-01-02">
</form>
### Input Type Datetime-local
The `<input type="datetime-local">` specifies a date and time input field, with no time zone.  
  
```html
<form>
  <label for="birthdaytime">Birthday (date and time):</label>
  <input type="datetime-local" id="birthdaytime" name="birthdaytime">
</form>
```
<form>
  <label for="birthdaytime">Birthday (date and time):</label>
  <input type="datetime-local" id="birthdaytime" name="birthdaytime">
</form>
### Input Type Email
The `<input type="email">` is used for input fields that should contain an e-mail address.  
  
```html
<form>
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email">
</form>
```
<form>
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email">
</form>
### Input Type File
The `<input type="file">` defines a file-select field and a "Browse" button for file uploads.  
  
```html
<form>
  <label for="myfile">Select a file:</label>
  <input type="file" id="myfile" name="myfile">
</form>
```
<form>
  <label for="myfile">Select a file:</label>
  <input type="file" id="myfile" name="myfile">
</form>
### Input Type Month
The `<input type="month">` allows the user to select a month and year.  
  
```html
<form>
  <label for="bdaymonth">Birthday (month and year):</label>
  <input type="month" id="bdaymonth" name="bdaymonth">
</form>
```
<form>
  <label for="bdaymonth">Birthday (month and year):</label>
  <input type="month" id="bdaymonth" name="bdaymonth">
</form>
### Input Type Number
The `<input type="number">` defines a numeric input field.  
  
```html
<form>
  <label for="quantity">Quantity (between 1 and 5):</label>
  <input type="number" id="quantity" name="quantity" min="1" max="5">
</form>
```
<form>
  <label for="quantity">Quantity (between 1 and 5):</label>
  <input type="number" id="quantity" name="quantity" min="1" max="5">
</form>
### Input Restrictions
Here is a list of some common input restrictions:
<table>
<tbody><tr>
<th>属性</th>
<th>描述</th>
</tr>

<tr>
<td>disabled</td>
<td>规定输入字段应该被禁用。</td>
</tr>

<tr>
<td>max</td>
<td>规定输入字段的最大值。</td>
</tr>

<tr>
<td>maxlength</td>
<td>规定输入字段的最大字符数。</td>
</tr>

<tr>
<td>min</td>
<td>规定输入字段的最小值。</td>
</tr>

<tr>
<td>pattern</td>
<td>规定通过其检查输入值的正则表达式。</td>
</tr>

<tr>
<td>readonly</td>
<td>规定输入字段为只读（无法修改）。</td>
</tr>

<tr>
<td>required</td>
<td>规定输入字段是必需的（必需填写）。</td>
</tr>

<tr>
<td>size</td>
<td>规定输入字段的宽度（以字符计）。</td>
</tr>

<tr>
<td>step</td>
<td>规定输入字段的合法数字间隔。</td>
</tr>

<tr>
<td>value</td>
<td>规定输入字段的默认值。</td>
</tr>
</tbody></table>
### Input Type Range
The `<input type="range">` defines a control for entering a number whose exact value is not important (like a slider control).   
  
```html
<form>
  <label for="vol">Volume (between 0 and 50):</label>
  <input type="range" id="vol" name="vol" min="0" max="50">
</form>
```
<form>
  <label for="vol">Volume (between 0 and 50):</label>
  <input type="range" id="vol" name="vol" min="0" max="50">
</form>
### Input Type Search
The `<input type="search">` is used for search fields (a search field behaves like a regular text field).  
  
```html
<form>
  <label for="gsearch">Search Google:</label>
  <input type="search" id="gsearch" name="gsearch">
</form>
```
<form>
  <label for="gsearch">Search Google:</label>
  <input type="search" id="gsearch" name="gsearch">
</form>
### Input Type Tel
The `<input type="tel">` is used for input fields that should contain a telephone number.  
  
```html
<form>
  <label for="phone">Enter your phone number:</label>
  <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
</form>
```
<form>
  <label for="phone">Enter your phone number:</label>
  <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
</form>
### Input Type Time
The `<input type="time">` allows the user to select a time (no time zone).  
  
```html
<form>
  <label for="appt">Select a time:</label>
  <input type="time" id="appt" name="appt">
</form>
```
<form>
  <label for="appt">Select a time:</label>
  <input type="time" id="appt" name="appt">
</form>
### Input Type Url
The `<input type="url">` is used for input fields that should contain a URL address.  
  
```html
<form>
  <label for="homepage">Add your homepage:</label>
  <input type="url" id="homepage" name="homepage">
</form>
```
<form>
  <label for="homepage">Add your homepage:</label>
  <input type="url" id="homepage" name="homepage">
</form>
### Input Type Week
The `<input type="week">` allows the user to select a week and year.  
  
```html
<form>
  <label for="week">Select a week:</label>
  <input type="week" id="week" name="week">
</form>
```
<form>
  <label for="week">Select a week:</label>
  <input type="week" id="week" name="week">
</form>

## HTML Input 属性
### The value Attribute  
The input `value` attribute specifies an initial value for an input field:  
  
```html
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe">
</form>
```
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe">
</form>
### The readonly Attribute
The input `readonly` attribute specifies that an input field is read-only.  
  
```html
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John" readonly><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe">
</form>
```
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John" readonly><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe">
</form>
### The disabled Attribute
The input `disabled` attribute specifies that an input field should be disabled.  
  
```html
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John" disabled><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe">
</form>
```
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John" disabled><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe">
</form>
### The size Attribute
The input `size` attribute specifies the visible width, in characters, of an input field.  
  
The default value for size is 20.  
  
```html
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" size="50"><br>
  <label for="pin">PIN:</label><br>
  <input type="text" id="pin" name="pin" size="4">
</form>
```
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" size="50"><br>
  <label for="pin">PIN:</label><br>
  <input type="text" id="pin" name="pin" size="4">
</form>
### The maxlength Attribute
The input `maxlength` attribute specifies the maximum number of characters allowed in an input field.  
  
```HTML
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" size="50"><br>
  <label for="pin">PIN:</label><br>
  <input type="text" id="pin" name="pin" maxlength="4" size="4">
</form>
```
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" size="50"><br>
  <label for="pin">PIN:</label><br>
  <input type="text" id="pin" name="pin" maxlength="4" size="4">
</form>
### The `min` and `max` Attributes
The input `min` and `max` attributes specify the minimum and maximum values for an input field.  
  
```HTML
<form>
  <label for="datemax">Enter a date before 1980-01-01:</label>
  <input type="date" id="datemax" name="datemax" max="1979-12-31"><br><br>

  <label for="datemin">Enter a date after 2000-01-01:</label>
  <input type="date" id="datemin" name="datemin" min="2000-01-02"><br><br>

  <label for="quantity">Quantity (between 1 and 5):</label>
  <input type="number" id="quantity" name="quantity" min="1" max="5">
</form>
```
<form>
  <label for="datemax">Enter a date before 1980-01-01:</label>
  <input type="date" id="datemax" name="datemax" max="1979-12-31"><br><br>

  <label for="datemin">Enter a date after 2000-01-01:</label>
  <input type="date" id="datemin" name="datemin" min="2000-01-02"><br><br>

  <label for="quantity">Quantity (between 1 and 5):</label>
  <input type="number" id="quantity" name="quantity" min="1" max="5">
</form>
### The `multiple` Attribute
The input `multiple` attribute specifies that the user is allowed to enter more than one value in an input field.  
  
```html
<form>
  <label for="files">Select files:</label>
  <input type="file" id="files" name="files" multiple>
</form>
```
<form>
  <label for="files">Select files:</label>
  <input type="file" id="files" name="files" multiple>
</form>
### The pattern Attribute
pattern 属性规定用于检查 `<input>` 元素值的正则表达式。  
  
pattern 属性适用于以下输入类型：text、search、url、tel、email、and password。  

```html
<form>
  <label for="country_code">Country code:</label>
  <input type="text" id="country_code" name="country_code"
  pattern="[A-Za-z]{3}" title="Three letter country code">
</form>
```
<form>
  <label for="country_code">Country code:</label>
  <input type="text" id="country_code" name="country_code"
  pattern="[A-Za-z]{3}" title="Three letter country code">
</form>
### The placeholder Attribute
`placeholder` 属性规定用以描述输入字段预期值的提示（样本值或有关格式的简短描述）。  
  
该提示会在用户输入值之前显示在输入字段中。  
```html
<form>
  <label for="phone">Enter a phone number:</label>
  <input type="tel" id="phone" name="phone"
  placeholder="123-45-678"
  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
</form>
```
<form>
  <label for="phone">Enter a phone number:</label>
  <input type="tel" id="phone" name="phone"
  placeholder="123-45-678"
  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
</form>
### The required Attribute
`required` 属性是布尔属性。  
  
如果设置，则规定在提交表单之前必须填写输入字段。  
```html
<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>
</form>
```
<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>
</form>
### The step Attribute
The input `step` attribute specifies the legal number intervals for an input field.  
  
```html
<form>
  <label for="points">Points:</label>
  <input type="number" id="points" name="points" step="3">
</form>
```
<form>
  <label for="points">Points:</label>
  <input type="number" id="points" name="points" step="3">
</form>
### The autofocus Attribute
The input `autofocus` attribute specifies that an input field should automatically get focus when the page loads.  
  
```html
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" autofocus><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
```
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" autofocus><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
### The height and width Attributes
The input `height` and `width` attributes specify the height and width of an `<input type="image">` element.  
  
```html
<form>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="image" src="img_submit.gif" alt="Submit" width="48" height="48">
</form>
```
<form>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="image" src="img_submit.gif" alt="Submit" width="48" height="48">
</form>
### The list Attribute
The input `list` attribute refers to a `<datalist>` element that contains pre-defined options for an `<input>` element.  
  
```html
<form>
  <input list="browsers">
  <datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
</form>
```
<form>
  <input list="browsers">
  <datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
</form>  

### The autocomplete Attribute
The input `autocomplete` attribute specifies whether a form or an input field should have autocomplete on or off.  
  
```html
<form action="/action_page.php" autocomplete="on">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" autocomplete="off"><br><br>
  <input type="submit" value="Submit">
</form>
```
<form action="/action_page.php" autocomplete="on">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" autocomplete="off"><br><br>
  <input type="submit" value="Submit">
</form>
## HTML Input form* Attributes
[HTML Input form* Attributes](https://www.w3schools.com/html/html_form_attributes_form.asp)
-------


持续更新中...