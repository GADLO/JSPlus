# DOM是什么
`DOM（Document Object Model）`文档对象模型是HTML和XML文档的编程接口，`DOM`表示由多层节点构成的文档，通过`DOM`操作，开发者可以添加、删除和修改页面的各个部分。`DOM`现在是真正跨平台、语言无关的表示和操作网页的方式。
## DOM的发展
### DOM　Level１
DOM　Level在１９９８年成为Ｗ３Ｃ推荐标准，提供基本文档结构和查询的jie'kou
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
