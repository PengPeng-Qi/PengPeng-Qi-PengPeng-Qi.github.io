---
layout:     post
title:      JavaScript目录
date:       2020-02-24
author:     PengPengQi
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Javascript
    - Ajax
    - API
---
## <a name="link"/>JavaScript目录:triangular_flag_on_post:
* [语法和基本构造](#yufa)  
* [学些DOM操作](./HTML_DOM.md)  
* [学习Fetch API / Ajax(XHR)](./AJAX.md)  
* [ES6+ 和模块化 JavaScript](#EJ)  
* [学习一些概念：](#GN)  
    * 变量提升  
    * 事件冒泡  
    * 作用域  
    * 原型  
    * Shadow DOM  
    * 严格模式  
***
## <a name="yufa"/>语法和基本构造 :golf:
### <a name="link"/>目录
* [运算符号](#FH)  
* [数据类型](#DateTypes)  
* [条件语句](#Switch)  
* [函数](#function)  
* [对象](#Object)  
***
#### <a name="FH">运算符号
#####  <a name="link"/>目录
* [除/](#Chu)  
* [余%](#Yu)  
* [增量式++](#Zls)  
* [求幂](#Qm)  
* [指数](#index)  
  
<a name="Chu"> 除```/```:
```js
<!DOCTYPE html>
    <html>
        <body>

            <h2>The / Operator</h2>

            <p id="demo"></p>

            <script>
                var x = 5;
                var y = 2;
                var z = x / y;
                document.getElementById("demo").innerHTML = z;
            </script>

        </body>
    </html>
```
```
The / Operator
  
2.5
```
<a name="Yu">余```%``` :  
```js
<script>
    var x = 5;
    var y = 2;
    var z = x % y;
</script>
```
```txt
The % Operator
  
1
```
<a name="Zls">增量式```++```：  
```js
<!DOCTYPE html>
    <html>
        <body>

            <h2>The ++ Operator</h2>

            <p id="demo"></p>

            <script>
                var x = 5;
                x++;
                var z = x / y;
                document.getElementById("demo").innerHTML = z;
            </script>

        </body>
    </html>
```
```txt
The ++ Operator

6
```
> 同理：```--```递减
   
<a name="Qm">求幂：  
  
* ```**```  
* ```Math.pow(x,y)```  
  
```js
<script>
    var x = 5;
    document.getElementById("demo").innerHTML = Math.pow(x,2);
</script>
```
<a name="index">指数  
>  有时你可能会看到使用较旧的``` Math.pow() ```方法表达的指数，该方法的工作方式非常相似。  
>  在``` Math.pow(7, 3) ``` 中，7 是基数，3 是指数，因此表达式的结果是 343。  

[运算符号优先级表](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E8%BF%90%E7%AE%97%E7%AC%A6%E4%BC%98%E5%85%88%E7%BA%A7)[&#128279;](https://www.w3school.com.cn/js/js_arithmetic.asp)  
***
#### <a name="DateTypes">数据类型
##### <a name="link"/>目录  
* [字符串](#String)  
* [数字](#Number)  
* [布尔值](#Bool)  
* [数组](#Array)  
* [对象](#Objects)  
* [typeof 运算符](#Typeof)  
* [Undefined](#Undefined)  
* [空值](#Empty)  
* [Null](#Null)  
* [复杂数据](#Date)  
* [转义字符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#parameters)  
当添加数字和字符串时，JavaScript会将数字视为字符串  
```js
var x = 16 + "Volvo";
//等同于
var x = "16" + "Volvo";
```
JavaScript从左到右评估表达式。不同的序列可以产生不同的结果：  

```js
var x = 16 + 4 + "Volvo";
//20Volvo
```
```js
var x = "Volvo" + 16 + 4;
//Volvo164
```
JavaScript具有**动态类型**。这意味着可以使用同一变量来保存不同的数据类型：  
```js
var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String
```
##### <a name="String">字符串 :round_pushpin:
**字符串**用引号引起来。您可以使用单引号或双引号：  
```js
var carName1 = "Volvo XC60";   // Using double quotes
var carName2 = 'Volvo XC60';   // Using single quotes
```
##### <a name="Number">数字 :round_pushpin:
**数字**可以带或不带小数：  
```js
var x1 = 34.00;     // Written with decimals
var x2 = 34;        // Written without decimals
```
可以使用科学（指数）表示法来写特大号或小号：
```js
var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123
```
##### <a name="Bool">布尔值 :round_pushpin:
**布尔值**只能有两个值：true或false  
```js
var x = 5;
var y = 5;
var z = 6;
(x == y)       // Returns true
(x == z)       // Returns false
```
> 在条件测试中经常使用布尔值  
  
##### <a name="Array">数组 :round_pushpin:
JavaScript数组用方括号括起来,数组项用逗号分隔  
```js
var cars = ["Saab", "Volvo", "BMW"];
```
创建数组：  
```js
let sequence = [1, 1, 2, 3, 5, 8, 13];
```
获取数组长度:  

使用 length 属性获取数组的长度  
```js
sequence.length;
// should return 7
```
数组和字符串之间的转换：  

```split()```、```join()```  
  
```js
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
myArray;
// ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"]
```
```join()```方法相反:  

```js
let myArray = ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"];
let myNewString = myArray.join(',');
myNewString;
//"Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"
```
将数组转换为字符串的另一种方法是使用``` toString() ```方法。``` toString() ```可以比``` join() ```更简单，因为它不需要一个参数，但更有限制  

```js
let dogNames = ["Rocket","Flash","Bella","Slugger"];
dogNames.toString(); //Rocket,Flash,Bella,Slugger
```
添加和删除数组项：  

要在数组末尾添加或删除一个项目，我们可以使用 ``` push() ```和``` pop() ```：  
```js
let myArray = ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"];
myArray.push('Cardiff');
myArray;
//["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff"]
```
``` unshift() ```和``` shift() ```从功能上与``` push() ```和``` pop() ```完全相同，只是它们分别作用于数组的开始，而不是结尾  

```js
let myArray = ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"];
myArray.unshift('Edinburgh');
myArray;
// ["Edinburgh", "Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"]
```
```js
let myArray = ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"];
let removedItem = myArray.shift();
myArray;
//["London", "Liverpool", "Birmingham", "Leeds", "Carlisle"]
removedItem;
//"Manchester"
```
##### <a name="Objects">对象 :round_pushpin:
JavaScript对象用大括号编写```{}```,对象属性写为名称：值对，用逗号分隔  
```js
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```
##### <a name="Typeof">typeof 运算符 :round_pushpin:
使用JavaScript ```typeof```运算符来查找JavaScript变量的类型  
```js
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
```
##### <a name="Undefined">Undefined :round_pushpin:  
在 JavaScript 中，没有值的变量，其值是 undefine, typeof 也返回 undefined  
```js
var car;    // Value is undefined, type is undefined
```
>任何变量均可通过设置值为 undefined 进行清空, 其类型也将是 undefined   
> ```js
> car = undefined;    // Value is undefined, type is undefined
> ```
  
##### <a name="Empty">空值 :round_pushpin:  
空值与 undefined 不是一回事，空的字符串变量既有值也有类型  
> ```js
> var car = "";     // 值是 ""，类型是 "string"
> ```
  
##### <a name="Null">Null :round_pushpin:  
在 JavaScript 中，null 是 "nothing"。它被看做不存在的事物  
  
不幸的是，在 JavaScript 中，null 的数据类型是对象  
  
您可以把 null 在 JavaScript 中是对象理解为一个 bug。它本应是 null  
  
您可以通过设置值为 null 清空对象：  
```js
var person = null;           // 值是 null，但是类型仍然是对象
```
也可以通过设置值为 undefined 清空对象：  
```js
var person = undefined;     // 值是 undefined，类型是 undefined
```
> Undefined 与 Null 的区别  
> Undefined 与 null 的值相等，但类型不相等：   
> ```js
> typeof undefined              // undefined
> typeof null                   // object
> null === undefined            // false
> null == undefined             // true
> ```
  
##### <a name="Date">复杂数据 :round_pushpin:  
```typeof``` 运算符可返回以下两种类型之一：  
  
* function  
* object  
  
```typeof``` 运算符把对象、数组或 ```null``` 返回 ```object```  
  
```typeof``` 运算符不会把函数返回 ```object```  
  
```js
typeof {name:'Bill', age:62} // 返回 "object"
typeof [1,2,3,4]             // 返回 "object" (并非 "array"，参见下面的注释)
typeof null                  // 返回 "object"
typeof function myFunc(){}   // 返回 "function"
```
> ```typeof``` 运算符把数组返回为 "```object```"，因为在 JavaScript 中数组即对象。

#### <a name="Switch">条件语句
##### switch语句
```js
switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;

  // include as many cases as you like

  default:
    actually, just run this code
  /*关键字 switch, 后跟一组括号.
    括号内的表达式或值.
    关键字 case, 后跟一个选项的表达式/值，后面跟一个冒号.
    如果选择与表达式匹配，则运行一些代码.
    一个 break 语句, 分号结尾. 如果先前的选择与表达式/值匹配，则浏览器在此停止执行代码块，并执行switch语句之后的代码.
    你可以添加任意的 case 选项（选项3-5）.
    关键字 default, 后面跟随和 case 完全相同的代码模式 (选项 3–5), except that default 之后不需要再有选项, 并且您不需要 break 语句, 因为之后没有任何运行代码. 如果之前没有选项匹配，则运行default选项.*/
}
```
switch语句示例：  
  
```js
var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}
```
三元运算符：  
```js
//( condition ) ? run this code : run this code instead
var greeting = ( isBirthday ) ? 'Happy birthday Mrs. Smith — we hope you have a great day!' : 'Good morning Mrs. Smith.';
```
##### 循环：
  
**使用continue跳过迭代：**  
  
continue语句以类似的方式工作，而不是完全跳出循环，而是跳过当前循环而执行下一个循环。  
  
**while语句和do ... while语句：**  
  
while:  
   
```js
  initializer
  while (exit-condition) {
    // code to run

    final-expression
  }
  /*var i = 0;

  while (i < cats.length) {
    if (i === cats.length - 1) {
      info += 'and ' + cats[i] + '.';
    } else {
      info += cats[i] + ', ';
    }

    i++;
  }*/
```

do ... while 语句：    
  
```js
  initializer
  do {
    // code to run

    final-expression
  } while (exit-condition)
  /*var i = 0;

  do {
    if (i === cats.length - 1) {
      info += 'and ' + cats[i] + '.';
    } else {
      info += cats[i] + ', ';
    }

    i++;
  } while (i < cats.length);*/
```
  
#### <a name="function">函数  
**JavaScript 函数是被设计为执行特定任务的代码块。**  
  
**JavaScript 函数会在某代码调用它时被执行。**  
```js
function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
```
**匿名函数：**  
```js
function() {
  alert('hello');
}
//没有名称的函数叫作匿名函数  
```
> 函数不会自己作任何事，通常将函数与事件处理程序一起使用。
  
```js
var myButton = document.querySelector('button');

myButton.onclick = function() {
  alert('hello');
}
//要求 <button> 在页面上提供可用于选择并单击的元素
```
还可以将匿名函数分配为变量的值，例如：
```js
var myGreeting = function() {
  alert('hello');
}
```
然后调用此函数：  
```js
myGreeting();
```
#### <a name="Object">对象  
在真实生活中，汽车是一个**对象**，汽车有诸如车重和颜色等**属性**，也有诸如启动和停止的**方法**  

把**多个值**（porsche, 911, white）赋给名为 car 的**变量**：  
```js
var car = {type:"porsche", model:"911", color:"white"};
```
值以**名称:值**对的方式来书写（名称和值由冒号分隔）  
##### <a name="link"/> 目录  
* [对象属性](#OBJ_Type)  
* [对象方法](#OBJ_FF)  
* [this关键词](#OBJ_GJC)  
* [对象定义](#OBJ_DEF)  
* [访问对象属性](#OBJ_SHUX)  
* [访问对象方法](#OBJ_FANGF) 
* [Tip](#Tip)  

##### <a name="OBJ_Type">对象属性:round_pushpin:  
（JavaScript 对象中的）名称:值对被称为**属性**  
```js
var car = {type:"porsche", model:"911", color:"white"};
```
##### <a name="OBJ_FF">对象方法:round_pushpin:  
方法是在对象上执行的**动作**，方法以**函数定义**被存储在属性中  
  
方法是作为属性来存储的函数  
```js
var person = {
  firstName: "Bill",
  lastName : "Gates",
  id       : 678,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```
##### <a name="OBJ_GJC">this关键词:round_pushpin:  
在函数定义中，this 引用该函数的“拥有者”。  
  
在上面的例子中，this 指的是“拥有” fullName 函数的** person 对象**。  
  
换言之，this.firstName 的意思是** this 对象**的 firstName 属性。  
##### <a name="OBJ_DEF">对象定义:round_pushpin:  
定义（创建）了一个 JavaScript 对象：  
```js
var person = {
    firstName:"Bill",
    lastName:"Gates",
    age:50,
    eyeColor:"blue"
};
```
##### <a name="OBJ_SHUX">访问对象属性:round_pushpin:  
两种方式访问属性：  
```js
    objectName.propertyName
    //等同于
    objectName["propertyName"]
```
##### <a name="OBJ_FANGF">访问对象方法:round_pushpin:  
通过如下语法访问对象方法：  

* ```objectName.methodName()```  
  
    实例  
    ```js
    <script>
    // 创建对象：
    var person = {
        firstName: "Bill",
        lastName : "Gates",
        id       : 12345,
        fullName : function() {
           return this.firstName + " " + this.lastName;
        }
    };

    // 显示对象中的数据：
    document.getElementById("demo").innerHTML = person.fullName();
    </script>
    ```
    ```js
    Javascript 对象方法
    对象方法是一种函数定义，存储为属性值。

    Bill Gates
    ```
  
* 如果**不使用 () **访问 fullName 方法，则将返回**函数定义**：  
```js
<script>
// 创建对象：
var person = {
    firstName: "Bill",
    lastName : "Gates",
    id       : 12345,
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};

// 显示对象中的数据：
document.getElementById("demo").innerHTML = person.fullName;
</script>
```
```js
Javascript 对象方法

如果您不使用 () 访问对象，则返回函数定义：

unction() { return this.firstName + " " + this.lastName; }
```
> 方法实际上是以属性值的形式存储的函数定义。
##### <a name="Tip">请不要把字符串、数值和布尔值声明为对象！:round_pushpin:  
如果通过关键词 "new" 来声明 JavaScript 变量，则该变量会被创建为对象：  
  
```js
    var x = new String();        // 把 x 声明为 String 对象
    var y = new Number();        // 把 y 声明为 Number 对象
    var z = new Boolean();       // 把 z 声明为 Boolean 对象
```
