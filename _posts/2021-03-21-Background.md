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

### CSS 优先级
一般情况下，优先级如下：  
<b>（内联样式）Inline style > （内部样式）Internal style sheet /（外部样式）External style sheet > 浏览器默认样式</b>  
  
如果外部样式放在内部样式的后面，则外部样式将覆盖内部样式。  
### CSS 属性
CSS 属性定义背景效果:  

- background-color  
- background-image  
- background-repeat  
- background-attachment  
- background-position  
- background (shorthand property)  

### 背景颜色
```css
body {
    background-color: 颜色值;
}

div {
    background-color: transparent;
    /* transparent(透明) */
}
```
### Opacity / Transparency
Opacity（不透明） / Transparency（透明度）（文本加背景的透明度）  
  
`opacity` 属性指定元素的不透明度/透明度。取值范围为 0.0 - 1.0。值越低，越透明：
  
```css
div {
    background-color: green;
    opacity: 0.3;
}
```

### 使用 RGBA 透明度
  
```css
div {
    background: rgba(0, 128, 0, 0.3) /* Green background with 30% opacity */
}
```

### 背景图片
```css
body {
    background-image: url("paper.gif");
}
```
> 网页上小图标一般使用背景图片来表示，因为可以结合`background-position` 调整位置
### 背景平铺 
如果图像只在水平方向平铺 (`repeat-x`), 页面背景会更好些：  
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
    /* background-position:x y; */
    background-position:right top;
    /* background-position:20px 50px; */
    /* background-position:20px center; */
}    
```
x、y 可以使用方位名词或者精确单位
- 若为方位名词，和顺序无关
- 若省略第二个值，默认第二个值为居中

### background-attachment 属性
`background-attachment` 属性指定背景图像是应该滚动(scroll)还是固定(fixed)的（不会随页面的其余部分一起滚动）：
```css
body {
    background-image: url("img_tree.png");
    background-repeat: no-repeat;
    background-position: right top;
    background-attachment: scroll;
}
```
<hr>
取值：
<dl>
 <dt><code>fixed</code></dt>
 <dd>背景相对于视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。</dd>
 <dt><code>local</code></dt>
 <dd>背景相对于元素的内容固定。如果一个元素拥有滚动机制，背景将会随着元素的内容滚动，并且背景的绘制区域和定位区域是相对于可滚动的区域而不是包含他们的边框。</dd>
 <dt><code>scroll</code></dt>
 <dd>背景图像随着对象内容滚动。</dd>
</dl>

### 背景简写
  
```css
body {
    background:#ffffff url('img_tree.png') no-repeat right top;
}
```