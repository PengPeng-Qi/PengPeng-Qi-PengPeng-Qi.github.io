// 注意类后面没有()
// class Star{
//   constructor(name){
//     this.name = name
//   }
//   Hi(){
//     console.log('Hi~')
//   }
// }
// const ldh = new Star('ldh')
// const ldh = new Star() // 如果没有输入参数，显示name为undefined
// console.log(ldh) // Star { name: 'ldh' }
// console.log(ldh.name) // ldh
// ldh.Hi() // Hi~

// class Son extends Star {

// }

/* 和ldh一摸一样 */
// const son = new Son('xldh')
// const son = new Son()
// son.Hi() // Hi~
// console.log(son)
// console.log(son)

// class Father {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     sum() {
//         console.log(this.x + this.y);
//     }
// }

// class Son extends Father {
//     constructor(x, y) {
//         super(x, y); //调用了父类中的构造函数,把子类的xy传递给父类
//     }
// }

// var son = new Son(1, 2);
// var son1 = new Son(11, 22);
// son.sum();  // 3
// son1.sum(); // 33
// class Father {
//   constructor(surname) {
//     this.surname = surname;
//   }
//   saySurname() {
//     console.log('我的姓是' + this.surname);
//   }
// }
// class Son extends Father { // 这样子类就继承了父类的属性和方法 
//   constructor(surname, fristname) {
//     super(surname); // 调用父类的constructor(surname)
//     this.fristname = fristname;
//   }
//   saySurname() {
//     console.log("我的名字是:" + this.fristname);
//   }
// }
// var damao = new Son('刘', "德华");
// damao.saySurname();

// class Father {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     console.log(this);
//   }
//   sum() {
//     console.log(this.x + this.y);
//     console.log(this)
//   }
// }
// // 子类继承父类加法方法 同时 扩展减法方法
// class Son extends Father {
//   constructor(x, y) {
//     // 利用super 调用父类的构造函数
//     // super 必须在子类this之前调用
//     super(x, y);
//     this.x = x;
//     this.y = y;
//     console.log(this);
//   }
//   subtract() {
//     console.log(this.x - this.y);
//   }
// }
// var son = new Son(5, 3);
// var fa = new Father(1, 2);
// fa.sum();
// son.subtract(); // 2
// son.sum(); // 8
// function Star(uname, age) {
//   this.uname = uname;
//   this.age = age;
//   // this.sing = function() {
//   //     console.log('我会唱歌');

//   // }
//   /* 构造函数中的this 指向我们实例对象.
//   原型对象里面放的是方法, 这个方法里面的this 指向的是 这个方法的调用者, 也就是这个实例对象. */

// }
// Star.prototype.sing = function () {
//   console.log(this);
//   console.log('我会唱歌');
// }
// var ldh = new Star('刘德华', 18);
// var zxy = new Star('张学友', 19);
// console.log(ldh.sing === zxy.sing); // true
// // console.dir(Star);
// ldh.sing();
// zxy.sing();