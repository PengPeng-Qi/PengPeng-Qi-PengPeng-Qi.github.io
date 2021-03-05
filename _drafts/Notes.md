/**
* 记录一些自己在HTML的知识短板
*/
<hr>
title属性指定有关元素的额外信息。

当鼠标移到元素上时，该信息通常显示为工具提示文本。

```html
<p><abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
<p title="Free Web tutorials">W3Schools.com</p>
```
<hr>
高亮
该`<mark>`标签定义文本应标注或突出显示。
```html
<p>Do not forget to buy <mark>milk</mark> today.</p>
```
<hr>
`<sub>`下
`<sup>`上

<hr>
HTML5不支持
该`<strike>`标签是在HTML 4用于定义删除线的文本。
可以用`<del>`表示
<hr>




### HTML引用元素
`<q>`短句引用、`<blockquote>`长引用  
```html
<p>以下内容引用自 WWF 的网站：</p>
<!--  -->
<blockquote cite="http://www.worldwildlife.org/who/index.html">
五十年来，WWF 一直致力于保护自然界的未来。
世界领先的环保组织，WWF 工作于 100 个国家，
并得到美国一百二十万会员及全球近五百万会员的支持。
</blockquote>
```
HTML `<abbr>` 元素定义缩写或首字母缩略语。当将鼠标悬停在元素上时，title上的文字将显示出来。  
```html
<p><abbr title="World Health Organization">WHO</abbr> 成立于 1948 年。</p>
```
HTML`<address>`标记定义了文档或文章的作者/所有者的联系信息。  
  
联系人信息可以是电子邮件地址，URL，物理地址，电话号码，社交媒体句柄等。 

`<address>`元素中的文本通常以斜体显示， 并且浏览器将始终在`<address>` 
元素前后添加换行符。  
```html
<address>
Written by John Doe.<br>
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>
```
HTML`<cite>`标签定义了创意作品的标题（例如，一本书，一首诗，一首歌曲，一部电影，一幅画，一幅雕塑等）。  
  
> 注意：一个人的名字不是作品的标题。
  
`<cite>`元素中的文本通常以斜体显示  
```html
<p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>
```
指定文字方向：  
从左向右 `<bdo dir="ltr">`  
从右向左 `<bdo dir="rtl">`  

注释对于调试HTML也非常有用，因为您可以一次注释掉HTML代码行以查找错误：
<!-- Do not display this image at the moment
<img border="0" src="pic_trulli.jpg" alt="Trulli">
-->