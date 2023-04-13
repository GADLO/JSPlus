```plain
#  __/\\\\\\\\\\\\____        _______/\\\\\______        __/\\\\____________/\\\\_        
#   _\/\\\////////\\\__        _____/\\\///\\\____        _\/\\\\\\________/\\\\\\_       
#    _\/\\\______\//\\\_        ___/\\\/__\///\\\__        _\/\\\//\\\____/\\\//\\\_      
#     _\/\\\_______\/\\\_        __/\\\______\//\\\_        _\/\\\\///\\\/\\\/_\/\\\_     
#      _\/\\\_______\/\\\_        _\/\\\_______\/\\\_        _\/\\\__\///\\\/___\/\\\_    
#       _\/\\\_______\/\\\_        _\//\\\______/\\\__        _\/\\\____\///_____\/\\\_   
#        _\/\\\_______/\\\__        __\///\\\__/\\\____        _\/\\\_____________\/\\\_  
#         _\/\\\\\\\\\\\\/___        ____\///\\\\\/_____        _\/\\\_____________\/\\\_ 
#          _\////////////_____        ______\/////_______        _\///______________\///__
```

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
> 使用`querySelector`和`querySelectorAll`需要注意
>
> 1. 兼容性问题，这两种方式只支持IE7以上的浏览器
> 2. 这两种方式在性能方面没有get系列方法好，get方法查询元素更快
> 3. 无实时性，存在缓存中，get系列拿到的NodeList中包含的元素会随着文档内容或结构的变化而变化


### 遍历节点数
#### 节点与节点树
节点：节点不是元素，节点包含元素，元素是节点的一部分。
```html
<!-- div标签内部的内容组合在一起叫做节点，而元素只是div标签内部内容的一部分 -->
<div><p>node</p></div>

```
每个节点都有`nodeType`属性，表示该节点的类型。节点类型由定义在`Node`类型上的12个数值常量表示，下面是常用的 6个：
1. `NODE.ELEMENT_NODE(1)` 元素节点 对应的数字为1
2. `NODE.ATTRIBUTE_NODE(2)` 属性节点 对应的数字为2
3. `NODE.TEXT_NODE(3)` 文本节点 对应的数字为3
4. `NODE.COMENT_NODE(8)` 注释节点 对应的数字为8
5. `NDOE.DOCUMENT_NODE(9)` document节点 对应的数字为9
6. `NODE.DOCUMENT_FRAGMENT_NODE(11)` documentFragment节点 对应的数字为11
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
//对元素而言，nodeName始终等于元素的标签名，而nodeValue始终为null
if(someNode.nodeType == 1){
    value = someNode.nodeName;
}
```

节点存在一个元素节点的概念，这个元素节点也成为DOM元素。
DOM元素也就是我们通过document对象下面方法选择出来的元素对象，对于DOM对象来说就是DOM元素。DOM元素 === 元素节点
元素节点树：由DOM元素形成的树型结构。

#### 节点的关系
文档中所有节点都与其他节点有关系，每一个节点都有一个`childNodes`，其中包含`NodeList`的实例。`NodeList`是一个类数组对象，用于存储可以按位置存储的有序节点。`NodeList`对象独特的地方在于，它其实是一个对DOM结构的查询，因此`DOM`结构的变化会自动地在`NodeList`反映出来。`NodeList`是实时的活动对象，而不是第一次访问时所获的内容的快照。
```javascript
//访问NodeList中的元素，可以使用item()和[]方法，推荐使用中括号[]方法
let firstChild = someNode.childNodes[0];
let secondChild = someNode.childNodes.item(1);
let count = someNode.childNodes.length;
```
1. parentNode   
2. childNodes  
3. firstChild
4. lastChild
5. nextSibling
6. previousSibling
parentNode只有一个（相对而言）
```javascript
<ul>
    <li>
        <h1>标题</h1>
        <a>超链接</a>
        <p>正文</p>
    </li>
</ul>
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
#### 节点方法

`Node.hasChildNodes()`方法
`Node.hasChildNodes()`：判断当前节点是否存在子节点，返回布尔值。

```javascript
// <div></div>  
div.hasChildNodes(); // false

// <div> </div> 
div.hasChildNodes(); // true 存在文本节点

// <div>1</div> 
div.hasChildNodes(); // true 存在文本节点


//判断当前节点是否存在子节点的三种方法：
Node.childNodes.length > 0;

Node.firstChild !== null;

Node.hasChildNodes();
```



### 遍历元素节点树
只寻找元素节点
1. parentElement                          IE9
2. children                               IE7
3. childElementCount  === children.length IE9 
4. firstElementCild                       IE9
5. lastElementChild                       IE9
6. nextElementSibling                     IE9
7. previusElementSibling                  IE9

将`childNodes`转换成为`children`方法
```javascript
function elemChildren (node) {
    var arr = [],
    children= node.childNodes;

    for (let i = 0; i < children.length; i++) {
        var childItem = children[i];
        if(childItem.nodeType == 1) {
            arr.push(hildItem)
        }
    }
    return arr;
}

//使用类数组改进
function elemChildren (node) {
    var temp = {
        'length':0,
        'push':Array.prototype.push,
        'slice':Array.prototype.slice
    },
    children= node.childNodes;

    for (let i = 0; i < children.length; i++) {
        var childItem = children[i];
        if(childItem.nodeType == 1) {
            temp.push(childItem)
        }
    }
    return temp;
}
```
#### 元素节点的属性

##### `Element.attributes`

性返回该元素所有属性节点的一个实时性集合，该集合是一个 `NamedNodeMap `对象，不是一个数组，所以它没有 数组 的方法，其包含的 属性节点的索引顺序随浏览器不同而不同。

##### `Element.className`

获取或设置指定元素的`class`属性的值。

```javascript
// 获取
console.log(elem.className);

// 设置
elem.className = 'box';
```



##### `Element.classList`

`Element.classList`是一个只读属性，返回一个元素`class`属性的动态集合，可用于操作`class`集合。

`Element.classList`返回的是一个`DOMTokenList`，表示元素的`class`属性集合。如果`class`属性没有设置或者为空，它将返回一个空的`DOMTokenList`，即`length`属性等于`0`的`DOMTokenList`。

尽管`classList`属性自身是只读的，但是我们可以通过`add、remove、replace、toggle`方法修改其关联的`DOMTokenList`集合。

```javascript
<div class="container"></div>

// 添加类名
oDiv.classList.add('active', 'current'); // div.className == 'container active current'

// 删除类名
oDiv.classList.remove('active', 'current'); // div.className == 'container'

// 替换类名
oDiv.classList.replace('container', 'wrapper'); // div.className == 'wrapper'
```

##### `Element.tagName`

`Element.tagName`返回当前元素的标签名。

`tagName`返回的是一个字符串，包含`element`元素的标签名，`tagName`返回的值会保留原有的大小写，在`HTML`文档中，`tagName`会返回其大写的形式。对于元素来说，`Node.nodeName`与`Element.tagName`是相同的。

```javascript
<span id="born">When I was born...</span>
var span = document.getElementById("born");
alert(span.tagName); // 'SPAN'
```



#### 元素节点的方法

##### `Element.getAttributeNode()/Element.setAttribute()`

```javascript
var attrNode = element.getAttributeNode(attrName) : 返回指定元素的指定属性节点
		attrNode : 获得的属性返回值,是Attr节点,NodeType为2;
		attrName : 是一个包含属性名称的字符串;

var replaceAttr = element.setAttributeNode(attribute);
		attribute : 是添加到element中的属性节点。
    replaceAttr : 是被替换掉的属性节点。如果存在原有的属性,则函数返回原有的属性节点。

// <div id="one" align="left">one</div>
// <div id="two">two</div>
var d1 = document.getElementById("one");
var d2 = document.getElementById("two");
var a = d1.getAttributeNode("align");
d2.setAttributeNode(a.cloneNode(true));
alert(d2.attributes[1].value)
// returns: `left'
```



##### `Element.getAttribute()/Element.setAttribute()`

## DOM原型链与继承

### DOM树结构

<img src="/Users/darrenlee/Desktop/截图/DOM树.png" alt="DOM树原型链继承和DOM树结构" style="zoom:50%;" />

### DOM树的继承关系

```javascript
// Document继承关系(document对象并不是直接继承Document。Document下面分支有HTMLDocument文档和XMLDocument文档。)

document.__proto__:HTMLDocument.prototype;
HTMLDocument.prototype.__proto__ : Document.prototype

document.__proto__:HTMLDocument.prototype;---> 相当于
function HTMLDocument(){};
HTMLDocument.prototype = {};
var document = new Document();

// 原型链继承
document.__proto__ : HTMLDocument.prototype
document.__proto__.__proto__ : Document.prototype
document.__proto__.__proto__.__proto__ : Node.prototype
document.__proto__.__proto__.__proto__.__proto__ : EventTarget.prototype
document.__proto__.__proto__.__proto__.__proto__.__proto__ : Object.prototype

// 其中HTMLDocument和XMLDocument文档是不能够通过new HTMLDocument()方式进行创建的,系统禁止实例化HTMLDocument和XMLDocument。



// CharacterData继承关系(CharacterData下面分支有文本和注释节点构造函数)
Text.prototype.__proto__ : CharacterData.prototype;
Comment.prototype.__proto__ : CharacterData.prototype;
var text = new Text('我是一个文本节点'); // 实例化对象
var comment = new Comment('我是一个注释节点'); // 实例化对象
text.__proto__ : Text.prototype;
comment.__proto : Coment.prototype;


// Element继承关系
div.__proto__ : HTMLDivElementment.prototype
div.__proto__.__proto__ : HTMLElement.prototype
div.__proto__.__proto__.__proto__ : Element.prototype
div.__proto__.__proto__.__proto__.__proto__ : Node.prototype
div.__proto__.__proto__.__proto__.__proto__.__proto__ : EventTarget.prototype
div.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__ : Object.prototype

```

### DOM深入操作

1. `Document.prototype.getElementById()`方法只存在`Document.prototype`对象上。
2. `Document.prototype.getElementByName()`方法只存在`Document.prototype`对象上。
3. 通配符`*`只能用在`getElementsByTagName()`方法上，作用是用来获取`document`文档对象上的所有元素，以类数组的形式返回。
4. 获取`body、head、title、html`节点，注意`html`只能通过文档对象`document`从`Document.prototype`获取，`body、head、title`节点可以通过文档对象`document`从`HTMLDocument.prototype`获取。

```javascript
var body = document.body;            // 获取body
var head = document.head;            // 获取Dom元素
var title = document.title;          // 直接获取文本
var html = document.documentElement; // 获取html
```

> 注意，通过选择器选择出来的DOM元素并不是直接就是成为`DOM`元素的，能成为一个`DOM`对象还需要自身的构造函数进行实例化，然后在挂载到DOM树上成为节点。例如：div元素需要通过`HTMLDivElement`构造函数进行实例化，才成为对象。

### 节点的创建、删除、替换

##### 创建元素节点

`createElement()`方法出自于`Document.prototype`，方法用于创建一个由标签名称`tagName`指定的`HTML`元素。如果传入的`tagName`无法识别，则生成一个未知的`HTML`元素`HTMLUnKnownElement`。

`createElement(tagName, options)`方法的参数问题：

1. `tagName`：指定要创建元素类型的字符串，注意在`HTML`文档上调用`createElement`方法创建元素之前会将`tagName`字符串转为小写。
2. `options`：一个可选的参数`ElementCreationOptions`是包含一个属性名为`is`的对象，该对象的值是用`customElements.define()`方法定义过的一个自定义元素的标签名。
3. 返回值：新建的元素，注意此时新建的元素存在内存中，并未挂载到文档上。

```javascript
   // expandingList被赋予is属性,其值为自定义元素的标签名称
   let expandingList = document.createElement('ul', { is : 'expanding-list' })
```

##### 创建文本节点

document.createTextNode()可以用来创建新文本节点，它接收一个参数，即要插入节点的文本。跟设置已有文本节点的值一样，这些要插入的文本也会应用 HTML 或 XML 编码，如下面的例子所示：

```javascript
let textNode = document.createTextNode("<strong>Hello</strong> world!");
```

`let textNode = document.createTextNode(data)`方法的参数问题：

1. `textNode`是一个文本节点 
2. `data`是一个字符串，包含了要放入文本节点的内容。
3.  返回值：一个文本节点，需要注意的是存在内存中，未挂载到文档上。

###### 合并文本节点

因为一个文本节点足以表示一个文本字符串。同样，DOM 文档中也经常会出现两个相邻文本节点。为此，有一个方法可以合并相邻的文本节点。这个方法叫 `normalize()`，是在 Node 类型中定义的（因此所有类型的节点上都有这个方法）。

```javascript
let element = document.createElement("div");
element.className = "message";
let textNode = document.createTextNode("Hello world!");
element.appendChild(textNode);
let anotherTextNode = document.createTextNode("Yippee!");
element.appendChild(anotherTextNode);
document.body.appendChild(element);
alert(element.childNodes.length); // 2
element.normalize();
alert(element.childNodes.length); // 1
alert(element.firstChild.nodeValue); // "Hello world!Yippee!"
```

###### 拆分文本节点

Text 类型定义了一个与 `normalize()`相反的方法——`splitText()`。这个方法可以在指定的偏移位置拆分 `nodeValue`，将一个文本节点拆分成两个文本节点。拆分之后，原来的文本节点包含开头到偏移位置前的文本，新文本节点包含剩下的文本。这个方法返回新的文本节点，具有与原来的文本节点相同的 `parentNode`。来看下面的例子：

```javascript
let element = document.createElement("div");
element.className = "message";
let textNode = document.createTextNode("Hello world!");
element.appendChild(textNode);
document.body.appendChild(element);
let newNode = element.firstChild.splitText(5);
alert(element.firstChild.nodeValue); // "Hello"
alert(newNode.nodeValue); // " world!"
alert(element.childNodes.length); // 2
```



##### 创建注释节点





#### 创建节点与剪切节点`appendChild()`

因为所有关系指针都是只读的，所以 `DOM` 又提供了一些操纵节点的方法。最常用的方法是`appendChild()`，用于在 `childNodes` 列表末尾添加节点。添加新节点会更新相关的关系指针，包括父节点和之前的最后一个子节点。 `appendChild()`方法返回新添加的节点，如下所示：

```javascript
let returnedNode = someNode.appendChild(newNode);
alert(returnedNode == newNode); // true
alert(someNode.lastChild == newNode); // true
```

如果把文档中已经存在的节点传给 `appendChild()`，则这个节点会从之前的位置被转移到新位置。即使 DOM 树通过各种关系指针维系，一个节点也不会在文档中同时出现在两个或更多个地方。因此，如果调用 `appendChild()`传入父元素的第一个子节点，则这个节点会成为父元素的最后一个子节点，如下所示：

```javascript
// 假设 someNode 有多个子节点
let returnedNode = someNode.appendChild(someNode.firstChild);
alert(returnedNode == someNode.firstChild); // false
alert(returnedNode == someNode.lastChild); // true
```

#### 节点插入`insertBefore()`

如果想把节点放到 `childNodes` 中的特定位置而不是末尾，则可以使用 `insertBefore()`方法。这个方法接收两个参数：要插入的节点和参照节点。调用这个方法后，要插入的节点会变成参照节点的前一个同胞节点，并被返回。如果参照节点是 `null`，则 `insertBefore()`与 `appendChild()`效果相同，如下面的例子所示：

```javascript
// 作为最后一个子节点插入
returnedNode = someNode.insertBefore(newNode, null);
alert(newNode == someNode.lastChild); // true

// 作为新的第一个子节点插入
returnedNode = someNode.insertBefore(newNode, someNode.firstChild);
alert(returnedNode == newNode); // true
alert(newNode == someNode.firstChild); // true

// 插入最后一个子节点前面
returnedNode = someNode.insertBefore(newNode, someNode.lastChild);
alert(newNode == someNode.childNodes[someNode.childNodes.length - 2]); // true
```

>`appendChild()` 和 `insertBefore()` 在 插 入 节 点 时 不 会 删 除 任 何 已 有 节 点 。 

#### 替换节点`replaceChild()`

`replaceChild()`方法接收两个参数：要插入的节点和要替换的节点。要替换的节点会被返回并从文档树中完全移除，要插入的节点会取而代之。下面看一个例子：

```javascript
// 替换第一个子节点
let returnedNode = someNode.replaceChild(newNode, someNode.firstChild);
// 替换最后一个子节点
returnedNode = someNode.replaceChild(newNode, someNode.lastChild);
```



### 元素属性设置获取

### 节点属性