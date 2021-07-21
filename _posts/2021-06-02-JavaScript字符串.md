---
layout:     post
title:      JavaScript 字符串
date:       2021-06-02
author:     PengPengQi
header-img: img/BackGround.png
catalog: true
tags:
    - HTML
    - JavaScript
    - String
    - Notes
---

## 字符串长度
内建属性length 可返回字符串的长度：

```js
var txt = "ABCDEFG";
var sln = txt.length;
 
// sln:7
```
## 查找字符串中的字符串
### indexOf
`indexOf()` 返回字符串指定文本**首次**出现的索引（位置）

```js
var str = "The full name of China is the People's Republic of China.";
var pos = str.indexOf("China");

// pos:17 首字母C的位置
```
### lastIndexOf
`lastIndexOf()` 方法返回指定文本字符串中最后一次出现的索引

```JS
var str = "The full name of China is the People's Republic of China.";
var pos = str.lastIndexOf("China");

// pos:51 首字母C的位置
```
> 如没找到文本，`indexOf()` 和`lastIndexOf()` 均返回-1

两种方法都接受作为检索起始位置的第二个参数

```js
var str = "The full name of China is the People's Republic of China.";
var pos = str.indexOf("China", 18);

// pos:51 因为第一个China在17
```
```js
var str = "The full name of China is the People's Republic of China.";
var pos = str.lastIndexOf("China", 50);
// pos:17 从位置50开始检索，从尾到头
```
### search
```js
var str = "The full name of China is the People's Republic of China.";
var pos = str.search("China"); 
// pos:17
```
`serach()` 与`indexOf()` 方法是不相等的:
- `serach()` 无法设置第二个开始位置参数
- `indexOf()` 方法无法设置更强大的检索值（正则表达式）

## 提取字符串
### slice 
`slice(start, end)` 提取字符串的某个部分并在新字符串中返回被提取的部分
```js
var str = "Apple, Banana, Mango";
var res = str.slice(7, 13);

// res:Banana
```
若某个参数为负，则从字符串的结尾开始计数
```js
var str = "Apple, Banana, Mango";
var res = str.slice(-13, -7);
// res:Banana
```
如果省略第二个参数，则方法将裁剪字符串的剩余部分：
```js
var str = "Apple, Banana, Mango";
var res = str.slice(7);
var res1 = str.slice(-13);
// res:Banana, Mango
// res1:Banana, Mango
```
### substr(start, length) 重点 
`substr()` 类似于 `slice()`， 不同之处在于第二个参数规定被提取部分的长度

```js
var str = "Apple, Banana, Mango";
var res = str.substr(7, 6);

// res:Banana
```
若省略第二个参数，则该`substr()` 将裁剪字符串的剩余部分，若首个参数为负，则从字符串的结尾计算位置。
## 替换字符串内容
### replace
`replace(被替换的字符串, 要替换为的字符串)` 方法用另一个值替换在字符串中指定的值

```js
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3School");
console.log(n); // Please visit w3School
```
`replace()` 方法不会改变调用它的字符串，它返回的是新字符串  
  
默认的，**只替换首个匹配**且对大小写敏感  
  
若需执行大小写不敏感的替换，请使用正则表达式`/i`(大小写不敏感)：
  
```js
str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3school");
```

若需要替换全部匹配，可以使用正则表达式`/g`标志(用于全局搜索)：

```js
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3school");
```

## 转换为大写和小写
`toUpperCase()` 把字符串转换为大写：
```js
var text1 = "Hello, World!";
var text2 = text1.toUpperCase(); // text2 是被转换为大写的 text1
```
同理：`toLowerCase()` 把字符串转换为小写
## 提取字符串字符
### charAt
`charAt()` 方法返回字符串中指定下标的字符串：

```js
var str = "Hello World!";
str.chatAt(0); // 返回H
```
### charCodeAt
`charCodeAt()` 方法返回字符串中指定索引的字符的Unicode 编码：

```js
var str = "Hello World!";
str.charCodeAt(0); // 返回72
```
## 字符串转换为数组
`split()` **字符串转换为数组**
```js
var txt = "a,b,c,d,e";
var arr = txt.split(","); //用逗号分隔
// arr[1]:b
var arr1 = txt.split("");
// arr1[1]:,
```
`join()`把数组转换为字符串
## 转换为字符串
<img src="../img/字符串转换.png" />

## 其他方法
### concat
`concat()` **连接**两个或多个字符串：  
```js
var text1 = "Hello";
var text2 = "World";
text3 = text1.concat(" ", text2);
// text3:Hello World
// concat()方法用于代替加法运算符

var str = 'andy';
console.log(str.concat('red')); // andyred
```
### trim
`trim()` 方法删除字符串两端的空白符

```js
var str = "    Hello World!  ";
alert(str.trim());
```
## 字符串可以是对象
```js
var x = "Bill";
var y = new String("Bill");

// typeof x 将返回 string
// typeof y 将返回 object
```
> 尽量不要把字符串创建为对象，这样会拖慢执行速度

## 字符串与对象的比较
```js
var x = "Bill";
var y = new String("Bill");

// typeof x 将返回 string
// typeof y 将返回 object
// (x == y) 为 true，因为 x 和 y 的值相等
// (x === y) 为 false，因为 x 和 y 的类型不同

var x = new String("Bill");             
var y = new String("Bill");

// (x == y) 为 false，因为 x 和 y 是不同的对象
// (x === y) 为 false，因为 x 和 y 是不同的对象
```