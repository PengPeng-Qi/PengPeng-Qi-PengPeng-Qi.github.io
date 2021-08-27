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

#### parseInt()
`parseInt(string, radix)` 解析一个字符串并返回指定基数的十进制整数，`radix` 是`2-36`之间的整数，表示被解析字符串的基数。  
  
`parseInt('123', 5)` 将'123'看作5进制数，返回十进制数`38 => 1*5^2 + 2*5^1 + 3*5^0 = 38`
#### 递归
使用递归代替循环  
递归是函数调用自身的操作。为了便于理解，有如下任务：`计算数组内元素前 n 的元素乘积。 使用 for 循环， 可以这样做`：
```js
function multiply(arr, n) {
  var product = 1;
  for (var i = 0; i < n; i++) {
      product *= arr[i];
  }
  return product;
}
```
下面是递归写法，注意代码里的`multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]`。 这意味着可以重写`multiply` 以调用自身而无需依赖循环。
```js
function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}
```
递归版本的`multiply` 详述如下。   
  
在`base case` 里，也就是 n <= 0 时，返回 1。 在 n 比 0 大的情况里，函数会调用自身，参数 n 的值为 n - 1。 函数以相同的方式持续调用 multiply，直到 n <= 0 为止。 所以，所有函数都可以返回，原始的 multiply 返回结果。
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
#### export default
不能将`export default` 与`var、let 或 const` 同时使用。
#### 测试对象是否具有某个属性
有时检查一个对象属性是否存在是非常有用的。 我们可以用对象的 `.hasOwnProperty`(propname) 方法来检查对象是否有指定的属性。 `.hasOwnProperty()` 找到该属性时返回 true，找不到该属性时返回 false。
```js
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
```
第一个`hasOwnProperty` 返回`true`，第二个返回`false`。  
  
也可以使用`in`关键字：
```js
'Alan' in users;
/* true or false */
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
#### 数组方法总结
##### 不改变原数组
###### concat()
`concat()` 方法用于合并两个或多个数组。此方法**不会更改现有数组**，而是返回一个新数组。
###### every()
`every()` 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
```js
array1.every((currentValue) => currentValue < 40)
```
###### filter()
`filter()` 方法创建一个**新数组**, 其包含通过所提供函数实现的测试的所有元素。 
###### forEach()
`forEach()` 方法对数组的每个元素执行一次给定的函数。
```js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));
```
###### indexOf()
`indexOf()`方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回`-1`
###### join()
**不改变原数组**：`join()` 方法将一个数组的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
```js
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```
###### Array.prototype.map()
`map()` 方法**创建一个新数组**，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```
###### splice()
`splice()` 的第一个参数代表从数组中的哪个索引开始移除元素，而第二个参数表示要从数组中的这个位置开始删除多少个元素。
###### slice()
**不会改变原数组**: `slice()` 方法返回一个新的数组对象，这一对象是一个由`begin` 和`end` 决定的**原数组的浅拷贝**（包括 begin，不包括end）。
###### reduce()
`reduce()` 方法对数组中的每个元素执行一个由您提供的`reducer`函数(升序执行)，将其结果汇总为单个返回值。
```js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```
###### some()
`some()` 方法测试数组中**是不是至少有1个元素通过了被提供的函数测试**。它返回的是一个Boolean类型的值。
```js
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
```
##### 改变原数组
###### pop()
**改变原数组**：`pop()`方法从数组中删除最后一个元素，并返回该元素的值。
###### push()
**改变原数组**：`push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
###### shift()/unshift()
**改变原数组**：`shift()` 方法从数组中删除第一个元素，并返回该元素的值。  
  
**改变原数组**：`unshift()` 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度
###### reverse()
**改变原数组**：`reverse()` 方法将数组中元素的位置颠倒，并返回该数组。
```js
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```
###### sort()
**会改变原数组**：`sort()` 方法用原地算法对数组的元素进行排序，并返回数组。
###### splice()
**改变原数组**：`splice()` 方法通过**删除或替换现有元素或者原地添加新的元素来修改数组**,并以数组形式返回被修改的内容。
###### Array.prototype.keys()/Array.prototype.values()
`values()` 方法返回一个新的 Array Iterator 对象，该对象包含数组每个**索引的值**
```js
const array1 = ['a', 'b', 'c'];
const iteratorKey = array1.keys();
const iteratorValue = array1.values();

for (const key of iteratorKey) {
  console.log(key);
}
// expected output: 0
// expected output: 1
// expected output: 2

for (const value of iteratorValue) {
  console.log(value);
}
// expected output: "a"
// expected output: "b"
// expected output: "c"
```
#### 字符串方法总结
##### slice()
`slice()` 方法提取某个字符串的一部分，并返回一个新的字符串，且**不会改动原字符串**。`str.slice(beginIndex[, endIndex])`
##### split()
转换为数组，**不会改变原字符串**
##### charAt()
返回知道索引的字符`str.charAt(index)`
##### concat()
**不改变原字符串**：将一个或多个字符串与原字符串连接合并，形成一个新的字符串`str.concat(str2, [, ...strN])`
##### repeat()
`repeat()` 构造并**返回一个新字符串,不改变原字符串**，该字符串包含被连接在一起的指定数量的字符串的副本。`str.repeat(count)`
##### trim()
**不改变原字符串**，`trim()` 方法会从一个字符串的**两端删除空白字符**。
##### indexOf()
`indexOf()` 方法返回调用它的`String` 对象中第一次出现的指定值的索引，从`fromIndex` 处进行搜索。如果未找到该值，则返回 -1。
##### substring()
**不会改变原字符串**：`substring()` 方法返回一个字符串在开始索引到结束索引之间的一个子集 `str.substring(indexStart[, indexEnd])`
##### toUpperCase()/toLowerCase()
`toUpperCase()`方法将调用该方法的字符串转为大写形式并返回，**不改变原字符串**
### 面向对象编程
#### instanceof
检查一个对象是否是构造函数的实例对象
```js
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;  // true
```
#### 构造函数的属性
`constructor`返回创建**实例对象的 Object 构造函数**的引用
```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird);  // true
console.log(beagle.constructor === Dog); // true
```
> 这种检查方式不推荐，推荐使用`instanceof`

在自定义构造函数时，使用`prototype` 添加自定义属性时会变为`constructor`的值为`Object`，所以需要使用重新赋值将构造函数设置回去
```js
Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```
![原型链]([../img/原型链.png](https://raw.githubusercontent.com/PengPeng-Qi/PengPeng-Qi.github.io/main/img/%E5%8E%9F%E5%9E%8B%E9%93%BE.png))
#### 对象的原型继承于哪里(isPrototypeOf())
对象可以从创建它的构造函数那里继承`prototype`
```js
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
```
`duck` 从 `Bird` 构造函数那里继承了它的 `prototype`。可以使用 `isPrototypeOf` 方法来验证他们之间的关系：
```js
Bird.prototype.isPrototypeOf(duck);  // true
```
such as:
```js
const arr = new Array();

Array.prototype.isPrototypeOf(arr) // true
```
#### Object.create()
`Object.create()`方法创建一个**新对象**，**使用现有的对象来提供新创建的对象的__proto__**。
![Object.create()](https://raw.githubusercontent.com/PengPeng-Qi/PengPeng-Qi.github.io/main/img/Object.create.png)
```js
/* 注意需要在初始化时候设置 */
let animal = Object.create(Animal.prototype);

/* 错误 */
let animal;
animal = Object.create(Animal.prototype);
// SyntaxError: Identifier 'me' has already been declared
```
如果我们把`animal` 的`prototype` 设置为与`Animal` **构造函数**的`prototype` 一样，那么就相当于让`animal` 这个实例具有与`Animal` 的其他实例相同的**配方**了。
```js
animal instanceof Animal; // true
```
### 函数式编程
- 1、功能独立 -- 不依赖于程序的状态(比如可能发生变化的全局变量)
- 2、纯函数 -- 同一个输入永远得到同一个输出
- 3、有限的副作用 -- 可以严格的限制函数外部对状态的更改
  
一些基本术语：  
**高阶函数**：将函数作为参数或者返回值的函数  

函数式编程的核心原则之一是**不改变任何东西**。  
  
函数式编程的另一个原则是：总是**显式声明依赖关系**。如果函数依赖于一个变量或对象，那么将该变量或对象作为参数直接传递到函数中。  

**函数柯里化**：柯里化在不能一次为函数提供所有参数情况下很有用。 因为它可以**将每个函数的调用保存到一个变量中，该变量将保存返回的函数引用，该引用在下一个参数可用时接受该参数**。  
## 前端开发库
### React
JSX 是 JavaScript 的语法扩展，所以实际上可以直接在 JSX 中编写 JavaScript。 要做到这一点，只需在花括号中包含希望被视为 JavaScript 的代码：{ 'this is treated as JavaScript code' }（这被视为 JavaScript 代码）。
#### jsx
##### jsx注释
要将注释放在`JSX` 中，可以使用`{/*  .... */}` 语法来包裹注释文本。
##### jsx的自闭合
任何`JSX` 元素都可以使用自闭合标签编写，并且每个元素都必须关闭。例如，为了通过编译换行标签必须始终编写为`<br />`。另一方面`<div>` 可以写成`<div />` 或者 `<div></div>`。