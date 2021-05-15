---
layout:     post
title:      Position
date:       2021-05-15
author:     PengPengQi
header-img: img/BackGround.png
catalog: true
tags:
    - CSS
    - 文档
    - Position
    - Notes
---

## CSS Position(定位)
position 属性的五个值：
- static(静止的)
- relative(相对的)
- fixed(固定的)
- absolute(绝对的)
- sticky(粘贴)

### static 
static 元素不受top、bottom、left、right的影响
```css
static {
    position: static;
    border: 3px solid #73AD21;
}
```
### fixed
元素相当于浏览器窗口是固定位置，即使窗口是滚动的它也不会移动
```css
fixed {
    position: fixed;
    top: 30px;
    left: 5px;
}
```
### relative
相对定位元素的定位是相对其正常位置
```css
left {
    position: relative;
    top: 30px;
}
```
移动相对定位元素，但它原本所占的空间不会改变。
### absolute
绝对定位的元素的位置相对于最近的一定位父元素，如果没有父元素，那么它的位置相对于`<html>`
```css
h1 {
    position: absolute;
    left: 40px;
}
```
absolute 定位使元素的位置与文档流无关，因此不占据空间。  
**absolute 定位的元素和其他元素重叠。**
### sticky
`position: sticky;` 基于用户的滚动位置来定位。  
它的行为就像 `position:relative;` 而当页面滚动超出目标区域时，它的表现就像 `position:fixed;`，它会固定在目标位置。
```css
sticky {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    background-color: green;
    border: 2px solid #4CAF50;
}
```
### 重叠的元素
元素的定位与文档流无关，所以它们可以覆盖页面上的其它元素
```css
img
{
    position:absolute;
    left:0px;
    top:0px;
    z-index:-1;
}
```