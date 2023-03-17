Vue
# 1. 说出至少4种vue当中的指令和它的用法？
 答：v-if：判断是否隐藏
v-for：数据循环出来
v-bind:class：绑定一个属性
v-model：实现双向绑定
# 2. Vue的双向数据绑定原理是什么？
 答：vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
 具体步骤：
 第一步：需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter和getter
 这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化
 第二步：compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图第三步：Watcher订阅者是Observer和Compile之间通信的桥梁，
 主要做的事情是:
 1. 在自身实例化时往属性订阅器(dep)里面添加自己
 2. 自身必须有一个update()方法
 3、待属性变动dep.notice()通知时，能调用自身的update()方法，并
 触发Compile中绑定的回调，则功成身退。
 第四步：MVVM作为数据绑定的入口，整合Observer、Compile和
 Watcher三者，通过Observer来监听自己的model数据变化，通过
 Compile来解析编译模板指令，最终利用Watcher搭起Observer和
 Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变
 化(input) -> 数据model变更的双向绑定效果。
# 3、请详细说下你对vue生命周期的理解？
 答：总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。创建前/后： 在beforeCreated阶段，vue实例的挂载元素$el和数据对象data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，$el还没有。载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染。
 更新前/后：当data变化时，会触发beforeUpdate和updated方法。
 销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在
# 4、请说下封装 vue 组件的过程？
 答：首先，组件可以提升整个项目的开发效率。能够把页面抽象成多个相对独立的模块，解决了我们传统项目开发：效率低、难维护、复用性等问题。然后，使用Vue.extend方法创建一个组件，然后使用Vue.component方法注册组件。子组件需要数据，可以在props中接受定义。而子组件修改好数据后，想把数据传递给父组件。可以采用emit方法。
# 5、请说出vue.cli项目中src目录每个文件夹和文件的用法？
 答：assets文件夹是放静态资源；components是放组件；router是定义路由相关的配置;view视图；app.vue是一个应用主组件；main.js是入口文件
# 6、聊聊你对Vue.js的template编译的理解？
 答：简而言之，就是先转化成AST树，再得到的render函数返回VNode（Vue的虚拟DOM节点）
 详情步骤：
 首先，通过compile编译器把template编译成AST语法树（abstract syntaxtree 即 源代码的抽象语法结构的树状表现形式），compile是createCompiler的返回值，createCompiler是用以创建编译器的。另外compile还负责合并option。然后，AST会经过generate（将AST语法树转化成render funtion字符串的过程）得到render函数，render的返回值是VNode，VNode是Vue的虚拟DOM节点，里面有（标签名、子节点、文本等等）
# 7、v-show和v-if指令的共同点和不同点
 答：v-show指令是通过修改元素的display的CSS属性让其显示或者隐藏
 v-if指令是直接销毁和重建DOM达到让元素显示和隐藏的效果
# 8、<keep-alive></keep-alive>的作用是什么?
 答： <keep-alive></keep-alive> 包裹动态组件时，会缓存不活动的组件实
 例，主要用于保留组件状态或避免重新渲染。
# 9、什么是vue生命周期
 答： Vue 实例从创建到销毁的过程，就是生命周期。也就是从开始创建、
 初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过
 程，我们称这是 Vue 的生命周期。
# 10、vue生命周期的作用是什么
 答：它的生命周期中有多个事件钩子，让我们在控制整个Vue实例的过程
 时更容易形成好的逻辑。
# 11. 第一次页面加载会触发哪几个钩子
 答：第一次页面加载时会触发 beforeCreate, created, beforeMount, mounted 
 这几个钩子
# 12. DOM 渲染在 哪个周期中就已经完成
 答：DOM 渲染在 mounted 中就已经完成了。
# 13、简单描述每个周期具体适合哪些场景
 答：生命周期钩子的一些使用方法：
 beforecreate : 可以在这加个loading事件，在加载实例时触发
 created : 初始化完成时的事件写在这里，如在这结束loading事件，异步请
 求也适宜在这里调用
 mounted : 挂载元素，获取到DOM节点
 updated : 如果对数据统一处理，在这里写上相应函数
 beforeDestroy : 可以做一个确认停止事件的确认框
 nextTick : 更新数据后立即操作dom
# 14、VNode是什么？虚拟 DOM是什么？
 答：Vue在 页面上渲染的节点，及其子节点称为“虚拟节点 (VirtualNode)”，简写为“VNode”。“虚拟 DOM”是由 Vue 组件树建立起来的整个VNode 树的称呼。
# 15、MVVM框架是什么？他和其他框架（jQuery）有什么区别，使用场景
 答：MVVM框架：一个model+view+view-model的框架，model 是数据模型，view是视图，view-model连接数据和视图。视图的输入框定了v-model, 用户输入后会改变data；Model改变也会同步视图更新相关的依赖, 双向绑定就是vm起了作用。区别：vue数据驱动，通过数据来显示视图层而不是节点操作。
 使用场景：数据操作比较多的场景更加方便快捷。
# 16、MVC框架和MVVM框架的区别
 答：mvc和mvvm都是一种设计思想，主要是mvc中Controller演变成mvvm中的viewModel。
 mvvm主要解决了mvc中大量的DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验，以及当 Model 频繁发生变化，开发者需要主动更新到View，这些问题。
# 17、vue中跨域问题如何解决
 答：① 后台更改header：
 header('Access-Control-Allow-Origin:*'); //允许所有来源访问
 header('Access-Control-Allow-Method:POST,GET'); //允许访问的方式
 ② 使用JQuery提供的jsonp : 发起ajax请求，设置dataType为jsonp
 ③ 使用http-proxy-middleware 代理解决
# 18、vue中的ref的作用？
 答：用来给元素或子组件注册引用信息，从而操作DOM
# 19、Vue与Angular以及React的区别？
 答：1.与AngularJS的区别
 相同点：都支持指令：内置指令和自定义指令；都支持过滤器：内置过滤器和自定义过滤器；都支持双向数据绑定；都不支持低端浏览
 器。

 不同点：AngularJS的学习成本高，比如增加了Dependency Injection特性，而Vue.js本身提供的API都比较简单、直观；在性能上，AngularJS依赖对数据做脏检查，所以Watcher越多越慢；Vue.js使用基于依赖追踪的观察并且使用异步队列更新，所有的数据都是独立触发的。

 2.与React的区别
 相同点：React采用特殊的JSX语法，Vue.js在组件开发中也推崇编写.vue特殊文件格式，对文件内容都有一些约定，两者都需要编译后使用；中心思想相同：一切都是组件，组件实例之间可以嵌套；都提供合理的钩子函数，可以让开发者定制化地去处理需求；都不内置列数AJAX，Route等功能到核心包，而是以插件的方式加载；在组件开发中都支持mixins的特性。
 不同点：React采用的Virtual DOM会对渲染出来的结果做脏检查；Vue.js在模板中提供了指令，过滤器等，可以非常方便，快捷地操作Virtual DOM。
# 20、vue-cli如何新增自定义指令？
答：
1. 创建局部指令
```javascript
var app = new Vue({
 el: '#app',
 data: {
 },
 // 创建指令(可以多个)
 directives: {
 // 指令名称
 dir1: {
 inserted(el) {
 // 指令中第一个参数是当前使用指令的DOM
 console.log(el);
 console.log(arguments);
 // 对DOM进行操作
 el.style.width = '200px';
 el.style.height = '200px';
 el.style.background = '#000';
 }
 }
 }
})
```
2. 全局指令
```javascript
Vue.directive('dir2', {
 inserted(el) {
 console.log(el);
 }
})
```

3. 指令的使用
<div id="app">
 <div v-dir1></div>
 <div v-dir2></div>
</div>
# 21. vue如何自定义一个过滤器？
答：
html代码：
```html
<div id="app">
 <input type="text" v-model="msg" />
 {{msg| capitalize }}
</div>
```

JS代码：
```javascript
var vm=new Vue({
 el:"#app",
data:{
 msg:''
 },
 filters: {
 capitalize: function (value) {
 if (!value) return ''
 value = value.toString()
 return value.charAt(0).toUpperCase() + value.slice(1)
 }
 }
})
```
全局定义过滤器
```javascript
Vue.filter('capitalize', function (value) {
 if (!value) return ''
 value = value.toString()
 return value.charAt(0).toUpperCase() + value.slice(1)
})
```

过滤器接收表达式的值 (msg) 作为第一个参数。capitalize 过滤器将会收到
msg的值作为第一个参数。
# 22. 对keep-alive 的了解？
答：
keep-alive是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。在vue 2.1.0 版本之后，keep-alive新加入了两个属性: include(包含的组件缓存) 与 exclude(排除的组件不缓存，优先级大于include) 。使用方法
```javascript
<keep-alive include='include_components' exclude='exclude_components'>
 <component>
<!-- 该组件是否缓存取决于include和exclude属性 -->
 </component>
</keep-alive>
```

参数解释
include - 字符串或正则表达式，只有名称匹配的组件会被缓存
exclude - 字符串或正则表达式，任何名称匹配的组件都不会被缓存
include 和 exclude 的属性允许组件有条件地缓存。
二者都可以用“，”分隔字符串、正则表达式、数组。
当使用正则或者是数组时，要记得使用v-bind 。
使用示例
```html
<!-- 逗号分隔字符串，只有组件a与b被缓存。 -->
<keep-alive include="a,b">
 <component></component>
</keep-alive>
<!-- 正则表达式 (需要使用 v-bind，符合匹配规则的都会被缓存) -->
<keep-alive :include="/a|b/">
 <component></component>
</keep-alive>
<!-- Array (需要使用 v-bind，被包含的都会被缓存) -->
<keep-alive :include="['a', 'b']">
 <component></component>
</keep-alive>
```
# 23、vue常用的修饰符？
 答：.prevent: 提交事件不再重载页面；
.stop: 阻止单击事件冒泡；
.self: 当事件发生在该元素本身而不是子元素的时候会触发；
.capture: 事件侦听，事件发生的时候会调用
# 24、vue中 key 值的作用？
答：当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。key的作用主要是为了高效的更新虚拟DOM。
# 25、什么是vue的计算属性？
答：在模板中放入太多的逻辑会让模板过重且难以维护，在需要对数据进行复杂处理，且可能多次使用的情况下，尽量采取计算属性的方式。
好处：
①使得数据处理结构清晰；
②依赖于数据，数据更新，处理结果自动更新；
③计算属性内部this指向vm实例；
④在template调用时，直接写计算属性名即可；
⑤常用的是getter方法，获取数据，也可以使用set方法改变数据；
⑥相较于methods，不管依赖的数据变不变，methods都会重新计算，但
是依赖数据不变的时候computed从缓存中获取，不会重新计算。
# 26、vue等单页面应用及其优缺点
 答：
优点：Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件，核心是一个响应的数据绑定系统。MVVM、数据驱动、组件化、轻量、简洁、高效、快速、模块友好。
缺点：不支持低版本的浏览器，最低只支持到IE9；不利于SEO的优化（如果要支持SEO，建议通过服务端来进行渲染组件）；第一次加载首
页耗时相对长一些；不可以使用浏览器的导航按钮需要自行实现前进、后退。
# 27、为什么组件中的data属性的值必须是一个函数？
答：因为在一个组件被多次引用的情况下，如果data的值是一个Object的话，那么由于Object是一个引用类型，所以即使是该组件被多次引用，而其实操作的是同一个对象，最终导致了引用该组件的所有位置都同步的显示了。
# 28、什么是动态组件？他的作用是什么？
答：通过使用保留的 <component> 元素，动态地绑定到它的 is 特性，我们让多个组件可以使用同一个挂载点，并可以动态地切换。除此之外，Vue还提供了keep-alve指令。keep-alive指令允许把切换出去的组件保留在内存中，并保留它的状态或避免重新渲染。
# 29、如何阻止Vue中的绑定事件不发生冒泡
答：可以使用“事件修饰符”来处理事件冒泡，如：v-on:click.stop阻止事件冒泡或v-on:submit.prevent阻止默认事件。
# 30、Vue computed 实现
答：
从两个问题出发：
建立与其他属性（如：data、 Store）的联系；属性改变后，通知计算属性重新计算。
实现时，主要如下
初始化 data， 使用 Object.defineProperty 把这些属性全部转为 getter/setter。
初始化 computed, 遍历 computed 里的每个属性，每个 computed 属性都是一个 watch 实例。每个属性提供的函数作为属性的 getter，使用Object.defineProperty 转化。Object.defineProperty getter 依赖收集。用于依赖发生变化时，触发属性重新
计算。若出现当前 computed 计算属性嵌套其他 computed 计算属性时，先进行其
他的依赖收集。
# 31. diff 算法实现
答：diff 的实现主要通过两个方法，patchVnode 与 updateChildren 。patchVnode 有两个参数，分别是老节点 oldVnode, 新节点 vnode 。主要分五种情况：
if (oldVnode === vnode)，他们的引用一致，可以认为没有变化。
if(oldVnode.text !== null && vnode.text !== null && oldVnode.text !==vnode.text)，文本节点的比较，需要修改，则会调用Node.textContent =vnode.text。
if( oldCh && ch && oldCh !== ch ), 两个节点都有子节点，而且它们不一样，这样我们会调用 updateChildren 函数比较子节点，这是diff的核心，后边会讲到。
if (ch)，只有新的节点有子节点，调用createEle(vnode)，vnode.el已经引用了老的dom节点，createEle函数会在老dom节点上添加子节点。
if (oldCh)，新节点没有子节点，老节点有子节点，直接删除老节点。updateChildren 是关键，这个过程可以概括如下：
oldCh 和 newCh 各有两个头尾的变量 StartIdx 和 EndIdx ，它们的2个变量相互比较，一共有4种比较方式。如果 4 种比较都没匹配，如果设置了key，就会用key进行比较，在比较的过程中，变量会往中间靠，一旦StartIdx > EndIdx 表明 oldCh 和 newCh 至少有一个已经遍历完了，就会结束比较
# 32. Vue complier 实现
答：模板解析这种事，本质是将数据转化为一段 html ，最开始出现在后端，经过各种处理吐给前端。随着各种 mv* 的兴起，模板解析交由前端处理。 总的来说，Vue complier 是将 template 转化成一个 render 字符串。 可
以简单理解成以下步骤：
parse 过程，将 template 利用正则转化成 AST 抽象语法树。
optimize 过程，标记静态节点，后 diff 过程跳过静态节点，提升性能。
generate 过程，生成 render 字符串。
# 33、vue slot是做什么的?
答：简单来说，假如父组件需要在子组件内放一些DOM，那么这些DOM是显示、不显示、在哪个地方显示、如何显示，就是slot分发负责的活。
# 34、Vue里面router-link在电脑上有用，在安卓上没反应怎么解决？
答：Vue路由在Android机上有问题，babel问题，安装babel polypill插件解
决。
Vue-router
1. 怎么定义vue-router的动态路由？怎么获取传过来的动态参数？
答：在router目录下的index.js文件中，对path属性加上/:id。 使用router对象
的params.id
2. vue-router是什么？它有哪些组件？
答：vue用来写路由一个插件。router-link、router-view
3. Vue的路由实现：hash模式 和 history模式
答：hash模式：在浏览器中符号“#”，#以及#后面的字符称之为hash，
用window.location.hash读取；特点：hash虽然在URL中，但不被包括在HTTP请求中；用来指导浏览器动作，对服务端安全无用，hash不会重加载页面。
history模式：history采用HTML5的新特性；且提供了两个新方法：pushState（），replaceState（）可以对浏览器历史记录栈进行修改，以及popState事件的监听到状态变更。
4. $route和$router的区别
答：$route是“路由信息对象”，包括path，params，hash，query，fullPath，matched，name等路由信息参数。而$router是“路由实例”对象包括了路由的跳转方法，钩子函数等。
## Vuex
1. vuex是什么？怎么使用？哪种功能场景使用它？
答：vue框架中状态管理。在main.js引入store，注入。新建了一个目
录store，….. export 。场景有：单页应用中，组件之间的状态。音乐播放、
登录状态、加入购物车
2. vuex有哪几种属性
答：有五种，分别是 State、 Getter、Mutation 、Action、 Module
vuex的State特性
A、Vuex就是一个仓库，仓库里面放了很多对象。其中state就是数据源存
放地，对应于一般Vue对象里面的data
B、state里面存放的数据是响应式的，Vue组件从store中读取数据，若
是store中的数据发生改变，依赖这个数据的组件也会发生更新
C、它通过mapState把全局的 state 和 getters 映射到当前组件的 computed 计
算属性中
vuex的Getter特性
A、getters 可以对State进行计算操作，它就是Store的计算属性
B、 虽然在组件内也可以做计算属性，但是getters 可以在多组件之间复用
C、 如果一个状态只在一个组件内使用，是可以不用getters
vuex的Mutation特性
Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接
变更状态；Action 可以包含任意异步操作。
3、不用Vuex会带来什么问题？
答：可维护性会下降，想修改数据要维护三个地方；
可读性会下降，因为一个组件里的数据，根本就看不出来是从哪来
的；
增加耦合，大量的上传派发，会让耦合性大大增加，本来Vue用
Component就是为了减少耦合，现在这么用，和组件化的初衷相背。
axios
1.  axios的特点有哪些？
答：一、Axios 是一个基于 promise 的 HTTP 库，支持promise所有的
 API
二、它可以拦截请求和响应
三、它可以转换请求数据和响应数据，并对响应回来的内容自动转换成
JSON类型的数据
四、安全性更高，客户端支持防御 XSRF
2. axios有哪些常用方法？
答：一、axios.get(url[, config]) //get请求用于列表和信息查询
 二、axios.delete(url[, config]) //删除
 三、axios.post(url[, data[, config]]) //post请求用于信息的添加
 四、axios.put(url[, data[, config]]) //更新操作
3、说下你了解的axios相关配置属性？
答：`url`是用于请求的服务器URL
 `method`是创建请求时使用的方法,默认是get
`baseURL`将自动加在`url`前面，除非`url`是一个绝对URL。它可以通过设
置一个`baseURL`便于为axios实例的方法传递相对URL
`transformRequest`允许在向服务器发送前，修改请求数据，只能用在
'PUT','POST'和'PATCH'这几个请求方法
 `headers`是即将被发送的自定义请求头
 headers:{'X-Requested-With':'XMLHttpRequest'},
`params`是即将与请求一起发送的URL参数，必须是一个无格式对象
(plainobject)或URLSearchParams对象
 params:{
 ID:12345
 },
 `auth`表示应该使用HTTP基础验证，并提供凭据
 这将设置一个`Authorization`头，覆写掉现有的任意使用`headers`设置的自
 定义`Authorization`头
 auth:{
 username:'janedoe',
 password:'s00pers3cret'
 },
 'proxy'定义代理服务器的主机名称和端口
`auth`表示HTTP基础验证应当用于连接代理，并提供凭据
这将会设置一个`Proxy-Authorization`头，覆写掉已有的通过使用`header`设
置的自定义`Proxy-Authorization`头。

proxy:{
host:'127.0.0.1',
port:9000,
auth::{
username:'mikeymike',
password:'rapunz3l'
}