# DOM是什么
`DOM（Document Object Model）`文档对象模型是HTML和XML文档的编程接口，`DOM`表示由多层节点构成的文档，通过`DOM`操作，开发者可以添加、删除和修改页面的各个部分。`DOM`现在是真正跨平台、语言无关的表示和操作网页的方式。
## DOM的发展
### DOM　Level１
DOM　Level1在1998年成为W3C推荐标准，提供基本文档结构和查询的结构
JavaScript中有三种对象：
1. `Native Object`本地对象：`Object`、`Function`、`Array`、`String`、`Number`、`Boolean`、`Error`、`EvalError`、`SyntaxError`、`RangeError`、`ReferenceError`、`TypeError`、`URIError`、`Date`、`RegExp`
2. `Build-in Object`内置对象：`Global`（`Global`实际上是不存在的，只是全局对象的统称）、`Math`
3. `Host Object`宿主对象/浏览器对象（执行JS脚本的环境提供的对象）
本地对象和内置对象都是ES的内置对象
浏览器对象`window`（`BOM`）和`document`（`DOM`）
`DOM`有w3c统一规范
BOM不同浏览器有不同规范，没有统一规范
## DOM的作用
通过浏览器提供的方法表示或操作`HTML`和`XML`
### XML和HTML的区别
`XML`: `Extendsible Markup Language`可扩展标记语言（是一种允许用户对自己的标记语言进行“自定义”的源语言，标记指能被计算机所理解的信息符号）
`HTML`: `HyperText Markup Language`超文本标记语言（是一种用于创建网页的标准标记语言）
XML --> XHTML --> HTML过渡历程。
### 元素与标签的区别
元素：标签与标签内部的全部内容组合在一起叫做元素，例如`<person>John</person>`。
标签：单纯指代像这种形式的标记`<person></person>`。
## document对象
`ECMAScript`包含：`ECMA`、 `DOM`、 `BOM`，其中JavaScript引擎认为HTML是一个文档对象，而document对象就是文档对象。这个文档对象提供了一些属性和方法对其HTML文档进行操作，并处理文档内部的一些事件。
1. document是一个对象
2. 
### 获取元素的方式
```javascript
document.getElementById()          //根据元素的id值获取目标元素

document.getElementsByTagName()    //根据标签名称获取元素集合（类数组对象）
/*
  不是元素才有getElementsByTagName，当你选择特定元素后，在这个元素下面也可以使用getElementsByTagName
*/

document.getElementsByClassName()  //根据标签类名获取元素集合(类数组对象)

document.getElementsByName()       //根据标签的name属性获取元素集合（类数组对象）

document.querySelector()           //根据css选择器获取单个元素

document.querySelectorAll()        //根据css选择器获取元素集合（类数组对象）

```
〉使用`querySelector`和`querySelectorAll`需要注意
1. 兼容性问题，这两种方式只支持IE7以上的浏览器
2. 这两种方式在性能方面没有get系列方法好，get方法查询元素更快
3. 无实时性，存在缓存中，get系列拿到的NodeList中包含的元素会随着文档内容或结构的变化而变化


### 遍历节点数
#### 节点与节点树
节点：节点不是元素，节点包含元素，元素是节点的一部分。
```html
<!-- div标签内部的内容组合在一起叫做节点，而元素只是div标签内部内容的一部分 -->
<div><p>node</p></div>

```
每个节点都有`nodeType`属性，表示该节点的类型。节点类型由定义在`Node`类型上的12个数值常量表示，下面是常用的6个：
1. `NODE.ELEMENT_NODE(1) 元素节点 对应的数字为1
2. NODE.ATTRIBUTE_NODE(2) 属性节点 对应的数字为2
3. NODE.TEXT_NODE(3) 文本节点 对应的数字为3
4. NODE.COMENT_NODE(8) 注释节点 对应的数字为8
5. NDOE.DOCUMENT_NODE(9) document节点 对应的数字为9
6. NODE.DOCUMENT_FRAGMENT_NODE(11) documentFragment节点 对应的数字为11
节点类型可以通过与这些常量来比较
```javascript
//如果someNode的nodeType为元素节点，则打印出来。
if (someNode.nodeType == Node.ELEMNT_NODE){
    console. ddss.log('This is a element node.');
}
```
浏览器并不支持所有节点类型，开发者最常用到的是元素节点和文本节点
##### nodeName与nodeValue
`nodeName`与`nodeValue`保存着有关节点的信息。这两个属性的值完全取决于节点类型，在使用这两个属性之前，最好是先检测节点类型：
```javascript
if(someNode.nodeType == 1){
    value = someNode.nodeName;
}
```


节点存在一个元素节点的概念，这个元素节点也成为DOM元素。
DOM元素也就是我们通过document对象下面方法选择出来的元素对象，对于DOM对象来说就是DOM元素。DOM元素 === 元素节点
元素节点树：由DOM元素形成的树型结构。
##### 节点的种类
1. parentNode   
2. childNodes  
3. firstChild
4. lastChild
5. nextSibling
6. previousSibling
parentNode只有一个（相对而言）
```html
<ul>
    <li>
        <h1>标题</h1>
        <a>超链接</a>
        <p>正文</p>
    </li>
</ul>
```
```javascript
var a = document.getElementsByTagName('a')[0]
console.log(a); //<a>超链接</a>

a.parentNode;
/*
  <li>
        <h1>标题</h1>
        <a>超链接</a>
        <p>正文</p>
  </li>
*/

//可链式调用
a.parentNode.parentNode;
/*
  <ul>
        <li>
            <h1>标题</h1>
            <a>超链接</a>
            <p>正文</p>
        </li>
  </ul>szs
*/
```
#### 遍历元素节点树
只寻找元素节点
1. parentElement                          IE9
2. children                               IE7
3. childElementCount  === children.length IE9 
4. firstElementCild                       IE9
5. lastElementChild                       IE9
6. nextElementSibling                     IE9
7. previusElementSibling                  IE9