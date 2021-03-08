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
### <code>input</code> 元素
`<input>` 元素有很多形态，根据不同的 type 属性。  
  
[HTML Input Type](#HTML_Input_Types)
### <code>label</code>元素
`<label>`元素定义了几个形式的元素的标签。  
`<label>`元素对屏幕阅读器用户很有用，因为当用户将注意力集中在输入元素上时，屏幕阅读器会大声读出标签。  
`<label>`元素还可以帮助难以单击很小区域（例如单选按钮或复选框）的用户-因为当用户单击`<label>`元素内的文本时，它会切换单选按钮/复选框。  
  
标签的`for`属性`<label>`应等于 将它们绑定在一起`id`的`<input>`元素的属性  
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
### <code>action</code> 属性
该`action`属性定义提交表单时要执行的操作。  
通常，当用户单击“提交”按钮时，表单数据将发送到服务器上的文件中。  
在下面的示例中，表单数据被发送到名为“ action_page.php”的文件。此文件包含处理表单数据的服务器端脚本：  
  
```html
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>  
```
> 如果action省略该属性，则将操作设置为当前页面。  
  
### <code>target</code> 属性
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
### <code>method</code> 属性
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

### <code>autocompete</code> 属性
该`autocomplete`属性指定表单是应该打开还是关闭自动完成功能。  
  
启用自动完成功能后，浏览器会根据用户之前输入的值自动完成值。  
```html
<form action="/action_page.php" autocomplete="on">
```
### 其他属性
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
  
## <a name="HTML_Input_Types">HTML Input Types
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
  



-------


持续更新中...