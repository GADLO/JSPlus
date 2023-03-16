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
### 获取元素的方式
```javascript
document.getElementById()         //根据元素的id值获取目标元素

document.getElementsByTagName()    //根据标签名称获取元素集合（类数组对象）

document.getElementsByClassName()  //根据标签类名获取元素集合(类数组对象)

document.getElementsByName()       //根据标签的name属性获取元素集合（类数组对象）

document.querySelector()           //根据css选择器获取单个元素

document.querySelectorAll()        //根据css选择器获取元素集合（类数组对象）

```
〉使用querySelector和querySelectorAll需要注意
1. 兼容性问题，这两种方式只支持IE7以上的浏览器
2. 这两种方式在性能方面没有get系列方法好，get方法查询元素更快
3. 无实时性，存在缓存中


### 遍历节点数
#### 节点与节点树
节点：节点不是元素，节点包含元素，元素是节点的一部分。
``html
<!-- div标签内部的内容组合在一起叫做节点，而元素只是div标签内部内容的一部分 -->
<div><p>node</p></div>

```
节点存在一个元素节点的概念，这个元素节点也成为DOM元素。DOM元素也就是我们通过document对象下面方法选择出来的元素对象，对于DOM对象来说就是DOM元素。DOM元素 === 元素节点











