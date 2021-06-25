---
layout:     post
title:      JavaScript介绍
date:       2021-06-19
author:     PengPengQi
header-img: img/BackGround.png
catalog: true
tags:
    - JavaScript
    - Notes
---

## JavaScript
JavaScript是一门运行在客户端的**脚本语言**。
  
**脚本语言**：不需要编译，运行过程中由 js 解释器( js 引擎）逐行来进行解释并执行。
  
现在也可以基于 `Node.js` 技术进行服务器端编程

## 浏览器执行JS
浏览器分为两个部分：渲染引擎、JS引擎。
  
**渲染引擎**：用来解析HTML与CSS，俗称**内核**，比如 chrome 浏览器的 blink ，老版本的 webkit。国内浏览器一般采用Webkit/Blink 内核
  
**JS引擎**：也称为 JS 解释器。 用来读取网页中的JavaScript代码，对其处理后运行，比如 chrome  浏览器的 V8

> [百度统计](https://tongji.baidu.com/research/)可查看浏览器及流量的份额。
## JavaScript的组成
ECMAScript、DOM、BOM