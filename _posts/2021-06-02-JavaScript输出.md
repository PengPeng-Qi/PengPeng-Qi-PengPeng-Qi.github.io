---
layout:     post
title:      JavaScript 输出
date:       2021-06-02
author:     PengPengQi
header-img: img/BackGround.png
catalog: true
tags:
    - HTML
    - JavaScript
    - Notes
---

## innerHTML
`innerHTML` 能够重新定义HTML 内容

```HTML
<script>
  document.getElementById("demo").innerHTML = 5 + 6;
</script>
```
> 更改HTML 元素的innerHTML 属性是在HTML 中显示数据的常用方法

## document.write()
在HTML 文档完全加载后使用`document.write()`将删除所有已知的HTML 

```HTML
<script>
  document.write(5 + 6);
</script>
```

## window.alert()
使用警示框来显示数据
  
```html
<script>
  window.alert(5 + 6);
</script>
```

## console.log()
在控制台输出

```html
<script>
  console.log(5 + 6)
</script>
```