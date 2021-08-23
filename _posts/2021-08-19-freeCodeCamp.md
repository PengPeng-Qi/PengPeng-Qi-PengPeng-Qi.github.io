---
layout:     post
title:      freeCodeCamp：JS篇
date:       2021-08-20
author:     PengPengQi
header-img: img/BackGround.png
catalog: true
tags:
    - JavaScript
    - freeCodeCamp
---
## JavaScript
### JavaScript 基础
#### javaScript的数据类型
JavaScript 提供七种不同的数据类型，它们是 
- `undefined`（未定义）
- `null`（空）
- `boolean`（布尔型）
- `string`（字符串）
- `symbol`、
- `number`（数字）
- `bigint`（可以表示任意大的整数）
- `object`（对象）

#### 字符串的不可变性  
在 JavaScript 中，**字符串（String）的值是不可变的（immutable），这意味着一旦字符串被创建就不能被改变**。
```js
var myStr = "Bob";
myStr[0] = "J";
```
是不会把变量`myStr` 的值改变成`Job` 的，因为变量`myStr` 是不可变的。  
  
注意，这并不意味着`myStr` 永远不能被改变，只是字符串字面量`string` `literal` 的各个字符不能被改变。**改变`myStr` 的唯一方法是重新给它赋一个值**，例如：
```js
var myStr = "Bob";
myStr = "Job";
```

#### 通过变量访问对象属性
对对象上使用**方括号表示法**，还可以访问对象上作为**变量值存储的属性**。当你需要遍历对象的所有属性，或者根据一个变量的值查找对应的属性值时，这种写法尤其适用。  
```js
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed);
```
字符串`Doberman` 将会出现在控制台中。  
  
使用这一概念的另一种情况是：属性的名字是在程序运行期间动态收集得到的。如下所示：
```js
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name");
console.log(someObj[someProp]);
```
`someProp` 的值将为字符串 `propName`，并且字符串`John` 将会出现在控制台中。  
  
> 注意，当使用变量名访问属性时，我们**没有使用引号包裹它，因为我们正在使用的是变量的值，而不是变量的名字**。

#### 测试对象的属性
有时检查一个对象属性是否存在是非常有用的。 我们可以用对象的 .hasOwnProperty(propname) 方法来检查对象是否有指定的属性。 .hasOwnProperty() 找到该属性时返回 true，找不到该属性时返回 false。
```js
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
```
第一个`hasOwnProperty` 返回`true`，第二个返回`false`。

#### parseInt()
`parseInt(string, radix)` 解析一个字符串并返回指定基数的十进制整数，`radix` 是`2-36`之间的整数，表示被解析字符串的基数。  
  
`parseInt('123', 5)` 将'123'看作5进制数，返回十进制数`38 => 1*5^2 + 2*5^1 + 3*5^0 = 38`
#### 递归
使用递归代替循环
递归是函数调用自身的操作。 为了便于理解，有如下任务：计算数组内元素前 n 的元素乘积。 使用 for 循环， 可以这样做：

  function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }
下面是递归写法，注意代码里的 multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]。 这意味着可以重写 multiply 以调用自身而无需依赖循环。

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
递归版本的 multiply 详述如下。 在 base case 里，也就是 n <= 0 时，返回 1。 在 n 比 0 大的情况里，函数会调用自身，参数 n 的值为 n - 1。 函数以相同的方式持续调用 multiply，直到 n <= 0 为止。 所以，所有函数都可以返回，原始的 multiply 返回结果。
### ES6
#### 防止对象改变
`const` 声明并不会真的保护数据不被改变。为了确保数据不被改变，`JavaScript` 提供了一个函数`Object.freeze`。  
  
**当一个对象被冻结的时候，你不能再对它的属性再进行增、删、改的操作**。 任何试图改变对象的操作都会被阻止，却不会报错。  
```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);

obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
```
`obj.review` 和 `obj.newProp` 赋值将导致错误，控制台将显示值 `{ name: "FreeCodeCamp", review: "Awesome" }`。
#### 使用解构赋值从数组中分配变量
与数组解构不同，数组的扩展运算会将数组里的所有内容分解成一个由逗号分隔的列表。
```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // a:1 b:2
/* 注意是数组 */
```
### 正则表达式
JavaScript 中有多种使用正则表达式的方法。测试正则表达式的一种方法是使用`.test()` 方法。`.test()`方法会把**编写的正则表达式和字符串（即括号内的内容）匹配，如果成功匹配到字符，则返回true，反之，返回false。**
```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
/* test 方法会返回 true。 */
```
### 基础数据结构
#### splice()
`splice()` 的第一个参数代表从数组中的哪个索引开始移除元素，而第二个参数表示要从数组中的这个位置开始删除多少个元素。
#### slice()
**不会改变原数组**: `slice()`只接收2 个输入参数：第一个是开始提取元素的位置（索引），第二个是提取元素的结束位置（索引）。提取的元素中不包括第二个参数所对应的元素。
## 前端开发库
### React
JSX 是 JavaScript 的语法扩展，所以实际上可以直接在 JSX 中编写 JavaScript。 要做到这一点，只需在花括号中包含希望被视为 JavaScript 的代码：{ 'this is treated as JavaScript code' }（这被视为 JavaScript 代码）。
#### jsx
##### jsx注释
要将注释放在`JSX` 中，可以使用`{/*  .... */}` 语法来包裹注释文本。
##### jsx的自闭合
任何`JSX` 元素都可以使用自闭合标签编写，并且每个元素都必须关闭。例如，为了通过编译换行标签必须始终编写为`<br />`。另一方面`<div>` 可以写成`<div />` 或者 `<div></div>`。