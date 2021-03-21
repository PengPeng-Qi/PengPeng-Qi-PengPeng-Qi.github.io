---
layout:     post
title:      CSS Background
date:       2021-03-21
author:     PengPengQi
header-img: img/BackGround.png
catalog: true
tags:
    - 背景
    - CSS
    - Background
    - Notes
---
## CSS Background
### CSS 优先级
一般情况下，优先级如下：  
<b>（内联样式）Inline style > （内部样式）Internal style sheet >（外部样式）External style sheet > 浏览器默认样式</b>  
  
如果外部样式放在内部样式的后面，则外部样式将覆盖内部样式。  
### CSS 属性
CSS 属性定义背景效果:  

- background-color  
- background-image  
- background-repeat  
- background-attachment  
- background-position  
- background (shorthand property)  

### Opacity / Transparency
Opacity（不透明） / Transparency（透明度）（文本加背景的透明度）  
  
The <b>opacity</b> property specifies the opacity/transparency of an element. It can take a value from 0.0 - 1.0. The lower value, the more transparent:  
  
```css
div {
    background-color: green;
    opacity: 0.3;
}
```
### Transparency using RGBA
If you do not want to apply opacity to child elements, like in our example above, use <b>RGBA</b> color values. The following example sets the opacity for the background color and not the text:  
  
```css
div {
    background: rgba(0, 128, 0, 0.3) /* Green background with 30% opacity */
}
```
### CSS Background Image
```css
body {
    background-image: url("paper.gif");
}
```
### repeat 属性 
  
如果图像只在水平方向平铺 (repeat-x), 页面背景会更好些：  
  
```css
body {
    background-image:url('gradient2.png');
    background-repeat:repeat-x;
}
/* 如果设置图像不平铺 */
body {
    background-image:url('gradient2.png');
    background-repeat:no-repeat;
}
```
### background-position 属性
可以利用 `background-position` 属性改变图像在背景中的位置：  
  
```css
body {
    background-position:right top;
}    
```
### CSS Background Attachment
```css
body {
    background-image: url("img_tree.png");
    background-repeat: no-repeat;
    background-position: right top;
    background-attachment: scroll;
}
```
更多例子可[见](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment)  
<hr>
取值：
<dl>
 <dt><code>fixed</code></dt>
 <dd>   此关键属性值表示背景相对于视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。</dd>
 <dt><code>local</code></dt>
 <dd>   此关键属性值表示背景相对于元素的内容固定。如果一个元素拥有滚动机制，背景将会随着元素的内容滚动， 并且背景的绘制区域和定位区域是相对于可滚动的区域而不是包含他们的边框。</dd>
 <dt><code>scroll</code></dt>
 <dd>   此关键属性值表示背景相对于元素本身固定， 而不是随着它的内容滚动（对元素边框是有效的）。</dd>
</dl>
### CSS Background Shorthand
```css
body {
    background:#ffffff url('img_tree.png') no-repeat right top;
}
```