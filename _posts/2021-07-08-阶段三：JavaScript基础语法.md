---
layout:     post
title:      JS基础语法
date:       2021-07-08
author:     PengPengQi
header-img: img/BackGround.png
catalog: true
tags:
    - JavaScript
    - Notes
---
#### 逻辑中断运算符
##### 逻辑与短路运算
如果表达式1为真，则返回表达式2，如果表达式1为假，那么返回表达式1.
```js
console.log(123 && 456);      //456
console.log(0 && 123 && 456); //0
```
##### 逻辑或短路运算
如果表达式1为真，则返回表达式1，如果表达式1为假，那么返回表达式2.
```js
console.log(123 || 456);        //123
console.log(0 || 123 || 456);   //123
console.log(0 || false || 456); //456
```
> 1、逻辑非`!`权重 高于逻辑与`&&`权重 高于逻辑或`||`  
> 2、相等运算符`(!== === != ==)`权重大于赋值运算符`(=)`

#### 流程控制
##### 顺序结构
##### 分支结构
**三元表达式**：`条件表达式 ? 表达式1 : 表达式2`。  
如果条件表达式为真，则返回表达式1，否则返回表达式2。  
**switch语法结构**：
```js
switch(表达式) {
  case value1:
    执行语句1;
    break;
  case value2:
    执行语句2;
    break;
  ...
  default:
    执行最后的语句;
}

// 利用表达式的值与case后面的选项值相匹配(值和类型都相等)，如果没有匹配上执行default的里面的语句。
```
##### 循环结构
**for循环**：
```js
for (初始化变量; 条件表达式; 操作表达式) {
  // 循环体
}
```
[乘法口诀表](/demo/乘法口诀表.html)  
**while循环**可做条件判断更复杂的循环，for循环主要用于计数
##### 关键字
`continue`关键字退出当前循环，继续下一次循环。  
`break`关键字退出循环。  

> [简易ATM机](/demo/简易ATM机.html)

#### 作用域
JS作用域：就是变量在某个范围内起作用和效果，目的是为了提高程序的可靠性以及减少命名冲突。  
es6之前：
- 全局作用域
- 局部作用域
  
全局作用域：整个script标签，或者一个单独的js文件  
局部作用域(函数作用域)：在函数内部就是局部作用域，在函数内部起作用和效果。  
  
根据作用域的不同，变量可分为：
- 全局变量：全局作用域下的变量
- 局部变量：局部作用域下的变量，只能在函数内部使用。

全局变量：只有在浏览器关闭的时候才会销毁，比较占内存。  
局部变量：当程序执行完毕就会销毁。  
> 1、如果在函数内部没声明，直接赋值的变量也叫作全局变量  
> 2、函数的形参属于局部变量  
> 3、es6之后有块级作用域：`{}`  
  
**作用域链：内部函数访问外部函数的变量，采取的是链式查找的方式来决定取那个值，这种结构我们成为作用域链。**  
#### 预解析
JavaScript 代码是由浏览器中的 JavaScript 解析器来执行的。JavaScript 解析器在运行 JavaScript 代码的 时候分为两步：`预解析`和`代码执行`。  
  
- 预解析:在当前作用域下, JS 代码执行之前，浏览器会默认把带有 `var` 和 `function` 声明的变量在内存中 进行**提前声明**或者定义。  
- 代码执行: 从上到下执行JS语句。  
  
变量提升：变量的声明会被提升到**当前作用域**的最上面，变量的赋值不会提升。  
函数提升：函数的声明会被提升到**当前作用域**的最上面，但是不会调用函数。  
```js
// 案例1
var a = 18; 
f1();
function f1() {
  var b = 9; 
  console.log(a); 
  console.log(b); 
  var a = '123';
}
// 相当于以下操作
var a = 18; 
function f1() {
  var a;
  var b = 9; 
  console.log(a); // undefined
  console.log(b); // 9
  a = '123';
}
f1();

// 案例4
f1(); 
console.log(c); 
console.log(b); 
console.log(a); 
function f1() {
  var a = b = c = 9；
  // 相当于var a = 9; b = 9; c = 9;
  // 与var a = 9, b = 9, c = 9; 不同
  console.log(a); 
  console.log(b); 
  console.log(c);
}
// 相当于以下操作
function f1() {
  var a = 9; // 局部变量
  a = 10; // 重新赋值，依然是局部变量
  b = 9; // 全局变量
  c = 9; // 全局变量
  console.log(a); // 10
  console.log(b); // 9
  console.log(c); // 9
}
f1(); 
console.log(c); // 9
console.log(b); // 9
console.log(a); // 报错
```
#### 对象
对象是一个具体的事物。对象是一组无序的相关**属性和方法**的结合。
- 属性：事物的**特征**，在对象中用属性来表示
- 方法：事物的**行为**，在对象中用方法来表示

##### 创建对象
- 利用字面量创建对象
- 利用new Object创建对象
- 利用构造函数创建对象

**对象字面量**：就是花括号`{}`里面包含了表达这个具体事物的属性和方法。  
```js
var obj = {
  name: '柯南',
  age: 18,
  sex: '男',
  sayHi: function() {
    console.log('hi~');
  }
}
// 多个属性或方法中间用逗号隔开
// 方法冒号后面跟的是一个匿名函数
```
利用**new Object**创建对象：
```js
var obj = new Object(); //创建了一个空对象
obj.name = '科比';
obj.age = 38;
obj.sex = '男'; // 赋值
obj.sayHi = function() {
  console.log('Hi~');
}
```
利用**构造函数**创建对象：  
**构造函数**(泛指某一类，类似于java语言里面的类class)是把对象(特值某一个)里面一些相同的**属性和方法**抽象出来封装到函数里面。  
构造函数创建对象的过程也称为对象的实例化。  
```js
// 构造函数的语法格式
// function 构造函数名() {
//   this.属性 = 值;
//   this.方法 = function() {}
// }
// new 构造函数名();

function Star(uname, age, sex) {
  // this.name称为实例成员，通过this添加的成员，实例成员只能实例化的对象(ldh)来访问
  this.name = uname;
  this.age = age;
  this.sex = sex;
  this.sing = function(song) {
    console.log(song);
  }
}
var ldh = new Star('刘德华', 18, '男');
ldh.sing('冰雨');
console.log(typeof ldh); // Object
console.log(ldh.name);

// 在构造函数本身上添加的成员，hobby就称为静态成员
// 静态成员只能通过构造函数来访问Star.hobby
Star.hobby = '打球';
```
> 1.构造函数名首字母要大些  
> 2.构造函数不需要`return`，就可以返回结果  
> 3.调用构造函数需要使用`new`  
> 4.只要`new Star()`调用函数就创建了一个对象  
> 5.我们的属性和方法前面必须添加`this`  
  
**new关键字执行过程**：  
- 1.new 构造函数可以在内存中**创建一个空的对象**  
- 2.this **指向刚才创建的空对象**  
- 3.执行构造函数里面的代码，**给空对象添加属性和方法**  
- 4.**返回这个对象**  
  
**变量**和**属性**都是存储数据的：
- 变量是单独声明并赋值，使用的时候直接写变量名
- 属性在对象里面的，不需要声明，使用的时候必须是对象.属性
  
**函数**的**方法**都是实现某种功能：
- 函数是单独声明，并且调用的函数名()单独存在的
- 方法在对象里面，调用的时候对象.方法()
  
##### 对象调用
- 对象名.属性名
- 对象名['属性名']
- 对象名.方法名()

##### 遍历对象
`for...in`遍历对象, `for (变量 in 对象) {}`  
```js
var obj = {
  name: '科比',
  age: 38,
  sex: '男'
}
for (var k in obj) {
  console.log(k);      // k 变量输出得到的是属性名
  console.log(obj[k]); // obj[k]得到的是属性值 k不加引号, 一般用k或key
} 
```
> **重点记忆**：`obj[k]`得到的是属性值 k不加引号, 一般用k或key
  
#### 内置对象
JS语言自带的一些对象。
##### Math对象
Math数学对象，不是一个构造函数，所以不需要new 来调用，而是直接使用里面的属性和方法。  
```js
console.log(Math.PI);                //圆周率，一个属性
console.log(Math.max(1, 155, 88));   // 155, 一个方法
console.log(Math.max(1, 155, 'hh')); // NAN 
```

**封装自己的数学对象**：
```js
var myMath = {
  PI: 3.141592653,
  max: function() {
    var max = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  },
  min: function() {
    var min = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      if (arguments[i] < min) {
        min = arguments[i];
      }
    }
    return min;
  }
}
console.log(myMath.PI);
console.log(myMath.max(1, 5, 9));
console.log(myMath.min(1, 5, 9));
```
**绝对值**：
```js
Math.abs(1);   // 1
Math.abs(-1);  // 1
Math.abs('1'); // 1 隐式转换
```
**取整**：
```js
// 向下取整数
Math.floor(1.1); // 1 floor:地板
Math.floor(1.9); // 1

// 向上取整
Math.ceil(1.1); // 2 ceil:天花板
Math.ceil(1.9); // 2

// 四舍五入
Math.round(1.1);  // 1 
Math.round(1.5);  // 2
Math.round(-1.5); // -1 往大了取
Math.round(-1.1); // -1
Math.round(-1.9); // -2 
```
**随机数方法**：
```js
// random()返回一个随机的小数，0 <= x < 1, 不跟参数
console.log(Math.random());

// 得到随机整数，两个数之间的随机整数，且包含这个数
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}
console.log(getRandom(1, 10))

// 随机点名
var arr = ['科比', '柯蓝', '喜洋洋', '库里'];
console.log(arr[getRandom(0, arr.length - 1)]);
```
> [猜数字，只有十次机会](/demo/猜数字十次机会.html)

##### 日期对象
`Date()`日期对象，是一个构造函数，必须使用new 来调用创建我们的日期对象  
```js
var arr = new Array();           // 创建了一个数组对象
var obj = new Object();          // 创建了一个对象实例

// 如果没有参数，返回当前系统的当前时间
var date = new Date();
console.log(date);

// 参数常用写法 数字型：2019, 10, 01 字符串型：'2019-10-1 8:8:8'
var date1 = new Date(2019, 10, 01);
console.log(date1);              // 返回的是 11月 不是 10月
var date2 = new Date('2019-10-1 8:8:8');
console.log(date2);     

// 格式化日期 年月日
var date = new Date();
console.log(date.getFullYear()); // 2021
console.log(date.getMonth());    // 6  返回当前月份 0 -11 比当前月份小1
console.log(date.getDate());     // 10 返回的是几号
console.log(date.getDay());      // 6  返回的是周几，周一到周六1 -6 周日返回0

// 写一个2021年7月10日星期六
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var dates = date.getDate();
var day = date.getDay();
var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
console.log('今天是' + year + '年' + month + '月' + dates + '日' + arr[day]);

// 格式化日期 时分秒
var date = new Date();
console.log(date.getHours());   // 13 时
console.log(date.getMinutes()); // 18 分
console.log(date.getSeconds()); // 26 秒

// 封装一个函数，返回时分秒 格式 08:08:08
function getTime() {
  var time = new Date();
  var h = time.getHours();
  h = h < 10 ? '0' + h : h;
  var m = time.getMinutes();
  m = m < 10 ? '0' + m : m;
  var s = time.getSeconds();
  s = s < 10 ? '0' + s : s;
  return h + ':' + m + ':' + s;
}
console.log(getTime());

// 获得Date总的毫秒数(时间戳)，不是当前时间的毫秒数，而是距离1970年1月1号过了多少毫秒数。
// 1.通过valueOf() getTime()
var date = new Date();
console.log(date.valueOf());  // 1625895493206
console.log(date.getTime());  // 1625895493206

// 2.简单的写法
var date1 = +new Date();      // +new Date() 也可以返回总的毫秒数
console.log(date1);           // 1625895636343 

// 3.H5新增的
console.log(Date.now());      // 1625895707552
```


##### 数组对象
可见[数组](/2021/06/02/数组/)

#### 基本包装类型
复杂数据类型才有属性和方法。  
简单数据类型为什么会有length属性。  
基本包装类型：把简单数据类型包装成为了复杂数据类型。  
```js
var str = 'andy';
console.log(str.length); // 4

// 相当于
// 1.把简单数据类型包装成为复杂数据类型,生成临时变量
var temp = new String('andy');
// 2.把临时变量的值给 str
str = temp;
// 3.销毁这个临时变量
temp = null;
```
为了方便操作，js还提供了三种特殊的引用类型：`String`、`Number`、`Boolean`

#### 字符串
##### 根据字符返回位置
字符串所有的方法，都不会修改字符串本身（字符串本身是不变的），操作完成会返回一个新的字符串。  
```js
// str.indeOf('要查找的字符', [起始的位置])
var str = '改革春风吹满地, 春天来了';
console.log(str.indexOf('春'));     // 2
console.log(str.indexOf('春', 3));  // 9 从索引号是3的位置开始查找
```
##### 根据位置返回字符
`charAt(index)`位置以字符串的形式返回字符
```js
var str = 'andy';
console.log(str.charAt(3));         // y
console.log(typeof(str.charAt(3))); // string

// 遍历所有字符
for (var i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}
// a n d y
```
`charCodeAt(index)`返回对应索引号的字符的ASCII值 目的：判断用户按下了那个键
```js
var str = 'andy';
console.log(str.charCodeAt(0)); // 97
```
`str[index]`H5新增的
```js
var str = 'andy';
console.log(str[0]); // a
```
##### 字符串的不可变性
字符串内容不会随意发生改变，会另开一个内存空间，重新指向新开的空间，原空间的值依然存在，故不要随意大量拼接字符串，会消耗大量资源。

#### 简单数据类型与复杂数据类型
简单类型又叫作基本数据类型或**值类型**，复杂数据类型又叫作**引用类型**。  
值类型：`number`、`string`、`boolean`、`undefined`、`null`  
```js
var timer = null;
console.log(typeof timer); // object
```
> 如果有个变量，没有想好放什么，就可以赋值null

引用类型：`Object`、`Array`、`Date`等

**堆和栈**：  
- 简单数据类型放在**栈**里面，里面直接开辟了一个新空间，存放的是值
- 复杂数据类型放在**堆**里面，在栈里面存放地址，用十六进制表示，然后这个地址指向堆里面的数据
  
简单类型传参：字符串开辟新空间，数字直接重新赋值
复杂数据类型：
```js
function Person(name) { 
  this.name = name;
}
function f1(x) { // x = p
console.log(x.name); // 2. 这个输出什么 ? 刘德华
x.name = "张学友";
console.log(x.name); // 3. 这个输出什么 ? 张学友
}
var p = new Person("刘德华"); 
console.log(p.name); // 1. 这个输出什么 ? 刘德华
f1(p);
console.log(p.name); // 4. 这个输出什么 ? 张学友
```
更多可见：
- [计算机编程基础](/2021/06/18/计算机编程基础/)  
- [JavaScript介绍](/2021/06/19/JavaScript介绍/)  
- [JavaScript输出](/2021/06/02/JavaScript输出/)  
- [JavaScript数字型](/2021/06/02/数字/)  
- [JavaScript字符串](/2021/06/02/JavaScript字符串/)  