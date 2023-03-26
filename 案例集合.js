/*
  
_____/\\\\\\\\\____        ____/\\\\\\\\\_____        ____/\\\\\\\\\_____        _____/\\\\\\\\\____        __/\\\________/\\\_        
 ___/\\\\\\\\\\\\\__        __/\\\///////\\\___        __/\\\///////\\\___        ___/\\\\\\\\\\\\\__        _\///\\\____/\\\/__       
  __/\\\/////////\\\_        _\/\\\_____\/\\\___        _\/\\\_____\/\\\___        __/\\\/////////\\\_        ___\///\\\/\\\/____      
   _\/\\\_______\/\\\_        _\/\\\\\\\\\\\/____        _\/\\\\\\\\\\\/____        _\/\\\_______\/\\\_        _____\///\\\/______     
    _\/\\\\\\\\\\\\\\\_        _\/\\\//////\\\____        _\/\\\//////\\\____        _\/\\\\\\\\\\\\\\\_        _______\/\\\_______    
     _\/\\\/////////\\\_        _\/\\\____\//\\\___        _\/\\\____\//\\\___        _\/\\\/////////\\\_        _______\/\\\_______   
      _\/\\\_______\/\\\_        _\/\\\_____\//\\\__        _\/\\\_____\//\\\__        _\/\\\_______\/\\\_        _______\/\\\_______  
       _\/\\\_______\/\\\_        _\/\\\______\//\\\_        _\/\\\______\//\\\_        _\/\\\_______\/\\\_        _______\/\\\_______ 
        _\///________\///__        _\///________\///__        _\///________\///__        _\///________\///__        _______\///________

*/
// 类数组
//// 下面打印obj的结果是什么？
var obj = {
  2: 3,
  3: 4,
  length: 2,
  splice: Array.prototype.slice,
  push: Array.prototype.push,
};

obj.push(1);
obj.push(2);

console.log(obj);
//代码剖析
//由上面可知obj是一个类数组，因为obj具有从零连续的属性集合(此时0，1为empty值)，第二个是有length属性
//当obj.push的时候发生了什么呢，下面是push原理代码
Array.prototype.push = function (elem) {
  this[this.length] = elem;
  this.length++;
};
//obj[2]的值为1，obj.length为1
obj.push(1);

//obj[3]的值为2，obj.length为2
obj.push(2);

//此时我们得到一个length为4的类数组
console.log(obj); //[empty × 2, 1, 2, 'length':4,'splice': Array.prototype.slice, 'push': Array.prototype.push]

//// arguments
function test() {
  console.log(typeof arguments);
}

test(); //'object'

//因为arguments是类数组，类数组就是对象，只不过是类似数组的对象

/*
________/\\\\\\\\\___/\\\____________________/\\\\\___________/\\\\\\\\\\\_____/\\\________/\\\_____/\\\\\\\\\_______/\\\\\\\\\\\\\\\_        
 _____/\\\////////___\/\\\__________________/\\\///\\\_______/\\\/////////\\\__\/\\\_______\/\\\___/\\\///////\\\____\/\\\///////////__       
  ___/\\\/____________\/\\\________________/\\\/__\///\\\____\//\\\______\///___\/\\\_______\/\\\__\/\\\_____\/\\\____\/\\\_____________      
   __/\\\______________\/\\\_______________/\\\______\//\\\____\////\\\__________\/\\\_______\/\\\__\/\\\\\\\\\\\/_____\/\\\\\\\\\\\_____     
    _\/\\\______________\/\\\______________\/\\\_______\/\\\_______\////\\\_______\/\\\_______\/\\\__\/\\\//////\\\_____\/\\\///////______    
     _\//\\\_____________\/\\\______________\//\\\______/\\\___________\////\\\____\/\\\_______\/\\\__\/\\\____\//\\\____\/\\\_____________   
      __\///\\\___________\/\\\_______________\///\\\__/\\\______/\\\______\//\\\___\//\\\______/\\\___\/\\\_____\//\\\___\/\\\_____________  
       ____\////\\\\\\\\\__\/\\\\\\\\\\\\\\\_____\///\\\\\/______\///\\\\\\\\\\\/_____\///\\\\\\\\\/____\/\\\______\//\\\__\/\\\\\\\\\\\\\\\_ 
        _______\/////////___\///////////////________\/////__________\///////////_________\/////////______\///________\///___\///////////////__
*/
// 闭包
function Test(a, b, c) {
  var d = 0;
  this.a = a; // 可忽略
  this.b = b; // 可忽略
  this.c = c; // 可忽略

  function e() {
    d++;
    console.log(d);
  }

  this.f = e; //相当于this.f = function () { this.d++; console.log(d);}
}

var test1 = new Test();
test1.f();
test1.f();

var test2 = new Test();
test2.f();

//代码剖析
//当Test定义的时候，产生AO
AO = {
  d: undefined,
};

//在new Test()的时候，会发生以下变化
AO = {
  d: 0,
};
//隐式创建
/*
  var this = {
    f: function () {}
}
*/
//隐式return this，这个时候，this.f就形成了闭包

// 当我们调用this.f的时候，d始终没被销毁，所以一直递增
test1.f(); // 1
test1.f(); // 2

//当重新new的时候，按照new Test()步骤重新走
var test2 = new Test();
test2.f(); //1

/*
__/\\\\\\\\\\\\\\\___/\\\________/\\\___/\\\\\\\\\\\\\_____/\\\\\\\\\\\\\\\__________________/\\\\\\\\\\\___/\\\________/\\\___/\\\\\\\\\\\\_________/\\\\\\\\\\\\___/\\\\\\\\\\\\\\\_        
 _\///////\\\/////___\///\\\____/\\\/___\/\\\/////////\\\__\/\\\///////////__________________\/////\\\///___\/\\\_______\/\\\__\/\\\////////\\\_____/\\\//////////___\/\\\///////////__       
  _______\/\\\__________\///\\\/\\\/_____\/\\\_______\/\\\__\/\\\_________________________________\/\\\______\/\\\_______\/\\\__\/\\\______\//\\\___/\\\______________\/\\\_____________      
   _______\/\\\____________\///\\\/_______\/\\\\\\\\\\\\\/___\/\\\\\\\\\\\_________________________\/\\\______\/\\\_______\/\\\__\/\\\_______\/\\\__\/\\\____/\\\\\\\__\/\\\\\\\\\\\_____     
    _______\/\\\______________\/\\\________\/\\\/////////_____\/\\\///////__________________________\/\\\______\/\\\_______\/\\\__\/\\\_______\/\\\__\/\\\___\/////\\\__\/\\\///////______    
     _______\/\\\______________\/\\\________\/\\\______________\/\\\_________________________________\/\\\______\/\\\_______\/\\\__\/\\\_______\/\\\__\/\\\_______\/\\\__\/\\\_____________   
      _______\/\\\______________\/\\\________\/\\\______________\/\\\__________________________/\\\___\/\\\______\//\\\______/\\\___\/\\\_______/\\\___\/\\\_______\/\\\__\/\\\_____________  
       _______\/\\\______________\/\\\________\/\\\______________\/\\\\\\\\\\\\\\\_____________\//\\\\\\\\\________\///\\\\\\\\\/____\/\\\\\\\\\\\\/____\//\\\\\\\\\\\\/___\/\\\\\\\\\\\\\\\_ 
        _______\///_______________\///_________\///_______________\///////////////_______________\/////////___________\/////////______\////////////_______\////////////_____\///////////////__
*/
// 类型判断
//// 函数表达式判断
var test = function a() {
  return "a";
};

console.log(a); //undefined
//函数表达式的名字只能在内部访问，外界是找不到函数表达式的名字的

//// 变量
console.log(a); //报错
console.log(typeof a); //undefined
//typeof里面放一个没有声明的变量，结果都是undefind

/*
       /\\\\\\\\\___/\\\____________________/\\\\\________/\\\\\_____/\\\___/\\\\\\\\\\\\\\\_        
      /\\\////////___\/\\\__________________/\\\///\\\_____\/\\\\\\___\/\\\__\/\\\///////////__       
  ___/\\\/____________\/\\\________________/\\\/__\///\\\___\/\\\/\\\__\/\\\__\/\\\_____________      
   __/\\\______________\/\\\_______________/\\\______\//\\\__\/\\\//\\\_\/\\\__\/\\\\\\\\\\\_____     
    _\/\\\______________\/\\\______________\/\\\_______\/\\\__\/\\\\//\\\\/\\\__\/\\\///////______    
     _\//\\\_____________\/\\\______________\//\\\______/\\\___\/\\\_\//\\\/\\\__\/\\\_____________   
      __\///\\\___________\/\\\_______________\///\\\__/\\\_____\/\\\__\//\\\\\\__\/\\\_____________  
       ____\////\\\\\\\\\__\/\\\\\\\\\\\\\\\_____\///\\\\\/______\/\\\___\//\\\\\__\/\\\\\\\\\\\\\\\_ 
        _______\/////////___\///////////////________\/////________\///_____\/////___\///////////////__
*/
// 深浅拷贝
//// 深浅拷贝
function deepClone(value) {
  if (typeof value !== "object" || value === null) {
    return value;
  }

  //获取value引用类型 -> []||{}
  /*
      obj => {}
      arr => []
      
      obj.constructor -> Object
      arr.constructor -> Array
    */
  const wrapper = new value.constructor();

  /*
      Object.prototype.hasOwnProperty是在对象实例上的
      Object.hasOwn是在静态方法上的，推荐使用这个方法
    */
  for (let key in value) {
    if (Object.hasOwn(value, key)) {
      wrapper[key] = deepClone(value[key]);
    }
  }

  return wrapper;
}

/*
  
__/\\\\\\\\\\\\___________/\\\\\________/\\\\____________/\\\\_        
 _\/\\\////////\\\_______/\\\///\\\_____\/\\\\\\________/\\\\\\_       
  _\/\\\______\//\\\____/\\\/__\///\\\___\/\\\//\\\____/\\\//\\\_      
   _\/\\\_______\/\\\___/\\\______\//\\\__\/\\\\///\\\/\\\/_\/\\\_     
    _\/\\\_______\/\\\__\/\\\_______\/\\\__\/\\\__\///\\\/___\/\\\_    
     _\/\\\_______\/\\\__\//\\\______/\\\___\/\\\____\///_____\/\\\_   
      _\/\\\_______/\\\____\///\\\__/\\\_____\/\\\_____________\/\\\_  
       _\/\\\\\\\\\\\\/_______\///\\\\\/______\/\\\_____________\/\\\_ 
        _\////////////___________\/////________\///______________\///__

*/
