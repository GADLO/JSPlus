# 基础知识

Object是一种数据类型，键值对的容器
所有的对象实例都继承于Object.prototype

## 对象创建方法

一般来说，对象创建方法有四种：
1. 对象字面量
2. 实例化对象
3. 对象包装类
4. 初始化创建对象

```javascript
//对象字面量
const obj1 = {
    a: 1;
    b: 2;
}

//实例化对象
const obj2 = new Object();
obj2.a = 1;
obj2.b = 2;

//对象包装类
const obj3 = Object();
obj3.a = 1;
obj3.b = 2;

//初始化创建对象
const obj4 = Object.create(null);
obj4.a = 1;
obj4.b = 2;

```
## 对象包装类
1. 在对象进行包装的时候，会检测值类型，然后分配相应的构造器去构造对象
2. null、undefined没有对应的构造器
3. 对象类的包装会返回它本身，所以对象的包装没有意义

```javascript
//在对象进行包装的时候，会检测值类型，然后分配相应的构造器去构造对象
const num = Object(1);
console.log(num); //Number(1)

//包装类过程
const str = 'abc';
console.log(str.length);

//str.读取length的过程，先包装成string类，然后销毁
//'abc'.length -> new String('abc') -> {'abc', length: 3 } -> .length -> 3 -> String {} destroy
```
对于引用值的包装，返回的是同一引用
```javascript
const obj1 = {a: 1};
const obj2 = Object(obj1);  //返回原来的对象

//本身是一个对象，包装是无效的
console.log(obj1 === obj2);  //true 
```
## Object.prototype.constructor
1.  constructor是一个构造器标识，它保存的是对象构造函数的引用
2.  原型设置为null是找不到本身的构造器的
3.  自定义构造函数构造出来的实例它的constructor指向构造函数原型上的constructor
4.  包装类的constructor更改不起作用（创建后会立马销毁），普通对象constructor是可修改的，更改完可使用新的构造器
5.  new的过程1. 执行函数。2. 函数执行是内部创建对象。3. 创建this属性指向空对象{}。4. return this(隐式return)
```javascript
const obj = Object.create(null); //无构造器
//没有原型，找不到构造器
console.log(obj.constructor);  //undefined


function Test () {}
const test = new Test();

console.log(test.constructor);  //Test.prototype.constructor

/*
1. str -> 'abc'
2. str.constructor -> new String('abc') -> .constructor ->  constructor = Number -> String{} destroy
3. str.constructor -> new String('abc') -> .constructor -> String
*/
var str = 'abc';
str.constructor = Number;
console.log(str.constructor);  //String () {}

/*
  当我们new一个函数的时候：
  1. 执行函数
  2. 函数执行是内部创建对象
  3. 创建this属性指向空对象{}
  4. return this(隐式return)
*/

/*
  继承
*/
function Parent () {}
Parent.protoype.test = function test () {console.log('test');};

function Child () { this.test();};

Child.prototype = Object.create(Parent.prototype);

Child.prototype.create = function () {return new this.constructor();};

```

## 原型链

