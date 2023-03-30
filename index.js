var div = document.getElementsByTagName("div")[0];

let p = document.getElementsByTagName("p")[0];

function elemChildren(node) {
  var temp = {
      length: 0,
      push: Array.prototype.push,
      slice: Array.prototype.slice,
    },
    children = node.childNodes;

  for (let i = 0; i < children.length; i++) {
    var childItem = children[i];
    if (childItem.nodeType == 1) {
      temp.push(childItem);
    }
  }
  return temp;
}

Element.prototype.checkChildren = function (number) {
  var nodeLen = this.childNodes.length,
    nodeObj = {
      length: 0,
      splice: Array.prototype.slice,
      push: Array.prototype.push,
    };
  if (number !== undefined && typeof number !== "number") {
    return undefined;
  }

  return number === undefined
    ? filterChildrenNode(this)
    : filterChildrenNode(this)[number];

  //过滤子节点元素
  function filterChildrenNode(node) {
    for (var i = 0; i < nodeLen; i++) {
      var nodeItem = node.childNodes[i];
      if (nodeItem.nodeType === 1) {
        nodeObj[nodeObj["length"]] = nodeItem;
        nodeObj["length"]++;
      }
    }
    return nodeObj;
  }
};

Element.prototype.checkParent = function (num) {
  var elem = this;
  if (typeof num !== "number" || num <= 0 || num === undefined) {
    return "参数非数字或小于0";
  }

  while (num) {
    if (elem.nodeName === "HTML") {
      elem = null;
      return elem;
    }
    elem = elem.parentNode;
    num--;
  }
  return elem;
};

Date.prototype.getFormatNow = function () {
  var year = this.getFullYear(),
    month = this.getMonth() + 1,
    day = this.getDate(),
    hours = this.getHours(),
    minutes = this.getMinutes(),
    seconds = this.getSeconds();

  function prefixZero(num) {
    if (num < 10) {
      num = "0" + num;
      return num;
    }
    return num;
  }

  var FormatNow =
    year +
    "-" +
    prefixZero(month) +
    "-" +
    prefixZero(day) +
    " " +
    prefixZero(hours) +
    ":" +
    prefixZero(minutes) +
    ":" +
    prefixZero(seconds);
  return FormatNow;
};

function initial() {
  //   console.log(window.timer);
  if (pause) {
    btn.innerHTML = "开始";
    clearInterval(window.timer);
    pause = !pause;
  } else {
    pause = !pause;
    window.timer = setInterval(
      () => (p.innerHTML = new Date().getFormatNow()),
      1000
    );
    btn.innerHTML = "暂停";
  }
}

Element.prototype.elemSibling = function (n) {
  var elem = this;

  while (n) {
    if (n > 0) {
      for (
        elem = elem.previousSibling;
        elem && elem.nodeType !== 1;
        elem = elem.previousSibling
      );
      n--;
    } else if (n < 0) {
      for (
        elem = elem.nextSibling;
        elem && elem.nodeType !== 1;
        elem = elem.nextSibling
      );
      n++;
    }
  }

  return elem;
};

Date.prototype.countDown = function (endTime, timer) {
  var now = this.getTime(),
    leftTime = (endTime - now) / 1000,
    d,
    h,
    m,
    s;

  //   console.log(now);

  if (leftTime > 0) {
    d = Math.floor(leftTime / 60 / 60 / 24);
    h = Math.floor((leftTime / 60 / 60) % 24);
    m = Math.floor((leftTime / 60) % 60);
    s = Math.floor(leftTime % 60);
    // console.log(d);
  } else {
    clearInterval(timer);
  }

  function prefixZero(num) {
    if (num < 10) {
      num = "0" + num;
      return num;
    }
    return num;
  }

  return (
    d +
    "天" +
    prefixZero(h) +
    "小时" +
    prefixZero(m) +
    "分钟" +
    prefixZero(s) +
    "秒"
  );
};

// let section = document.getElementsByClassName("section-wrapper");

var list = [];

// for (let i = 0; i < section.length; i++) {
//   console.log(section[i].getElementsByTagName("p")[0]);
//   var index = section[i].getElementsByClassName("section-index")[0].innerText;
//   var classTitle = section[i].getElementsByTagName("p")[0].innerText;

//   var child = [];
//   for (let j = 0; j < section[i].children.length - 1; j++) {
//     let name = section[i].getElementsByClassName("task-name")[j].innerText;
//     let href = section[i].getElementsByTagName("a")[j].href;
//     let info = section[i].getElementsByClassName("task-info")[j].innerText;

//     child.push({ name: name, href: href, info: info });
//   }

//   JSPlusClass.push({
//     index: index,
//     title: classTitle,
//     child: child,
//   });
// }

list = [
  {
    index: "02.",
    title: "走进前端之『HTML』篇（6节）",
    child: [
      {
        name: "1.前端认知、编辑器、HTML基础",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968490150#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457859459979578&term_id=100396581&type=3072&vid=5285890817160119922",
        info: "157分钟",
      },
      {
        name: "2.编码、基础标签",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968490151#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457863754946874&term_id=100396581&type=3072&vid=5285890788284875426",
        info: "77分钟",
      },
      {
        name: "3.基础标签补充、有无序列表",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968490151#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457868049914170&term_id=100396581&type=3072&vid=5285890788002263045",
        info: "67分钟",
      },
      {
        name: "4.定义列表、表格、框架",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968490152#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457872344881466&term_id=100396581&type=3072&vid=5285890788136750798",
        info: "64分钟",
      },
      {
        name: "5.数据提交、表单",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968490152#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457876639848762&term_id=100396581&type=3072&vid=5285890788040568597",
        info: "59分钟",
      },
      {
        name: "6.表单标签属性、标签总结",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968490152#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457880934816058&term_id=100396581&type=3072&vid=5285890788270857371",
        info: "63分钟",
      },
    ],
  },
  {
    index: "03.",
    title: "你不知道的之『CSS』篇（10节）",
    child: [
      {
        name: "1.浏览器、CSS基础",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968700090#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457885229783354&term_id=100396581&type=3072&vid=5285890788290468689",
        info: "65分钟",
      },
      {
        name: "2.选择器、权重、匹配规则",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968700090#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457889524750650&term_id=100396581&type=3072&vid=5285890788130063356",
        info: "70分钟",
      },
      {
        name: "3.宽高、字体、颜色、边框",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968700090#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457893819717946&term_id=100396581&type=3072&vid=5285890788122330527",
        info: "94分钟",
      },
      {
        name: "4.文本、光标、伪类",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968700090#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457898114685242&term_id=100396581&type=3072&vid=5285890788299082682",
        info: "104分钟",
      },
      {
        name: "5.清除浮动、边框、背景",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968700091#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457902409652538&term_id=100396581&type=3072&vid=5285890788007236527",
        info: "63分钟",
      },
      {
        name: "6.表格、BFC、书写、命名",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968700091#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457906704619834&term_id=100396581&type=3072&vid=5285890788294431060",
        info: "66分钟",
      },
      {
        name: "7.盒子模型、定位",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968700091#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457910999587130&term_id=100396581&type=3072&vid=5285890787900369083",
        info: "61分钟",
      },
      {
        name: "8.浮动、伪元素选择器",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968700091#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457915294554426&term_id=100396581&type=3072&vid=5285890788303141771",
        info: "67分钟",
      },
      {
        name: "9.文字图标、矢量图标",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968700091#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457919589521722&term_id=100396581&type=3072&vid=5285890787929464003",
        info: "46分钟",
      },
      {
        name: "10.雪碧图、腾讯课堂案例",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968700091#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457923884489018&term_id=100396581&type=3072&vid=5285890787813311481",
        info: "51分钟",
      },
    ],
  },
  {
    index: "04.",
    title: "颠覆认知的『JavaScript』篇（10节）",
    child: [
      {
        name: "1.发展史、ECMA、编程语言、变量、JS值",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968732307#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457928179456314&term_id=100396581&type=3072&vid=5285890788323595700",
        info: "166分钟",
      },
      {
        name: "2.语法、规范、错误、运算符、判断分支、注释",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968732308#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457932474423610&term_id=100396581&type=3072&vid=5285890788152183426",
        info: "99分钟",
      },
      {
        name: "3.循环、引用值初识、显示及隐式类型转换",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968732308#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457936769390906&term_id=100396581&type=3072&vid=5285890787930809978",
        info: "142分钟",
      },
      {
        name: "4.函数基础与种类、形实参及映射、变量类型",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968732308#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457941064358202&term_id=100396581&type=3072&vid=5285890788032633123",
        info: "136分钟",
      },
      {
        name: "5.参数默认值、递归、预编译、暗示全局变量",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968732308#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457945359325498&term_id=100396581&type=3072&vid=5285890815411707136",
        info: "113分钟",
      },
      {
        name: "6.作用域、作用域链、预编译、闭包基础",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968732308#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457949654292794&term_id=100396581&type=3072&vid=5285890788180167255",
        info: "150分钟",
      },
      {
        name: "7.立即执行函数、闭包深入、逗号运算符",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968732308#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457953949260090&term_id=100396581&type=3072&vid=387702301290641464",
        info: "93分钟",
      },
      {
        name: "8.闭包高级、对象、构造函数、实例化",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968732309#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457958244227386&term_id=100396581&type=3072&vid=5285890787927478374",
        info: "98分钟",
      },
      {
        name: "9.构造函数及实例化原理、包装类",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968732309#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457962539194682&term_id=100396581&type=3072&vid=5285890788116182386",
        info: "122分钟",
      },
      {
        name: "10.原型、原型链、闭包立即执行函数、插件开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968732309#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457966834161978&term_id=100396581&type=3072&vid=5285890788276745605",
        info: "114分钟",
      },
    ],
  },
  {
    index: "05.",
    title: "颠覆认知的『JavaScript』篇（10节）",
    child: [
      {
        name: "1.【总结课】闭包与回调",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968734324#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12920803519961402&term_id=100396581&type=3072&vid=387702298265594980",
        info: "125分钟",
      },
      {
        name: "2.原型与原型链深入、对象继承",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968734324#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457971129129274&term_id=100396581&type=3072&vid=5285890788254453974",
        info: "126分钟",
      },
      {
        name: "3.继承深入、call_apply、圣杯模式、模块化",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968734324#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457975424096570&term_id=100396581&type=3072&vid=5285890788166326680",
        info: "117分钟",
      },
      {
        name: "4.原型相关内容的总结",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968734325#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12939130145413434&term_id=100396581&type=3072&vid=387702298315274962",
        info: "59分钟",
      },
      {
        name: "5.对象属性遍历、this、caller_callee",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968734325#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457979719063866&term_id=100396581&type=3072&vid=5285890788263408493",
        info: "120分钟",
      },
      {
        name: "6.关于this指向的总结",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968734325#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12939362073647418&term_id=100396581&type=3072&vid=387702298326497297",
        info: "110分钟",
      },
      {
        name: "7.三目运算、对象克隆、浅拷贝、深拷贝",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968734325#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457984014031162&term_id=100396581&type=3072&vid=5285890788260415403",
        info: "106分钟",
      },
      {
        name: "8.深拷贝实例、数组基础、数组方法、数组排序",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968734325#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457988308998458&term_id=100396581&type=3072&vid=5285890787837438603",
        info: "118分钟",
      },
      {
        name: "9.数组方法、类数组",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968734326#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457992603965754&term_id=100396581&type=3072&vid=5285890788115264366",
        info: "91分钟",
      },
      {
        name: "10.自定义原型方法、去重、封装typeof",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968734326#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2457996898933050&term_id=100396581&type=3072&vid=5285890788129026737",
        info: "100分钟",
      },
    ],
  },
  {
    index: "06.",
    title: "颠覆认知的『JavaScript』篇（2节）",
    child: [
      {
        name: "1.错误信息、try_catch、严格模式",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968737508#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458001193900346&term_id=100396581&type=3072&vid=5285890787927249170",
        info: "126分钟",
      },
      {
        name: "2.变量生命周期、垃圾回放原理",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968737509#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458005488867642&term_id=100396581&type=3072&vid=5285890788003305983",
        info: "27分钟",
      },
    ],
  },
  {
    index: "07.",
    title: "『ECMAScript』专题课 -『var/let/const』（4节）",
    child: [
      {
        name: "1.概念与背后的设计逻辑（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968738575#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14072352971495738&term_id=100396581&type=3072&vid=243791578589345248",
        info: "32分钟",
      },
      {
        name: "2.概念与背后的设计逻辑（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968738576#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14072357266463034&term_id=100396581&type=3072&vid=243791578594410738",
        info: "28分钟",
      },
      {
        name: "3.let与块级作用域的设计逻辑",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968738576#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14072361561430330&term_id=100396581&type=3072&vid=243791577901903278",
        info: "37分钟",
      },
      {
        name: "4.for使用let解决问题的原理",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968738576#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14072365856397626&term_id=100396581&type=3072&vid=243791578589343636",
        info: "41分钟",
      },
    ],
  },
  {
    index: "08.",
    title: "『ECMAScript』专题课 -『闭包与设计』（5节）",
    child: [
      {
        name: "1.闭包与设计（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968740666#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13904557189175610&term_id=100396581&type=3072&vid=387702307059237771",
        info: "30分钟",
      },
      {
        name: "2.闭包与设计（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968740667#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13904561484142906&term_id=100396581&type=3072&vid=387702307059257267",
        info: "32分钟",
      },
      {
        name: "3.闭包与设计（3）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968740667#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13904565779110202&term_id=100396581&type=3072&vid=387702307059202669",
        info: "37分钟",
      },
      {
        name: "4.闭包与设计（4）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968740667#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13904570074077498&term_id=100396581&type=3072&vid=387702307059210657",
        info: "41分钟",
      },
      {
        name: "5.闭包与设计（5）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968740667#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13904574369044794&term_id=100396581&type=3072&vid=387702307059996452",
        info: "33分钟",
      },
    ],
  },
  {
    index: "09.",
    title: "『ECMAScript』专题课 -『面向对象与设计』（5节）",
    child: [
      {
        name: "1.面向对象与设计（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968742189#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13918919559813434&term_id=100396581&type=3072&vid=387702307329352549",
        info: "40分钟",
      },
      {
        name: "2.面向对象与设计（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968742190#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13918923854780730&term_id=100396581&type=3072&vid=387702307329290076",
        info: "39分钟",
      },
      {
        name: "3.面向对象与设计（3）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968742190#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13918928149748026&term_id=100396581&type=3072&vid=387702307329242979",
        info: "35分钟",
      },
      {
        name: "4.面向对象与设计（4）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968742190#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13918932444715322&term_id=100396581&type=3072&vid=387702307330066947",
        info: "39分钟",
      },
      {
        name: "5.面向对象与设计（5）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968742190#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13918936739682618&term_id=100396581&type=3072&vid=387702307337778429",
        info: "47分钟",
      },
    ],
  },
  {
    index: "10.",
    title: "『ECMAScript』专题课 -『回调与设计模式』（7节）",
    child: [
      {
        name: "1.回调函数的深度认识",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968744314#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13959459756120378&term_id=100396581&type=3072&vid=387702308102815458",
        info: "25分钟",
      },
      {
        name: "2.回调和异步的应用问题",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968744314#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13959464051087674&term_id=100396581&type=3072&vid=387702308102208348",
        info: "47分钟",
      },
      {
        name: "3.原生JS策略及代理模式封装表单验证（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968744315#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13959468346054970&term_id=100396581&type=3072&vid=387702308103385570",
        info: "32分钟",
      },
      {
        name: "4.原生JS策略及代理模式封装表单验证（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968744315#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13959472641022266&term_id=100396581&type=3072&vid=387702308101871746",
        info: "30分钟",
      },
      {
        name: "5.Vue策略及代理模式封装表单验证",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968744315#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13959476935989562&term_id=100396581&type=3072&vid=387702308102089437",
        info: "39分钟",
      },
      {
        name: "6.ReactHooks策略模式封装表单验证",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968744315#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13962225715059002&term_id=100396581&type=3072&vid=243791575407263421",
        info: "64分钟",
      },
      {
        name: "7.回调实现watcher功能",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968744315#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13959481230956858&term_id=100396581&type=3072&vid=387702308102816234",
        info: "16分钟",
      },
    ],
  },
  {
    index: "11.",
    title: "『ECMAScript』专题课 -『循环、迭代、遍历、枚举』（5节）",
    child: [
      {
        name: "1.相关英文单词的学习",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968746067#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13974333227866426&term_id=100396581&type=3072&vid=243791575957092037",
        info: "35分钟",
      },
      {
        name: "2.数据的有序性与无序性",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968746068#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13974337522833722&term_id=100396581&type=3072&vid=243791575948895071",
        info: "40分钟",
      },
      {
        name: "3.循环、循环枚举与封装实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968746068#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13974341817801018&term_id=100396581&type=3072&vid=243791575957051779",
        info: "26分钟",
      },
      {
        name: "4.循环迭代、生成器：迭代器、迭代接口实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968746068#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13974346112768314&term_id=100396581&type=3072&vid=243791575948899128",
        info: "37分钟",
      },
      {
        name: "5.遍历与数组扩展方法的应用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968746068#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13974350407735610&term_id=100396581&type=3072&vid=243791575957079470",
        info: "32分钟",
      },
    ],
  },
  {
    index: "12.",
    title: "『ECMAScript』专题课 -『Map 与 Set』（4节）",
    child: [
      {
        name: "1.引用类型、存储、强弱引用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968747631#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14015281446066490&term_id=100396581&type=3072&vid=243791575994091549",
        info: "38分钟",
      },
      {
        name: "2.强弱引用、Map相关知识",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968747632#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14015285741033786&term_id=100396581&type=3072&vid=243791575994643417",
        info: "35分钟",
      },
      {
        name: "3.Map相关APIs",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968747632#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14015290036001082&term_id=100396581&type=3072&vid=243791575994643854",
        info: "42分钟",
      },
      {
        name: "4.WeakMap、Set与WeakSet",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968747632#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14015294330968378&term_id=100396581&type=3072&vid=243791577090380013",
        info: "42分钟",
      },
    ],
  },
  {
    index: "13.",
    title: "『ECMAScript』专题课（8节）",
    child: [
      {
        name: "1.arguments",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968749036#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563907387038010&term_id=100396581&type=3072&vid=5285890818408072810",
        info: "43分钟",
      },
      {
        name: "2.parseInt",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968749036#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563911682005306&term_id=100396581&type=3072&vid=3701925920638759711",
        info: "34分钟",
      },
      {
        name: "3.副作用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968749037#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732209975499066&term_id=100396581&type=3072&vid=3701925922004533567",
        info: "23分钟",
      },
      {
        name: "4.ES Module",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968749037#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12211854743247162&term_id=100396581&type=3072&vid=387702292268313637",
        info: "31分钟",
      },
      {
        name: "5.if(a===1 __ a === 2 __ a === 3)",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968749037#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12211859038214458&term_id=100396581&type=3072&vid=387702292268793328",
        info: "14分钟",
      },
      {
        name: "6.观察者和发布订阅",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968749037#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12211863333181754&term_id=100396581&type=3072&vid=387702292269769208",
        info: "42分钟",
      },
      {
        name: "7.if中的函数声明",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968749037#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12211867628149050&term_id=100396581&type=3072&vid=387702292269618761",
        info: "11分钟",
      },
      {
        name: "8.this随心讲",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968749038#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12227634453092666&term_id=100396581&type=3072&vid=387702292980257631",
        info: "30分钟",
      },
    ],
  },
  {
    index: "14.",
    title: "『ECMAScript』内置对象之『Array』（10节）",
    child: [
      {
        name: "1.Array.prototype.copyWithin",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968750556#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732214270466362&term_id=100396581&type=3072&vid=5285890817339301744",
        info: "47分钟",
      },
      {
        name: "2.generator与iterator",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968750556#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732218565433658&term_id=100396581&type=3072&vid=5285890817340127883",
        info: "23分钟",
      },
      {
        name: "3.Array.prototype.entries",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968750556#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732222860400954&term_id=100396581&type=3072&vid=5285890817339301782",
        info: "23分钟",
      },
      {
        name: "4.Array.prototype.fill",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968750557#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732227155368250&term_id=100396581&type=3072&vid=5285890817339301804",
        info: "32分钟",
      },
      {
        name: "5.Array.prototype.find",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968750557#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732231450335546&term_id=100396581&type=3072&vid=5285890817340127940",
        info: "30分钟",
      },
      {
        name: "6.Array.prototype.findIndex",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968750557#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732235745302842&term_id=100396581&type=3072&vid=5285890817339301845",
        info: "29分钟",
      },
      {
        name: "7.Array.prototype.flat",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968750557#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732240040270138&term_id=100396581&type=3072&vid=5285890817339301863",
        info: "39分钟",
      },
      {
        name: "8.Array.prototype.flatMap",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968750557#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732244335237434&term_id=100396581&type=3072&vid=5285890817340127990",
        info: "22分钟",
      },
      {
        name: "9.Array.from",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968750557#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732248630204730&term_id=100396581&type=3072&vid=5285890817340128009",
        info: "63分钟",
      },
      {
        name: "10.相等性判断与Object.is方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968750558#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732252925172026&term_id=100396581&type=3072&vid=5285890817339301914",
        info: "49分钟",
      },
    ],
  },
  {
    index: "15.",
    title: "『ECMAScript』内置对象之『Array』（2节）",
    child: [
      {
        name: "1.Array.prototype.includes",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968752581#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732257220139322&term_id=100396581&type=3072&vid=5285890817340130674",
        info: "27分钟",
      },
      {
        name: "2.Array.prototype.sort",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968752581#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732261515106618&term_id=100396581&type=3072&vid=5285890817340131256",
        info: "43分钟",
      },
    ],
  },
  {
    index: "16.",
    title: "『ECMAScript』内置对象之『Object』（6节）",
    child: [
      {
        name: "1.Object基础、包装类、constructor",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968753964#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14170806506821946&term_id=100396581&type=3072&vid=243791580236141531",
        info: "32分钟",
      },
      {
        name: "2.constructor、继承关系",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968753965#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14170810801789242&term_id=100396581&type=3072&vid=243791580236201455",
        info: "31分钟",
      },
      {
        name: "3.原型链、[[Prototype]]、proto",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968753965#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14170815096756538&term_id=100396581&type=3072&vid=243791580227473946",
        info: "35分钟",
      },
      {
        name: "4.类数组、属性及描述的定义",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968753965#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14170819391723834&term_id=100396581&type=3072&vid=243791580302453176",
        info: "31分钟",
      },
      {
        name: "5.getter、setter、方法集合、案例",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968753965#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14170823686691130&term_id=100396581&type=3072&vid=243791580303716011",
        info: "38分钟",
      },
      {
        name: "6.对象状态设置与合并对象",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968753965#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14170827981658426&term_id=100396581&type=3072&vid=243791580245241664",
        info: "41分钟",
      },
    ],
  },
  {
    index: "17.",
    title: "实战课源码资料汇总（直接从第八小节开始看）（10节）",
    child: [
      {
        name: "1.Carousel_OOP（面向对象轮播图）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968756394#ac_type=3&cid=334138&cw_id=265437&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458009783834938&term_id=100396581&type=3072",
        info: "26.7MB  |  zip文件",
      },
      {
        name: "2.comments（腾讯课堂评论模块组件）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968756394#ac_type=3&cid=334138&cw_id=265436&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458014078802234&term_id=100396581&type=3072",
        info: "0.2MB  |  zip文件",
      },
      {
        name: "3.date-picker（date-picker插件）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968756394#ac_type=3&cid=334138&cw_id=265438&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458018373769530&term_id=100396581&type=3072",
        info: "0.6MB  |  zip文件",
      },
      {
        name: "4.express项目源码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968756395#ac_type=3&cid=334138&cw_id=265439&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458022668736826&term_id=100396581&type=3072",
        info: "0.2MB  |  zip文件",
      },
      {
        name: "5.img_lazyload（图片懒加载）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968756395#ac_type=3&cid=334138&cw_id=265440&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458026963704122&term_id=100396581&type=3072",
        info: "9.7MB  |  zip文件",
      },
      {
        name: "6.仿美团项目",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968756395#ac_type=3&cid=334138&cw_id=265441&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458031258671418&term_id=100396581&type=3072",
        info: "43.7MB  |  zip文件",
      },
      {
        name: "7.koa2爬虫系统源码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968756395#ac_type=3&cid=334138&cw_id=265442&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458035553638714&term_id=100396581&type=3072",
        info: "0.2MB  |  zip文件",
      },
      {
        name: "8.JS加加主页源码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968756395#ac_type=3&cid=334138&cw_id=265443&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458039848606010&term_id=100396581&type=3072",
        info: "0.5MB  |  zip文件",
      },
      {
        name: "9.JS加加后台管理系统源码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968756395#ac_type=3&cid=334138&cw_id=265444&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458044143573306&term_id=100396581&type=3072",
        info: "1.0MB  |  zip文件",
      },
      {
        name: "10.列表管理系统源码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968756396#ac_type=3&cid=334138&cw_id=265445&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458048438540602&term_id=100396581&type=3072",
        info: "0.7MB  |  zip文件",
      },
    ],
  },
  {
    index: "18.",
    title: "占位资料--课程备用（直接从第八小节开始看）（10节）",
    child: [
      {
        name: "1.美团源码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968758611#ac_type=3&cid=334138&cw_id=265446&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458052733507898&term_id=100396581&type=3072",
        info: "0.4MB  |  zip文件",
      },
      {
        name: "2.仿今日头条源码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968758612#ac_type=3&cid=334138&cw_id=265447&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458057028475194&term_id=100396581&type=3072",
        info: "35.0MB  |  zip文件",
      },
      {
        name: "3.去哪网源码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968758613#ac_type=3&cid=334138&cw_id=265448&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458061323442490&term_id=100396581&type=3072",
        info: "1.5MB  |  zip文件",
      },
      {
        name: "4.登录系统源码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968758613#ac_type=3&cid=334138&cw_id=265449&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458065618409786&term_id=100396581&type=3072",
        info: "83.1KB  |  zip文件",
      },
      {
        name: "5.购物车模块源码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968758613#ac_type=3&cid=334138&cw_id=265450&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458069913377082&term_id=100396581&type=3072",
        info: "34.9MB  |  zip文件",
      },
      {
        name: "6.tab组件源码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968758613#ac_type=3&cid=334138&cw_id=265451&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458074208344378&term_id=100396581&type=3072",
        info: "2.9MB  |  zip文件",
      },
      {
        name: "7.typeScript项目源码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968758613#ac_type=3&cid=334138&cw_id=265452&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458078503311674&term_id=100396581&type=3072",
        info: "70.5KB  |  zip文件",
      },
      {
        name: "8.腾讯课堂源码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968758614#ac_type=3&cid=334138&cw_id=265453&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458082798278970&term_id=100396581&type=3072",
        info: "8.9MB  |  zip文件",
      },
      {
        name: "9.腾讯课堂移动端",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968758614#ac_type=3&cid=334138&cw_id=265454&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458087093246266&term_id=100396581&type=3072",
        info: "1.3MB  |  zip文件",
      },
      {
        name: "10.瀑布流源码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968758615#ac_type=3&cid=334138&cw_id=265455&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458091388213562&term_id=100396581&type=3072",
        info: "2.8MB  |  zip文件",
      },
    ],
  },
  {
    index: "19.",
    title: "颠覆认知的『JavaScript』篇（5节）",
    child: [
      {
        name: "1.数组去重若干方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968760816#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141319136287034&term_id=100396581&type=3072&vid=5285890797717900953",
        info: "52分钟",
      },
      {
        name: "2.数组扁平化、去重与排序",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968760816#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141323431254330&term_id=100396581&type=3072&vid=5285890797718042884",
        info: "51分钟",
      },
      {
        name: "3.小米官网项目源码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968760816#ac_type=3&cid=334138&cw_id=265456&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563915976972602&term_id=100396581&type=3072",
        info: "0.8MB  |  zip文件",
      },
      {
        name: "4.小米官网项目源码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968760817#ac_type=3&cid=334138&cw_id=265457&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563920271939898&term_id=100396581&type=3072",
        info: "0.5MB  |  zip文件",
      },
      {
        name: "5.小米官网项目源码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968760817#ac_type=3&cid=334138&cw_id=265458&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563924566907194&term_id=100396581&type=3072",
        info: "0.8MB  |  zip文件",
      },
    ],
  },
  {
    index: "20.",
    title: "京东素材合集（8节）",
    child: [
      {
        name: "1.一线通项目源码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968763675#ac_type=3&cid=334138&cw_id=265459&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458095683180858&term_id=100396581&type=3072",
        info: "5.3MB  |  zip文件",
      },
      {
        name: "2.小米动态渲染项目",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968763676#ac_type=3&cid=334138&cw_id=265458&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=2458099978148154&term_id=100396581&type=3072",
        info: "0.8MB  |  zip文件",
      },
      {
        name: "3.小米服务端渲染项目",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968763676#ac_type=3&cid=334138&cw_id=265457&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020740693924154&term_id=100396581&type=3072",
        info: "0.5MB  |  zip文件",
      },
      {
        name: "4.ASCII码表",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968763676#ac_type=3&cid=334138&cw_id=163208&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020744988891450&term_id=100396581&type=3072",
        info: "0.8MB  |  zip文件",
      },
      {
        name: "5.作用域图解",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968763676#ac_type=3&cid=334138&cw_id=163209&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020749283858746&term_id=100396581&type=3072",
        info: "75.0KB  |  pptx文件",
      },
      {
        name: "6.运算符优先级表格",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968763676#ac_type=3&cid=334138&cw_id=163210&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020753578826042&term_id=100396581&type=3072",
        info: "76.6KB  |  png文件",
      },
      {
        name: "7.京东商城",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968763677#ac_type=3&cid=334138&cw_id=163206&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020757873793338&term_id=100396581&type=3072",
        info: "0.7MB  |  zip文件",
      },
      {
        name: "8.京东商城素材",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968763677#ac_type=3&cid=334138&cw_id=163206&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020762168760634&term_id=100396581&type=3072",
        info: "0.7MB  |  zip文件",
      },
    ],
  },
  {
    index: "21.",
    title: "就业班-网页设计之『淘宝商城首屏』篇（10节）",
    child: [
      {
        name: "1.整体布局分析（上）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968766927#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3015926035585338&term_id=100396581&type=3072&vid=5285890787889833280",
        info: "61分钟",
      },
      {
        name: "2.整体布局分析（下）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968766927#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3015930330552634&term_id=100396581&type=3072&vid=5285890787904229454",
        info: "4分钟",
      },
      {
        name: "3.顶部导航栏部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968766927#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3015934625519930&term_id=100396581&type=3072&vid=5285890787893094593",
        info: "29分钟",
      },
      {
        name: "4.顶部header部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968766927#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3015938920487226&term_id=100396581&type=3072&vid=5285890787974552241",
        info: "61分钟",
      },
      {
        name: "5.主导航部分（上）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968766928#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3015943215454522&term_id=100396581&type=3072&vid=5285890788249583289",
        info: "17分钟",
      },
      {
        name: "6.主导航部分（下）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968766928#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3015947510421818&term_id=100396581&type=3072&vid=5285890788003552519",
        info: "4分钟",
      },
      {
        name: "7.二级导航主菜单部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968766928#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3015951805389114&term_id=100396581&type=3072&vid=5285890788266750028",
        info: "33分钟",
      },
      {
        name: "8.主展示区部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968766928#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3015956100356410&term_id=100396581&type=3072&vid=5285890787895340292",
        info: "70分钟",
      },
      {
        name: "9.热卖图片展示区域",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968766928#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3015960395323706&term_id=100396581&type=3072&vid=5285890788275697938",
        info: "9分钟",
      },
      {
        name: "10.淘宝头条",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968766928#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3015964690291002&term_id=100396581&type=3072&vid=5285890788012944755",
        info: "34分钟",
      },
    ],
  },
  {
    index: "22.",
    title: "就业班-网页设计之『淘宝商城首屏』篇（7节）",
    child: [
      {
        name: "1.用户登录注册部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968768544#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3015968985258298&term_id=100396581&type=3072&vid=5285890788013475147",
        info: "28分钟",
      },
      {
        name: "2.公告新闻展示区",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968768544#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3015973280225594&term_id=100396581&type=3072&vid=5285890788132631313",
        info: "30分钟",
      },
      {
        name: "3.功能12宫格部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968768545#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3015977575192890&term_id=100396581&type=3072&vid=5285890788292510360",
        info: "23分钟",
      },
      {
        name: "4.APP集合展示区",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968768545#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3015981870160186&term_id=100396581&type=3072&vid=5285890788010413388",
        info: "32分钟",
      },
      {
        name: "5.生活研究所部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968768545#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3015986165127482&term_id=100396581&type=3072&vid=5285890788312385772",
        info: "28分钟",
      },
      {
        name: "6.侧边网页定位栏部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968768545#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3015990460094778&term_id=100396581&type=3072&vid=5285890788324141219",
        info: "29分钟",
      },
      {
        name: "7.淘宝商城素材",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968768545#ac_type=3&cid=334138&cw_id=163207&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3015994755062074&term_id=100396581&type=3072",
        info: "0.3MB  |  zip文件",
      },
    ],
  },
  {
    index: "23.",
    title: "JS基础续言-大学问『DOM』篇（10节）",
    child: [
      {
        name: "1.DOM初探、JS对象、XML、幻灯片案例展示",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968770862#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3015999050029370&term_id=100396581&type=3072&vid=5285890787861635298",
        info: "106分钟",
      },
      {
        name: "2.第1课素材",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968770863#ac_type=3&cid=334138&cw_id=163211&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016003344996666&term_id=100396581&type=3072",
        info: "1.1MB  |  zip文件",
      },
      {
        name: "3.document对象、获取元素、节点、遍历树",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968770863#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016007639963962&term_id=100396581&type=3072&vid=5285890787853179199",
        info: "121分钟",
      },
      {
        name: "4.节点属性、方法、封装方法、DOM结构",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968770863#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016011934931258&term_id=100396581&type=3072&vid=5285890788017510063",
        info: "148分钟",
      },
      {
        name: "5.节点创建删除、元素属性设置获取、节点属性",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968770863#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016016229898554&term_id=100396581&type=3072&vid=5285890788272059381",
        info: "125分钟",
      },
      {
        name: "6.日期对象、计时器",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968770864#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13812954126686522&term_id=100396581&type=3072&vid=5285890788288299245",
        info: "90分钟",
      },
      {
        name: "7.日期对象与计时器练习、数学取整方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968770864#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13812958421653818&term_id=100396581&type=3072&vid=5285890788131613782",
        info: "92分钟",
      },
      {
        name: "8.滚动距离与高度、兼容模式、可视尺寸",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968770864#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016020524865850&term_id=100396581&type=3072&vid=5285890787852804618",
        info: "89分钟",
      },
      {
        name: "9.读写样式属性、操作伪元素、元素运动初探",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968770864#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016024819833146&term_id=100396581&type=3072&vid=5285890788267716353",
        info: "83分钟",
      },
      {
        name: "10.第6课素材",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968770864#ac_type=3&cid=334138&cw_id=163212&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016029114800442&term_id=100396581&type=3072",
        info: "2.2KB  |  zip文件",
      },
    ],
  },
  {
    index: "24.",
    title: "JS基础续言-大学问『DOM』篇（10节）",
    child: [
      {
        name: "1.事件处理函数、冒泡捕获、阻止冒泡默认事件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968773258#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016033409767738&term_id=100396581&type=3072&vid=5285890787933124305",
        info: "130分钟",
      },
      {
        name: "2.冒泡捕获流、事件与事件源对象、事件委托",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968773258#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016037704735034&term_id=100396581&type=3072&vid=5285890788164835845",
        info: "72分钟",
      },
      {
        name: "3.【实战】自动阅读插件开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968773259#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016041999702330&term_id=100396581&type=3072&vid=5285890788017747558",
        info: "127分钟",
      },
      {
        name: "4.第9课素材",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968773259#ac_type=3&cid=334138&cw_id=163213&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016046294669626&term_id=100396581&type=3072",
        info: "45.8KB  |  zip文件",
      },
      {
        name: "5.【实战】模块化开发Todolist",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968773259#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016050589636922&term_id=100396581&type=3072&vid=5285890787907119041",
        info: "198分钟",
      },
      {
        name: "6.【实战】面向对象开发Todolist",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968773259#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016054884604218&term_id=100396581&type=3072&vid=5285890788001484062",
        info: "92分钟",
      },
      {
        name: "7.鼠标行为坐标系、pageXY封装、拖拽函数封装",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968773259#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016059179571514&term_id=100396581&type=3072&vid=5285890788037609402",
        info: "73分钟",
      },
      {
        name: "8.鼠标事件深入、点击与拖拽分离、双击事件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968773260#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016063474538810&term_id=100396581&type=3072&vid=5285890787799483220",
        info: "141分钟",
      },
      {
        name: "9.【实战】输入及状态改变事件、京东搜索框",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968773260#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016067769506106&term_id=100396581&type=3072&vid=5285890787982402940",
        info: "113分钟",
      },
      {
        name: "10.【实战】解决事件代理和鼠标移动事件的窘态",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968773260#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016072064473402&term_id=100396581&type=3072&vid=5285890797417524103",
        info: "75分钟",
      },
    ],
  },
  {
    index: "25.",
    title: "JS基础续言-大学问『DOM』篇（8节）",
    child: [
      {
        name: "1.第15课素材",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968775722#ac_type=3&cid=334138&cw_id=163215&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016076359440698&term_id=100396581&type=3072",
        info: "0.2MB  |  zip文件",
      },
      {
        name: "2.【实战】鼠标行为预测技术（上）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968775723#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016080654407994&term_id=100396581&type=3072&vid=5285890787994617221",
        info: "92分钟",
      },
      {
        name: "3.【实战】鼠标行为预测技术（下）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968775723#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016084949375290&term_id=100396581&type=3072&vid=5285890788002799976",
        info: "166分钟",
      },
      {
        name: "4.【实战】电商网站商品图片放大镜效果",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968775723#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016089244342586&term_id=100396581&type=3072&vid=5285890788028061824",
        info: "80分钟",
      },
      {
        name: "5.【实战】键盘事件、贪吃蛇运动原理",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968775723#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016093539309882&term_id=100396581&type=3072&vid=5285890788149219341",
        info: "104分钟",
      },
      {
        name: "6.keyCode表",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968775723#ac_type=3&cid=334138&cw_id=163214&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016097834277178&term_id=100396581&type=3072",
        info: "0.3MB  |  zip文件",
      },
      {
        name: "7.【实战】开发贪吃蛇游戏",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968775724#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016102129244474&term_id=100396581&type=3072&vid=5285890788000055776",
        info: "80分钟",
      },
      {
        name: "8.从事件冒泡到事件代理机制",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968775724#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141327726221626&term_id=100396581&type=3072&vid=5285890797717769038",
        info: "39分钟",
      },
    ],
  },
  {
    index: "26.",
    title: "『DOM』专题课（1节）",
    child: [
      {
        name: "1.innerHTML",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968777130#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563928861874490&term_id=100396581&type=3072&vid=5285890818416844711",
        info: "38分钟",
      },
    ],
  },
  {
    index: "27.",
    title: "JS基础续言-避不开的『正则表达式』篇（6节）",
    child: [
      {
        name: "1.转义符号与字符、正则基础、修饰/元字符",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968779099#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016106424211770&term_id=100396581&type=3072&vid=5285890787894960347",
        info: "135分钟",
      },
      {
        name: "2.正则量词、属性、方法、使用技巧",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968779099#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016110719179066&term_id=100396581&type=3072&vid=5285890787906343306",
        info: "101分钟",
      },
      {
        name: "3.match/exec、toString/valueOf、封装typeof",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968779100#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016115014146362&term_id=100396581&type=3072&vid=5285890817331312113",
        info: "98分钟",
      },
      {
        name: "4.正向预查、贪婪与非贪婪模式、replace方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968779100#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016119309113658&term_id=100396581&type=3072&vid=5285890788498055028",
        info: "86分钟",
      },
      {
        name: "5.【实战】正则实例集合、不捕获分组",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968779100#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016123604080954&term_id=100396581&type=3072&vid=5285890787796562123",
        info: "127分钟",
      },
      {
        name: "6.用正则进行模板替换的方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968779100#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141332021188922&term_id=100396581&type=3072&vid=5285890797716985873",
        info: "13分钟",
      },
    ],
  },
  {
    index: "28.",
    title: "JS基础续言-数据法宝『JSON』篇（9节）",
    child: [
      {
        name: "1.JSON基础与数据解析、JSON方法、AJAX初识",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968780569#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016127899048250&term_id=100396581&type=3072&vid=5285890788262941299",
        info: "58分钟",
      },
      {
        name: "2.第1课素材",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968780570#ac_type=3&cid=334138&cw_id=163228&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016132194015546&term_id=100396581&type=3072",
        info: "3.0MB  |  zip文件",
      },
      {
        name: "3.第1课所需数据",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968780570#ac_type=3&cid=334138&cw_id=163229&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016136488982842&term_id=100396581&type=3072",
        info: "1.0KB  |  txt文件",
      },
      {
        name: "4.【实战】模板渲染、缓存数据、案例实战",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968780570#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016140783950138&term_id=100396581&type=3072&vid=5285890788096465161",
        info: "107分钟",
      },
      {
        name: "5.第2课素材",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968780570#ac_type=3&cid=334138&cw_id=163232&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016145078917434&term_id=100396581&type=3072",
        info: "3.0MB  |  zip文件",
      },
      {
        name: "6.第2课设计图",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968780570#ac_type=3&cid=334138&cw_id=163231&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016149373884730&term_id=100396581&type=3072",
        info: "7.4MB  |  zip文件",
      },
      {
        name: "7.第2课所需数据",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968780570#ac_type=3&cid=334138&cw_id=163230&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016153668852026&term_id=100396581&type=3072",
        info: "1.0KB  |  txt文件",
      },
      {
        name: "8.【实战】前端缓存数据设计、前端缓存池",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968780571#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016157963819322&term_id=100396581&type=3072&vid=5285890787889974597",
        info: "99分钟",
      },
      {
        name: "9.课程分页列表源码(API更新)",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968780571#ac_type=3&cid=334138&cw_id=188222&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563933156841786&term_id=100396581&type=3072",
        info: "80.2KB  |  zip文件",
      },
    ],
  },
  {
    index: "29.",
    title: "JS基础续言-前端宿主『浏览器』篇（4节）",
    child: [
      {
        name: "1.DOM/CSS/渲染树、解析与加载、回流与重绘",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968782124#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016162258786618&term_id=100396581&type=3072&vid=5285890787999645224",
        info: "90分钟",
      },
      {
        name: "2.时间线、解析与渲染、封装文档解析完毕函数",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968782124#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016166553753914&term_id=100396581&type=3072&vid=5285890787823811182",
        info: "150分钟",
      },
      {
        name: "3.渲染引擎、声明HTML、渲染模式",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968782124#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016170848721210&term_id=100396581&type=3072&vid=5285890787832983603",
        info: "39分钟",
      },
      {
        name: "4.剖析JavaScript的执行机制",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968782124#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016175143688506&term_id=100396581&type=3072&vid=5285890788034788363",
        info: "109分钟",
      },
    ],
  },
  {
    index: "30.",
    title: "CSS/JS基础续言-查漏补缺『碎片知识』篇（10节）",
    child: [
      {
        name: "1.同步与异步加载的三种方法、企业级异步加载",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968784386#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016179438655802&term_id=100396581&type=3072&vid=5285890788299177259",
        info: "132分钟",
      },
      {
        name: "2.异步加载案例、放大模式、宽放大模式",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968784386#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016183733623098&term_id=100396581&type=3072&vid=5285890788293854870",
        info: "65分钟",
      },
      {
        name: "3.探究bind与call/apply的区别、重写bind方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968784386#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016188028590394&term_id=100396581&type=3072&vid=5285890787831134804",
        info: "117分钟",
      },
      {
        name: "4.标签的属性与特性、Math方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968784387#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016192323557690&term_id=100396581&type=3072&vid=5285890788017446425",
        info: "25分钟",
      },
      {
        name: "5.封装byClassName、断点测试、bug调试",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968784387#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016196618524986&term_id=100396581&type=3072&vid=5285890788002955936",
        info: "49分钟",
      },
      {
        name: "6.图片的预加载与懒加载",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968784387#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016200913492282&term_id=100396581&type=3072&vid=5285890788129031094",
        info: "30分钟",
      },
      {
        name: "7.日期对象、计时器",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968784387#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016205208459578&term_id=100396581&type=3072&vid=5285890788288299245",
        info: "90分钟",
      },
      {
        name: "8.日期对象与计时器练习、数学取整方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968784387#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016209503426874&term_id=100396581&type=3072&vid=5285890788131613782",
        info: "92分钟",
      },
      {
        name: "9.从头探究this关键字",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968784387#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016213798394170&term_id=100396581&type=3072&vid=5285890787801352550",
        info: "36分钟",
      },
      {
        name: "10.浅谈从DOM操作到虚拟DOM",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968784388#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016218093361466&term_id=100396581&type=3072&vid=5285890788164419960",
        info: "42分钟",
      },
    ],
  },
  {
    index: "31.",
    title: "CSS/JS基础续言-查漏补缺『碎片知识』篇（8节）",
    child: [
      {
        name: "1.实现两栏与三栏布局的方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968786274#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141336316156218&term_id=100396581&type=3072&vid=5285890797716985790",
        info: "37分钟",
      },
      {
        name: "2.选项卡的两种实现方式",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968786275#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141340611123514&term_id=100396581&type=3072&vid=5285890797716995914",
        info: "17分钟",
      },
      {
        name: "3.重新探究this指向问题",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968786275#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141344906090810&term_id=100396581&type=3072&vid=5285890797716996082",
        info: "30分钟",
      },
      {
        name: "4.IE常见的BUG解决方案",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968786275#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141349201058106&term_id=100396581&type=3072&vid=5285890797716996108",
        info: "14分钟",
      },
      {
        name: "5.移动端页面常用的meta标签",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968786275#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141353496025402&term_id=100396581&type=3072&vid=5285890797716996141",
        info: "43分钟",
      },
      {
        name: "6.link与@import引入CSS样式表的区别",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968786276#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141357790992698&term_id=100396581&type=3072&vid=5285890797716996196",
        info: "15分钟",
      },
      {
        name: "7.各种三角形的画法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968786276#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141362085959994&term_id=100396581&type=3072&vid=5285890797717006221",
        info: "27分钟",
      },
      {
        name: "8.六边形的两种画法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968786276#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141366380927290&term_id=100396581&type=3072&vid=5285890797717290786",
        info: "22分钟",
      },
    ],
  },
  {
    index: "32.",
    title: "CSS/JS基础续言-查漏补缺『碎片知识』篇（9节）",
    child: [
      {
        name: "1.ObjectDefineProperty",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968788842#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141370675894586&term_id=100396581&type=3072&vid=5285890797717453753",
        info: "105分钟",
      },
      {
        name: "2.Proxy与ES-14中对象操作方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968788843#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141374970861882&term_id=100396581&type=3072&vid=5285890797717504658",
        info: "117分钟",
      },
      {
        name: "3.观察模式-购物车案例",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968788843#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141379265829178&term_id=100396581&type=3072&vid=5285890797717605953",
        info: "98分钟",
      },
      {
        name: "4.认识JS精度、数字在JS中如何存储",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968788843#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11222504731646266&term_id=100396581&type=3072&vid=5285890818207054456",
        info: "21分钟",
      },
      {
        name: "5.进一步认识JS精度、解决精度问题的方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968788843#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11222509026613562&term_id=100396581&type=3072&vid=5285890818300671678",
        info: "22分钟",
      },
      {
        name: "6.初识词法环境",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968788843#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11222513321580858&term_id=100396581&type=3072&vid=5285890819013657606",
        info: "22分钟",
      },
      {
        name: "7.词法环境的组成和实际案例",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968788844#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11222517616548154&term_id=100396581&type=3072&vid=5285890819012110654",
        info: "21分钟",
      },
      {
        name: "8.执行上下文与词法环境",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968788844#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11222521911515450&term_id=100396581&type=3072&vid=5285890819012146648",
        info: "21分钟",
      },
      {
        name: "9.函数中的词法环境和闭包",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968788844#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11222526206482746&term_id=100396581&type=3072&vid=5285890819012146800",
        info: "26分钟",
      },
    ],
  },
  {
    index: "33.",
    title: "JS提升-不友好却很重要的『深度BOM』篇（6节）",
    child: [
      {
        name: "1.深入理解BOM是何种存在",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968790850#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016222388328762&term_id=100396581&type=3072&vid=5285890788007455330",
        info: "32分钟",
      },
      {
        name: "2.window对象的属性与方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968790850#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016226683296058&term_id=100396581&type=3072&vid=5285890788264604395",
        info: "30分钟",
      },
      {
        name: "3.Navigator与history对象的属性与方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968790850#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016230978263354&term_id=100396581&type=3072&vid=5285890787843984047",
        info: "34分钟",
      },
      {
        name: "4.sreen与location对象的属性与方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968790851#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016235273230650&term_id=100396581&type=3072&vid=5285890788325958120",
        info: "60分钟",
      },
      {
        name: "5.第4课资料",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968790851#ac_type=3&cid=334138&cw_id=163790&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020766463727930&term_id=100396581&type=3072",
        info: "2.6KB  |  zip文件",
      },
      {
        name: "6.检查浏览器脚本",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968790851#ac_type=3&cid=334138&cw_id=163789&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020770758695226&term_id=100396581&type=3072",
        info: "5.3KB  |  js文件",
      },
    ],
  },
  {
    index: "34.",
    title: "JS提升-JS技能升级必备的『JS运动』篇（5节）",
    child: [
      {
        name: "1.探究JS运动原理与机制",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968792641#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016239568197946&term_id=100396581&type=3072&vid=5285890793490967585",
        info: "111分钟",
      },
      {
        name: "2.加速度与弹性运动",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968792641#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016243863165242&term_id=100396581&type=3072&vid=5285890791027499705",
        info: "56分钟",
      },
      {
        name: "3.重力运动与拖拽效果",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968792641#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016248158132538&term_id=100396581&type=3072&vid=5285890791271069174",
        info: "41分钟",
      },
      {
        name: "4.【实战】原生JS实现『轮播图』",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968792641#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016252453099834&term_id=100396581&type=3072&vid=5285890791271079185",
        info: "43分钟",
      },
      {
        name: "5.第4课（补充）拖拽投掷和碰撞检测",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968792642#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563937451809082&term_id=100396581&type=3072&vid=5285890791271069179",
        info: "66分钟",
      },
    ],
  },
  {
    index: "35.",
    title: "JS提升-玩儿好数组『数组扩展方法』篇（5节）",
    child: [
      {
        name: "1.forEach/filter/map使用与重写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968795143#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016256748067130&term_id=100396581&type=3072&vid=5285890793379381335",
        info: "97分钟",
      },
      {
        name: "2.every/some/reduce/reduceRight使用与重写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968795143#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016261043034426&term_id=100396581&type=3072&vid=5285890793453461119",
        info: "115分钟",
      },
      {
        name: "3.【实战】带搜索功能的课程选项卡",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968795144#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016265338001722&term_id=100396581&type=3072&vid=5285890793621996890",
        info: "123分钟",
      },
      {
        name: "4.数组扩展方法素材",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968795144#ac_type=3&cid=334138&cw_id=165589&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016269632969018&term_id=100396581&type=3072",
        info: "3.9MB  |  zip文件",
      },
      {
        name: "5.数组扩展方法所需数据",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968795144#ac_type=3&cid=334138&cw_id=165590&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016273927936314&term_id=100396581&type=3072",
        info: "1.4KB  |  txt文件",
      },
    ],
  },
  {
    index: "36.",
    title: "JS提升-提升编程逼格的『函数式编程』篇（10节）",
    child: [
      {
        name: "1.JS函数、特点、函数式编程初识、纯函数",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968797481#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016278222903610&term_id=100396581&type=3072&vid=5285890801845166410",
        info: "101分钟",
      },
      {
        name: "2.【实战】课程搜索案例（函数提纯）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968797482#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016282517870906&term_id=100396581&type=3072&vid=5285890788019967932",
        info: "69分钟",
      },
      {
        name: "3.函数组合、结合律、pointfree、实用案例",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968797482#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016286812838202&term_id=100396581&type=3072&vid=5285890788268317134",
        info: "91分钟",
      },
      {
        name: "4.高阶函数、函数柯里化、封装柯里化函数",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968797482#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016291107805498&term_id=100396581&type=3072&vid=5285890788003348352",
        info: "121分钟",
      },
      {
        name: "5.偏函数、偏函数与柯里函数的区别、惰性函数",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968797483#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016295402772794&term_id=100396581&type=3072&vid=5285890788288247554",
        info: "86分钟",
      },
      {
        name: "6.函数性能优化、缓存函数、函数记忆应用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968797483#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016299697740090&term_id=100396581&type=3072&vid=5285890788307480345",
        info: "56分钟",
      },
      {
        name: "7.函数防抖、函数节流、防抖和节流的应用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968797483#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016303992707386&term_id=100396581&type=3072&vid=5285890788275248532",
        info: "61分钟",
      },
      {
        name: "8.【实战】归类函数封装、归类函数案例实战",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968797483#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016308287674682&term_id=100396581&type=3072&vid=5285890793621732067",
        info: "108分钟",
      },
      {
        name: "9.归类函数素材",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968797483#ac_type=3&cid=334138&cw_id=163239&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016312582641978&term_id=100396581&type=3072",
        info: "8.3MB  |  zip文件",
      },
      {
        name: "10.归类函数API地址替换说明",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968797484#ac_type=3&cid=334138&cw_id=165964&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016316877609274&term_id=100396581&type=3072",
        info: "1.4KB  |  zip文件",
      },
    ],
  },
  {
    index: "37.",
    title: "JS提升-提升编程逼格的『函数式编程』篇（1节）",
    child: [
      {
        name: "1.数组扁平化基础与原理、数组扁平化函数封装",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968799628#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016321172576570&term_id=100396581&type=3072&vid=5285890788135317154",
        info: "21分钟",
      },
    ],
  },
  {
    index: "38.",
    title: "JS提升-前端也要学习的『网络』理论篇（10节）",
    child: [
      {
        name: "1.服务器搭建与相关操作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968801159#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016325467543866&term_id=100396581&type=3072&vid=5285890790157301268",
        info: "21分钟",
      },
      {
        name: "2.apache服务器程序套装",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968801160#ac_type=3&cid=334138&cw_id=163241&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016329762511162&term_id=100396581&type=3072",
        info: "0.4GB  |  zip文件",
      },
      {
        name: "3.网络初探、URL、客户端与服务端、域名操作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968801160#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016334057478458&term_id=100396581&type=3072&vid=5285890787800102052",
        info: "139分钟",
      },
      {
        name: "4.DNS、IP、TCP/UDP、HTTP/HTTPS、三次握手",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968801160#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016338352445754&term_id=100396581&type=3072&vid=5285890788393511851",
        info: "109分钟",
      },
      {
        name: "5.www历史、HTTP报文、请求方式、GET与POST",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968801160#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016342647413050&term_id=100396581&type=3072&vid=5285890788031352464",
        info: "161分钟",
      },
      {
        name: "6.http状态码、accept、Content-Type",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968801161#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016346942380346&term_id=100396581&type=3072&vid=5285890787895797556",
        info: "54分钟",
      },
      {
        name: "7.HTTP状态码解析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968801161#ac_type=3&cid=334138&cw_id=163242&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016351237347642&term_id=100396581&type=3072",
        info: "17.6KB  |  docx文件",
      },
      {
        name: "8.缓存、长短连接、Content-Length、referrer",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968801161#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016355532314938&term_id=100396581&type=3072&vid=5285890788266905342",
        info: "91分钟",
      },
      {
        name: "9.http版本、关闭TCP、四次挥手、同源策略",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968801161#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016359827282234&term_id=100396581&type=3072&vid=5285890787804243247",
        info: "117分钟",
      },
      {
        name: "10.减少HTTP请求的方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968801162#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141383560796474&term_id=100396581&type=3072&vid=5285890797716985763",
        info: "32分钟",
      },
    ],
  },
  {
    index: "39.",
    title: "JS提升-前端也要学习的『网络』实战篇（10节）",
    child: [
      {
        name: "1.同步与异步请求、混编、AJAX、原生AJAX封装",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968803619#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016364122249530&term_id=100396581&type=3072&vid=5285890788291842805",
        info: "144分钟",
      },
      {
        name: "2.【实战】AJAX之『腾讯课堂评论模块』（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968803619#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016368417216826&term_id=100396581&type=3072&vid=5285890788257004515",
        info: "159分钟",
      },
      {
        name: "3.【实战】AJAX之『腾讯课堂评论模块』（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968803620#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016372712184122&term_id=100396581&type=3072&vid=5285890787819017155",
        info: "129分钟",
      },
      {
        name: "4.【实战】AJAX之『腾讯课堂评论模块』（3）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968803620#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016377007151418&term_id=100396581&type=3072&vid=5285890788264506940",
        info: "122分钟",
      },
      {
        name: "5.腾讯课堂评论模块资料",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968803620#ac_type=3&cid=334138&cw_id=193522&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016381302118714&term_id=100396581&type=3072",
        info: "0.2MB  |  zip文件",
      },
      {
        name: "6.AJAX版本、响应状态、超时设置、同步与异步",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968803620#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016385597086010&term_id=100396581&type=3072&vid=5285890788131646351",
        info: "106分钟",
      },
      {
        name: "7.AJAX问题修复",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968803620#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563941746776378&term_id=100396581&type=3072&vid=5285890793129771284",
        info: "2分钟",
      },
      {
        name: "8.6种跨域获取数据的方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968803621#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016389892053306&term_id=100396581&type=3072&vid=5285890788270022970",
        info: "160分钟",
      },
      {
        name: "9.【实战】JSONP跨域之『百度联想词搜索』",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968803621#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016394187020602&term_id=100396581&type=3072&vid=5285890788149759523",
        info: "152分钟",
      },
      {
        name: "10.【实战】JSONP跨域之『豆瓣网音乐搜索』",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968803621#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016398481987898&term_id=100396581&type=3072&vid=5285890788166537225",
        info: "31分钟",
      },
    ],
  },
  {
    index: "40.",
    title: "JS提升-前端也要学习的『网络』实战篇（10节）",
    child: [
      {
        name: "1.JSONP跨域实战资料",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968805499#ac_type=3&cid=334138&cw_id=193523&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016402776955194&term_id=100396581&type=3072",
        info: "8.3KB  |  zip文件",
      },
      {
        name: "2.【实战】iframe实用之网页导航、代码编辑器",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968805500#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016407071922490&term_id=100396581&type=3072&vid=5285890788012950067",
        info: "37分钟",
      },
      {
        name: "3.cookie增删改查、用户追踪",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968805500#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016411366889786&term_id=100396581&type=3072&vid=5285890788263130419",
        info: "87分钟",
      },
      {
        name: "4.【实战】cookie+token实现网站『持久登录』",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968805500#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016415661857082&term_id=100396581&type=3072&vid=5285890793395554728",
        info: "168分钟",
      },
      {
        name: "5.持久登录模块资料",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968805500#ac_type=3&cid=334138&cw_id=167684&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016419956824378&term_id=100396581&type=3072",
        info: "0.2MB  |  zip文件",
      },
      {
        name: "6.【实战】AJAX之『大附件文件上传功能』",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968805500#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016424251791674&term_id=100396581&type=3072&vid=5285890793496055049",
        info: "148分钟",
      },
      {
        name: "7.【实战】AJAX之『后台列表管理模块』（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968805501#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016428546758970&term_id=100396581&type=3072&vid=5285890793486757617",
        info: "142分钟",
      },
      {
        name: "8.【实战】AJAX之『后台列表管理模块』（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968805501#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016432841726266&term_id=100396581&type=3072&vid=5285890793470120106",
        info: "64分钟",
      },
      {
        name: "9.【实战】AJAX之『瀑布流』(1)",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968805501#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016437136693562&term_id=100396581&type=3072&vid=5285890794146661904",
        info: "30分钟",
      },
      {
        name: "10.【实战】AJAX之『瀑布流』(2)",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968805501#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665750292502842&term_id=100396581&type=3072&vid=5285890794146661925",
        info: "32分钟",
      },
    ],
  },
  {
    index: "41.",
    title: "JS提升-前端也要学习的『网络』实战篇（10节）",
    child: [
      {
        name: "1.【实战】AJAX之『瀑布流』(3)",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968807256#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665754587470138&term_id=100396581&type=3072&vid=5285890794146661949",
        info: "73分钟",
      },
      {
        name: "2.【实战】AJAX之『瀑布流』(4)",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968807257#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665758882437434&term_id=100396581&type=3072&vid=5285890794147233903",
        info: "73分钟",
      },
      {
        name: "3.JS网络课PPT",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968807257#ac_type=3&cid=334138&cw_id=167686&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016441431660858&term_id=100396581&type=3072",
        info: "3.5MB  |  pptx文件",
      },
      {
        name: "4.后台列表管理数据表文件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968807257#ac_type=3&cid=334138&cw_id=165000&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563946041743674&term_id=100396581&type=3072",
        info: "3.7KB  |  zip文件",
      },
      {
        name: "5.后台列表管理模块API集合使用说明文档",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968807257#ac_type=3&cid=334138&cw_id=164998&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563950336710970&term_id=100396581&type=3072",
        info: "73.3KB  |  docx文件",
      },
      {
        name: "6.后台列表管理模块前端代码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968807258#ac_type=3&cid=334138&cw_id=193520&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563954631678266&term_id=100396581&type=3072",
        info: "0.7MB  |  zip文件",
      },
      {
        name: "7.后台列表管理模块服务端代码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968807258#ac_type=3&cid=334138&cw_id=164996&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563958926645562&term_id=100396581&type=3072",
        info: "0.1MB  |  zip文件",
      },
      {
        name: "8.『文件上传功能』资料",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968807258#ac_type=3&cid=334138&cw_id=171287&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563963221612858&term_id=100396581&type=3072",
        info: "22.7KB  |  zip文件",
      },
      {
        name: "9.瀑布流实战资料",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968807258#ac_type=3&cid=334138&cw_id=193521&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563967516580154&term_id=100396581&type=3072",
        info: "2.8MB  |  zip文件",
      },
      {
        name: "10.持久登录与手机验证码注册前端资料",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968807258#ac_type=3&cid=334138&cw_id=193519&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563971811547450&term_id=100396581&type=3072",
        info: "79.7KB  |  zip文件",
      },
    ],
  },
  {
    index: "42.",
    title: "JS提升-前端也要学习的『网络』实战篇（4节）",
    child: [
      {
        name: "1.持久登录与手机验证码注册后端资料",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968808874#ac_type=3&cid=334138&cw_id=168489&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563976106514746&term_id=100396581&type=3072",
        info: "52.7KB  |  zip文件",
      },
      {
        name: "2.网站手机验证码注册模块实战",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968808875#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3264123605686586&term_id=100396581&type=3072&vid=5285890793514638654",
        info: "95分钟",
      },
      {
        name: "3.ThinkPHP(解压后放在www根目录)",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968808875#ac_type=3&cid=334138&cw_id=181257&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563980401482042&term_id=100396581&type=3072",
        info: "1.5MB  |  zip文件",
      },
      {
        name: "4.强缓存和协商缓存",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968808875#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13611167973185850&term_id=100396581&type=3072&vid=387702303658450843",
        info: "123分钟",
      },
    ],
  },
  {
    index: "43.",
    title: "JS提升-谜之『数学』篇（6节）",
    child: [
      {
        name: "1.JS中的三角函数、几何旋转",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968810743#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016445726628154&term_id=100396581&type=3072&vid=5285890793376742911",
        info: "86分钟",
      },
      {
        name: "2.JS中的位置",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968810744#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016450021595450&term_id=100396581&type=3072&vid=5285890793442432228",
        info: "35分钟",
      },
      {
        name: "3.JS中的方向判断",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968810744#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016454316562746&term_id=100396581&type=3072&vid=5285890793516365637",
        info: "42分钟",
      },
      {
        name: "4.JS中的随机数",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968810744#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016458611530042&term_id=100396581&type=3072&vid=5285890793443034598",
        info: "103分钟",
      },
      {
        name: "5.JS中的距离判断",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968810744#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3016462906497338&term_id=100396581&type=3072&vid=5285890793453708278",
        info: "51分钟",
      },
      {
        name: "6.向量的介绍、表示、运算、笛卡尔坐标系",
        href: "https://ke.qq.com/webcourse/index.html?r=1679968810744#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12253807983794490&term_id=100396581&type=3072&vid=387702293269160005",
        info: "22分钟",
      },
    ],
  },
  {
    index: "44.",
    title: "JS提升-大变革之『ES6』新增语法篇（7节）",
    child: [
      {
        name: "1.ES6版本过渡历史",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969052271#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020775053662522&term_id=100396581&type=3072&vid=5285890787835461457",
        info: "125分钟",
      },
      {
        name: "2.块级作用域与嵌套、let、暂行性死区",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969052271#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020779348629818&term_id=100396581&type=3072&vid=5285890788287146141",
        info: "94分钟",
      },
      {
        name: "3.let进阶、const、全部变量与顶层对象",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969052271#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020783643597114&term_id=100396581&type=3072&vid=5285890787892750102",
        info: "88分钟",
      },
      {
        name: "4.解构赋值、函数默认值、数组解构、对象解构",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969052271#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020787938564410&term_id=100396581&type=3072&vid=5285890788294234397",
        info: "106分钟",
      },
      {
        name: "5.隐式转换、函数参数解构、解构本质、()用法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969052271#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020792233531706&term_id=100396581&type=3072&vid=5285890788309253873",
        info: "108分钟",
      },
      {
        name: "6.this指向、箭头函数基本形式、rest运算符",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969052272#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020796528499002&term_id=100396581&type=3072&vid=5285890787834021537",
        info: "108分钟",
      },
      {
        name: "7.箭头函数的实质、箭头函数的使用场景",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969052272#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020800823466298&term_id=100396581&type=3072&vid=5285890787947628306",
        info: "86分钟",
      },
    ],
  },
  {
    index: "45.",
    title: "JS提升-大变革之『ES6』新增API篇（7节）",
    child: [
      {
        name: "1.函数名/对象拓展、描述符、getter/setter",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969054009#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020805118433594&term_id=100396581&type=3072&vid=5285890788284621851",
        info: "124分钟",
      },
      {
        name: "2.对象密封4种方式、assign、取值函数的拷贝",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969054010#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020809413400890&term_id=100396581&type=3072&vid=5285890788141169135",
        info: "132分钟",
      },
      {
        name: "3.super、4种遍历方式、原型、symbol遍历",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969054010#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020813708368186&term_id=100396581&type=3072&vid=5285890788299087835",
        info: "137分钟",
      },
      {
        name: "4.Symbol、iterator、forOf、typeArray",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969054010#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020818003335482&term_id=100396581&type=3072&vid=5285890788272100744",
        info: "103分钟",
      },
      {
        name: "5.array/数值拓展、ArrayOf、ArrayFrom",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969054010#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020822298302778&term_id=100396581&type=3072&vid=5285890788037527678",
        info: "148分钟",
      },
      {
        name: "6.正则方法、修饰符yus、UTF_16编码方式",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969054010#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020826593270074&term_id=100396581&type=3072&vid=5285890788269872551",
        info: "104分钟",
      },
      {
        name: "7.Unicode表示法、字符串方法、模板字符串",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969054011#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020830888237370&term_id=100396581&type=3072&vid=5285890788154215120",
        info: "130分钟",
      },
    ],
  },
  {
    index: "46.",
    title: "JS提升-大变革之『ES6』集合篇（4节）",
    child: [
      {
        name: "1.map与set",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969057148#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020835183204666&term_id=100396581&type=3072&vid=5285890788124417891",
        info: "153分钟",
      },
      {
        name: "2.WeakMap与WeakSet、proxy与reflect",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969057148#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020839478171962&term_id=100396581&type=3072&vid=5285890787935151374",
        info: "130分钟",
      },
      {
        name: "3.proxy与define_property",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969057148#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13453435299240250&term_id=100396581&type=3072&vid=387702302012172957",
        info: "104分钟",
      },
      {
        name: "4.class与对象",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969057149#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020843773139258&term_id=100396581&type=3072&vid=5285890793430080021",
        info: "204分钟",
      },
    ],
  },
  {
    index: "47.",
    title: "JS提升-大变革之『ES6』异步篇（9节）",
    child: [
      {
        name: "1.异步的开端-promise",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969058497#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020848068106554&term_id=100396581&type=3072&vid=5285890793635041560",
        info: "121分钟",
      },
      {
        name: "2.promise的使用方法和自定义promisify",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969058497#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3264127900653882&term_id=100396581&type=3072&vid=5285890793395173460",
        info: "135分钟",
      },
      {
        name: "3.iterator与generator",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969058498#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020852363073850&term_id=100396581&type=3072&vid=5285890793419230281",
        info: "157分钟",
      },
      {
        name: "4.async与await、ES6的模块化",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969058498#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020856658041146&term_id=100396581&type=3072&vid=5285890793442383514",
        info: "126分钟",
      },
      {
        name: "5.手写实现之『ES6 Promise』（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969058498#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141387855763770&term_id=100396581&type=3072&vid=387702298578773275",
        info: "45分钟",
      },
      {
        name: "6.手写实现之『ES6 Promise』（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969058498#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141392150731066&term_id=100396581&type=3072&vid=387702298578870210",
        info: "58分钟",
      },
      {
        name: "7.手写实现之『ES6 Promise』（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969058498#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141396445698362&term_id=100396581&type=3072&vid=387702298578773497",
        info: "58分钟",
      },
      {
        name: "8.JavaScript模块化",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969058498#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141400740665658&term_id=100396581&type=3072&vid=5285890797717321023",
        info: "127分钟",
      },
      {
        name: "9.生成器与迭代器的应用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969058498#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141405035632954&term_id=100396581&type=3072&vid=5285890797717392810",
        info: "91分钟",
      },
    ],
  },
  {
    index: "48.",
    title: "ES6模块化由来和过渡（4节）",
    child: [
      {
        name: "1.插件_组件_模块化开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969061040#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10500718297684282&term_id=100396581&type=3072&vid=5285890811182886744",
        info: "25分钟",
      },
      {
        name: "2.手写简化版requireJS",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969061041#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10500722592651578&term_id=100396581&type=3072&vid=5285890811182846449",
        info: "23分钟",
      },
      {
        name: "3.手写简化版requireJS",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969061041#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10500726887618874&term_id=100396581&type=3072&vid=5285890811182846478",
        info: "28分钟",
      },
      {
        name: "4.commonJS_ES6module",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969061041#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10500731182586170&term_id=100396581&type=3072&vid=5285890811182886847",
        info: "32分钟",
      },
    ],
  },
  {
    index: "49.",
    title: "JS提升-大变革之『ES6』实战篇（10节）",
    child: [
      {
        name: "1.商城购物车项目模块实战（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969064258#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020860953008442&term_id=100396581&type=3072&vid=5285890793478862892",
        info: "110分钟",
      },
      {
        name: "2.商城购物车项目模块实战（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969064258#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020865247975738&term_id=100396581&type=3072&vid=5285890790234418281",
        info: "29分钟",
      },
      {
        name: "3.课前devServer配置补充",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969064258#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563984696449338&term_id=100396581&type=3072&vid=5285890791538687047",
        info: "7分钟",
      },
      {
        name: "4.商城购物车项目模块实战（3）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969064258#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020869542943034&term_id=100396581&type=3072&vid=5285890790272695123",
        info: "53分钟",
      },
      {
        name: "5.商城购物车项目模块实战（4）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969064259#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020873837910330&term_id=100396581&type=3072&vid=5285890790307562277",
        info: "79分钟",
      },
      {
        name: "6.商城购物车项目模块实战（5）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969064259#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3264132195621178&term_id=100396581&type=3072&vid=5285890790460502964",
        info: "46分钟",
      },
      {
        name: "7.商城购物车项目模块实战（6）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969064259#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563988991416634&term_id=100396581&type=3072&vid=5285890790564497616",
        info: "70分钟",
      },
      {
        name: "8.商城购物车项目模块实战（7）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969064259#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563993286383930&term_id=100396581&type=3072&vid=5285890791553311359",
        info: "50分钟",
      },
      {
        name: "9.商城购物车项目模块实战（8）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969064259#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11563997581351226&term_id=100396581&type=3072&vid=5285890795553192584",
        info: "40分钟",
      },
      {
        name: "10.购物车项目源码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969064260#ac_type=3&cid=334138&cw_id=190415&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564001876318522&term_id=100396581&type=3072",
        info: "28.3MB  |  zip文件",
      },
    ],
  },
  {
    index: "50.",
    title: "【专题课】Promises/A+规范与源码重写以及周边（10节）",
    child: [
      {
        name: "1.搭建环境、阅读Promises A+规范",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969066958#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11624861562902842&term_id=100396581&type=3072&vid=5285890807904790192",
        info: "20分钟",
      },
      {
        name: "2.完成一个基本的Promise",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969066958#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11624865857870138&term_id=100396581&type=3072&vid=5285890807904820953",
        info: "15分钟",
      },
      {
        name: "3.处理Promise中的异步与多次调用的问题",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969066958#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11624870152837434&term_id=100396581&type=3072&vid=5285890807904821058",
        info: "14分钟",
      },
      {
        name: "4.原生Promise链式调用的特性总结",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969066959#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11624874447804730&term_id=100396581&type=3072&vid=5285890807904822142",
        info: "29分钟",
      },
      {
        name: "5.解决Promise的链式调用（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969066959#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11624878742772026&term_id=100396581&type=3072&vid=5285890807904822209",
        info: "24分钟",
      },
      {
        name: "6.解决Promise的链式调用（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969066959#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11624883037739322&term_id=100396581&type=3072&vid=5285890807904822255",
        info: "30分钟",
      },
      {
        name: "7.实现resolve与reject的静态方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969066959#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11624887332706618&term_id=100396581&type=3072&vid=5285890807904833122",
        info: "24分钟",
      },
      {
        name: "8.实现Promise.all",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969066959#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11624891627673914&term_id=100396581&type=3072&vid=5285890807904833208",
        info: "23分钟",
      },
      {
        name: "9.实现Promise.allSettled",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969066960#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11624895922641210&term_id=100396581&type=3072&vid=5285890807904833287",
        info: "21分钟",
      },
      {
        name: "10.实现Promise.race与finally",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969066960#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11624900217608506&term_id=100396581&type=3072&vid=5285890807905605154",
        info: "32分钟",
      },
    ],
  },
  {
    index: "51.",
    title: "【专题课】Promises/A+规范与源码重写以及周边（3节）",
    child: [
      {
        name: "1.实现promisify与promisifyAll",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969070862#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11624904512575802&term_id=100396581&type=3072&vid=5285890807907426372",
        info: "21分钟",
      },
      {
        name: "2.generator实现与babel编译实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969070862#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11624908807543098&term_id=100396581&type=3072&vid=5285890807913621164",
        info: "25分钟",
      },
      {
        name: "3.generator+co实现async+await",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969070863#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11624913102510394&term_id=100396581&type=3072&vid=5285890808189568439",
        info: "37分钟",
      },
    ],
  },
  {
    index: "52.",
    title: "『事件环』深度学习课程（10节）",
    child: [
      {
        name: "1.事件环相关的基本概念认知",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969072222#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169679694895418&term_id=100396581&type=3072&vid=387702294861002062",
        info: "29分钟",
      },
      {
        name: "2.事件环的运行流程与基本案例的分析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969072222#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169683989862714&term_id=100396581&type=3072&vid=387702294861326294",
        info: "20分钟",
      },
      {
        name: "3.事件环分析训练（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969072222#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169688284830010&term_id=100396581&type=3072&vid=387702294861002111",
        info: "22分钟",
      },
      {
        name: "4.事件环分析训练（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969072223#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169692579797306&term_id=100396581&type=3072&vid=387702294861002143",
        info: "18分钟",
      },
      {
        name: "5.事件环分析训练（3）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969072223#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169696874764602&term_id=100396581&type=3072&vid=387702294861101001",
        info: "20分钟",
      },
      {
        name: "6.事件环分析训练（4）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969072223#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169701169731898&term_id=100396581&type=3072&vid=387702294861101024",
        info: "27分钟",
      },
      {
        name: "7.事件环分析训练（5）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969072223#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169705464699194&term_id=100396581&type=3072&vid=387702294861200876",
        info: "31分钟",
      },
      {
        name: "8.事件环分析训练（6）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969072224#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169709759666490&term_id=100396581&type=3072&vid=387702294862854451",
        info: "32分钟",
      },
      {
        name: "9.宏任务与微任务专题",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969072224#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169714054633786&term_id=100396581&type=3072&vid=387702295023183457",
        info: "24分钟",
      },
      {
        name: "10.setImmediate与setTimeout",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969072224#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169718349601082&term_id=100396581&type=3072&vid=387702295020807880",
        info: "34分钟",
      },
    ],
  },
  {
    index: "53.",
    title: "『事件环』深度学习课程（10节）",
    child: [
      {
        name: "1.MessageChannel与postMessage",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969074472#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169722644568378&term_id=100396581&type=3072&vid=387702295020808012",
        info: "22分钟",
      },
      {
        name: "2.requestAnimationFrame与setInterval",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969074472#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169726939535674&term_id=100396581&type=3072&vid=387702295020808090",
        info: "25分钟",
      },
      {
        name: "3.MutationObserver与nextTick",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969074472#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169731234502970&term_id=100396581&type=3072&vid=387702295020808924",
        info: "27分钟",
      },
      {
        name: "4.NodeJS基本认知",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969074472#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169735529470266&term_id=100396581&type=3072&vid=387702295058335369",
        info: "31分钟",
      },
      {
        name: "5.NodeJS擅长的事",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969074473#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169739824437562&term_id=100396581&type=3072&vid=387702295058146642",
        info: "25分钟",
      },
      {
        name: "6.JS单线程与多线程的对比",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969074473#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169744119404858&term_id=100396581&type=3072&vid=387702295057910012",
        info: "26分钟",
      },
      {
        name: "7.同步与异步、阻塞与非阻塞",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969074473#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169748414372154&term_id=100396581&type=3072&vid=387702295058335432",
        info: "24分钟",
      },
      {
        name: "8.Node系统与事件环基本认知",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969074473#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169752709339450&term_id=100396581&type=3072&vid=387702295057433292",
        info: "30分钟",
      },
      {
        name: "9.Node事件环的运行流程与基本案例的分析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969074473#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169757004306746&term_id=100396581&type=3072&vid=387702295058146750",
        info: "21分钟",
      },
      {
        name: "10.复杂案例分析与事件环机制的总结",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969074474#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169761299274042&term_id=100396581&type=3072&vid=387702295058297629",
        info: "39分钟",
      },
    ],
  },
  {
    index: "54.",
    title: "ECMAScript深度基础拓展课（2节）",
    child: [
      {
        name: "1.第1讲",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969076798#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13451485384087866&term_id=100396581&type=3072&vid=387702302010955858",
        info: "113分钟",
      },
      {
        name: "2.第2讲",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969076799#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13539085537057082&term_id=100396581&type=3072&vid=387702302883993227",
        info: "121分钟",
      },
    ],
  },
  {
    index: "55.",
    title: "JS提升-还无法抛弃的『jQuery』基础篇（10节）",
    child: [
      {
        name: "1.初识jQuery、jQuery的简单使用及源码初探",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969078916#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020878132877626&term_id=100396581&type=3072&vid=5285890788393726075",
        info: "154分钟",
      },
      {
        name: "2.选择元素、get方法、eq方法、find方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969078917#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020882427844922&term_id=100396581&type=3072&vid=5285890788133605324",
        info: "82分钟",
      },
      {
        name: "3.筛选方法、add基础操作方法、end回退方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969078917#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020886722812218&term_id=100396581&type=3072&vid=5285890788016698622",
        info: "105分钟",
      },
      {
        name: "4.获取内容、操作class、获取属性",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969078917#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020891017779514&term_id=100396581&type=3072&vid=5285890788147876558",
        info: "96分钟",
      },
      {
        name: "5.元素的增删改查（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969078918#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020895312746810&term_id=100396581&type=3072&vid=5285890788148785632",
        info: "39分钟",
      },
      {
        name: "6.元素的增删改查（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969078918#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020899607714106&term_id=100396581&type=3072&vid=5285890788133062710",
        info: "20分钟",
      },
      {
        name: "7.元素的增删改查（3）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969078918#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020903902681402&term_id=100396581&type=3072&vid=5285890788238871405",
        info: "96分钟",
      },
      {
        name: "8.绑定与解绑事件、触发指定事件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969078918#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020908197648698&term_id=100396581&type=3072&vid=5285890793434831344",
        info: "37分钟",
      },
      {
        name: "9.隐藏与显示、淡入淡出、动画方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969078918#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020912492615994&term_id=100396581&type=3072&vid=5285890793390519756",
        info: "35分钟",
      },
      {
        name: "10.动画方法中的队列及原理剖析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969078919#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020916787583290&term_id=100396581&type=3072&vid=5285890793437379233",
        info: "39分钟",
      },
    ],
  },
  {
    index: "56.",
    title: "JS提升-还无法抛弃的『jQuery』基础篇（2节）",
    child: [
      {
        name: "1.【实战】热点排名案例",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969080769#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020921082550586&term_id=100396581&type=3072&vid=5285890793516620362",
        info: "90分钟",
      },
      {
        name: "2.尺寸位置、遍历索引",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969080770#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020925377517882&term_id=100396581&type=3072&vid=5285890793625182794",
        info: "52分钟",
      },
    ],
  },
  {
    index: "57.",
    title: "JS提升-还无法抛弃的『jQuery』提升篇（6节）",
    child: [
      {
        name: "1.判断数据类型、代理、防止冲突",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969082077#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020929672485178&term_id=100396581&type=3072&vid=5285890793481226971",
        info: "33分钟",
      },
      {
        name: "2.循环map、JSON字符串转换",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969082077#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020933967452474&term_id=100396581&type=3072&vid=5285890793627703734",
        info: "17分钟",
      },
      {
        name: "3.插件扩展、jQuery AJAX",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969082078#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020938262419770&term_id=100396581&type=3072&vid=5285890793476945300",
        info: "44分钟",
      },
      {
        name: "4.回调管理、异步编程和回调地狱",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969082078#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020942557387066&term_id=100396581&type=3072&vid=5285890793622565644",
        info: "54分钟",
      },
      {
        name: "5.有状态的回调、Defferred中重点",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969082078#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020946852354362&term_id=100396581&type=3072&vid=5285890793481673318",
        info: "36分钟",
      },
      {
        name: "6.Callbacks、Deffered、when",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969082078#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020951147321658&term_id=100396581&type=3072&vid=5285890793624653210",
        info: "38分钟",
      },
    ],
  },
  {
    index: "58.",
    title: "JS提升-还无法抛弃的『jQuery』实战篇（9节）",
    child: [
      {
        name: "1.【实战】fullPage插件封装（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969083729#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020955442288954&term_id=100396581&type=3072&vid=5285890793441733683",
        info: "50分钟",
      },
      {
        name: "2.【实战】fullPage插件封装（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969083729#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020959737256250&term_id=100396581&type=3072&vid=5285890793372554193",
        info: "45分钟",
      },
      {
        name: "3.【实战】fullPage插件封装（3）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969083729#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020964032223546&term_id=100396581&type=3072&vid=5285890793456996379",
        info: "42分钟",
      },
      {
        name: "4.【实战】fullPage插件封装（4）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969083729#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020968327190842&term_id=100396581&type=3072&vid=5285890793399525342",
        info: "53分钟",
      },
      {
        name: "5.【实战】重写京东商城首屏（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969083730#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020972622158138&term_id=100396581&type=3072&vid=5285890793473646841",
        info: "44分钟",
      },
      {
        name: "6.【实战】重写京东商城首屏（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969083730#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020976917125434&term_id=100396581&type=3072&vid=5285890793388969537",
        info: "32分钟",
      },
      {
        name: "7.【实战】重写京东商城首屏（3）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969083730#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020981212092730&term_id=100396581&type=3072&vid=5285890793477274248",
        info: "38分钟",
      },
      {
        name: "8.【实战】重写京东商城首屏（4）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969083730#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020985507060026&term_id=100396581&type=3072&vid=5285890793515584776",
        info: "51分钟",
      },
      {
        name: "9.【实战】重写京东商城首屏（5）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969083730#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020989802027322&term_id=100396581&type=3072&vid=5285890793363224171",
        info: "73分钟",
      },
    ],
  },
  {
    index: "59.",
    title: "JS提升-还无法抛弃的『jQuery』源码篇（6节）",
    child: [
      {
        name: "1.get、eq、add、end方法源码实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969086264#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020994096994618&term_id=100396581&type=3072&vid=5285890793395666729",
        info: "159分钟",
      },
      {
        name: "2.jQuery源码分析之extend",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969086264#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021002686929210&term_id=100396581&type=3072&vid=5285890793509602424",
        info: "18分钟",
      },
      {
        name: "3.jQuery源码分析之init",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969086264#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3020998391961914&term_id=100396581&type=3072&vid=5285890793449011498",
        info: "18分钟",
      },
      {
        name: "4.on、trigger源码实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969086265#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3264136490588474&term_id=100396581&type=3072&vid=5285890793623148560",
        info: "7分钟",
      },
      {
        name: "5.queue、dequeue、animate源码实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969086265#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3264140785555770&term_id=100396581&type=3072&vid=5285890793374527282",
        info: "14分钟",
      },
      {
        name: "6.Callbacks、Deferred源码实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969086265#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3264145080523066&term_id=100396581&type=3072&vid=5285890793420410125",
        info: "24分钟",
      },
    ],
  },
  {
    index: "60.",
    title: "CSS3技术-动画王者归来『选择器模块』篇（2节）",
    child: [
      {
        name: "1.CSS进化历史、结构伪类选择器",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969087590#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021006981896506&term_id=100396581&type=3072&vid=5285890788393005609",
        info: "139分钟",
      },
      {
        name: "2.元素状态伪类、伪元素、关系选择器",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969087591#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021011276863802&term_id=100396581&type=3072&vid=5285890788135092050",
        info: "119分钟",
      },
    ],
  },
  {
    index: "61.",
    title: "CSS3技术-动画王者归来『背景与边框模块』篇（2节）",
    child: [
      {
        name: "1.背景、边框图片",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969088873#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021015571831098&term_id=100396581&type=3072&vid=5285890787911569910",
        info: "97分钟",
      },
      {
        name: "2.盒子阴影、边框圆角",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969088873#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021019866798394&term_id=100396581&type=3072&vid=5285890788300275758",
        info: "115分钟",
      },
    ],
  },
  {
    index: "62.",
    title: "CSS3技术-动画王者归来『文字与颜色模块』篇（4节）",
    child: [
      {
        name: "1.word-wrap、white-space、word-break",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969089997#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021024161765690&term_id=100396581&type=3072&vid=5285890787843712322",
        info: "81分钟",
      },
      {
        name: "2.column多列布局、gradient",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969089998#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021028456732986&term_id=100396581&type=3072&vid=5285890787912788659",
        info: "107分钟",
      },
      {
        name: "3.repeating-linear/radial-grident",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969089998#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021032751700282&term_id=100396581&type=3072&vid=5285890788153591312",
        info: "101分钟",
      },
      {
        name: "4.第3课素材",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969089998#ac_type=3&cid=334138&cw_id=163245&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021037046667578&term_id=100396581&type=3072",
        info: "0.2MB  |  zip文件",
      },
    ],
  },
  {
    index: "63.",
    title: "CSS3技术-动画王者归来『盒模型与FLEX模块』篇（5节）",
    child: [
      {
        name: "1.hsl、opacity与rgba、overflow-x、resize",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969091739#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021041341634874&term_id=100396581&type=3072&vid=5285890788295120457",
        info: "96分钟",
      },
      {
        name: "2.传统布局缺陷、弹性盒子、 flexContainer",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969091740#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021045636602170&term_id=100396581&type=3072&vid=5285890787799062864",
        info: "91分钟",
      },
      {
        name: "3.弹性布局、flexItem的属性及用法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969091740#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021049931569466&term_id=100396581&type=3072&vid=5285890788037875560",
        info: "67分钟",
      },
      {
        name: "4.【实战】京东布局布局技巧、企业命名规范",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969091740#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021054226536762&term_id=100396581&type=3072&vid=5285890788002466669",
        info: "89分钟",
      },
      {
        name: "5.flex布局深入、grid布局探究",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969091741#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021058521504058&term_id=100396581&type=3072&vid=5285890787852644270",
        info: "74分钟",
      },
    ],
  },
  {
    index: "64.",
    title: "CSS3技术-动画王者归来『动画与3D模块』篇（7节）",
    child: [
      {
        name: "1.transform、css属性值定义语法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969093326#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021062816471354&term_id=100396581&type=3072&vid=5285890787894287543",
        info: "101分钟",
      },
      {
        name: "2.三次贝塞尔曲线、transition、animation",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969093327#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021067111438650&term_id=100396581&type=3072&vid=5285890788257451512",
        info: "104分钟",
      },
      {
        name: "3.【实战】animation、checkbox",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969093327#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021071406405946&term_id=100396581&type=3072&vid=5285890787987113610",
        info: "118分钟",
      },
      {
        name: "4.【实战】perspective、图片集旋转木马",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969093327#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021075701373242&term_id=100396581&type=3072&vid=5285890788423738907",
        info: "72分钟",
      },
      {
        name: "5.【实战】旋转的骰子、button点击动画效果",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969093327#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021079996340538&term_id=100396581&type=3072&vid=5285890787882658225",
        info: "87分钟",
      },
      {
        name: "6.【实战】多种loading动画特效",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969093327#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021084291307834&term_id=100396581&type=3072&vid=5285890788116039577",
        info: "85分钟",
      },
      {
        name: "7.【实战】CSS3插件、滑动菜单、复习课",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969093328#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021088586275130&term_id=100396581&type=3072&vid=5285890787809653736",
        info: "91分钟",
      },
    ],
  },
  {
    index: "65.",
    title: "CSS3技术-动画王者归来『响应式设计』篇（3节）",
    child: [
      {
        name: "1.响应式设计、@媒体查询、GPU硬件加速",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969094734#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021092881242426&term_id=100396581&type=3072&vid=5285890788161479331",
        info: "123分钟",
      },
      {
        name: "2.【实战】Bootstrap响应式布局案例",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969094734#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021097176209722&term_id=100396581&type=3072&vid=5285890788007700004",
        info: "101分钟",
      },
      {
        name: "3.CSS3媒体查询进行屏幕适配",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969094734#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141409330600250&term_id=100396581&type=3072&vid=5285890797716995926",
        info: "21分钟",
      },
    ],
  },
  {
    index: "66.",
    title: "CSS3技术-动画王者归来『补充』篇（4节）",
    child: [
      {
        name: "1.webkit属性、设备与设备独立像素、css像素",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969096215#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021101471177018&term_id=100396581&type=3072&vid=5285890788150169044",
        info: "115分钟",
      },
      {
        name: "2.cubic-bezier、steps逐帧动画的定义方式",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969096215#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021105766144314&term_id=100396581&type=3072&vid=5285890788277219197",
        info: "52分钟",
      },
      {
        name: "3.第2课作业素材",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969096216#ac_type=3&cid=334138&cw_id=163246&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021110061111610&term_id=100396581&type=3072",
        info: "3.1MB  |  zip文件",
      },
      {
        name: "4.【实战】steps逐帧动画特效案例",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969096216#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021114356078906&term_id=100396581&type=3072&vid=5285890787890727234",
        info: "71分钟",
      },
    ],
  },
  {
    index: "67.",
    title: "CSS3技术-动画王者归来『实战』篇（7节）",
    child: [
      {
        name: "1.7种炫酷的loading动画特效",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969097605#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021118651046202&term_id=100396581&type=3072&vid=5285890787853081553",
        info: "106分钟",
      },
      {
        name: "2.自定义radio单选按钮",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969097606#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021122946013498&term_id=100396581&type=3072&vid=5285890787801077721",
        info: "11分钟",
      },
      {
        name: "3.CSS3带遮罩特效的图片展示",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969097606#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021127240980794&term_id=100396581&type=3072&vid=5285890788293447028",
        info: "14分钟",
      },
      {
        name: "4.超科技感盒子聚焦效果",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969097606#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021131535948090&term_id=100396581&type=3072&vid=5285890787898622689",
        info: "24分钟",
      },
      {
        name: "5.CSS3垂直导航菜单",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969097607#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021135830915386&term_id=100396581&type=3072&vid=5285890787957424838",
        info: "19分钟",
      },
      {
        name: "6.CSS3打造复杂动画菜单特效",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969097607#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021140125882682&term_id=100396581&type=3072&vid=5285890788301966334",
        info: "17分钟",
      },
      {
        name: "7.随时在最下方『案例锦集』处添加新案例",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969097607#ac_type=3&cid=334138&cw_id=151056&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021144420849978&term_id=100396581&type=3072",
        info: "1.8MB  |  jpg文件",
      },
    ],
  },
  {
    index: "68.",
    title: "BootStrap4.0-最强UI框架『入门+实战』篇（9节）",
    child: [
      {
        name: "1.Boostrap模板创建",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969100145#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021148715817274&term_id=100396581&type=3072&vid=5285890788326930429",
        info: "2分钟",
      },
      {
        name: "2.导航栏制作（上）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969100145#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021153010784570&term_id=100396581&type=3072&vid=5285890788167351267",
        info: "9分钟",
      },
      {
        name: "3.导航栏制作（下）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969100145#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021157305751866&term_id=100396581&type=3072&vid=5285890788293206807",
        info: "5分钟",
      },
      {
        name: "4.巨幕的制作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969100146#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021161600719162&term_id=100396581&type=3072&vid=5285890788149757593",
        info: "8分钟",
      },
      {
        name: "5.解决小型尺寸屏幕的问题",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969100146#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021165895686458&term_id=100396581&type=3072&vid=5285890788039297911",
        info: "3分钟",
      },
      {
        name: "6.外边距的设置",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969100146#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021170190653754&term_id=100396581&type=3072&vid=5285890788145556987",
        info: "2分钟",
      },
      {
        name: "7.多列内容的显示",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969100146#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021174485621050&term_id=100396581&type=3072&vid=5285890788238955720",
        info: "4分钟",
      },
      {
        name: "8.文字对齐方式",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969100146#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021178780588346&term_id=100396581&type=3072&vid=5285890788147944045",
        info: "2分钟",
      },
      {
        name: "9.副导航栏的制作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969100147#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021183075555642&term_id=100396581&type=3072&vid=5285890788235148972",
        info: "3分钟",
      },
    ],
  },
  {
    index: "69.",
    title: "BootStrap4.0-最强UI框架『提升+实战』篇（10节）",
    child: [
      {
        name: "1.网格系统初探",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969102338#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021187370522938&term_id=100396581&type=3072&vid=5285890788276405810",
        info: "5分钟",
      },
      {
        name: "2.网格系统占比、不同设备尺寸",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969102338#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021191665490234&term_id=100396581&type=3072&vid=5285890788146304694",
        info: "5分钟",
      },
      {
        name: "3.非占满列的排列情况、对齐方式",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969102338#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021195960457530&term_id=100396581&type=3072&vid=5285890788030295373",
        info: "5分钟",
      },
      {
        name: "4.列的排列方式",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969102338#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021200255424826&term_id=100396581&type=3072&vid=5285890787927690808",
        info: "4分钟",
      },
      {
        name: "5.列的偏移",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969102339#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021204550392122&term_id=100396581&type=3072&vid=5285890788008782503",
        info: "2分钟",
      },
      {
        name: "6.导航栏制作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969102339#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021208845359418&term_id=100396581&type=3072&vid=5285890788282379673",
        info: "11分钟",
      },
      {
        name: "7.警告框的制作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969102339#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021213140326714&term_id=100396581&type=3072&vid=5285890787889766394",
        info: "6分钟",
      },
      {
        name: "8.警告框附加信息、警告框消失",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969102339#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021217435294010&term_id=100396581&type=3072&vid=5285890787889746197",
        info: "6分钟",
      },
      {
        name: "9.模态框的制作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969102339#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021221730261306&term_id=100396581&type=3072&vid=5285890787824485721",
        info: "9分钟",
      },
      {
        name: "10.表单的基础制作（上）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969102340#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021226025228602&term_id=100396581&type=3072&vid=5285890788113790896",
        info: "8分钟",
      },
    ],
  },
  {
    index: "70.",
    title: "BootStrap4.0-最强UI框架『提升+实战』篇（6节）",
    child: [
      {
        name: "1.表单的基础制作（下）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969104161#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021230320195898&term_id=100396581&type=3072&vid=5285890787987578887",
        info: "6分钟",
      },
      {
        name: "2.表单验证（手动）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969104162#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021234615163194&term_id=100396581&type=3072&vid=5285890787802136793",
        info: "5分钟",
      },
      {
        name: "3.表单验证（自动）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969104162#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021238910130490&term_id=100396581&type=3072&vid=5285890787917551078",
        info: "14分钟",
      },
      {
        name: "4.主题定制-安装",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969104162#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021243205097786&term_id=100396581&type=3072&vid=5285890787979289347",
        info: "5分钟",
      },
      {
        name: "5.主题定制-引入",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969104162#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021247500065082&term_id=100396581&type=3072&vid=5285890788151113650",
        info: "5分钟",
      },
      {
        name: "6.主题定制-覆盖默认值",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969104163#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021251795032378&term_id=100396581&type=3072&vid=5285890787917170838",
        info: "11分钟",
      },
    ],
  },
  {
    index: "71.",
    title: "HTML5技术-无所不能的H5『API集合』篇（10节）",
    child: [
      {
        name: "1.HTML5历史、标记法、新增标签和属性、拖拽",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969105497#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021256089999674&term_id=100396581&type=3072&vid=5285890788123419948",
        info: "124分钟",
      },
      {
        name: "2.【实战】request_AnimationFrame、循环字母",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969105498#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021260384966970&term_id=100396581&type=3072&vid=5285890788285668268",
        info: "55分钟",
      },
      {
        name: "3.localStorage、sessionStorage、cookie",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969105498#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021264679934266&term_id=100396581&type=3072&vid=5285890787815244127",
        info: "42分钟",
      },
      {
        name: "4.cookie增删改查、用户追踪",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969105498#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021268974901562&term_id=100396581&type=3072&vid=5285890788263130419",
        info: "87分钟",
      },
      {
        name: "5.history、worker",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969105498#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021273269868858&term_id=100396581&type=3072&vid=5285890788340164648",
        info: "122分钟",
      },
      {
        name: "6.读取文件、分割文件、监控读取文件进度",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969105498#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021277564836154&term_id=100396581&type=3072&vid=5285890788185359171",
        info: "98分钟",
      },
      {
        name: "7.webSocket、与HTTP请求的不同、聊天应用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969105499#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021281859803450&term_id=100396581&type=3072&vid=5285890788148010610",
        info: "126分钟",
      },
      {
        name: "8.获取当前位置、设备速度、设备方向",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969105499#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021286154770746&term_id=100396581&type=3072&vid=5285890788325004924",
        info: "42分钟",
      },
      {
        name: "9.touchstart、touchmove、touchend",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969105499#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021294744705338&term_id=100396581&type=3072&vid=5285890793510624848",
        info: "46分钟",
      },
      {
        name: "10.px、em、rem的区别及应用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969105499#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021290449738042&term_id=100396581&type=3072&vid=5285890791077655472",
        info: "30分钟",
      },
    ],
  },
  {
    index: "72.",
    title: "HTML5技术-无所不能的H5『canvas技术』篇（5节）",
    child: [
      {
        name: "1.基本用法、绘制图形、添加样式和颜色、变形",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969107547#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021299039672634&term_id=100396581&type=3072&vid=5285890787819688082",
        info: "143分钟",
      },
      {
        name: "2.图案、渐变、阴影、文本、lineCap/lineJoin",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969107548#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021303334639930&term_id=100396581&type=3072&vid=5285890787930080527",
        info: "61分钟",
      },
      {
        name: "3.裁剪/绘制/合成/toDataURL/isPointInPath",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969107548#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021307629607226&term_id=100396581&type=3072&vid=5285890788002670867",
        info: "41分钟",
      },
      {
        name: "4.闭合路径、moveTo、arc、贝塞尔曲线",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969107548#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021311924574522&term_id=100396581&type=3072&vid=5285890787844449824",
        info: "47分钟",
      },
      {
        name: "5.像素处理进阶",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969107548#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021316219541818&term_id=100396581&type=3072&vid=5285890787995025757",
        info: "136分钟",
      },
    ],
  },
  {
    index: "73.",
    title: "HTML5技术-无所不能的H5『canvas技术』实战篇（5节）",
    child: [
      {
        name: "1.IOS时钟",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969109101#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021320514509114&term_id=100396581&type=3072&vid=5285890788178696962",
        info: "141分钟",
      },
      {
        name: "2.canvas画板",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969109101#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021324809476410&term_id=100396581&type=3072&vid=5285890788440219918",
        info: "71分钟",
      },
      {
        name: "3.优惠券刮刮乐",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969109101#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021329104443706&term_id=100396581&type=3072&vid=5285890788040449336",
        info: "42分钟",
      },
      {
        name: "4.贪吃蛇游戏（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969109101#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021333399411002&term_id=100396581&type=3072&vid=5285890793502927437",
        info: "49分钟",
      },
      {
        name: "5.贪吃蛇游戏（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969109102#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021337694378298&term_id=100396581&type=3072&vid=5285890793625846233",
        info: "58分钟",
      },
    ],
  },
  {
    index: "74.",
    title: "HTML5技术-无所不能的H5『SVG技术』篇（5节）",
    child: [
      {
        name: "1.图形与直线绘制、路径、样式、贝塞尔曲线",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969110405#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021341989345594&term_id=100396581&type=3072&vid=5285890787889447206",
        info: "104分钟",
      },
      {
        name: "2.弧形、渐变、文本、高斯滤镜、描边样式",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969110406#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021346284312890&term_id=100396581&type=3072&vid=5285890788279282822",
        info: "99分钟",
      },
      {
        name: "3.视口、viewBox、PAR、createElementNS",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969110406#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021350579280186&term_id=100396581&type=3072&vid=5285890788325069174",
        info: "73分钟",
      },
      {
        name: "4.文字、g元素、变形、创建裁剪、插入图片",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969110406#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021354874247482&term_id=100396581&type=3072&vid=5285890813275676281",
        info: "67分钟",
      },
      {
        name: "5.【实战】文件使用、图片淡出、字体、图表",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969110406#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021359169214778&term_id=100396581&type=3072&vid=5285890788292287618",
        info: "108分钟",
      },
    ],
  },
  {
    index: "75.",
    title: "HTML5技术-无所不能的H5『音视频』篇（8节）",
    child: [
      {
        name: "1.audio标签与video标签及基本应用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969111594#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021363464182074&term_id=100396581&type=3072&vid=5285890793626244250",
        info: "65分钟",
      },
      {
        name: "2.【实战】视频播放器开发（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969111594#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021367759149370&term_id=100396581&type=3072&vid=5285890793623463482",
        info: "29分钟",
      },
      {
        name: "3.【实战】视频播放器开发（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969111594#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021372054116666&term_id=100396581&type=3072&vid=5285890793456505582",
        info: "30分钟",
      },
      {
        name: "4.【实战】视频播放器开发（3）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969111594#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021376349083962&term_id=100396581&type=3072&vid=5285890793438573294",
        info: "46分钟",
      },
      {
        name: "5.【实战】视频播放器开发（4）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969111595#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021380644051258&term_id=100396581&type=3072&vid=5285890793365804853",
        info: "46分钟",
      },
      {
        name: "6.【实战】视频播放器开发（5）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969111595#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021384939018554&term_id=100396581&type=3072&vid=5285890793625197368",
        info: "35分钟",
      },
      {
        name: "7.【实战】视频播放器开发（6）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969111595#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021389233985850&term_id=100396581&type=3072&vid=5285890793443832172",
        info: "38分钟",
      },
      {
        name: "8.视频播放器源码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969111595#ac_type=3&cid=334138&cw_id=170236&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564006171285818&term_id=100396581&type=3072",
        info: "0.4MB  |  zip文件",
      },
    ],
  },
  {
    index: "76.",
    title: "CSS扩展语言-美丽的Sass『基础』篇（7节）",
    child: [
      {
        name: "1.Sass安装(Mac版)",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969113847#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021393528953146&term_id=100396581&type=3072&vid=5285890787928626814",
        info: "5分钟",
      },
      {
        name: "2.Sass安装(Windows版)",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969113847#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021397823920442&term_id=100396581&type=3072&vid=5285890788006785005",
        info: "6分钟",
      },
      {
        name: "3.Sass初识、编译、输出方式",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969113848#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021402118887738&term_id=100396581&type=3072&vid=5285890788165367015",
        info: "92分钟",
      },
      {
        name: "4.变量、混入mixin、继承、占位符",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969113848#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021406413855034&term_id=100396581&type=3072&vid=5285890793484465725",
        info: "84分钟",
      },
      {
        name: "5.Sass运算、控制命令",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969113848#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021410708822330&term_id=100396581&type=3072&vid=5285890788296594858",
        info: "79分钟",
      },
      {
        name: "6.字符串函数、数字函数、列表函数",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969113848#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021415003789626&term_id=100396581&type=3072&vid=5285890788138909440",
        info: "78分钟",
      },
      {
        name: "7.颜色函数、透明度函数、@规则",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969113848#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021419298756922&term_id=100396581&type=3072&vid=5285890788277359689",
        info: "70分钟",
      },
    ],
  },
  {
    index: "77.",
    title: "CSS扩展语言-美丽的Sass『案例』篇（4节）",
    child: [
      {
        name: "1.菜单栏",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969115882#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021423593724218&term_id=100396581&type=3072&vid=5285890788163081070",
        info: "38分钟",
      },
      {
        name: "2.五彩纸屑",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969115883#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021427888691514&term_id=100396581&type=3072&vid=5285890788035257095",
        info: "17分钟",
      },
      {
        name: "3.混合色彩气泡",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969115883#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021432183658810&term_id=100396581&type=3072&vid=5285890788233496046",
        info: "18分钟",
      },
      {
        name: "4.按钮hover时的box-shadow",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969115884#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021436478626106&term_id=100396581&type=3072&vid=5285890788130431470",
        info: "21分钟",
      },
    ],
  },
  {
    index: "78.",
    title: "CSS扩展语言-美丽的Less『实用』篇（8节）",
    child: [
      {
        name: "1.初识Less",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969117042#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021440773593402&term_id=100396581&type=3072&vid=5285890788252313351",
        info: "8分钟",
      },
      {
        name: "2.变量的使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969117042#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021445068560698&term_id=100396581&type=3072&vid=5285890787880955527",
        info: "7分钟",
      },
      {
        name: "3.Mixin的使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969117042#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021449363527994&term_id=100396581&type=3072&vid=5285890788131449989",
        info: "6分钟",
      },
      {
        name: "4.嵌套规则",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969117042#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021453658495290&term_id=100396581&type=3072&vid=5285890788017189918",
        info: "6分钟",
      },
      {
        name: "5.嵌套条件句",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969117043#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021457953462586&term_id=100396581&type=3072&vid=5285890787853547971",
        info: "5分钟",
      },
      {
        name: "6.数学运算",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969117043#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021462248429882&term_id=100396581&type=3072&vid=5285890788324076017",
        info: "7分钟",
      },
      {
        name: "7.导入和文件路径",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969117043#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021466543397178&term_id=100396581&type=3072&vid=5285890788249117348",
        info: "9分钟",
      },
      {
        name: "8.【案例】三角形Mixin",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969117043#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021470838364474&term_id=100396581&type=3072&vid=5285890788300566686",
        info: "21分钟",
      },
    ],
  },
  {
    index: "79.",
    title: "前端工程化利器-Webpack『基础』篇（3节）",
    child: [
      {
        name: "1.认识Webpack",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969118964#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021475133331770&term_id=100396581&type=3072&vid=5285890812792130289",
        info: "30分钟",
      },
      {
        name: "2.Webpack的定义、配置文件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969118964#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021479428299066&term_id=100396581&type=3072&vid=5285890812792231766",
        info: "22分钟",
      },
      {
        name: "3.Loader的概念、处理图片",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969118965#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021483723266362&term_id=100396581&type=3072&vid=5285890812792417695",
        info: "29分钟",
      },
    ],
  },
  {
    index: "80.",
    title: "前端工程化利器-Webpack『基础』篇（5节）",
    child: [
      {
        name: "1.处理样式",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969122881#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021488018233658&term_id=100396581&type=3072&vid=5285890813219303382",
        info: "21分钟",
      },
      {
        name: "2.处理样式（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969122882#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021492313200954&term_id=100396581&type=3072&vid=5285890813219433026",
        info: "27分钟",
      },
      {
        name: "3.Plugins的概念",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969122882#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021496608168250&term_id=100396581&type=3072&vid=5285890813219538038",
        info: "18分钟",
      },
      {
        name: "4.认识sourceMap",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969122882#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021500903135546&term_id=100396581&type=3072&vid=5285890813219703198",
        info: "22分钟",
      },
      {
        name: "5.使用WebpackDevServer",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969122883#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021505198102842&term_id=100396581&type=3072&vid=5285890813453175016",
        info: "26分钟",
      },
    ],
  },
  {
    index: "81.",
    title: "前端工程化利器-Webpack『基础』篇（6节）",
    child: [
      {
        name: "1.认识HMR热更新",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969124577#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021509493070138&term_id=100396581&type=3072&vid=5285890813453589957",
        info: "22分钟",
      },
      {
        name: "2.JS里的热更新",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969124578#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021513788037434&term_id=100396581&type=3072&vid=5285890813453865788",
        info: "24分钟",
      },
      {
        name: "3.使用Babel处理ES6代码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969124578#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021518083004730&term_id=100396581&type=3072&vid=5285890813753005843",
        info: "21分钟",
      },
      {
        name: "4.Babel的进一步理解",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969124578#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021522377972026&term_id=100396581&type=3072&vid=5285890813804487622",
        info: "29分钟",
      },
      {
        name: "5.打包React、Vue代码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969124578#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979645805893946&term_id=100396581&type=3072&vid=5285890814382787524",
        info: "21分钟",
      },
      {
        name: "6.Webpack常用命令总结",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969124579#ac_type=3&cid=334138&cw_id=163249&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021526672939322&term_id=100396581&type=3072",
        info: "24.1KB  |  docx文件",
      },
    ],
  },
  {
    index: "82.",
    title: "前端工程化利器-Webpack『进阶』篇（6节）",
    child: [
      {
        name: "1.理解Tree Shaking",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969127344#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979650100861242&term_id=100396581&type=3072&vid=5285890814418437807",
        info: "27分钟",
      },
      {
        name: "2.不同的打包模式",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969127344#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979654395828538&term_id=100396581&type=3072&vid=5285890814566691111",
        info: "29分钟",
      },
      {
        name: "3.代码分割（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969127345#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979658690795834&term_id=100396581&type=3072&vid=5285890814702873100",
        info: "23分钟",
      },
      {
        name: "4.代码分割（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969127345#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979662985763130&term_id=100396581&type=3072&vid=5285890814748511984",
        info: "29分钟",
      },
      {
        name: "5.代码分割（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969127345#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979667280730426&term_id=100396581&type=3072&vid=5285890815667009825",
        info: "22分钟",
      },
      {
        name: "6.代码分割（四）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969127345#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979671575697722&term_id=100396581&type=3072&vid=5285890815666988499",
        info: "23分钟",
      },
    ],
  },
  {
    index: "83.",
    title: "前端工程化利器-Webpack『进阶』篇（5节）",
    child: [
      {
        name: "1.懒加载",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969129911#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979675870665018&term_id=100396581&type=3072&vid=5285890815667103400",
        info: "21分钟",
      },
      {
        name: "2.CSS代码分割",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969129911#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979680165632314&term_id=100396581&type=3072&vid=5285890815667103538",
        info: "21分钟",
      },
      {
        name: "3.浏览器缓存",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969129912#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979684460599610&term_id=100396581&type=3072&vid=5285890815667085586",
        info: "22分钟",
      },
      {
        name: "4.Webpack4和Webpack5的区别",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969129912#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979688755566906&term_id=100396581&type=3072&vid=5285890815993710611",
        info: "22分钟",
      },
      {
        name: "5.使用Webpack5打包",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969129912#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979693050534202&term_id=100396581&type=3072&vid=5285890815993729753",
        info: "23分钟",
      },
    ],
  },
  {
    index: "84.",
    title: "前端工程化利器-Webpack『进阶』篇（8节）",
    child: [
      {
        name: "1.Webpack性能优化（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969131362#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979697345501498&term_id=100396581&type=3072&vid=5285890815994494694",
        info: "31分钟",
      },
      {
        name: "2.Webpack性能优化（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969131362#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979701640468794&term_id=100396581&type=3072&vid=5285890815994833887",
        info: "37分钟",
      },
      {
        name: "3.Webpack性能优化（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969131362#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979705935436090&term_id=100396581&type=3072&vid=5285890815995163839",
        info: "32分钟",
      },
      {
        name: "4.Webpack性能优化（四）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969131363#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979710230403386&term_id=100396581&type=3072&vid=5285890815995532833",
        info: "35分钟",
      },
      {
        name: "5.Webpack性能优化（五）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969131363#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979714525370682&term_id=100396581&type=3072&vid=5285890815995934470",
        info: "39分钟",
      },
      {
        name: "6.Webpack性能优化（六）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969131363#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979718820337978&term_id=100396581&type=3072&vid=5285890815996770672",
        info: "35分钟",
      },
      {
        name: "7.Webpack性能优化（七）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969131363#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979723115305274&term_id=100396581&type=3072&vid=5285890815996822651",
        info: "24分钟",
      },
      {
        name: "8.Webpack性能优化（八）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969131363#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979727410272570&term_id=100396581&type=3072&vid=5285890815996830343",
        info: "34分钟",
      },
    ],
  },
  {
    index: "85.",
    title: "前端工程化利器-Webpack『进阶』篇（5节）",
    child: [
      {
        name: "1.Webpack性能优化（九）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969133277#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979731705239866&term_id=100396581&type=3072&vid=5285890815997542457",
        info: "29分钟",
      },
      {
        name: "2.Webpack性能优化（十）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969133278#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979736000207162&term_id=100396581&type=3072&vid=5285890815997844818",
        info: "35分钟",
      },
      {
        name: "3.Webpack性能优化（十一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969133278#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979740295174458&term_id=100396581&type=3072&vid=5285890815998080430",
        info: "31分钟",
      },
      {
        name: "4.Babel的使用（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969133278#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979744590141754&term_id=100396581&type=3072&vid=5285890815998677297",
        info: "32分钟",
      },
      {
        name: "5.Babel的使用（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969133278#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10979748885109050&term_id=100396581&type=3072&vid=5285890815998999038",
        info: "33分钟",
      },
    ],
  },
  {
    index: "86.",
    title: "分布式版本控制系统-项目管理神器『Git』篇（9节）",
    child: [
      {
        name: "1.Git简介、安装、创建版本库、版本回退",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969137032#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021530967906618&term_id=100396581&type=3072&vid=5285890809759413221",
        info: "26分钟",
      },
      {
        name: "2.工作区、版本库、暂存区、撤销修改",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969137033#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021535262873914&term_id=100396581&type=3072&vid=5285890809759413232",
        info: "28分钟",
      },
      {
        name: "3.添加远程仓库、从远程仓库克隆",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969137033#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021539557841210&term_id=100396581&type=3072&vid=5285890809803347122",
        info: "27分钟",
      },
      {
        name: "4.创建分支、合并分支、解决合并冲突",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969137033#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021543852808506&term_id=100396581&type=3072&vid=5285890809803347143",
        info: "26分钟",
      },
      {
        name: "5.合并分支的模式",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969137033#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021548147775802&term_id=100396581&type=3072&vid=5285890809837133161",
        info: "25分钟",
      },
      {
        name: "6.远程仓库的使用（3）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969137033#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021552442743098&term_id=100396581&type=3072&vid=5285890809837133177",
        info: "23分钟",
      },
      {
        name: "7.远程仓库的使用（4）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969137034#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021556737710394&term_id=100396581&type=3072&vid=5285890809912434553",
        info: "21分钟",
      },
      {
        name: "8.远程仓库的使用（5）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969137034#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021561032677690&term_id=100396581&type=3072&vid=5285890809912434580",
        info: "21分钟",
      },
      {
        name: "9.远程仓库的使用（6）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969137034#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3264149375490362&term_id=100396581&type=3072&vid=5285890809912434621",
        info: "30分钟",
      },
    ],
  },
  {
    index: "87.",
    title: "JS提升-新闻头条综合实战（10节）",
    child: [
      {
        name: "1.学习内容、目标、要求、成果展示",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969138900#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665763177404730&term_id=100396581&type=3072&vid=5285890809677683655",
        info: "29分钟",
      },
      {
        name: "2.『Webpack项目工程化与自动化』深入剖析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969138900#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665767472372026&term_id=100396581&type=3072&vid=5285890809677683675",
        info: "29分钟",
      },
      {
        name: "3.『Webpack项目工程化搭建与配置』实战",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969138900#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665771767339322&term_id=100396581&type=3072&vid=5285890809677683688",
        info: "25分钟",
      },
      {
        name: "4.『项目的组件化与模块化』深入剖析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969138900#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665776062306618&term_id=100396581&type=3072&vid=5285890809677683699",
        info: "46分钟",
      },
      {
        name: "5.前端项目架构、项目目录结构与必要文件创建",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969138901#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665780357273914&term_id=100396581&type=3072&vid=5285890809677693720",
        info: "20分钟",
      },
      {
        name: "6.header组件、模板变量替换与渲染",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969138901#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665784652241210&term_id=100396581&type=3072&vid=5285890809677693735",
        info: "20分钟",
      },
      {
        name: "7.导航组件、组件数据的传入与渲染机制",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969138901#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665788947208506&term_id=100396581&type=3072&vid=5285890809677693755",
        info: "22分钟",
      },
      {
        name: "8.请求数据与分析、数据结构化与分页机制",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969138901#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665793242175802&term_id=100396581&type=3072&vid=5285890809677693777",
        info: "13分钟",
      },
      {
        name: "9.列表多模板组件与按需模板渲染机制",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969138901#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665797537143098&term_id=100396581&type=3072&vid=5285890809677693789",
        info: "20分钟",
      },
      {
        name: "10.前端缓存池技术与页面加载组件使用技巧",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969138902#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665801832110394&term_id=100396581&type=3072&vid=5285890809677693823",
        info: "13分钟",
      },
    ],
  },
  {
    index: "88.",
    title: "JS提升-新闻头条综合实战（7节）",
    child: [
      {
        name: "1.上拉加载提示组件与状态管理",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969141430#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665806127077690&term_id=100396581&type=3072&vid=5285890809678211973",
        info: "11分钟",
      },
      {
        name: "2.上拉加载更多功能与细节问题处理",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969141430#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665810422044986&term_id=100396581&type=3072&vid=5285890809678293156",
        info: "15分钟",
      },
      {
        name: "3.抽象方法、跳转页面行为与数据传递机制",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969141431#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665814717012282&term_id=100396581&type=3072&vid=5285890809678424945",
        info: "14分钟",
      },
      {
        name: "4.新闻详情页面组件与前端获取URL参数方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969141431#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665819011979578&term_id=100396581&type=3072&vid=5285890809678424997",
        info: "11分钟",
      },
      {
        name: "5.收藏组件、收藏行为与数据结构处理",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969141431#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665823306946874&term_id=100396581&type=3072&vid=5285890809678567158",
        info: "18分钟",
      },
      {
        name: "6.收藏页面列表组件复用与收藏数据结构化",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969141431#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665827601914170&term_id=100396581&type=3072&vid=5285890809678628115",
        info: "13分钟",
      },
      {
        name: "7.异常处理、真机预览调试、上线项目",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969141431#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10325457862203706&term_id=100396581&type=3072&vid=5285890809678882086",
        info: "25分钟",
      },
    ],
  },
  {
    index: "89.",
    title: "『Vue』深度学习系列课程 - 『Vue本尊』（10节）",
    child: [
      {
        name: "1.渐进式框架、三大框架对比、数据流和绑定",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969142938#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732265810073914&term_id=100396581&type=3072&vid=3701925919811541189",
        info: "32分钟",
      },
      {
        name: "2.Vue项目的几种构建方式",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969142939#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732270105041210&term_id=100396581&type=3072&vid=243791576086389980",
        info: "59分钟",
      },
      {
        name: "3.Webpack从0开始搭建Vue2/3项目",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969142939#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732274400008506&term_id=100396581&type=3072&vid=3701925919804047227",
        info: "19分钟",
      },
      {
        name: "4.认识Vue以及它的基本用法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969142939#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732278694975802&term_id=100396581&type=3072&vid=3701925919809344404",
        info: "35分钟",
      },
      {
        name: "5.认识Vue以及组件化构建",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969142939#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732282989943098&term_id=100396581&type=3072&vid=3701925919902657168",
        info: "38分钟",
      },
      {
        name: "6.应用实例、组件实例与根组件实例",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969142939#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732287284910394&term_id=100396581&type=3072&vid=3701925920068293241",
        info: "49分钟",
      },
      {
        name: "7.【MVVM专题】认识以及实现MVC（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969142940#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732291579877690&term_id=100396581&type=3072&vid=3701925920102129198",
        info: "26分钟",
      },
      {
        name: "8.【MVVM专题】认识以及实现MVC（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969142940#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732295874844986&term_id=100396581&type=3072&vid=3701925920102938917",
        info: "30分钟",
      },
      {
        name: "9.【MVVM专题】认识和实现MVVM轮子（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969142940#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732300169812282&term_id=100396581&type=3072&vid=3701925919984664060",
        info: "26分钟",
      },
      {
        name: "10.【MVVM专题】认识和实现MVVM轮子（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969142940#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732304464779578&term_id=100396581&type=3072&vid=3701925920117487455",
        info: "27分钟",
      },
    ],
  },
  {
    index: "90.",
    title: "『Vue』深度学习系列课程 - 『Vue本尊』（10节）",
    child: [
      {
        name: "1.【MVVM专题】认识和实现MVVM轮子（3）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969145594#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732308759746874&term_id=100396581&type=3072&vid=3701925920138098090",
        info: "28分钟",
      },
      {
        name: "2.【MVVM专题】认识和实现MVVM轮子（4）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969145595#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732313054714170&term_id=100396581&type=3072&vid=3701925920142092530",
        info: "32分钟",
      },
      {
        name: "3.【模板专题课】认识Mustache与Vue编译",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969145595#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732317349681466&term_id=100396581&type=3072&vid=3701925920706836358",
        info: "29分钟",
      },
      {
        name: "4.【模板专题课】认识Vue的内置指令（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969145595#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732321644648762&term_id=100396581&type=3072&vid=3701925920706825637",
        info: "27分钟",
      },
      {
        name: "5.【模板专题课】插值表达式的使用指南",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969145596#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732325939616058&term_id=100396581&type=3072&vid=3701925920711738844",
        info: "31分钟",
      },
      {
        name: "6.【模板专题课】认识Vue的内置指令（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969145596#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732330234583354&term_id=100396581&type=3072&vid=3701925920717185831",
        info: "29分钟",
      },
      {
        name: "7.【铺垫课】ES5-ES6贯穿对象深拷贝问题",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969145596#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732334529550650&term_id=100396581&type=3072&vid=3701925920804626837",
        info: "36分钟",
      },
      {
        name: "8.深入研究data属性以及数据响应式实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969145596#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732338824517946&term_id=100396581&type=3072&vid=3701925920804621291",
        info: "27分钟",
      },
      {
        name: "9.【课前准备】Express编写后端数据接口",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969145596#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732343119485242&term_id=100396581&type=3072&vid=3701925920661145444",
        info: "10分钟",
      },
      {
        name: "10.深入研究methods属性以及实例方法挂载实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969145596#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732347414452538&term_id=100396581&type=3072&vid=3701925920817743375",
        info: "37分钟",
      },
    ],
  },
  {
    index: "91.",
    title: "『Vue』深度学习系列课程 - 『Vue本尊』（10节）",
    child: [
      {
        name: "1.【实现课】认识v-if/v-show与构建架子",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969147393#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732351709419834&term_id=100396581&type=3072&vid=3701925920953155264",
        info: "26分钟",
      },
      {
        name: "2.【实现课】实现v-if/v-show与生命周期",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969147393#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732356004387130&term_id=100396581&type=3072&vid=3701925920953651117",
        info: "28分钟",
      },
      {
        name: "3.【实现课】从Webpack到v-show/if",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969147394#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169765594241338&term_id=100396581&type=3072&vid=387702298265257682",
        info: "147分钟",
      },
      {
        name: "4.深入研究计算属性以及应用场景分析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969147394#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732360299354426&term_id=100396581&type=3072&vid=3701925921191549002",
        info: "30分钟",
      },
      {
        name: "5.【实现课】实现computed与依赖收集",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969147394#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732364594321722&term_id=100396581&type=3072&vid=3701925921192603216",
        info: "39分钟",
      },
      {
        name: "6.【watch专题】计算属性与侦听器应用分析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969147394#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732368889289018&term_id=100396581&type=3072&vid=3701925921263187024",
        info: "23分钟",
      },
      {
        name: "7.【watch专题】案例所需Node接口编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969147394#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732373184256314&term_id=100396581&type=3072&vid=3701925921263239585",
        info: "24分钟",
      },
      {
        name: "8.【watch专题】计算属性与侦听器综合案例",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969147396#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732377479223610&term_id=100396581&type=3072&vid=3701925921109902676",
        info: "26分钟",
      },
      {
        name: "9.【watch实现课】实现响应式与暴露回调接口",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969147396#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732381774190906&term_id=100396581&type=3072&vid=3701925921313100633",
        info: "24分钟",
      },
      {
        name: "10.【watch实现课】实现计算属性特性",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969147396#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732386069158202&term_id=100396581&type=3072&vid=3701925921313141595",
        info: "21分钟",
      },
    ],
  },
  {
    index: "92.",
    title: "『Vue』深度学习系列课程 - 『Vue本尊』（10节）",
    child: [
      {
        name: "1.【watch实现课】实现侦听器特性",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969150196#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732390364125498&term_id=100396581&type=3072&vid=3701925921313620032",
        info: "19分钟",
      },
      {
        name: "2.【准备课】Webpack样式相关配置方案",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969150196#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732394659092794&term_id=100396581&type=3072&vid=3701925921252077537",
        info: "33分钟",
      },
      {
        name: "3.class绑定方法案例分析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969150196#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732398954060090&term_id=100396581&type=3072&vid=3701925921501418745",
        info: "23分钟",
      },
      {
        name: "4.style绑定方法案例分析与变量命名法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969150197#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732403249027386&term_id=100396581&type=3072&vid=3701925921504182837",
        info: "26分钟",
      },
      {
        name: "5.【实现课】class和style绑定实现架子",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969150197#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732407543994682&term_id=100396581&type=3072&vid=3701925921615968783",
        info: "22分钟",
      },
      {
        name: "6.【实现课】class对象与数组的绑定",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969150197#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732411838961978&term_id=100396581&type=3072&vid=3701925921615968803",
        info: "29分钟",
      },
      {
        name: "7.【实现课】style对象与数组绑定与样式更新",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969150197#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732416133929274&term_id=100396581&type=3072&vid=3701925921617322610",
        info: "26分钟",
      },
      {
        name: "8.条件渲染v-show/v-if",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969150197#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732420428896570&term_id=100396581&type=3072&vid=3701925922204478425",
        info: "30分钟",
      },
      {
        name: "9.列表渲染v-for",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969150197#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732424723863866&term_id=100396581&type=3072&vid=3701925922282928562",
        info: "39分钟",
      },
      {
        name: "10.【铺垫课】数组变更检测方案分析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969150197#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732429018831162&term_id=100396581&type=3072&vid=3701925922318391907",
        info: "30分钟",
      },
    ],
  },
  {
    index: "93.",
    title: "『Vue』深度学习系列课程 - 『Vue本尊』（10节）",
    child: [],
  },
  {
    index: "94.",
    title: "『Vue』深度学习系列课程 - 『Vue本尊』（10节）",
    child: [],
  },
  {
    index: "95.",
    title: "『Vue』深度学习系列课程 - 『Vue本尊』（10节）",
    child: [
      {
        name: "1.【组件化Tab】深入组件化（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969152554#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732519213144378&term_id=100396581&type=3072&vid=3701925923399632442",
        info: "32分钟",
      },
      {
        name: "2.【组件化Tab】深入组件化（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969152554#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732523508111674&term_id=100396581&type=3072&vid=3701925923399632467",
        info: "24分钟",
      },
      {
        name: "3.【组件化Modal】深入组件化（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969152554#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732527803078970&term_id=100396581&type=3072&vid=3701925923407710599",
        info: "31分钟",
      },
      {
        name: "4.【组件化Modal】深入组件化（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969152555#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732532098046266&term_id=100396581&type=3072&vid=3701925923406748286",
        info: "22分钟",
      },
      {
        name: "5.【组件化-动态组件】深入组件化",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969152555#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169769889208634&term_id=100396581&type=3072&vid=3701925923503554451",
        info: "43分钟",
      },
      {
        name: "6.组件注册深入",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969152555#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169774184175930&term_id=100396581&type=3072&vid=3701925923606352247",
        info: "41分钟",
      },
      {
        name: "7.手写tpl-loader分离出模板文件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969152555#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169778479143226&term_id=100396581&type=3072&vid=3701925923619875686",
        info: "26分钟",
      },
      {
        name: "8.【铺垫课】Web components标准",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969152555#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169782774110522&term_id=100396581&type=3072&vid=3701925923658318529",
        info: "37分钟",
      },
      {
        name: "9.【插槽】了解Vue的插槽以及基本用法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969152555#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169787069077818&term_id=100396581&type=3072&vid=3701925923706973183",
        info: "26分钟",
      },
      {
        name: "10.【插槽】具名插槽的特点与应用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969152555#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169791364045114&term_id=100396581&type=3072&vid=3701925923707728996",
        info: "39分钟",
      },
    ],
  },
  {
    index: "96.",
    title: "『Vue』深度学习系列课程 - 『Vue本尊』（10节）",
    child: [
      {
        name: "1.作用域插槽与动态插槽",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969155090#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169795659012410&term_id=100396581&type=3072&vid=3701925924101808085",
        info: "24分钟",
      },
      {
        name: "2.树形结构组件与组件递归",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969155091#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169799953979706&term_id=100396581&type=3072&vid=3701925923707726456",
        info: "42分钟",
      },
      {
        name: "3.组件化、Provide与Inject的基本认识",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969155091#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169804248947002&term_id=100396581&type=3072&vid=3701925924244314175",
        info: "26分钟",
      },
      {
        name: "4.Provide与Inject应用（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969155091#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169808543914298&term_id=100396581&type=3072&vid=3701925924240940254",
        info: "26分钟",
      },
      {
        name: "5.Provide与Inject应用（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969155091#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169812838881594&term_id=100396581&type=3072&vid=3701925924240956163",
        info: "29分钟",
      },
      {
        name: "6.【铺垫课】import的静态与动态导入",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969155092#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169817133848890&term_id=100396581&type=3072&vid=3701925924486268341",
        info: "36分钟",
      },
      {
        name: "7.keep-alive、动态组件与异步组件（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969155092#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169821428816186&term_id=100396581&type=3072&vid=3701925924321056296",
        info: "26分钟",
      },
      {
        name: "8.keep-alive、动态组件与异步组件（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969155092#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169825723783482&term_id=100396581&type=3072&vid=3701925924322141927",
        info: "21分钟",
      },
      {
        name: "9.深入应用动态、异步与suspense组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969155092#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169830018750778&term_id=100396581&type=3072&vid=387702299695314059",
        info: "36分钟",
      },
      {
        name: "10.深入学习keep-alive",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969155092#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169834313718074&term_id=100396581&type=3072&vid=387702299694911802",
        info: "40分钟",
      },
    ],
  },
  {
    index: "97.",
    title: "『Vue』深度学习系列课程 - 『Vue本尊』（10节）",
    child: [
      {
        name: "1.实现keep-alive虚拟节点缓存",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969157550#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169838608685370&term_id=100396581&type=3072&vid=387702299695433053",
        info: "27分钟",
      },
      {
        name: "2.【ref】HTML元素上指定ref的应用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969157550#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169842903652666&term_id=100396581&type=3072&vid=3701925924762510367",
        info: "39分钟",
      },
      {
        name: "3.【ref】组件上指定ref的应用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969157551#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169847198619962&term_id=100396581&type=3072&vid=3701925924765066298",
        info: "30分钟",
      },
      {
        name: "4.【props】基本认知与类型定义",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969157551#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169851493587258&term_id=100396581&type=3072&vid=3701925924801318629",
        info: "30分钟",
      },
      {
        name: "5.【props】深入props的应用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969157551#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169855788554554&term_id=100396581&type=3072&vid=3701925924802108904",
        info: "31分钟",
      },
      {
        name: "6.【props】深入props的验证方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969157551#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169860083521850&term_id=100396581&type=3072&vid=3701925924802131880",
        info: "33分钟",
      },
      {
        name: "7.attributes传递与继承",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969157551#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169864378489146&term_id=100396581&type=3072&vid=3701925924936188039",
        info: "40分钟",
      },
      {
        name: "8.自定义事件（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969157552#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169868673456442&term_id=100396581&type=3072&vid=387702298956660039",
        info: "29分钟",
      },
      {
        name: "9.自定义事件（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969157552#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169872968423738&term_id=100396581&type=3072&vid=387702298956561111",
        info: "29分钟",
      },
      {
        name: "10.自定义指令概念、生命周期与参数",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969157552#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169877263391034&term_id=100396581&type=3072&vid=387702299042468291",
        info: "36分钟",
      },
    ],
  },
  {
    index: "98.",
    title: "『Vue』深度学习系列课程 - 『Vue本尊』（10节）",
    child: [
      {
        name: "1.实现自定义指令v-show/v-if",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969159160#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169881558358330&term_id=100396581&type=3072&vid=387702299042473013",
        info: "36分钟",
      },
      {
        name: "2.【自定义指令】tab切换指令实现（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969159161#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169885853325626&term_id=100396581&type=3072&vid=387702299039262746",
        info: "23分钟",
      },
      {
        name: "3.【自定义指令】tab切换指令实现（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969159161#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169890148292922&term_id=100396581&type=3072&vid=387702299039291219",
        info: "32分钟",
      },
      {
        name: "4.【自定义指令】v-lazy实现（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969159161#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169894443260218&term_id=100396581&type=3072&vid=387702299039031943",
        info: "28分钟",
      },
      {
        name: "5.【自定义指令】v-lazy实现（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969159161#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169898738227514&term_id=100396581&type=3072&vid=387702299038970869",
        info: "43分钟",
      },
      {
        name: "6.teleport的特点与应用场景",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969159162#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169903033194810&term_id=100396581&type=3072&vid=387702299083054219",
        info: "22分钟",
      },
      {
        name: "7.深入研究插件化开发与UI组件库实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969159162#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169907328162106&term_id=100396581&type=3072&vid=387702299090031677",
        info: "33分钟",
      },
      {
        name: "8.【插件+teleport】Vue3插件化开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969159162#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169911623129402&term_id=100396581&type=3072&vid=387702299091898173",
        info: "36分钟",
      },
      {
        name: "9.【插件+extend】Vue2插件化开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969159162#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169915918096698&term_id=100396581&type=3072&vid=387702299092178540",
        info: "32分钟",
      },
      {
        name: "10.mixin的特性与应用场景",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969159162#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169920213063994&term_id=100396581&type=3072&vid=387702299199347401",
        info: "26分钟",
      },
    ],
  },
  {
    index: "99.",
    title: "『Vue』深度学习系列课程 - 『Vue本尊』（10节）",
    child: [
      {
        name: "1.编译过程、渲染函数与h函数",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969162289#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169924508031290&term_id=100396581&type=3072&vid=387702299317906759",
        info: "45分钟",
      },
      {
        name: "2.渲染函数与h函数的使用事项",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969162290#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169928802998586&term_id=100396581&type=3072&vid=387702299345722502",
        info: "50分钟",
      },
      {
        name: "3.结合react深度学习JSX",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969162290#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169933097965882&term_id=100396581&type=3072&vid=387702299345719123",
        info: "40分钟",
      },
      {
        name: "4.DOM Diff专题（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969162290#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169937392933178&term_id=100396581&type=3072&vid=387702299347735713",
        info: "42分钟",
      },
      {
        name: "5.DOM Diff专题（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969162290#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169941687900474&term_id=100396581&type=3072&vid=387702299347670220",
        info: "51分钟",
      },
      {
        name: "6.应用配置专题课",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969162291#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169945982867770&term_id=100396581&type=3072&vid=387702299356488827",
        info: "51分钟",
      },
      {
        name: "7.【组合式API铺垫课】派发器思想的尝试（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969162291#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169950277835066&term_id=100396581&type=3072&vid=387702299358106978",
        info: "36分钟",
      },
      {
        name: "8.【组合式API铺垫课】派发器思想的尝试（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969162291#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169954572802362&term_id=100396581&type=3072&vid=387702299358405958",
        info: "28分钟",
      },
      {
        name: "9.【组合式API铺垫课】派发器思想的尝试（3）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969162291#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169958867769658&term_id=100396581&type=3072&vid=387702299358407321",
        info: "29分钟",
      },
      {
        name: "10.【组合式API】从选项API到组合API",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969162291#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169963162736954&term_id=100396581&type=3072&vid=387702299392860617",
        info: "45分钟",
      },
    ],
  },
  {
    index: "100.",
    title: "『Vue』深度学习系列课程 - 『Vue本尊』（10节）",
    child: [
      {
        name: "1.【组合式API】深入学习setup函数",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969163975#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169967457704250&term_id=100396581&type=3072&vid=387702299730085813",
        info: "39分钟",
      },
      {
        name: "2.【组合式API】深入学习Vue的生命周期",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969163976#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169971752671546&term_id=100396581&type=3072&vid=387702299731032671",
        info: "37分钟",
      },
      {
        name: "3.【组合式API】activated应用场景",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969163976#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13169976047638842&term_id=100396581&type=3072&vid=387702299736793088",
        info: "37分钟",
      },
      {
        name: "4.【组合式API】provide与inject",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969163976#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13447662863194426&term_id=100396581&type=3072&vid=387702301973383975",
        info: "42分钟",
      },
      {
        name: "5.【组合式API】获取当前实例与全局属性",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969163976#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13447667158161722&term_id=100396581&type=3072&vid=387702301974329579",
        info: "34分钟",
      },
      {
        name: "6.【组合式API】响应式的原理及实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969163977#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13988966181443898&term_id=100396581&type=3072&vid=243791576225640233",
        info: "49分钟",
      },
      {
        name: "7.【组合式API】响应式与nextTick实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969163977#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13988970476411194&term_id=100396581&type=3072&vid=243791576225886450",
        info: "30分钟",
      },
      {
        name: "8.【组合式API】响应式API特性(1)",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969163977#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13988974771378490&term_id=100396581&type=3072&vid=243791576225642781",
        info: "33分钟",
      },
      {
        name: "9.【组合式API】响应式API特性(2)",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969163977#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13988979066345786&term_id=100396581&type=3072&vid=243791576227036909",
        info: "32分钟",
      },
      {
        name: "10.【组合式API】依赖收集的实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969163977#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13988983361313082&term_id=100396581&type=3072&vid=243791576228496789",
        info: "52分钟",
      },
    ],
  },
  {
    index: "101.",
    title: "『Vue』深度学习系列课程 - 『Vue本尊』（9节）",
    child: [
      {
        name: "1.【组合式API】React hooks集成",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969166382#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13988957591509306&term_id=100396581&type=3072&vid=243791576228967865",
        info: "29分钟",
      },
      {
        name: "2.【组合式API】封装响应式hooks",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969166382#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13988961886476602&term_id=100396581&type=3072&vid=243791576229120271",
        info: "42分钟",
      },
      {
        name: "3.【组合式API】侦听器的基本认知",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969166382#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13999755139291450&term_id=100396581&type=3072&vid=243791576593645749",
        info: "35分钟",
      },
      {
        name: "4.【组合式API】watch的应用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969166383#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13999759434258746&term_id=100396581&type=3072&vid=243791575991635006",
        info: "40分钟",
      },
      {
        name: "5.【组合式API】watchEffect的应用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969166383#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13999763729226042&term_id=100396581&type=3072&vid=243791576593229246",
        info: "39分钟",
      },
      {
        name: "6.【组合式API】计算属性与其他组合API",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969166383#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13999768024193338&term_id=100396581&type=3072&vid=243791576593229312",
        info: "50分钟",
      },
      {
        name: "7.【组合式API】依赖收集的基本认知",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969166383#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13999772319160634&term_id=100396581&type=3072&vid=243791575991899018",
        info: "33分钟",
      },
      {
        name: "8.【组合式API】依赖收集的实现（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969166383#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13999776614127930&term_id=100396581&type=3072&vid=243791576593907278",
        info: "27分钟",
      },
      {
        name: "9.【组合式API】依赖收集的实现（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969166384#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13999780909095226&term_id=100396581&type=3072&vid=243791575991482315",
        info: "31分钟",
      },
    ],
  },
  {
    index: "102.",
    title: "『Vue』深度学习系列课程 - 『Vue本尊』（5节）",
    child: [
      {
        name: "1.script setup（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969168046#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14003358616852794&term_id=100396581&type=3072&vid=243791576704708071",
        info: "32分钟",
      },
      {
        name: "2.script setup（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969168046#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14003362911820090&term_id=100396581&type=3072&vid=243791576705046504",
        info: "38分钟",
      },
      {
        name: "3.响应式案例（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969168046#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14003367206787386&term_id=100396581&type=3072&vid=243791575992082693",
        info: "30分钟",
      },
      {
        name: "4.响应式案例（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969168047#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14003371501754682&term_id=100396581&type=3072&vid=243791576705046550",
        info: "32分钟",
      },
      {
        name: "5.响应式案例（3）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969168047#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14003375796721978&term_id=100396581&type=3072&vid=243791576705844160",
        info: "33分钟",
      },
    ],
  },
  {
    index: "103.",
    title: "『Vue』深度学习系列课程 - 『递归组件』（5节）",
    child: [
      {
        name: "1.递归组件（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969169409#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13896521305364794&term_id=100396581&type=3072&vid=387702306938682295",
        info: "35分钟",
      },
      {
        name: "2.递归组件（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969169409#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13896525600332090&term_id=100396581&type=3072&vid=387702306938985703",
        info: "32分钟",
      },
      {
        name: "3.递归组件（3）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969169409#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13896529895299386&term_id=100396581&type=3072&vid=387702306938682321",
        info: "39分钟",
      },
      {
        name: "4.递归组件（4）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969169410#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13896534190266682&term_id=100396581&type=3072&vid=387702306939215069",
        info: "38分钟",
      },
      {
        name: "5.递归组件（5）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969169410#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13896538485233978&term_id=100396581&type=3072&vid=387702306939215076",
        info: "24分钟",
      },
    ],
  },
  {
    index: "104.",
    title: "TypeScript『路由权限』前后端设计专题课（9节）",
    child: [
      {
        name: "1.所有依赖相关的知识",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969170692#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14125189659171130&term_id=100396581&type=3072&vid=243791579740332000",
        info: "39分钟",
      },
      {
        name: "2.洋葱模型、router与rest-client",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969170692#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14125193954138426&term_id=100396581&type=3072&vid=243791579652901760",
        info: "31分钟",
      },
      {
        name: "3.创建数据库、编写User模型与注册接口",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969170692#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14125198249105722&term_id=100396581&type=3072&vid=243791579783764033",
        info: "34分钟",
      },
      {
        name: "4.编写获取用户列表与登录API",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969170692#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14125202544073018&term_id=100396581&type=3072&vid=243791579657955969",
        info: "26分钟",
      },
      {
        name: "5.API权限JWT验证与总结",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969170693#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14125206839040314&term_id=100396581&type=3072&vid=243791579653540033",
        info: "40分钟",
      },
      {
        name: "6.服务端开发补充与前端项目搭建",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969170693#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14129085194508602&term_id=100396581&type=3072&vid=243791579653535798",
        info: "34分钟",
      },
      {
        name: "7.Axios拦截器设置",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969170693#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14129089489475898&term_id=100396581&type=3072&vid=243791579653557782",
        info: "24分钟",
      },
      {
        name: "8.登录与注册的实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969170693#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14129093784443194&term_id=100396581&type=3072&vid=243791579785409918",
        info: "30分钟",
      },
      {
        name: "9.登录与注册的实现与导航守卫",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969170693#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14129098079410490&term_id=100396581&type=3072&vid=243791579784254878",
        info: "35分钟",
      },
    ],
  },
  {
    index: "105.",
    title: "『Vue』深度学习系列课程 - 『Vuex』（5节）",
    child: [
      {
        name: "1.Vuex的设计理念",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969172064#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13805498063460666&term_id=100396581&type=3072&vid=387702305229698725",
        info: "30分钟",
      },
      {
        name: "2.搭建项目与Vuex的使用方法（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969172064#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13805502358427962&term_id=100396581&type=3072&vid=387702305229698732",
        info: "30分钟",
      },
      {
        name: "3.搭建项目与Vuex的使用方法（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969172064#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13805506653395258&term_id=100396581&type=3072&vid=387702305229608904",
        info: "39分钟",
      },
      {
        name: "4.基本实现与设计思想、方案与技巧（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969172065#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13805510948362554&term_id=100396581&type=3072&vid=387702305229297273",
        info: "47分钟",
      },
      {
        name: "5.基本实现与设计思想、方案与技巧（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969172065#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13805515243329850&term_id=100396581&type=3072&vid=387702305231821383",
        info: "44分钟",
      },
    ],
  },
  {
    index: "106.",
    title: "『Vite』深度学习课程（4节）",
    child: [
      {
        name: "1.【实现】基本认知与包的外部链接",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969173221#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13682816617617722&term_id=100396581&type=3072&vid=387702304512512769",
        info: "34分钟",
      },
      {
        name: "2.【实现】中间件、洋葱模型和开发环境服务",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969173222#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13682820912585018&term_id=100396581&type=3072&vid=387702304513110433",
        info: "42分钟",
      },
      {
        name: "3.【实现】静态服务与模块路径的录取与重写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969173222#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13682825207552314&term_id=100396581&type=3072&vid=387702304513671007",
        info: "42分钟",
      },
      {
        name: "4.【实现】解析单文件组件以及跑通vite服务",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969173222#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13682829502519610&term_id=100396581&type=3072&vid=387702304515555243",
        info: "35分钟",
      },
    ],
  },
  {
    index: "107.",
    title: "前端JS框架-绝不简单的『VueJS』基础篇（9节）",
    child: [
      {
        name: "1.Vue介绍、指令基础、TodoList、设计模式",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969174504#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021565327644986&term_id=100396581&type=3072&vid=5285890788153312830",
        info: "87分钟",
      },
      {
        name: "2.组件介绍、组件的注册、命名、组件间传值",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969174504#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021569622612282&term_id=100396581&type=3072&vid=5285890787830094654",
        info: "96分钟",
      },
      {
        name: "3.生命周期、模板、计算属性、方法、侦听器",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969174505#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021573917579578&term_id=100396581&type=3072&vid=5285890788002399476",
        info: "151分钟",
      },
      {
        name: "4.class绑定、style绑定、条件渲染",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969174505#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021578212546874&term_id=100396581&type=3072&vid=5285890787905681234",
        info: "87分钟",
      },
      {
        name: "5.列表渲染、DOM模板、子组件data、ref属性",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969174505#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021582507514170&term_id=100396581&type=3072&vid=5285890793504487558",
        info: "115分钟",
      },
      {
        name: "6.prop与非prop、.native、非父子组件传值",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969174505#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021586802481466&term_id=100396581&type=3072&vid=5285890793625143240",
        info: "114分钟",
      },
      {
        name: "7.单个插槽、具名插槽、作用域插槽、动态组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969174506#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021591097448762&term_id=100396581&type=3072&vid=5285890787930018611",
        info: "91分钟",
      },
      {
        name: "8.CSS过渡/动画、自定义过渡、使用过渡和动画",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969174506#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021595392416058&term_id=100396581&type=3072&vid=5285890793442313081",
        info: "85分钟",
      },
      {
        name: "9.JS钩子、多元素组件/列表过渡、动画封装",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969174506#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021599687383354&term_id=100396581&type=3072&vid=5285890788004140713",
        info: "93分钟",
      },
    ],
  },
  {
    index: "108.",
    title: "React与Vue - 派发器方案（10节）",
    child: [
      {
        name: "1.【开头】",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969176373#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021603982350650&term_id=100396581&type=3072&vid=5285890787959203956",
        info: "1分钟",
      },
      {
        name: "2.Vue2.x实现方案（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969176373#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021608277317946&term_id=100396581&type=3072&vid=387702301006994575",
        info: "36分钟",
      },
      {
        name: "3.Vue2.x实现方案（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969176373#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021612572285242&term_id=100396581&type=3072&vid=387702301007184561",
        info: "28分钟",
      },
      {
        name: "4.Vue2.x实现方案（3）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969176373#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021616867252538&term_id=100396581&type=3072&vid=387702301003601970",
        info: "29分钟",
      },
      {
        name: "5.React普通设计方案实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969176374#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021621162219834&term_id=100396581&type=3072&vid=387702301007574544",
        info: "51分钟",
      },
      {
        name: "6.React Hooks实现派发器方案",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969176374#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021625457187130&term_id=100396581&type=3072&vid=387702301006994582",
        info: "50分钟",
      },
      {
        name: "7.Vue3.x实现派发器方案",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969176374#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021629752154426&term_id=100396581&type=3072&vid=387702301007186639",
        info: "52分钟",
      },
      {
        name: "8.复习派发器方案及总结设计思想",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969176374#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021634047121722&term_id=100396581&type=3072&vid=387702301289392290",
        info: "36分钟",
      },
      {
        name: "9.编写后端API接口、跑通前后端",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969176374#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021638342089018&term_id=100396581&type=3072&vid=387702301289392304",
        info: "30分钟",
      },
      {
        name: "10.同步异步任务结构、通知任务执行",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969176374#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021642637056314&term_id=100396581&type=3072&vid=387702301290677175",
        info: "56分钟",
      },
    ],
  },
  {
    index: "109.",
    title: "『MVC』前后端设计专题（10节）",
    child: [
      {
        name: "1.请求资源与资源访问",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969178183#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021646932023610&term_id=100396581&type=3072&vid=243791578044728766",
        info: "29分钟",
      },
      {
        name: "2.服务端渲染与JS动态渲染",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969178183#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14074277116844346&term_id=100396581&type=3072&vid=243791578044034545",
        info: "32分钟",
      },
      {
        name: "3.其他语言与EJS混编模式",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969178183#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14074281411811642&term_id=100396581&type=3072&vid=243791578596641507",
        info: "40分钟",
      },
      {
        name: "4.抽离MVC层（案例）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969178184#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021651226990906&term_id=100396581&type=3072&vid=243791578044728791",
        info: "32分钟",
      },
      {
        name: "5.MVC设计思想分析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969178184#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14074285706778938&term_id=100396581&type=3072&vid=243791578041428975",
        info: "40分钟",
      },
      {
        name: "6.复习MVC、MongoDB安装与启动",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969178184#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14076875572058426&term_id=100396581&type=3072&vid=243791578598648358",
        info: "31分钟",
      },
      {
        name: "7.搭建项目、数据库与API浅学",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969178184#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14076879867025722&term_id=100396581&type=3072&vid=243791578598663749",
        info: "33分钟",
      },
      {
        name: "8.MVC组织分层与服务端渲染",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969178184#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14076884161993018&term_id=100396581&type=3072&vid=243791578078061780",
        info: "38分钟",
      },
      {
        name: "9.数据接口与异步请求",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969178185#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14076888456960314&term_id=100396581&type=3072&vid=243791578078107224",
        info: "30分钟",
      },
      {
        name: "10.Node中间层与API层",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969178185#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14076892751927610&term_id=100396581&type=3072&vid=243791578598679275",
        info: "30分钟",
      },
    ],
  },
  {
    index: "110.",
    title: "『MVC』前后端设计专题（4节）",
    child: [
      {
        name: "1.前端MVC分析与项目搭建",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969179645#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14078804012374330&term_id=100396581&type=3072&vid=243791578601009759",
        info: "32分钟",
      },
      {
        name: "2.实现路由、编写Service层",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969179646#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14078808307341626&term_id=100396581&type=3072&vid=243791578601048497",
        info: "31分钟",
      },
      {
        name: "3.实现C层逻辑与组件化",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969179646#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14078812602308922&term_id=100396581&type=3072&vid=243791578589970636",
        info: "28分钟",
      },
      {
        name: "4.Vue3 MVC的设计方案",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969179646#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14078816897276218&term_id=100396581&type=3072&vid=243791578601038908",
        info: "34分钟",
      },
    ],
  },
  {
    index: "111.",
    title: "『MVP』设计专题课程（4节）",
    child: [
      {
        name: "1.MVC的回顾与设计问题",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969279244#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14099711913171258&term_id=100396581&type=3072&vid=243791579389456916",
        info: "29分钟",
      },
      {
        name: "2.MVC与MVP的对比",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969279244#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14099716208138554&term_id=100396581&type=3072&vid=243791579389475225",
        info: "21分钟",
      },
      {
        name: "3.MVP实现（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969279244#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14099720503105850&term_id=100396581&type=3072&vid=243791579403675272",
        info: "27分钟",
      },
      {
        name: "4.MVP实现（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969279245#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14099724798073146&term_id=100396581&type=3072&vid=243791579385198565",
        info: "26分钟",
      },
    ],
  },
  {
    index: "112.",
    title: "『MVVM』设计专题课程（7节）",
    child: [
      {
        name: "1.回顾MVC与MVP的核心概念",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969277750#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14111918210226490&term_id=100396581&type=3072&vid=243791579650203294",
        info: "22分钟",
      },
      {
        name: "2.AngularJS到底是不是MVC？",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969277751#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14111922505193786&term_id=100396581&type=3072&vid=243791579654662929",
        info: "49分钟",
      },
      {
        name: "3.为什么说Angular是MVW？",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969277751#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14111926800161082&term_id=100396581&type=3072&vid=243791579654654270",
        info: "31分钟",
      },
      {
        name: "4.为什么React说是构建用户界面的库？",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969277751#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14111931095128378&term_id=100396581&type=3072&vid=243791579650204617",
        info: "27分钟",
      },
      {
        name: "5.Vue2与Vue3之间的设计差异",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969277751#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14111935390095674&term_id=100396581&type=3072&vid=243791579650224630",
        info: "38分钟",
      },
      {
        name: "6.实现MVVM（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969277751#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14111939685062970&term_id=100396581&type=3072&vid=243791579659347491",
        info: "26分钟",
      },
      {
        name: "7.实现MVVM（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969277751#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14111943980030266&term_id=100396581&type=3072&vid=243791579650246236",
        info: "28分钟",
      },
    ],
  },
  {
    index: "113.",
    title: "VueJS项目架构与组件化设计之『一线生活通』（5节）",
    child: [
      {
        name: "1.前置知识、涉及技术点、项目展示、课程规划",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969277234#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771861754517818&term_id=100396581&type=3072&vid=5285890794721606931",
        info: "26分钟",
      },
      {
        name: "2.项目搭建、依赖安装、目录结构讲解",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969277234#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771866049485114&term_id=100396581&type=3072&vid=5285890794721616937",
        info: "46分钟",
      },
      {
        name: "3.建立图标库、项目目录与代码的填充",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969277235#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771870344452410&term_id=100396581&type=3072&vid=5285890794721616946",
        info: "42分钟",
      },
      {
        name: "4.项目结构总结、组件工作流程、把控项目能力",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969277235#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771874639419706&term_id=100396581&type=3072&vid=5285890794721667365",
        info: "20分钟",
      },
      {
        name: "5.项目组件化与组件化结构设计分析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969277235#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771878934387002&term_id=100396581&type=3072&vid=5285890794799219172",
        info: "27分钟",
      },
    ],
  },
  {
    index: "114.",
    title: "VueJS项目架构与组件化设计之『一线生活通』（4节）",
    child: [
      {
        name: "1.header组件与他的子组件们",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969276754#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771883229354298&term_id=100396581&type=3072&vid=5285890794803420695",
        info: "32分钟",
      },
      {
        name: "2.组件化原则、Vuex程序、滚动区域组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969276754#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771887524321594&term_id=100396581&type=3072&vid=5285890794831457791",
        info: "30分钟",
      },
      {
        name: "3.City页面、Vuex、localStorage",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969276754#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771891819288890&term_id=100396581&type=3072&vid=5285890794831468027",
        info: "28分钟",
      },
      {
        name: "4.图标集合组件与vuex相关操作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969276754#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771896114256186&term_id=100396581&type=3072&vid=5285890794833965073",
        info: "24分钟",
      },
    ],
  },
  {
    index: "115.",
    title: "VueJS项目架构与组件化设计之『一线生活通』（7节）",
    child: [
      {
        name: "1.编写首页数据模型及数据处理",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969276155#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771900409223482&term_id=100396581&type=3072&vid=5285890794834709545",
        info: "14分钟",
      },
      {
        name: "2.标题组件、推荐景点列表组件、五星组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969276156#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771904704190778&term_id=100396581&type=3072&vid=5285890794836020888",
        info: "31分钟",
      },
      {
        name: "3.数据结构化与推荐美食列表组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969276156#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771908999158074&term_id=100396581&type=3072&vid=5285890794895611799",
        info: "24分钟",
      },
      {
        name: "4.推荐酒店列表组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969276156#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771913294125370&term_id=100396581&type=3072&vid=5285890794896226102",
        info: "19分钟",
      },
      {
        name: "5.推荐按摩列表组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969276156#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771917589092666&term_id=100396581&type=3072&vid=5285890794959371445",
        info: "20分钟",
      },
      {
        name: "6.推荐KTV列表组件、网络请求错误提示组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969276156#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771921884059962&term_id=100396581&type=3072&vid=5285890794961742201",
        info: "24分钟",
      },
      {
        name: "7.首页组件缓存机制与程序设计",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969276156#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771926179027258&term_id=100396581&type=3072&vid=5285890794964579244",
        info: "11分钟",
      },
    ],
  },
  {
    index: "116.",
    title: "VueJS项目架构与组件化设计之『一线生活通』（6节）",
    child: [
      {
        name: "1.编写详情页数据模型及数据处理",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969275606#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771930473994554&term_id=100396581&type=3072&vid=5285890794966435382",
        info: "14分钟",
      },
      {
        name: "2.详情页信息组件设计分析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969275606#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771934768961850&term_id=100396581&type=3072&vid=5285890794980062808",
        info: "21分钟",
      },
      {
        name: "3.轮播图组件开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969275606#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771939063929146&term_id=100396581&type=3072&vid=5285890794980682985",
        info: "16分钟",
      },
      {
        name: "4.详情页信息组件集合开发（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969275607#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771943358896442&term_id=100396581&type=3072&vid=5285890794984193240",
        info: "46分钟",
      },
      {
        name: "5.详情页信息组件集合开发（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969275607#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771947653863738&term_id=100396581&type=3072&vid=5285890794985008122",
        info: "48分钟",
      },
      {
        name: "6.网络请求错误提示组件的加入",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969275607#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771951948831034&term_id=100396581&type=3072&vid=5285890794985497401",
        info: "11分钟",
      },
    ],
  },
  {
    index: "117.",
    title: "VueJS项目架构与组件化设计之『一线生活通』（4节）",
    child: [
      {
        name: "1.编写列表页面数据模型及数据处理",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969275130#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771956243798330&term_id=100396581&type=3072&vid=5285890794986271910",
        info: "11分钟",
      },
      {
        name: "2.处理header标题、城市选项卡组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969275130#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771960538765626&term_id=100396581&type=3072&vid=5285890794987222516",
        info: "23分钟",
      },
      {
        name: "3.各分类组件的复用与配置、loading组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969275130#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771964833732922&term_id=100396581&type=3072&vid=5285890794989002983",
        info: "15分钟",
      },
      {
        name: "4.监听数据变化、数据缓存池技术",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969275130#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771969128700218&term_id=100396581&type=3072&vid=5285890794989023016",
        info: "16分钟",
      },
    ],
  },
  {
    index: "118.",
    title: "VueJS项目架构与组件化设计之『一线生活通』（4节）",
    child: [
      {
        name: "1.编写搜索页面数据模型及数据处理",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969273635#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771973423667514&term_id=100396581&type=3072&vid=5285890794995299669",
        info: "8分钟",
      },
      {
        name: "2.搜索栏组件及输入节流",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969273635#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771977718634810&term_id=100396581&type=3072&vid=5285890794997916182",
        info: "19分钟",
      },
      {
        name: "3.各分类列表组件复用及显示判断",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969273635#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771982013602106&term_id=100396581&type=3072&vid=5285890794997926191",
        info: "21分钟",
      },
      {
        name: "4.无结果提示组件与网络请求错误组件加入",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969273635#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771986308569402&term_id=100396581&type=3072&vid=5285890794998398659",
        info: "15分钟",
      },
    ],
  },
  {
    index: "119.",
    title: "VueJS项目架构与组件化设计之『一线生活通』（1节）",
    child: [
      {
        name: "1.项目上线、项目总结、课程收官",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969273196#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3771990603536698&term_id=100396581&type=3072&vid=5285890795009041382",
        info: "29分钟",
      },
    ],
  },
  {
    index: "120.",
    title: "VueJS技术深度提升拓展（3节）",
    child: [
      {
        name: "1.Vue脚手架工具剖析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969271983#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141413625567546&term_id=100396581&type=3072&vid=5285890797950544971",
        info: "72分钟",
      },
      {
        name: "2.Vue路由的使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969271983#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141417920534842&term_id=100396581&type=3072&vid=5285890797950544994",
        info: "74分钟",
      },
      {
        name: "3.基础Vue组件封装",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969271983#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141422215502138&term_id=100396581&type=3072&vid=5285890797950545032",
        info: "79分钟",
      },
    ],
  },
  {
    index: "121.",
    title: "手写Vue中MVVM（3节）",
    child: [
      {
        name: "1.手写MVVM——模板编译(一)",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969270475#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3827189523224890&term_id=100396581&type=3072&vid=5285890795438920544",
        info: "57分钟",
      },
      {
        name: "2.手写MVVM——模板编译(二)",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969270475#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3827193818192186&term_id=100396581&type=3072&vid=5285890795438920576",
        info: "55分钟",
      },
      {
        name: "3.手写MVVM——数据劫持、观察者",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969270475#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3827198113159482&term_id=100396581&type=3072&vid=5285890795438920599",
        info: "59分钟",
      },
    ],
  },
  {
    index: "122.",
    title: "Vue 3.0新特性尝鲜（5节）",
    child: [
      {
        name: "1.为什么使用 Composition API",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969269844#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4018173833976122&term_id=100396581&type=3072&vid=5285890796836399927",
        info: "57分钟",
      },
      {
        name: "2.环境配置、ref对象",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969269844#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4018178128943418&term_id=100396581&type=3072&vid=5285890796630261461",
        info: "18分钟",
      },
      {
        name: "3.方法、计算属性、响应式新语法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969269844#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4018182423910714&term_id=100396581&type=3072&vid=5285890796730418774",
        info: "28分钟",
      },
      {
        name: "4.模块化、生命周期钩子",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969269844#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4018186718878010&term_id=100396581&type=3072&vid=5285890796733194624",
        info: "20分钟",
      },
      {
        name: "5.侦听器",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969269844#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4018191013845306&term_id=100396581&type=3072&vid=5285890796759972456",
        info: "8分钟",
      },
    ],
  },
  {
    index: "123.",
    title: "Vue 3.0实战项目之『万年历』（10节）",
    child: [
      {
        name: "1.项目讲解与Vue3.0概述",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969269317#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9812222155233594&term_id=100396581&type=3072&vid=5285890805828900732",
        info: "10分钟",
      },
      {
        name: "2.项目的搭建与配置",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969269317#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9812226450200890&term_id=100396581&type=3072&vid=5285890805828900808",
        info: "14分钟",
      },
      {
        name: "3.页面组件、动态路由与API接口解读",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969269317#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9812230745168186&term_id=100396581&type=3072&vid=5285890805828900877",
        info: "13分钟",
      },
      {
        name: "4.封装数据请求方法与接口方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969269318#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9812235040135482&term_id=100396581&type=3072&vid=5285890805828900930",
        info: "15分钟",
      },
      {
        name: "5.数据请求整合与Composition API",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969269318#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9812239335102778&term_id=100396581&type=3072&vid=5285890805828900981",
        info: "12分钟",
      },
      {
        name: "6.header组件编写和Vuex store创建",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969269318#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9812243630070074&term_id=100396581&type=3072&vid=5285890805828901047",
        info: "19分钟",
      },
      {
        name: "7.Tab组件的编写与动态日期的函数封装",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969269318#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9812247925037370&term_id=100396581&type=3072&vid=5285890805828901096",
        info: "19分钟",
      },
      {
        name: "8.搜索组件的编写与数据的联动",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969269318#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9812252220004666&term_id=100396581&type=3072&vid=5285890805828901143",
        info: "23分钟",
      },
      {
        name: "9.日期工具的逻辑与数据请求函数的完善",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969269318#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9812256514971962&term_id=100396581&type=3072&vid=5285890805828911180",
        info: "31分钟",
      },
      {
        name: "10.首页列表组件编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969269318#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9812260809939258&term_id=100396581&type=3072&vid=5285890805828911261",
        info: "7分钟",
      },
    ],
  },
  {
    index: "124.",
    title: "Vue 3.0实战项目之『万年历』（6节）",
    child: [
      {
        name: "1.错误提示组件的开发技巧",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969268732#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9812265104906554&term_id=100396581&type=3072&vid=5285890805858955460",
        info: "14分钟",
      },
      {
        name: "2.近期假期组件编写与watch的使用技巧",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969268733#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9812269399873850&term_id=100396581&type=3072&vid=5285890805858955528",
        info: "17分钟",
      },
      {
        name: "3.当年假期组件编写与keep-alive",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969268733#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9812273694841146&term_id=100396581&type=3072&vid=5285890805858986345",
        info: "14分钟",
      },
      {
        name: "4.用户日期转API日期参数的转换逻辑",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969268733#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9812277989808442&term_id=100396581&type=3072&vid=5285890805858996396",
        info: "15分钟",
      },
      {
        name: "5.搜索功能复杂逻辑的思考与项目总结",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969268733#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9812282284775738&term_id=100396581&type=3072&vid=5285890805859428409",
        info: "20分钟",
      },
      {
        name: "6.Vue2.0与Vue3.0的对比",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969268733#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9812286579743034&term_id=100396581&type=3072&vid=5285890805860149076",
        info: "15分钟",
      },
    ],
  },
  {
    index: "125.",
    title: "VueJS之『SSR NuxtJS』篇（7节）",
    child: [
      {
        name: "1.深度NuxtJS基础到实战（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969267236#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345277012744506&term_id=100396581&type=3072&vid=5285890793401806381",
        info: "32分钟",
      },
      {
        name: "2.深度NuxtJS基础到实战（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969267237#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345281307711802&term_id=100396581&type=3072&vid=5285890793499290849",
        info: "32分钟",
      },
      {
        name: "3.深度NuxtJS基础到实战（3）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969267237#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345285602679098&term_id=100396581&type=3072&vid=5285890793452866836",
        info: "38分钟",
      },
      {
        name: "4.深度NuxtJS基础到实战（4）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969267237#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345289897646394&term_id=100396581&type=3072&vid=5285890793489545852",
        info: "30分钟",
      },
      {
        name: "5.深度NuxtJS基础到实战（5）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969267237#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345294192613690&term_id=100396581&type=3072&vid=5285890793439982174",
        info: "31分钟",
      },
      {
        name: "6.深度NuxtJS基础到实战（6）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969267238#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345298487580986&term_id=100396581&type=3072&vid=5285890793380501349",
        info: "25分钟",
      },
      {
        name: "7.深度NuxtJS基础到实战（7）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969267238#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345302782548282&term_id=100396581&type=3072&vid=5285890793393224519",
        info: "20分钟",
      },
    ],
  },
  {
    index: "126.",
    title: "VueJS『ElementUI/Redis/Mongoose/SSR/Koa2』『美团』篇（10节）",
    child: [
      {
        name: "1.Koa、async、中间件的使用、路由、cookie",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969266694#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345307077515578&term_id=100396581&type=3072&vid=5285890793401404241",
        info: "82分钟",
      },
      {
        name: "2.mongoose、Redis的使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969266694#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345311372482874&term_id=100396581&type=3072&vid=5285890793394344124",
        info: "76分钟",
      },
      {
        name: "3.初识NuxtJS",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969266694#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345315667450170&term_id=100396581&type=3072&vid=5285890793624157650",
        info: "22分钟",
      },
      {
        name: "4.环境准备、依赖安装、项目配置",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969266694#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345319962417466&term_id=100396581&type=3072&vid=5285890793625223368",
        info: "25分钟",
      },
      {
        name: "5.首页Header区域定位服务、导航、搜索的开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969266695#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345324257384762&term_id=100396581&type=3072&vid=5285890793482066117",
        info: "96分钟",
      },
      {
        name: "6.首页搜索功能、菜单功能的开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969266695#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345328552352058&term_id=100396581&type=3072&vid=5285890793479465621",
        info: "88分钟",
      },
      {
        name: "7.首页剩余部分的开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969266695#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345332847319354&term_id=100396581&type=3072&vid=5285890793503032920",
        info: "68分钟",
      },
      {
        name: "8.注册功能的开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969266695#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345337142286650&term_id=100396581&type=3072&vid=5285890793442737610",
        info: "107分钟",
      },
      {
        name: "9.登录功能的开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969266695#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345341437253946&term_id=100396581&type=3072&vid=5285890793622400952",
        info: "112分钟",
      },
      {
        name: "10.搜索功能的完善",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969266695#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345345732221242&term_id=100396581&type=3072&vid=5285890793393560735",
        info: "120分钟",
      },
    ],
  },
  {
    index: "127.",
    title: "VueJS『ElementUI/Redis/Mongoose/SSR/Koa2』『美团』篇（5节）",
    child: [
      {
        name: "1.切换城市功能的实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969266030#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345350027188538&term_id=100396581&type=3072&vid=5285890793637666153",
        info: "92分钟",
      },
      {
        name: "2.美团产品列表页的开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969266031#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345354322155834&term_id=100396581&type=3072&vid=5285890793443423732",
        info: "112分钟",
      },
      {
        name: "3.美团详情页面的开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969266031#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345358617123130&term_id=100396581&type=3072&vid=5285890793431791957",
        info: "99分钟",
      },
      {
        name: "4.购物车功能的开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969266031#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345362912090426&term_id=100396581&type=3072&vid=5285890793628162862",
        info: "64分钟",
      },
      {
        name: "5.订单页功能的开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969266031#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345367207057722&term_id=100396581&type=3072&vid=5285890793424016260",
        info: "70分钟",
      },
    ],
  },
  {
    index: "128.",
    title: "VueJS + Echarts 实现『数据报表』篇（9节）",
    child: [
      {
        name: "1.Echarts入门（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969265434#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564010466253114&term_id=100396581&type=3072&vid=3701925921766084571",
        info: "31分钟",
      },
      {
        name: "2.Echarts入门（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969265435#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564014761220410&term_id=100396581&type=3072&vid=3701925921769395579",
        info: "33分钟",
      },
      {
        name: "3.Echarts入门（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969265435#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564019056187706&term_id=100396581&type=3072&vid=3701925921768045095",
        info: "32分钟",
      },
      {
        name: "4.Echarts的基本使用（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969265435#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564023351155002&term_id=100396581&type=3072&vid=3701925921766121362",
        info: "32分钟",
      },
      {
        name: "5.Echarts的基本使用（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969265435#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564027646122298&term_id=100396581&type=3072&vid=3701925921769563845",
        info: "36分钟",
      },
      {
        name: "6.Echarts的基本使用（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969265435#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564031941089594&term_id=100396581&type=3072&vid=3701925921767306301",
        info: "34分钟",
      },
      {
        name: "7.初始化Vue + Echarts项目（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969265435#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564036236056890&term_id=100396581&type=3072&vid=3701925921766546512",
        info: "32分钟",
      },
      {
        name: "8.初始化Vue + Echarts项目（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969265435#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564040531024186&term_id=100396581&type=3072&vid=3701925921765997314",
        info: "33分钟",
      },
      {
        name: "9.初始化Vue + Echarts项目（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969265435#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564044825991482&term_id=100396581&type=3072&vid=3701925921769660254",
        info: "33分钟",
      },
    ],
  },
  {
    index: "129.",
    title: "VueJS + Echarts 实现『数据报表』篇（9节）",
    child: [
      {
        name: "1.实现顶部报表组件（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969264972#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564049120958778&term_id=100396581&type=3072&vid=3701925921767810363",
        info: "31分钟",
      },
      {
        name: "2.实现顶部报表组件（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969264972#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564053415926074&term_id=100396581&type=3072&vid=3701925921767974466",
        info: "33分钟",
      },
      {
        name: "3.实现顶部报表组件（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969264972#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564057710893370&term_id=100396581&type=3072&vid=3701925921766546697",
        info: "34分钟",
      },
      {
        name: "4.自定义系列（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969264973#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564062005860666&term_id=100396581&type=3072&vid=3701925921766121440",
        info: "34分钟",
      },
      {
        name: "5.自定义系列（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969264973#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564066300827962&term_id=100396581&type=3072&vid=3701925921767548749",
        info: "33分钟",
      },
      {
        name: "6.自定义系列（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969264973#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564070595795258&term_id=100396581&type=3072&vid=3701925921769081151",
        info: "29分钟",
      },
      {
        name: "7.引入Element UI（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969264973#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564074890762554&term_id=100396581&type=3072&vid=3701925921769251190",
        info: "32分钟",
      },
      {
        name: "8.引入Element UI（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969264973#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564079185729850&term_id=100396581&type=3072&vid=3701925921766546611",
        info: "35分钟",
      },
      {
        name: "9.引入Element UI（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969264973#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564083480697146&term_id=100396581&type=3072&vid=3701925921765997099",
        info: "30分钟",
      },
    ],
  },
  {
    index: "130.",
    title: "VueJS + Echarts 实现『数据报表』篇（8节）",
    child: [
      {
        name: "1.定制折线图和Element UI组件（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969264513#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564087775664442&term_id=100396581&type=3072&vid=3701925921766041028",
        info: "31分钟",
      },
      {
        name: "2.定制折线图和Element UI组件（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969264513#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564092070631738&term_id=100396581&type=3072&vid=3701925921766547195",
        info: "30分钟",
      },
      {
        name: "3.定制折线图和Element UI组件（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969264513#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564096365599034&term_id=100396581&type=3072&vid=3701925921767060318",
        info: "23分钟",
      },
      {
        name: "4.定制化饼图（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969264513#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564100660566330&term_id=100396581&type=3072&vid=3701925921766084727",
        info: "28分钟",
      },
      {
        name: "5.初识百度地图",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969264514#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564104955533626&term_id=100396581&type=3072&vid=3701925921766040964",
        info: "22分钟",
      },
      {
        name: "6.百度地图控件、初识动画（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969264514#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564109250500922&term_id=100396581&type=3072&vid=3701925921766644798",
        info: "32分钟",
      },
      {
        name: "7.百度地图控件、初识动画（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969264514#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564113545468218&term_id=100396581&type=3072&vid=3701925921765997628",
        info: "31分钟",
      },
      {
        name: "8.百度地图控件、初识动画（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969264514#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564117840435514&term_id=100396581&type=3072&vid=3701925921767732831",
        info: "19分钟",
      },
    ],
  },
  {
    index: "131.",
    title: "VueJS + Echarts 实现『数据报表』篇（9节）",
    child: [
      {
        name: "1.百度地图动画、散点图（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969262870#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564122135402810&term_id=100396581&type=3072&vid=3701925921767731650",
        info: "33分钟",
      },
      {
        name: "2.百度地图动画、散点图（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969262870#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564126430370106&term_id=100396581&type=3072&vid=3701925921769164069",
        info: "29分钟",
      },
      {
        name: "3.百度地图动画、散点图（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969262870#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564130725337402&term_id=100396581&type=3072&vid=3701925921766547276",
        info: "29分钟",
      },
      {
        name: "4.理解飞线动画（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969262870#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564135020304698&term_id=100396581&type=3072&vid=3701925921767838851",
        info: "32分钟",
      },
      {
        name: "5.理解飞线动画（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969262870#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564139315271994&term_id=100396581&type=3072&vid=3701925921765997372",
        info: "34分钟",
      },
      {
        name: "6.理解飞线动画（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969262871#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564143610239290&term_id=100396581&type=3072&vid=3701925921767390978",
        info: "36分钟",
      },
      {
        name: "7.Vue 集成 百度地图（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969262871#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564147905206586&term_id=100396581&type=3072&vid=3701925921767470040",
        info: "33分钟",
      },
      {
        name: "8.Vue 集成 百度地图（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969262871#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564152200173882&term_id=100396581&type=3072&vid=3701925921766651297",
        info: "31分钟",
      },
      {
        name: "9.Vue 集成 百度地图（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969262871#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564156495141178&term_id=100396581&type=3072&vid=3701925921769749109",
        info: "30分钟",
      },
    ],
  },
  {
    index: "132.",
    title: "VueJS高级之『源码解读』篇（10节）",
    child: [
      {
        name: "1.环境配置、基础代码编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969261867#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345371502025018&term_id=100396581&type=3072&vid=5285890804509239283",
        info: "22分钟",
      },
      {
        name: "2.对象劫持、访问属性代理",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969261867#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345375796992314&term_id=100396581&type=3072&vid=5285890804509239296",
        info: "24分钟",
      },
      {
        name: "3.数组劫持",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969261867#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345380091959610&term_id=100396581&type=3072&vid=5285890804645883278",
        info: "36分钟",
      },
      {
        name: "4.编译文本（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969261867#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345384386926906&term_id=100396581&type=3072&vid=5285890804677628242",
        info: "21分钟",
      },
      {
        name: "5.编译文本（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969261867#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345388681894202&term_id=100396581&type=3072&vid=5285890804749967836",
        info: "26分钟",
      },
      {
        name: "6.依赖收集（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969261867#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345392976861498&term_id=100396581&type=3072&vid=5285890804780040166",
        info: "22分钟",
      },
      {
        name: "7.依赖收集（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969261868#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345397271828794&term_id=100396581&type=3072&vid=5285890804817634221",
        info: "25分钟",
      },
      {
        name: "8.批量异步更新策略",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969261868#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345401566796090&term_id=100396581&type=3072&vid=5285890804861104099",
        info: "36分钟",
      },
      {
        name: "9.数组的依赖收集",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969261868#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345405861763386&term_id=100396581&type=3072&vid=5285890804962252515",
        info: "23分钟",
      },
      {
        name: "10.实现watch",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969261868#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345410156730682&term_id=100396581&type=3072&vid=5285890804996902190",
        info: "26分钟",
      },
    ],
  },
  {
    index: "133.",
    title: "VueJS高级之『源码解读』篇（3节）",
    child: [
      {
        name: "1.编译计算属性",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969261036#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345414451697978&term_id=100396581&type=3072&vid=5285890805075699829",
        info: "31分钟",
      },
      {
        name: "2.改变计算属性",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969261036#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10325462157171002&term_id=100396581&type=3072&vid=5285890805075699849",
        info: "22分钟",
      },
      {
        name: "3.改变计算属性（单步调试）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969261036#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10325466452138298&term_id=100396581&type=3072&vid=5285890805075699890",
        info: "27分钟",
      },
    ],
  },
  {
    index: "134.",
    title: "『React』深度学习系列课程 - 『React本尊』（10节）",
    child: [
      {
        name: "1.Webpack 常用命令总结",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969260540#ac_type=3&cid=334138&cw_id=163249&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345418746665274&term_id=100396581&type=3072",
        info: "24.1KB  |  docx文件",
      },
      {
        name: "2.API集合资料",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969260540#ac_type=3&cid=334138&cw_id=180579&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345423041632570&term_id=100396581&type=3072",
        info: "11.4KB  |  docx文件",
      },
      {
        name: "3.React深入认知、React元素、渲染、工程化",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969260540#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345427336599866&term_id=100396581&type=3072&vid=5285890817339302534",
        info: "48分钟",
      },
      {
        name: "4.JSX深度学习",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969260540#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345431631567162&term_id=100396581&type=3072&vid=5285890817340128657",
        info: "40分钟",
      },
      {
        name: "5.渲染元素ReactDOM.render",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969260540#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345435926534458&term_id=100396581&type=3072&vid=5285890817340128673",
        info: "33分钟",
      },
      {
        name: "6.组件与Props",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969260540#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345440221501754&term_id=100396581&type=3072&vid=5285890817339302596",
        info: "54分钟",
      },
      {
        name: "7.state与setState、单向数据流",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969260541#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345444516469050&term_id=100396581&type=3072&vid=5285890817339302611",
        info: "41分钟",
      },
      {
        name: "8.事件处理函数绑定与事件对象",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969260541#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345448811436346&term_id=100396581&type=3072&vid=5285890817340128922",
        info: "31分钟",
      },
      {
        name: "9.条件渲染",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969260541#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345453106403642&term_id=100396581&type=3072&vid=5285890818666971182",
        info: "29分钟",
      },
      {
        name: "10.列表渲染",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969260541#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345457401370938&term_id=100396581&type=3072&vid=5285890818667111602",
        info: "27分钟",
      },
    ],
  },
  {
    index: "135.",
    title: "『React』深度学习系列课程 - 『React本尊』（10节）",
    child: [
      {
        name: "1.受控组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969260101#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732536393013562&term_id=100396581&type=3072&vid=5285890818667228106",
        info: "39分钟",
      },
      {
        name: "2.非受控组件以及受控与非受控的选择方案",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969260102#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732540687980858&term_id=100396581&type=3072&vid=5285890818667111979",
        info: "45分钟",
      },
      {
        name: "3.父子组件数据关系与状态提升",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969260102#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732544982948154&term_id=100396581&type=3072&vid=5285890818667228428",
        info: "27分钟",
      },
      {
        name: "4.组合与继承、CSS Module",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969260102#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732549277915450&term_id=100396581&type=3072&vid=5285890818667239622",
        info: "42分钟",
      },
      {
        name: "5.代码分割之import静动态导入",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969260102#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732553572882746&term_id=100396581&type=3072&vid=5285890818539410188",
        info: "34分钟",
      },
      {
        name: "6.代码分割之lazy_Suspense与路由懒加载",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969260102#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732557867850042&term_id=100396581&type=3072&vid=5285890818667323775",
        info: "28分钟",
      },
      {
        name: "7.错误边界与使用技巧",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969260102#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732562162817338&term_id=100396581&type=3072&vid=5285890818542044688",
        info: "44分钟",
      },
      {
        name: "8.代码分割之错误边界与Suspense和命名导出",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969260103#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732566457784634&term_id=100396581&type=3072&vid=5285890818667116612",
        info: "20分钟",
      },
      {
        name: "9.初探Context的使用场景",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969260103#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732570752751930&term_id=100396581&type=3072&vid=5285890819183285718",
        info: "32分钟",
      },
      {
        name: "10.Context与组合的应用场景与使用问题",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969260103#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732575047719226&term_id=100396581&type=3072&vid=5285890819187098407",
        info: "29分钟",
      },
    ],
  },
  {
    index: "136.",
    title: "『React』深度学习系列课程 - 『React本尊』（10节）",
    child: [
      {
        name: "1.Context API（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969259641#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345461696338234&term_id=100396581&type=3072&vid=5285890819040739651",
        info: "22分钟",
      },
      {
        name: "2.Context API（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969259641#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345465991305530&term_id=100396581&type=3072&vid=3701925918839032656",
        info: "22分钟",
      },
      {
        name: "3.动态Context嵌套的案例分析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969259641#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345470286272826&term_id=100396581&type=3072&vid=3701925918996723263",
        info: "37分钟",
      },
      {
        name: "4.Fragment和短语法应用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969259642#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345474581240122&term_id=100396581&type=3072&vid=3701925919049718532",
        info: "22分钟",
      },
      {
        name: "5.高阶组件的案例之前奏",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969259642#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345478876207418&term_id=100396581&type=3072&vid=3701925919115293230",
        info: "33分钟",
      },
      {
        name: "6.高阶组件的案例之思路转换",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969259642#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345483171174714&term_id=100396581&type=3072&vid=3701925919116029387",
        info: "22分钟",
      },
      {
        name: "7.高阶组件横切关注点以及柯里化",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969259642#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345487466142010&term_id=100396581&type=3072&vid=3701925919237570497",
        info: "21分钟",
      },
      {
        name: "8.高阶组件使用注意事项与总结",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969259642#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345491761109306&term_id=100396581&type=3072&vid=3701925919392493101",
        info: "25分钟",
      },
      {
        name: "9.Refs的应用场景与选用思考",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969259642#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732579342686522&term_id=100396581&type=3072&vid=3701925919419393090",
        info: "35分钟",
      },
      {
        name: "10.React.createRef()用法细节分析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969259642#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732583637653818&term_id=100396581&type=3072&vid=3701925919448846177",
        info: "19分钟",
      },
    ],
  },
  {
    index: "137.",
    title: "『React』深度学习系列课程 - 『React本尊』（10节）",
    child: [
      {
        name: "1.Refs转发机制与在高阶组件中的使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969259123#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345496056076602&term_id=100396581&type=3072&vid=3701925919462458379",
        info: "29分钟",
      },
      {
        name: "2.Refs转发机制与各种方式",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969259124#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345500351043898&term_id=100396581&type=3072&vid=3701925919470958910",
        info: "21分钟",
      },
      {
        name: "3.JSX深度剖析与使用技巧（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969259124#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345504646011194&term_id=100396581&type=3072&vid=3701925919539462323",
        info: "31分钟",
      },
      {
        name: "4.JSX深度剖析与使用技巧（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969259124#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732587932621114&term_id=100396581&type=3072&vid=3701925919561231940",
        info: "33分钟",
      },
      {
        name: "5.JSX深度剖析与使用技巧（3）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969259124#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732592227588410&term_id=100396581&type=3072&vid=3701925919750541656",
        info: "24分钟",
      },
      {
        name: "6.JSX函数子元素的应用与思考",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969259124#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732596522555706&term_id=100396581&type=3072&vid=3701925919758104568",
        info: "24分钟",
      },
      {
        name: "7.portals API传送组件节点",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969259124#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14180298384546106&term_id=100396581&type=3072&vid=243791580395402428",
        info: "47分钟",
      },
      {
        name: "8.纯组件与普通组件的区别",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969259125#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14180302679513402&term_id=100396581&type=3072&vid=243791580451034149",
        info: "27分钟",
      },
      {
        name: "9.shouldComponentUpdate",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969259125#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14180306974480698&term_id=100396581&type=3072&vid=243791580371211683",
        info: "34分钟",
      },
      {
        name: "10.Render Props设计的深入理解",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969259125#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14181827392903482&term_id=100396581&type=3072&vid=243791580470012347",
        info: "27分钟",
      },
    ],
  },
  {
    index: "138.",
    title: "『React』深度学习系列课程 - 『React本尊』（4节）",
    child: [
      {
        name: "1.Render Props的业务应用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969258662#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14181823097936186&term_id=100396581&type=3072&vid=243791580439758069",
        info: "27分钟",
      },
      {
        name: "2.StrictMode（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969258663#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14186891159345466&term_id=100396581&type=3072&vid=243791580524552795",
        info: "30分钟",
      },
      {
        name: "3.StrictMode（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969258663#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14186895454312762&term_id=100396581&type=3072&vid=243791580535800719",
        info: "32分钟",
      },
      {
        name: "4.StrictMode（3）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969258663#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=14186899749280058&term_id=100396581&type=3072&vid=243791580512953093",
        info: "28分钟",
      },
    ],
  },
  {
    index: "139.",
    title: "ReactJS之『React-redux』升华篇（4节）",
    child: [
      {
        name: "1.redux初探、用react开发数值增值案例",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969258169#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345508940978490&term_id=100396581&type=3072&vid=5285890788270278703",
        info: "32分钟",
      },
      {
        name: "2.store、action、reducers、redux",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969258170#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345513235945786&term_id=100396581&type=3072&vid=5285890787852979563",
        info: "47分钟",
      },
      {
        name: "3.context的使用、Provider、Consumer的认知",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969258170#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345517530913082&term_id=100396581&type=3072&vid=5285890788312384038",
        info: "29分钟",
      },
      {
        name: "4.中间件的使用、异步action的创建",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969258170#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345521825880378&term_id=100396581&type=3072&vid=5285890787819113291",
        info: "25分钟",
      },
    ],
  },
  {
    index: "140.",
    title: "ReactJS之『React-Hooks』不可不学篇（10节）",
    child: [],
  },
  {
    index: "141.",
    title: "ReactJS之『React-Hooks』不可不学篇（4节）",
    child: [
      {
        name: "1.10_useRef",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969255560#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10549204183488826&term_id=100396581&type=3072&vid=5285890811966687668",
        info: "21分钟",
      },
      {
        name: "2.11_useImperativeHandle",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969255560#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10549208478456122&term_id=100396581&type=3072&vid=5285890811966685574",
        info: "19分钟",
      },
      {
        name: "3.12_useLayoutEffect",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969255560#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10549212773423418&term_id=100396581&type=3072&vid=5285890811966686074",
        info: "20分钟",
      },
      {
        name: "4.13_useDebugValue",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969255560#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10549217068390714&term_id=100396581&type=3072&vid=5285890811966686325",
        info: "9分钟",
      },
    ],
  },
  {
    index: "142.",
    title: "JavaScript面向对象之『深度解析』（8节）",
    child: [
      {
        name: "1.面向对象深度解析（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969255017#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345526120847674&term_id=100396581&type=3072&vid=5285890790877320210",
        info: "61分钟",
      },
      {
        name: "2.面向对象深度解析（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969255017#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345530415814970&term_id=100396581&type=3072&vid=5285890790954635844",
        info: "66分钟",
      },
      {
        name: "3.面向对象深度解析（3）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969255017#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345534710782266&term_id=100396581&type=3072&vid=5285890790958663389",
        info: "48分钟",
      },
      {
        name: "4.面向对象深度实战（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969255018#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345539005749562&term_id=100396581&type=3072&vid=5285890791023897073",
        info: "52分钟",
      },
      {
        name: "5.面向对象深度实战（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969255018#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345543300716858&term_id=100396581&type=3072&vid=5285890791037354863",
        info: "51分钟",
      },
      {
        name: "6.面向对象深度实战（3）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969255018#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345547595684154&term_id=100396581&type=3072&vid=5285890791064482412",
        info: "24分钟",
      },
      {
        name: "7.实战源码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969255018#ac_type=3&cid=334138&cw_id=185715&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564160790108474&term_id=100396581&type=3072",
        info: "30.2MB  |  zip文件",
      },
      {
        name: "8.观察模式-购物车案例",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969255018#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141426510469434&term_id=100396581&type=3072&vid=5285890797717605953",
        info: "98分钟",
      },
    ],
  },
  {
    index: "143.",
    title: "JavaScript提升逼格之『设计模式』（10节）",
    child: [
      {
        name: "1.设计原则介绍-5大原则（SOLID）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969254431#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665831896881466&term_id=100396581&type=3072&vid=5285890794967130913",
        info: "86分钟",
      },
      {
        name: "2.工厂模式、工厂方法、工厂",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969254431#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665836191848762&term_id=100396581&type=3072&vid=5285890794630341120",
        info: "20分钟",
      },
      {
        name: "3.单例模式、单态",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969254431#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665840486816058&term_id=100396581&type=3072&vid=5285890794706996191",
        info: "26分钟",
      },
      {
        name: "4.适配器模式、适配器缓存",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969254431#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665844781783354&term_id=100396581&type=3072&vid=5285890794735789169",
        info: "49分钟",
      },
      {
        name: "5.装饰器模式介绍、使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969254432#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665849076750650&term_id=100396581&type=3072&vid=5285890794765420319",
        info: "25分钟",
      },
      {
        name: "6.外观模式介绍、使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969254432#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665853371717946&term_id=100396581&type=3072&vid=5285890794798504611",
        info: "21分钟",
      },
      {
        name: "7.代理模式介绍、不同种类的代理",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969254432#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665857666685242&term_id=100396581&type=3072&vid=5285890794828645078",
        info: "35分钟",
      },
      {
        name: "8.迭代器模式介绍、使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969254432#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665861961652538&term_id=100396581&type=3072&vid=5285890794887972522",
        info: "36分钟",
      },
      {
        name: "9.观察者模式介绍、使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969254432#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665866256619834&term_id=100396581&type=3072&vid=5285890794890388859",
        info: "38分钟",
      },
      {
        name: "10.状态模式介绍、手写有限状态机",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969254432#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3768872457279802&term_id=100396581&type=3072&vid=5285890794918833204",
        info: "23分钟",
      },
    ],
  },
  {
    index: "144.",
    title: "数据结构和算法（7节）",
    child: [
      {
        name: "1.1_算法和复杂度",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969253926#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564165085075770&term_id=100396581&type=3072&vid=5285890815069182474",
        info: "31分钟",
      },
      {
        name: "2.2_算法和复杂度",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969253927#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564169380043066&term_id=100396581&type=3072&vid=5285890815077069577",
        info: "31分钟",
      },
      {
        name: "3.3_算法和复杂度",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969253927#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564173675010362&term_id=100396581&type=3072&vid=5285890815078582667",
        info: "31分钟",
      },
      {
        name: "4.4_算法和复杂度",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969253927#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564177969977658&term_id=100396581&type=3072&vid=5285890815080773442",
        info: "30分钟",
      },
      {
        name: "5.1_栈和队列",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969253927#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564182264944954&term_id=100396581&type=3072&vid=3701925920980755734",
        info: "31分钟",
      },
      {
        name: "6.2_栈和队列",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969253927#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564186559912250&term_id=100396581&type=3072&vid=3701925920979812624",
        info: "31分钟",
      },
      {
        name: "7.3_栈和队列",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969253928#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564190854879546&term_id=100396581&type=3072&vid=3701925921074352067",
        info: "23分钟",
      },
    ],
  },
  {
    index: "145.",
    title: "数据结构和算法（5节）",
    child: [
      {
        name: "1.1_链表概念梳理",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969253443#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564195149846842&term_id=100396581&type=3072&vid=5285890812983673248",
        info: "27分钟",
      },
      {
        name: "2.2_链表的追加与插入",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969253444#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564199444814138&term_id=100396581&type=3072&vid=5285890812981207306",
        info: "26分钟",
      },
      {
        name: "3.3_链表的删除与查找",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969253444#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564203739781434&term_id=100396581&type=3072&vid=5285890812981207333",
        info: "25分钟",
      },
      {
        name: "4.4_链表的反转",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969253444#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564208034748730&term_id=100396581&type=3072&vid=5285890812983673411",
        info: "42分钟",
      },
      {
        name: "5.树与二叉搜索树",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969253444#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13819658570635578&term_id=100396581&type=3072&vid=387702305617893941",
        info: "112分钟",
      },
    ],
  },
  {
    index: "146.",
    title: "『虚拟列表』深度学习 + 企业案例课程（4节）",
    child: [
      {
        name: "1.基本原理与实现方案",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969252862#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13615316911593786&term_id=100396581&type=3072&vid=387702303698951669",
        info: "34分钟",
      },
      {
        name: "2.设置与编写响应式数据及其逻辑",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969252862#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13615321206561082&term_id=100396581&type=3072&vid=387702303700236424",
        info: "33分钟",
      },
      {
        name: "3.响应式与渲染和更新",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969252862#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13615325501528378&term_id=100396581&type=3072&vid=387702303700298553",
        info: "26分钟",
      },
      {
        name: "4.滚动节流技巧与白屏解决方案",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969252863#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13615329796495674&term_id=100396581&type=3072&vid=387702303700878883",
        info: "40分钟",
      },
    ],
  },
  {
    index: "147.",
    title: "JavaScript高级综合提升之『小米手机官网』（10节）",
    child: [
      {
        name: "1.『Webpack项目工程化与自动化』深入剖析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969252397#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345551890651450&term_id=100396581&type=3072&vid=5285890791720639677",
        info: "29分钟",
      },
      {
        name: "2.Webpack项目工程化搭建与配置",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969252397#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345556185618746&term_id=100396581&type=3072&vid=5285890791756138130",
        info: "46分钟",
      },
      {
        name: "3.项目页面及组件分析与项目工程搭建",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969252398#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345560480586042&term_id=100396581&type=3072&vid=5285890793745617179",
        info: "21分钟",
      },
      {
        name: "4.组件模板替换与项目工具函数集合模块",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969252398#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345564775553338&term_id=100396581&type=3072&vid=5285890793883004711",
        info: "31分钟",
      },
      {
        name: "5.JS组件化、header组件与logo组件嵌套",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969252398#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345569070520634&term_id=100396581&type=3072&vid=5285890793883014877",
        info: "24分钟",
      },
      {
        name: "6.数据模型、JSONP数据请求剖析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969252398#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345573365487930&term_id=100396581&type=3072&vid=5285890793884130615",
        info: "30分钟",
      },
      {
        name: "7.header、导航与导航菜单组件多层嵌套",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969252398#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345577660455226&term_id=100396581&type=3072&vid=5285890793885147483",
        info: "24分钟",
      },
      {
        name: "8.导航菜单列表模板缓存机制与渲染",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969252398#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345581955422522&term_id=100396581&type=3072&vid=5285890793888415857",
        info: "28分钟",
      },
      {
        name: "9.搜索框form表单组件功能实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969252398#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345586250389818&term_id=100396581&type=3072&vid=5285890793888729920",
        info: "12分钟",
      },
      {
        name: "10.企业级『轮播图插件』组件化开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969252399#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3665870551587130&term_id=100396581&type=3072&vid=5285890793913539574",
        info: "51分钟",
      },
    ],
  },
  {
    index: "148.",
    title: "JavaScript高级综合提升之『小米手机官网』（10节）",
    child: [
      {
        name: "1.商品展示面板与商品卡片组件实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969251778#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345590545357114&term_id=100396581&type=3072&vid=5285890793913969694",
        info: "28分钟",
      },
      {
        name: "2.footer组件的实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969251778#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345594840324410&term_id=100396581&type=3072&vid=5285890793914348048",
        info: "5分钟",
      },
      {
        name: "3.列表页选项卡组件实现选项与搜索功能",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969251778#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345599135291706&term_id=100396581&type=3072&vid=5285890793919958350",
        info: "55分钟",
      },
      {
        name: "4.详情页手机信息数据分析与组件化",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969251779#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345603430259002&term_id=100396581&type=3072&vid=5285890793921916148",
        info: "30分钟",
      },
      {
        name: "5.详情页手机版本与颜色选项切换",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969251779#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345607725226298&term_id=100396581&type=3072&vid=5285890797268894119",
        info: "53分钟",
      },
      {
        name: "6.详情页数据模型、增加购物车/购买按钮",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969251779#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345612020193594&term_id=100396581&type=3072&vid=5285890797269563986",
        info: "54分钟",
      },
      {
        name: "7.加入购物车与立即购买相关数据处理",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969251779#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345616315160890&term_id=100396581&type=3072&vid=5285890797270639931",
        info: "64分钟",
      },
      {
        name: "8.配置页面及页面跳转、订单号、购物车页面",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969251780#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345620610128186&term_id=100396581&type=3072&vid=5285890797191257085",
        info: "54分钟",
      },
      {
        name: "9.购物车页面数据操作与订单页面",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969251780#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345624905095482&term_id=100396581&type=3072&vid=5285890797242492666",
        info: "28分钟",
      },
      {
        name: "10.项目上线与总结",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969251780#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345629200062778&term_id=100396581&type=3072&vid=5285890793922844043",
        info: "31分钟",
      },
    ],
  },
  {
    index: "149.",
    title: "微信小程序-『基础+项目实战』篇（10节）",
    child: [
      {
        name: "1.初识小程序",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969250145#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345633495030074&term_id=100396581&type=3072&vid=5285890797259810221",
        info: "7分钟",
      },
      {
        name: "2.小程序中常见组件和基本概念（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969250146#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345637789997370&term_id=100396581&type=3072&vid=5285890797259930955",
        info: "9分钟",
      },
      {
        name: "3.小程序中常见组件和基本概念（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969250146#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345642084964666&term_id=100396581&type=3072&vid=5285890797260102027",
        info: "13分钟",
      },
      {
        name: "4.小程序中常见组件和基本概念（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969250146#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345646379931962&term_id=100396581&type=3072&vid=5285890797260293210",
        info: "12分钟",
      },
      {
        name: "5.小程序中常见组件和基本概念（四）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969250146#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345650674899258&term_id=100396581&type=3072&vid=5285890797260363561",
        info: "8分钟",
      },
      {
        name: "6.小程序中常见组件和基本概念（五）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969250146#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345654969866554&term_id=100396581&type=3072&vid=5285890797260433982",
        info: "7分钟",
      },
      {
        name: "7.开发准备工作、项目结构分析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969250147#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345659264833850&term_id=100396581&type=3072&vid=5285890795336473585",
        info: "22分钟",
      },
      {
        name: "8.编写欢迎页面、使用flex布局",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969250147#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345663559801146&term_id=100396581&type=3072&vid=5285890795419118530",
        info: "37分钟",
      },
      {
        name: "9.使用Swiper组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969250147#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345667854768442&term_id=100396581&type=3072&vid=5285890795513980699",
        info: "22分钟",
      },
      {
        name: "10.编写新闻列表页、生命周期函数",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969250147#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345672149735738&term_id=100396581&type=3072&vid=5285890795537870386",
        info: "24分钟",
      },
    ],
  },
  {
    index: "150.",
    title: "微信小程序-『基础+项目实战』篇（10节）",
    child: [
      {
        name: "1.数据绑定、条件渲染、列表渲染",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969249428#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345676444703034&term_id=100396581&type=3072&vid=5285890795541399930",
        info: "37分钟",
      },
      {
        name: "2.了解模板化、模块化",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969249428#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345680739670330&term_id=100396581&type=3072&vid=5285890795806810291",
        info: "22分钟",
      },
      {
        name: "3.新闻详情页开发、使用缓存",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969249428#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345685034637626&term_id=100396581&type=3072&vid=5285890795835541681",
        info: "79分钟",
      },
      {
        name: "4.添加音乐播放功能",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969249428#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345689329604922&term_id=100396581&type=3072&vid=5285890796302497927",
        info: "70分钟",
      },
      {
        name: "5.电影页面开发、使用模板",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969249428#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345693624572218&term_id=100396581&type=3072&vid=5285890796908747325",
        info: "70分钟",
      },
      {
        name: "6.调用豆瓣API、获取数据",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969249429#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345697919539514&term_id=100396581&type=3072&vid=5285890797260856580",
        info: "55分钟",
      },
      {
        name: "7.更多电影页面的制作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969249429#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345702214506810&term_id=100396581&type=3072&vid=5285890797266909941",
        info: "35分钟",
      },
      {
        name: "8.加载更多数据逻辑的编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969249429#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345706509474106&term_id=100396581&type=3072&vid=5285890797267253697",
        info: "22分钟",
      },
      {
        name: "9.电影详情页面的开发（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969249429#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345710804441402&term_id=100396581&type=3072&vid=5285890797269432151",
        info: "61分钟",
      },
      {
        name: "10.电影详情页面的开发（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969249429#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345715099408698&term_id=100396581&type=3072&vid=5285890797269970601",
        info: "41分钟",
      },
    ],
  },
  {
    index: "151.",
    title: "跨平台移动应用-硬解决方案之『Flutter』（3节）",
    child: [
      {
        name: "1.什么是Flutter？",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969248864#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582299077941562&term_id=100396581&type=3072&vid=5285890793170611878",
        info: "9分钟",
      },
      {
        name: "2.跨平台移动应用-硬解决方案值『flutter』",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969248864#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582303372908858&term_id=100396581&type=3072&vid=5285890793125553146",
        info: "21分钟",
      },
      {
        name: "3.Flutter开发环境设置(Windows版)",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969248864#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582307667876154&term_id=100396581&type=3072&vid=5285890793167854040",
        info: "24分钟",
      },
    ],
  },
  {
    index: "152.",
    title: "开启『Flutter』项目开发-『问答APP』（10节）",
    child: [
      {
        name: "1.创建Flutter项目与项目代码分析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969248415#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582311962843450&term_id=100396581&type=3072&vid=5285890792244126716",
        info: "26分钟",
      },
      {
        name: "2.走进Dart基础",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969248416#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582316257810746&term_id=100396581&type=3072&vid=5285890792249836990",
        info: "30分钟",
      },
      {
        name: "3.从零开始写App与模拟器上运行App",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969248416#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582320552778042&term_id=100396581&type=3072&vid=5285890792249867732",
        info: "25分钟",
      },
      {
        name: "4.类的构造函数与总结回顾",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969248416#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582324847745338&term_id=100396581&type=3072&vid=5285890792249877769",
        info: "30分钟",
      },
      {
        name: "5.Widget树与Widget分类和使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969248416#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582329142712634&term_id=100396581&type=3072&vid=5285890792249877798",
        info: "27分钟",
      },
      {
        name: "6.连接按钮和事件处理函数",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969248416#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582333437679930&term_id=100396581&type=3072&vid=5285890792249877845",
        info: "13分钟",
      },
      {
        name: "7.正确更新Stateful Widgets数据",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969248416#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582337732647226&term_id=100396581&type=3072&vid=5285890792609494308",
        info: "24分钟",
      },
      {
        name: "8.浅尝背后的原理与私有属性的使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969248416#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582342027614522&term_id=100396581&type=3072&vid=5285890792615279666",
        info: "12分钟",
      },
      {
        name: "9.自定义Widget、枚举、多个构造函数",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969248417#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582346322581818&term_id=100396581&type=3072&vid=5285890792689601871",
        info: "29分钟",
      },
      {
        name: "10.阅读官方文档与传递回调函数",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969248417#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582350617549114&term_id=100396581&type=3072&vid=5285890792690703930",
        info: "15分钟",
      },
    ],
  },
  {
    index: "153.",
    title: "开启『Flutter』项目开发-『问答APP』（4节）",
    child: [
      {
        name: "1.初识Map、Map列表到Widgets",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969247997#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582354912516410&term_id=100396581&type=3072&vid=5285890792731690915",
        info: "16分钟",
      },
      {
        name: "2.final和const的区别",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969247998#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582359207483706&term_id=100396581&type=3072&vid=5285890792733649974",
        info: "12分钟",
      },
      {
        name: "3.if语句、Widget的条件性输出和拆分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969247998#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582363502451002&term_id=100396581&type=3072&vid=5285890792736153964",
        info: "16分钟",
      },
      {
        name: "4.计算总分、使用Getters、添加重置功能",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969247998#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582367797418298&term_id=100396581&type=3072&vid=5285890792811628021",
        info: "20分钟",
      },
    ],
  },
  {
    index: "154.",
    title: "开启『Flutter』项目开发-『博客APP』（10节）",
    child: [
      {
        name: "1.项目介绍、项目目录分析、基本代码编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969246468#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582372092385594&term_id=100396581&type=3072&vid=5285890801427317945",
        info: "25分钟",
      },
      {
        name: "2.底部导航栏的开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969246468#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582376387352890&term_id=100396581&type=3072&vid=5285890801427328091",
        info: "24分钟",
      },
      {
        name: "3.我的页面的开发、博文模型的定义",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969246468#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582380682320186&term_id=100396581&type=3072&vid=5285890801427328166",
        info: "12分钟",
      },
      {
        name: "4.首页列表页的编写、跳转到详情页面",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969246468#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582384977287482&term_id=100396581&type=3072&vid=5285890801427358338",
        info: "36分钟",
      },
      {
        name: "5.初识状态管理方案Provider、设置Provider",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969246469#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582389272254778&term_id=100396581&type=3072&vid=5285890801427369191",
        info: "29分钟",
      },
      {
        name: "6.编辑页面的编写、增加博文功能的开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969246469#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582393567222074&term_id=100396581&type=3072&vid=5285890801427430074",
        info: "49分钟",
      },
      {
        name: "7.发送POST请求、使用Future",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969246469#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582397862189370&term_id=100396581&type=3072&vid=5285890801427430107",
        info: "22分钟",
      },
      {
        name: "8.编辑功能的开发、删除功能的开发、异常处理",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969246469#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582402157156666&term_id=100396581&type=3072&vid=5285890801427430206",
        info: "46分钟",
      },
      {
        name: "9.使用async、获取数据、转换数据、更新博文",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969246469#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582406452123962&term_id=100396581&type=3072&vid=5285890801427430274",
        info: "48分钟",
      },
      {
        name: "10.项目总结",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969246469#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582410747091258&term_id=100396581&type=3072&vid=5285890801427430321",
        info: "3分钟",
      },
    ],
  },
  {
    index: "155.",
    title: "开启『React Native』项目开发-『JS++课堂』（2节）",
    child: [
      {
        name: "1.Mac OS搭建React Native开发环境",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969245849#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582415042058554&term_id=100396581&type=3072&vid=5285890810680660508",
        info: "29分钟",
      },
      {
        name: "2.Windows搭建React Native开发环境",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969245849#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466538651425082&term_id=100396581&type=3072&vid=5285890810680673468",
        info: "30分钟",
      },
    ],
  },
  {
    index: "156.",
    title: "开启『React Native』项目开发-『JS++课堂』（10节）",
    child: [
      {
        name: "1.安装依赖、示例讲解、设计目录结构",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969245402#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582419337025850&term_id=100396581&type=3072&vid=5285890798997939518",
        info: "38分钟",
      },
      {
        name: "2.封装工具、编写数据请求模型程序",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969245402#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582423631993146&term_id=100396581&type=3072&vid=5285890798997939528",
        info: "24分钟",
      },
      {
        name: "3.TabNavigation配置与使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969245402#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582427926960442&term_id=100396581&type=3072&vid=5285890798997939582",
        info: "36分钟",
      },
      {
        name: "4.Logo组件以及header logo的配置方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969245402#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582432221927738&term_id=100396581&type=3072&vid=5285890799118176011",
        info: "7分钟",
      },
      {
        name: "5.父子组件的拆分与传值以及轮播图组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969245403#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582436516895034&term_id=100396581&type=3072&vid=5285890798997939713",
        info: "31分钟",
      },
      {
        name: "6.标题组件与渲染时必要操作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969245403#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582440811862330&term_id=100396581&type=3072&vid=5285890799118186113",
        info: "11分钟",
      },
      {
        name: "7.推荐课程列表父子组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969245403#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582445106829626&term_id=100396581&type=3072&vid=5285890798997939744",
        info: "27分钟",
      },
      {
        name: "8.分类课程列表父子组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969245403#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582449401796922&term_id=100396581&type=3072&vid=5285890798997939782",
        info: "24分钟",
      },
      {
        name: "9.下拉刷新组件配置与组件使用逻辑详解",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969245403#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466542946392378&term_id=100396581&type=3072&vid=5285890798997939809",
        info: "14分钟",
      },
      {
        name: "10.优化首页刷新方案",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969245403#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466547241359674&term_id=100396581&type=3072&vid=5285890799123916635",
        info: "18分钟",
      },
    ],
  },
  {
    index: "157.",
    title: "开启『React Native』项目开发-『JS++课堂』（10节）",
    child: [
      {
        name: "1.列表页数据请求程序与数据格式化",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969244958#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582453696764218&term_id=100396581&type=3072&vid=5285890799118289767",
        info: "10分钟",
      },
      {
        name: "2.列表页选项卡组件的编写与逻辑分析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969244958#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582457991731514&term_id=100396581&type=3072&vid=5285890799118442240",
        info: "23分钟",
      },
      {
        name: "3.选项卡与课程列表关联以及数据缓存池机制",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969244958#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582462286698810&term_id=100396581&type=3072&vid=5285890799118707628",
        info: "11分钟",
      },
      {
        name: "4.编写下拉刷新组件并实现复用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969244958#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582466581666106&term_id=100396581&type=3072&vid=5285890799118738555",
        info: "15分钟",
      },
      {
        name: "5.切换选项卡loading视图展示",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969244958#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582470876633402&term_id=100396581&type=3072&vid=5285890799119106672",
        info: "15分钟",
      },
      {
        name: "6.图片的淡入效果的动画实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969244958#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582475171600698&term_id=100396581&type=3072&vid=5285890799119147116",
        info: "16分钟",
      },
      {
        name: "7.详情页WebView的使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969244959#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582479466567994&term_id=100396581&type=3072&vid=5285890799119147207",
        info: "16分钟",
      },
      {
        name: "8.React Native综合实战（八）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969244959#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582483761535290&term_id=100396581&type=3072&vid=5285890800097355195",
        info: "19分钟",
      },
      {
        name: "9.React Native综合实战（九）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969244959#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582488056502586&term_id=100396581&type=3072&vid=5285890800101976293",
        info: "31分钟",
      },
      {
        name: "10.React Native综合实战（十）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969244959#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582492351469882&term_id=100396581&type=3072&vid=5285890800101976304",
        info: "15分钟",
      },
    ],
  },
  {
    index: "158.",
    title: "开启『React Native』项目开发-『JS++课堂』（5节）",
    child: [
      {
        name: "1.React Native综合实战（十一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969244582#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582496646437178&term_id=100396581&type=3072&vid=5285890800101986428",
        info: "17分钟",
      },
      {
        name: "2.React Native综合实战（十二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969244582#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582500941404474&term_id=100396581&type=3072&vid=5285890800101986460",
        info: "21分钟",
      },
      {
        name: "3.React Native综合实战（十三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969244583#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582505236371770&term_id=100396581&type=3072&vid=5285890800103701685",
        info: "14分钟",
      },
      {
        name: "4.React Native综合实战（十四）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969244583#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582509531339066&term_id=100396581&type=3072&vid=5285890800105380371",
        info: "16分钟",
      },
      {
        name: "5.React Native综合实战（十五）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969244583#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3582513826306362&term_id=100396581&type=3072&vid=5285890800105884549",
        info: "14分钟",
      },
    ],
  },
  {
    index: "159.",
    title: "技术扩展之『NodeJS』基础篇（10节）",
    child: [
      {
        name: "1.编译过程、I_O操作、node应用场景",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969243016#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345719394375994&term_id=100396581&type=3072&vid=5285890793406918915",
        info: "130分钟",
      },
      {
        name: "2.node的安装、环境变量、linux常用指令",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969243016#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345723689343290&term_id=100396581&type=3072&vid=5285890793364917938",
        info: "34分钟",
      },
      {
        name: "3.commonJS 、后端的分层",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969243016#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345727984310586&term_id=100396581&type=3072&vid=5285890793481028725",
        info: "145分钟",
      },
      {
        name: "4.packageJson与npm",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969243016#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345732279277882&term_id=100396581&type=3072&vid=5285890793436465267",
        info: "135分钟",
      },
      {
        name: "5.buffer、编码方式",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969243017#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345736574245178&term_id=100396581&type=3072&vid=5285890793476358428",
        info: "132分钟",
      },
      {
        name: "6.buffer、path",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969243017#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036711209343290&term_id=100396581&type=3072&vid=5285890793483737415",
        info: "114分钟",
      },
      {
        name: "7.event、fs模块",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969243017#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345740869212474&term_id=100396581&type=3072&vid=5285890793623672251",
        info: "128分钟",
      },
      {
        name: "8.process、node的事件循环机制",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969243017#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345745164179770&term_id=100396581&type=3072&vid=5285890793427337774",
        info: "112分钟",
      },
      {
        name: "9.net模块",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969243017#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345749459147066&term_id=100396581&type=3072&vid=5285890793391872244",
        info: "166分钟",
      },
      {
        name: "10.http模块",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969243017#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345753754114362&term_id=100396581&type=3072&vid=5285890793220342522",
        info: "42分钟",
      },
    ],
  },
  {
    index: "160.",
    title: "NodeJS中event-loop与浏览器的event-loop（7节）",
    child: [
      {
        name: "1.1_NodeJS中event-loop与浏览器的event-loop",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969242460#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10444243772709178&term_id=100396581&type=3072&vid=5285890810815110262",
        info: "38分钟",
      },
      {
        name: "2.2_NodeJS中event-loop与浏览器的event-loop",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969242461#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10444248067676474&term_id=100396581&type=3072&vid=5285890810815110276",
        info: "21分钟",
      },
      {
        name: "3.3_NodeJS中event-loop与浏览器的event-loop",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969242461#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10444252362643770&term_id=100396581&type=3072&vid=5285890810815110315",
        info: "26分钟",
      },
      {
        name: "4.4_NodeJS中event-loop与浏览器的event-loop",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969242461#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10444256657611066&term_id=100396581&type=3072&vid=5285890810815562348",
        info: "36分钟",
      },
      {
        name: "5.promise面试题",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969242461#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10500735477553466&term_id=100396581&type=3072&vid=5285890811429369215",
        info: "27分钟",
      },
      {
        name: "6.promise面试题",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969242461#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10500739772520762&term_id=100396581&type=3072&vid=5285890811429687806",
        info: "33分钟",
      },
      {
        name: "7.promise面试题",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969242461#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10500744067488058&term_id=100396581&type=3072&vid=5285890811429687830",
        info: "53分钟",
      },
    ],
  },
  {
    index: "161.",
    title: "NodeJS『框架』篇（10节）",
    child: [
      {
        name: "1.Express的定义、安装、添加中间件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969242050#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345758049081658&term_id=100396581&type=3072&vid=5285890793369549339",
        info: "24分钟",
      },
      {
        name: "2.中间件的工作原理、处理不同路由、解析请求",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969242050#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345762344048954&term_id=100396581&type=3072&vid=5285890793369549399",
        info: "21分钟",
      },
      {
        name: "3.body-parser、处理特定请求、路由",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969242051#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345766639016250&term_id=100396581&type=3072&vid=5285890793374707549",
        info: "24分钟",
      },
      {
        name: "4.添加404页面、过滤路径、创建返回HTML页面",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969242051#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345770933983546&term_id=100396581&type=3072&vid=5285890793377366020",
        info: "22分钟",
      },
      {
        name: "5.返回404页面、增添样式、提供静态文件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969242051#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345775228950842&term_id=100396581&type=3072&vid=5285890793381397816",
        info: "33分钟",
      },
      {
        name: "6.分享数据、模板引擎、安装使用Pug",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969242051#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345779523918138&term_id=100396581&type=3072&vid=5285890793668157647",
        info: "28分钟",
      },
      {
        name: "7.输出动态内容、转换HTML文件到Pug",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969242051#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345783818885434&term_id=100396581&type=3072&vid=5285890793697284904",
        info: "31分钟",
      },
      {
        name: "8.添加layout、使用Handlebars",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969242052#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345788113852730&term_id=100396581&type=3072&vid=5285890793699869634",
        info: "22分钟",
      },
      {
        name: "9.转换到Handlebars模板、添加layout",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969242052#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345792408820026&term_id=100396581&type=3072&vid=5285890793773019190",
        info: "32分钟",
      },
      {
        name: "10.使用EJS、Partials代替layouts",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969242052#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345796703787322&term_id=100396581&type=3072&vid=5285890793782625870",
        info: "25分钟",
      },
    ],
  },
  {
    index: "162.",
    title: "NodeJS『框架』篇（7节）",
    child: [
      {
        name: "1.什么是MVC、添加控制器",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969240596#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345800998754618&term_id=100396581&type=3072&vid=5285890793831391876",
        info: "22分钟",
      },
      {
        name: "2.完善控制器、添加产品模型、存储和获取数据",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969240596#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345805293721914&term_id=100396581&type=3072&vid=5285890793938228691",
        info: "37分钟",
      },
      {
        name: "3.重构项目、注册路由、保存产品",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969240596#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345809588689210&term_id=100396581&type=3072&vid=5285890794005126586",
        info: "30分钟",
      },
      {
        name: "4.展示产品、编辑产品、删除产品",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969240596#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345813883656506&term_id=100396581&type=3072&vid=5285890794005126607",
        info: "33分钟",
      },
      {
        name: "5.处理动态参数、制作产品详情页面",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969240597#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345818178623802&term_id=100396581&type=3072&vid=5285890794029201445",
        info: "34分钟",
      },
      {
        name: "6.添加购物车模型、使用查询参数、预生成内容",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969240597#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3657018623990074&term_id=100396581&type=3072&vid=5285890794031486951",
        info: "34分钟",
      },
      {
        name: "7.编辑页面、删除功能的开发、购物车功能完善",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969240597#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3657022918957370&term_id=100396581&type=3072&vid=5285890794049495092",
        info: "62分钟",
      },
    ],
  },
  {
    index: "163.",
    title: "NodeJS『数据库』篇（10节）",
    child: [
      {
        name: "1.数据库的选择、设置MySQL、获取数据",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969239718#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345822473591098&term_id=100396581&type=3072&vid=5285890794435747328",
        info: "32分钟",
      },
      {
        name: "2.获取产品、往数据库插入数据",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969239718#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345826768558394&term_id=100396581&type=3072&vid=5285890794433055930",
        info: "25分钟",
      },
      {
        name: "3.什么是Sequelize、定义模型、插入数据",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969239718#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345831063525690&term_id=100396581&type=3072&vid=5285890794435757377",
        info: "31分钟",
      },
      {
        name: "4.获取数据、更新删除产品、创建关系",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969239718#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345835358492986&term_id=100396581&type=3072&vid=5285890794435767407",
        info: "36分钟",
      },
      {
        name: "5.创建用户、定义关系、创建购物车",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969239718#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345839653460282&term_id=100396581&type=3072&vid=5285890794435767435",
        info: "36分钟",
      },
      {
        name: "6.完善购物车功能、添加订单模型",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969239718#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345843948427578&term_id=100396581&type=3072&vid=5285890794435767468",
        info: "51分钟",
      },
      {
        name: "7.设置MongoDB、创建数据库连接、创建产品",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969239719#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345848243394874&term_id=100396581&type=3072&vid=5285890794435767498",
        info: "46分钟",
      },
      {
        name: "8.获取所有产品、编辑产品、删除产品",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969239719#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345852538362170&term_id=100396581&type=3072&vid=5285890794435767521",
        info: "36分钟",
      },
      {
        name: "9.添加用户、添加购物车功能",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969239719#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345856833329466&term_id=100396581&type=3072&vid=5285890794435767568",
        info: "61分钟",
      },
      {
        name: "10.完善购物车功能、添加订单功能",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969239719#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3345861128296762&term_id=100396581&type=3072&vid=5285890794445412073",
        info: "31分钟",
      },
    ],
  },
  {
    index: "164.",
    title: "NodeJS『数据库』篇（2节）",
    child: [
      {
        name: "1.使用Mongoose、产品的增删改查",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969239233#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3726085993077050&term_id=100396581&type=3072&vid=5285890794450648770",
        info: "32分钟",
      },
      {
        name: "2.添加用户模型、购物车和订单功能的开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969239233#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3726090288044346&term_id=100396581&type=3072&vid=5285890794460836064",
        info: "60分钟",
      },
    ],
  },
  {
    index: "165.",
    title: "Koa2重构『小米手机官网』（10节）",
    child: [
      {
        name: "1.Koa2介绍、项目搭建",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969238785#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4084208956152122&term_id=100396581&type=3072&vid=5285890797391787591",
        info: "16分钟",
      },
      {
        name: "2.项目目录与改造后的项目目录介绍",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969238785#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4084213251119418&term_id=100396581&type=3072&vid=5285890797391797609",
        info: "23分钟",
      },
      {
        name: "3.改造Koa2项目目录结构",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969238785#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4084217546086714&term_id=100396581&type=3072&vid=5285890797391797636",
        info: "12分钟",
      },
      {
        name: "4.依赖安装与Webpack配置文件编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969238785#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4084221841054010&term_id=100396581&type=3072&vid=5285890797391797650",
        info: "34分钟",
      },
      {
        name: "5.HTML页面拆分与EJS模板配置",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969238785#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4084226136021306&term_id=100396581&type=3072&vid=5285890797391797666",
        info: "19分钟",
      },
      {
        name: "6.父类模型封装、模型编写与模板渲染",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969238786#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4084230430988602&term_id=100396581&type=3072&vid=5285890797391797691",
        info: "23分钟",
      },
      {
        name: "7.样式文件的引入与header模板编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969238786#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4084234725955898&term_id=100396581&type=3072&vid=5285890797391797707",
        info: "23分钟",
      },
      {
        name: "8.数据缓存、导航逻辑和工具函数集合的编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969238786#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4084239020923194&term_id=100396581&type=3072&vid=5285890797391797722",
        info: "29分钟",
      },
      {
        name: "9.footer与轮播图模板与逻辑编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969238786#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4084243315890490&term_id=100396581&type=3072&vid=5285890797391797737",
        info: "24分钟",
      },
      {
        name: "10.首页搜索逻辑与首页标题模板编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969238786#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4084247610857786&term_id=100396581&type=3072&vid=5285890801853099096",
        info: "13分钟",
      },
    ],
  },
  {
    index: "166.",
    title: "Koa2重构『小米手机官网』（10节）",
    child: [
      {
        name: "1.首页标题与手机列表模板编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969238290#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4084251905825082&term_id=100396581&type=3072&vid=5285890797392031639",
        info: "16分钟",
      },
      {
        name: "2.list页面创建与tab模板编编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969238290#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4084256200792378&term_id=100396581&type=3072&vid=5285890797392122935",
        info: "24分钟",
      },
      {
        name: "3.带参数路由的设置、导航模块的编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969238291#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4084260495759674&term_id=100396581&type=3072&vid=5285890797392265156",
        info: "28分钟",
      },
      {
        name: "4.选项卡搜索模块编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969238291#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4084264790726970&term_id=100396581&type=3072&vid=5285890797392346360",
        info: "22分钟",
      },
      {
        name: "5.detail页面的创建与编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969238291#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4084269085694266&term_id=100396581&type=3072&vid=5285890797392457874",
        info: "19分钟",
      },
      {
        name: "6.拆分模板的子模板",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969238291#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4084273380661562&term_id=100396581&type=3072&vid=5285890797392478173",
        info: "19分钟",
      },
      {
        name: "7.配置gitee公钥、创建仓库、关联项目及提交",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969238291#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4084277675628858&term_id=100396581&type=3072&vid=5285890797392498573",
        info: "10分钟",
      },
      {
        name: "8.定制404页面及404中间件编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969238291#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4084281970596154&term_id=100396581&type=3072&vid=5285890797392690780",
        info: "22分钟",
      },
      {
        name: "9.域名购买与备案、服务器购买与域名解析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969238291#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4084286265563450&term_id=100396581&type=3072&vid=5285890797392792106",
        info: "20分钟",
      },
      {
        name: "10.服务器安装配置node、pm2、nginx反向代理",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969238292#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4084290560530746&term_id=100396581&type=3072&vid=5285890797392802132",
        info: "18分钟",
      },
    ],
  },
  {
    index: "167.",
    title: "Koa2重构『小米手机官网』（1节）",
    child: [
      {
        name: "1.pm2配置、项目部署、发布、安装、启动上线",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969237795#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4084294855498042&term_id=100396581&type=3072&vid=5285890797392812135",
        info: "18分钟",
      },
    ],
  },
  {
    index: "168.",
    title: "走进TypeScript基础（10节）",
    child: [
      {
        name: "1.初识TypeScript、什么是类型系统",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969236511#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885463639497018&term_id=100396581&type=3072&vid=387702299882057565",
        info: "21分钟",
      },
      {
        name: "2.类型注解、类型推断初探",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969236511#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885467934464314&term_id=100396581&type=3072&vid=387702299882067496",
        info: "29分钟",
      },
      {
        name: "3.函数和对象里的类型注解、数组类型",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969236511#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885472229431610&term_id=100396581&type=3072&vid=387702299882058155",
        info: "38分钟",
      },
      {
        name: "4.掌握元组类型、无比重要的接口",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969236511#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885476524398906&term_id=100396581&type=3072&vid=387702299882279231",
        info: "34分钟",
      },
      {
        name: "5.使用类实现功能",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969236511#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885480819366202&term_id=100396581&type=3072&vid=387702299882576387",
        info: "35分钟",
      },
      {
        name: "6.interface第二讲",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969236512#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13153788315900218&term_id=100396581&type=3072&vid=387702299882517720",
        info: "37分钟",
      },
      {
        name: "7.interface第三讲",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969236512#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13153792610867514&term_id=100396581&type=3072&vid=387702299881881921",
        info: "21分钟",
      },
      {
        name: "8.函数的注解",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969236512#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13217564285278522&term_id=100396581&type=3072&vid=387702300168629598",
        info: "32分钟",
      },
      {
        name: "9.字面量类型与字面量推断",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969236512#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13217568580245818&term_id=100396581&type=3072&vid=387702300513984922",
        info: "30分钟",
      },
      {
        name: "10.类型别名_类型收窄",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969236512#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13217572875213114&term_id=100396581&type=3072&vid=387702300512394190",
        info: "30分钟",
      },
    ],
  },
  {
    index: "169.",
    title: "TypeScript中设计模式探究之『地图应用』（4节）",
    child: [
      {
        name: "1.typeof_泛型",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969234668#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13217577170180410&term_id=100396581&type=3072&vid=387702300521434743",
        info: "40分钟",
      },
      {
        name: "2.项目综述、Parcel打包、类型定义文件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969234668#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885485114333498&term_id=100396581&type=3072&vid=5285890796271836727",
        info: "36分钟",
      },
      {
        name: "3.添加地图、隐藏功能、修饰符",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969234668#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885489409300794&term_id=100396581&type=3072&vid=5285890796322984646",
        info: "34分钟",
      },
      {
        name: "4.添加标注、使用接口限制函数访问、细节处理",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969234669#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885493704268090&term_id=100396581&type=3072&vid=5285890796333467086",
        info: "62分钟",
      },
    ],
  },
  {
    index: "170.",
    title: "设计模式的进一步探究之『排序应用』（5节）",
    child: [
      {
        name: "1.项目综述、环境配置",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969233887#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885497999235386&term_id=100396581&type=3072&vid=5285890796348924544",
        info: "21分钟",
      },
      {
        name: "2.排序算法的概念及实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969233888#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885502294202682&term_id=100396581&type=3072&vid=5285890796360615433",
        info: "38分钟",
      },
      {
        name: "3.类型保护的介绍",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969233888#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885506589169978&term_id=100396581&type=3072&vid=5285890797956223700",
        info: "7分钟",
      },
      {
        name: "4.核心逻辑的抽离",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969233888#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885510884137274&term_id=100396581&type=3072&vid=5285890797956223710",
        info: "25分钟",
      },
      {
        name: "5.具体接口的定义",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969233888#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885515179104570&term_id=100396581&type=3072&vid=5285890797956223721",
        info: "8分钟",
      },
    ],
  },
  {
    index: "171.",
    title: "设计模式的进一步探究之『排序应用』（6节）",
    child: [
      {
        name: "1.排序逻辑实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969233430#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885519474071866&term_id=100396581&type=3072&vid=5285890797956223739",
        info: "9分钟",
      },
      {
        name: "2.链表数据结构的实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969233430#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885523769039162&term_id=100396581&type=3072&vid=5285890797956223745",
        info: "28分钟",
      },
      {
        name: "3.细节处理",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969233430#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885528064006458&term_id=100396581&type=3072&vid=5285890797956223763",
        info: "6分钟",
      },
      {
        name: "4.使用继承实现排序功能",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969233430#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885532358973754&term_id=100396581&type=3072&vid=5285890797956233782",
        info: "9分钟",
      },
      {
        name: "5.抽象类的介绍",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969233431#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885536653941050&term_id=100396581&type=3072&vid=5285890797956233786",
        info: "6分钟",
      },
      {
        name: "6.抽象类的使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969233431#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885540948908346&term_id=100396581&type=3072&vid=5285890797956243791",
        info: "12分钟",
      },
    ],
  },
  {
    index: "172.",
    title: "VueJS + TS 制作购物车实战（5节）",
    child: [
      {
        name: "1.谈谈TS如何结合Vue项目",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969233002#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885545243875642&term_id=100396581&type=3072&vid=5285890798668133257",
        info: "62分钟",
      },
      {
        name: "2.项目展示、创建项目",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969233002#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885549538842938&term_id=100396581&type=3072&vid=5285890799451500764",
        info: "10分钟",
      },
      {
        name: "3.购物车页面、地址配送页面组件设计",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969233002#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885553833810234&term_id=100396581&type=3072&vid=5285890799451500843",
        info: "4分钟",
      },
      {
        name: "4.Header组件的开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969233002#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885558128777530&term_id=100396581&type=3072&vid=5285890799451500879",
        info: "21分钟",
      },
      {
        name: "5.完善Header组件的功能",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969233002#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885562423744826&term_id=100396581&type=3072&vid=5285890799451500920",
        info: "9分钟",
      },
    ],
  },
  {
    index: "173.",
    title: "VueJS + TS 制作购物车实战（3节）",
    child: [
      {
        name: "1.产品列表组件的编写（基于类）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969231785#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885566718712122&term_id=100396581&type=3072&vid=5285890799451500952",
        info: "8分钟",
      },
      {
        name: "2.完善产品列表组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969231786#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885571013679418&term_id=100396581&type=3072&vid=5285890799451500990",
        info: "10分钟",
      },
      {
        name: "3.Footer组件的编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969231786#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885575308646714&term_id=100396581&type=3072&vid=5285890799451501033",
        info: "6分钟",
      },
    ],
  },
  {
    index: "174.",
    title: "VueJS + TS 制作购物车实战（3节）",
    child: [
      {
        name: "1.获取Mock数据、接口的使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969231346#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885579603614010&term_id=100396581&type=3072&vid=5285890799451501076",
        info: "14分钟",
      },
      {
        name: "2.过滤器的使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969231346#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885583898581306&term_id=100396581&type=3072&vid=5285890799451501140",
        info: "5分钟",
      },
      {
        name: "3.购物车功能的实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969231346#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885588193548602&term_id=100396581&type=3072&vid=5285890799451501189",
        info: "9分钟",
      },
    ],
  },
  {
    index: "175.",
    title: "VueJS + TS 制作购物车实战（3节）",
    child: [
      {
        name: "1.计算属性的使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969230874#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885592488515898&term_id=100396581&type=3072&vid=5285890799451573256",
        info: "13分钟",
      },
      {
        name: "2.配送地址页面的开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969230874#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885596783483194&term_id=100396581&type=3072&vid=5285890799451624061",
        info: "38分钟",
      },
      {
        name: "3.项目总结、课程收官",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969230875#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3885601078450490&term_id=100396581&type=3072&vid=5285890799451634607",
        info: "4分钟",
      },
    ],
  },
  {
    index: "176.",
    title: "『视频操作相关技术』系列课（5节）",
    child: [
      {
        name: "1.视频相关操作的原理流程",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969230460#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13539064062220602&term_id=100396581&type=3072&vid=387702302887575875",
        info: "29分钟",
      },
      {
        name: "2.搭建前后端工程化环境与依赖安装",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969230460#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13539068357187898&term_id=100396581&type=3072&vid=387702302886787004",
        info: "25分钟",
      },
      {
        name: "3.前端上传视频与后端接收上传信息",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969230460#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13539072652155194&term_id=100396581&type=3072&vid=387702302886143469",
        info: "35分钟",
      },
      {
        name: "4.前端上传功能完善与切片上传视频",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969230461#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13539076947122490&term_id=100396581&type=3072&vid=387702302886819807",
        info: "32分钟",
      },
      {
        name: "5.切片合并、转码与切片播放、断点续传",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969230461#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=13539081242089786&term_id=100396581&type=3072&vid=387702302887754571",
        info: "37分钟",
      },
    ],
  },
  {
    index: "177.",
    title: "【工程师综合项目一】Koa2 + Puppeteer打造『爬虫系统』（10节）",
    child: [
      {
        name: "1.Puppeteer的使用与注意事项",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969230042#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=6310986290370874&term_id=100396581&type=3072&vid=5285890799214376022",
        info: "22分钟",
      },
      {
        name: "2.启动子进程运行爬虫脚本",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969230043#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=6310990585338170&term_id=100396581&type=3072&vid=5285890799214376023",
        info: "8分钟",
      },
      {
        name: "3.改造Koa2以及封装爬虫和开启子进程程序",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969230043#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=6310994880305466&term_id=100396581&type=3072&vid=5285890799214376025",
        info: "19分钟",
      },
      {
        name: "4.将图片资源上传至七牛图床",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969230043#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=6310999175272762&term_id=100396581&type=3072&vid=5285890799214386128",
        info: "37分钟",
      },
      {
        name: "5.MySQL与Sequelize连接创建",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969230043#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=6311003470240058&term_id=100396581&type=3072&vid=5285890799214386170",
        info: "24分钟",
      },
      {
        name: "6.创建表模型、同步模型、数据入表",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969230043#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=6311007765207354&term_id=100396581&type=3072&vid=5285890799214386201",
        info: "22分钟",
      },
      {
        name: "7.爬取机构信息以及上传七牛图床",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969230043#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=6311012060174650&term_id=100396581&type=3072&vid=5285890799214386241",
        info: "29分钟",
      },
      {
        name: "8.创建机构信息表模型以及信息入表操作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969230044#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=6311016355141946&term_id=100396581&type=3072&vid=5285890799214386259",
        info: "14分钟",
      },
      {
        name: "9.爬取推荐课程数据以及上传七牛图床",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969230044#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=6311020650109242&term_id=100396581&type=3072&vid=5285890799214386274",
        info: "24分钟",
      },
      {
        name: "10.创建推荐课程表模型以及数据入表操作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969230044#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=6311024945076538&term_id=100396581&type=3072&vid=5285890799214386402",
        info: "29分钟",
      },
    ],
  },
  {
    index: "178.",
    title: "【工程师综合项目一】Koa2 + Puppeteer打造『爬虫系统』（10节）",
    child: [
      {
        name: "1.爬取课程集合列表以及上传七牛图床",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969227750#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=6311029240043834&term_id=100396581&type=3072&vid=5285890799223731620",
        info: "29分钟",
      },
      {
        name: "2.创建课程集合表模型以及入表操作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969227750#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=6311033535011130&term_id=100396581&type=3072&vid=5285890799223731712",
        info: "12分钟",
      },
      {
        name: "3.爬取老师列表信息以及上传七牛图床",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969227750#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=6311037829978426&term_id=100396581&type=3072&vid=5285890799223731764",
        info: "13分钟",
      },
      {
        name: "4.创建老师列表模型以及入表操作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969227751#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=6311042124945722&term_id=100396581&type=3072&vid=5285890799223731782",
        info: "16分钟",
      },
      {
        name: "5.爬取优秀学生列表信息以及上传七牛图床",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969227751#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=6311046419913018&term_id=100396581&type=3072&vid=5285890799223731812",
        info: "12分钟",
      },
      {
        name: "6.创建优秀学生表模型以及入表操作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969227751#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=6311050714880314&term_id=100396581&type=3072&vid=5285890799223793057",
        info: "13分钟",
      },
      {
        name: "7.课程选项卡数据爬取、创建表模型、数据入表",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969227751#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=6311055009847610&term_id=100396581&type=3072&vid=5285890799225184005",
        info: "20分钟",
      },
      {
        name: "8.爬取课程列表数据以及上传七牛图床",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969227751#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=6311059304814906&term_id=100396581&type=3072&vid=5285890799226327640",
        info: "19分钟",
      },
      {
        name: "9.创建课程数据模型以及数据入表操作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969227752#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=6311063599782202&term_id=100396581&type=3072&vid=5285890799226327643",
        info: "10分钟",
      },
      {
        name: "10.爬取关于我们数据、建立表模型、数据入表",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969227752#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=6311067894749498&term_id=100396581&type=3072&vid=5285890799227596004",
        info: "19分钟",
      },
    ],
  },
  {
    index: "179.",
    title: "【工程师综合项目一】Koa2 + Puppeteer打造『爬虫系统』（1节）",
    child: [
      {
        name: "1.统一同步表模型以及数据入表操作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969226600#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=6311072189716794&term_id=100396581&type=3072&vid=5285890799227883122",
        info: "9分钟",
      },
    ],
  },
  {
    index: "180.",
    title: "【工程师综合项目二】React + Koa2打造『JS++官网管理后台』（10节）",
    child: [
      {
        name: "1.Redis认知、安装与操作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969226151#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021655521958202&term_id=100396581&type=3072&vid=5285890799459714004",
        info: "24分钟",
      },
      {
        name: "2.Cookie、Session与Redis夯实基础",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969226151#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021659816925498&term_id=100396581&type=3072&vid=5285890799459714506",
        info: "16分钟",
      },
      {
        name: "3.打通cookie、session、redis",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969226151#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021664111892794&term_id=100396581&type=3072&vid=5285890799459755604",
        info: "33分钟",
      },
      {
        name: "4.admin表模型、密码加密、初始化admin账户",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969226151#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3021668406860090&term_id=100396581&type=3072&vid=5285890799459786170",
        info: "23分钟",
      },
      {
        name: "5.创建与配置React项目",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969226152#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036715504310586&term_id=100396581&type=3072&vid=5285890799459786247",
        info: "19分钟",
      },
      {
        name: "6.创建react路由、嵌套路由的配置",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969226152#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036719799277882&term_id=100396581&type=3072&vid=5285890799459786285",
        info: "20分钟",
      },
      {
        name: "7.编写Login页面组件以及button样式类",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969226152#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036724094245178&term_id=100396581&type=3072&vid=5285890799459786331",
        info: "36分钟",
      },
      {
        name: "8.axios请求数据以及Koa2跨域请求配置",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969226152#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036728389212474&term_id=100396581&type=3072&vid=5285890799459786347",
        info: "15分钟",
      },
      {
        name: "9.编写登录接口以及抽离返回信息集合",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969226152#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036732684179770&term_id=100396581&type=3072&vid=5285890799459786363",
        info: "22分钟",
      },
      {
        name: "10.建立数据请求模型以及完成前端登录逻辑",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969226152#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036736979147066&term_id=100396581&type=3072&vid=5285890799459786463",
        info: "25分钟",
      },
    ],
  },
  {
    index: "181.",
    title: "【工程师综合项目二】React + Koa2打造『JS++官网管理后台』（10节）",
    child: [
      {
        name: "1.登录验证、跨域设置cookie以及路由跳转",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969225713#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036741274114362&term_id=100396581&type=3072&vid=5285890799460075700",
        info: "28分钟",
      },
      {
        name: "2.管理首页登录验证、Header组件、退出登录",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969225714#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036745569081658&term_id=100396581&type=3072&vid=5285890799460096404",
        info: "31分钟",
      },
      {
        name: "3.侧边导航栏组件以及导航路由切换",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969225714#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036749864048954&term_id=100396581&type=3072&vid=5285890799532385530",
        info: "27分钟",
      },
      {
        name: "4.子页面路由配置与路由跳转技巧",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969225714#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036754159016250&term_id=100396581&type=3072&vid=5285890799532385558",
        info: "22分钟",
      },
      {
        name: "5.错误页面组件、修复警告提示",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969225714#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036758453983546&term_id=100396581&type=3072&vid=5285890799532385591",
        info: "8分钟",
      },
      {
        name: "6.数据请求、接口权限验证、登录验证中间件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969225714#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036762748950842&term_id=100396581&type=3072&vid=5285890799532385706",
        info: "24分钟",
      },
      {
        name: "7.修复数据表、爬虫接口权限验证",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969225715#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036767043918138&term_id=100396581&type=3072&vid=5285890799532385741",
        info: "6分钟",
      },
      {
        name: "8.配置表格、编写表格组件、提取公共组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969225716#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036771338885434&term_id=100396581&type=3072&vid=5285890799580019780",
        info: "33分钟",
      },
      {
        name: "9.请求数据、数据格式化、编写列表组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969225716#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036775633852730&term_id=100396581&type=3072&vid=5285890799580019836",
        info: "37分钟",
      },
      {
        name: "10.select组件编写、组件事件传递与数据联动",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969225716#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036779928820026&term_id=100396581&type=3072&vid=5285890799580029863",
        info: "28分钟",
      },
    ],
  },
  {
    index: "182.",
    title: "【工程师综合项目二】React + Koa2打造『JS++官网管理后台』（10节）",
    child: [
      {
        name: "1.课程分类更改与前端后端打通",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969225305#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036784223787322&term_id=100396581&type=3072&vid=5285890799590811698",
        info: "35分钟",
      },
      {
        name: "2.解决爬取第二页数据问题、上下架课程",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969225306#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036788518754618&term_id=100396581&type=3072&vid=5285890799594373602",
        info: "39分钟",
      },
      {
        name: "3.推荐课程页面、课程上下架操作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969225306#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036792813721914&term_id=100396581&type=3072&vid=5285890799627637824",
        info: "34分钟",
      },
      {
        name: "4.抽离更改状态的公共控制器方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969225306#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036797108689210&term_id=100396581&type=3072&vid=5285890799619183171",
        info: "20分钟",
      },
      {
        name: "5.轮播图页面、轮播图上下架操作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969225306#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036801403656506&term_id=100396581&type=3072&vid=5285890799627637860",
        info: "25分钟",
      },
      {
        name: "6.课程集合页面、上下架操作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969225306#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036805698623802&term_id=100396581&type=3072&vid=5285890799627647897",
        info: "24分钟",
      },
      {
        name: "7.老师页面、老师上下线与明星老师设置",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969225306#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036809993591098&term_id=100396581&type=3072&vid=5285890799627647938",
        info: "42分钟",
      },
      {
        name: "8.学生页面、学生上下线操作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969225306#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036814288558394&term_id=100396581&type=3072&vid=5285890799619816778",
        info: "18分钟",
      },
      {
        name: "9.设计、测试、跑通爬虫管理API接口",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969225307#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036818583525690&term_id=100396581&type=3072&vid=5285890799623143705",
        info: "29分钟",
      },
      {
        name: "10.数据爬虫管理页面以及接口请求",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969225307#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036822878492986&term_id=100396581&type=3072&vid=5285890799627658015",
        info: "29分钟",
      },
    ],
  },
  {
    index: "183.",
    title: "【工程师综合项目二】React + Koa2打造『JS++官网管理后台』（2节）",
    child: [
      {
        name: "1.改造爬虫接口、爬虫接口请求与返回",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969223899#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036827173460282&term_id=100396581&type=3072&vid=5285890799628351358",
        info: "29分钟",
      },
      {
        name: "2.优化项目代码",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969223899#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7036831468427578&term_id=100396581&type=3072&vid=5285890799636870727",
        info: "23分钟",
      },
    ],
  },
  {
    index: "184.",
    title: "【工程师综合项目三】Koa2 SSR打造『JS++官方网站』（10节）",
    child: [
      {
        name: "1.项目展示、项目初始化及基本配置",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969223473#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466551536326970&term_id=100396581&type=3072&vid=5285890800101976293",
        info: "31分钟",
      },
      {
        name: "2.完成layout模板编写以及公共样式引入",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969223474#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466555831294266&term_id=100396581&type=3072&vid=5285890800101976304",
        info: "15分钟",
      },
      {
        name: "3.header部分抽离子模板、模板出口设计",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969223474#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466560126261562&term_id=100396581&type=3072&vid=5285890800101986418",
        info: "9分钟",
      },
      {
        name: "4.获取轮播图数据以及父子模板拆分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969223474#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466564421228858&term_id=100396581&type=3072&vid=5285890800101986428",
        info: "17分钟",
      },
      {
        name: "5.轮播图配置、入口文件导入与模块编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969223474#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466568716196154&term_id=100396581&type=3072&vid=5285890800101986460",
        info: "21分钟",
      },
      {
        name: "6.获取推荐课程数据、推荐课程模板编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969223474#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466573011163450&term_id=100396581&type=3072&vid=5285890800103701685",
        info: "14分钟",
      },
      {
        name: "7.首页标题模板编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969223474#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466577306130746&term_id=100396581&type=3072&vid=5285890800103701719",
        info: "5分钟",
      },
      {
        name: "8.sequelize数据结果集、Promise.all的使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969223474#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466581601098042&term_id=100396581&type=3072&vid=5285890800097355195",
        info: "19分钟",
      },
      {
        name: "9.课程集合与抽离课程卡公共模板",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969223475#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466585896065338&term_id=100396581&type=3072&vid=5285890800105380371",
        info: "16分钟",
      },
      {
        name: "10.获取优秀老师数据、优秀老师模板",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969223475#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466590191032634&term_id=100396581&type=3072&vid=5285890800105884549",
        info: "14分钟",
      },
    ],
  },
  {
    index: "185.",
    title: "【工程师综合项目三】Koa2 SSR打造『JS++官方网站』（8节）",
    child: [
      {
        name: "1.获取优秀学生数据、优秀学生模板",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969223092#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466594485999930&term_id=100396581&type=3072&vid=5285890800106328202",
        info: "9分钟",
      },
      {
        name: "2.footer模板拆分分析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969223093#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466598780967226&term_id=100396581&type=3072&vid=5285890800109130377",
        info: "19分钟",
      },
      {
        name: "3.编写搜索功能模块",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969223093#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466603075934522&term_id=100396581&type=3072&vid=5285890800109408445",
        info: "10分钟",
      },
      {
        name: "4.选项卡模板拆分与编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969223093#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466607370901818&term_id=100396581&type=3072&vid=5285890800111619902",
        info: "13分钟",
      },
      {
        name: "5.课程列表模板与静态数据缓存机制",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969223093#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466611665869114&term_id=100396581&type=3072&vid=5285890800111619922",
        info: "10分钟",
      },
      {
        name: "6.课程搜索展示与无结果提示",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969223093#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466615960836410&term_id=100396581&type=3072&vid=5285890800111619978",
        info: "7分钟",
      },
      {
        name: "7.导航切换模块编写与数据过滤",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969223094#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466620255803706&term_id=100396581&type=3072&vid=5285890800112241732",
        info: "18分钟",
      },
      {
        name: "8.自定义错误页面",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969223094#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466624550771002&term_id=100396581&type=3072&vid=5285890800112618459",
        info: "8分钟",
      },
    ],
  },
  {
    index: "186.",
    title:
      "【工程师综合项目四】Vue + Nuxt + Koa2全栈打造『官方移动端』（10节）",
    child: [
      {
        name: "1.NuxtJS初识、安装与选项、目录结构",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969221841#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638010925750586&term_id=100396581&type=3072&vid=5285890800396743211",
        info: "27分钟",
      },
      {
        name: "2.资源请求与下载、前后端分离与服务端渲染",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969221841#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638015220717882&term_id=100396581&type=3072&vid=5285890800396743223",
        info: "30分钟",
      },
      {
        name: "3.项目目录结构、配置与必要文件依赖",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969221841#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638019515685178&term_id=100396581&type=3072&vid=5285890800396743250",
        info: "37分钟",
      },
      {
        name: "4.header组件、子组件拆分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969221841#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638023810652474&term_id=100396581&type=3072&vid=5285890800396743282",
        info: "21分钟",
      },
      {
        name: "5.滚动区域组件的配置与技巧",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969221841#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638028105619770&term_id=100396581&type=3072&vid=5285890800396743298",
        info: "9分钟",
      },
      {
        name: "6.footer组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969221842#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638032400587066&term_id=100396581&type=3072&vid=5285890800396743352",
        info: "6分钟",
      },
      {
        name: "7.服务端异步获取数据、asyncData方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969221842#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638036695554362&term_id=100396581&type=3072&vid=5285890800396773833",
        info: "17分钟",
      },
      {
        name: "8.轮播图父子组件拆分与swiper插件的配置技巧",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969221842#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638040990521658&term_id=100396581&type=3072&vid=5285890800396773864",
        info: "14分钟",
      },
      {
        name: "9.首页标题组件与复用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969221842#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638045285488954&term_id=100396581&type=3072&vid=5285890800396773901",
        info: "7分钟",
      },
      {
        name: "10.课程导航数据对接、组件拆分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969221842#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638049580456250&term_id=100396581&type=3072&vid=5285890800396773945",
        info: "12分钟",
      },
    ],
  },
  {
    index: "187.",
    title:
      "【工程师综合项目四】Vue + Nuxt + Koa2全栈打造『官方移动端』（10节）",
    child: [
      {
        name: "1.合作方组件拆分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969221400#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638053875423546&term_id=100396581&type=3072&vid=5285890800396997436",
        info: "11分钟",
      },
      {
        name: "2.推荐课程组件拆分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969221400#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638058170390842&term_id=100396581&type=3072&vid=5285890800397088595",
        info: "15分钟",
      },
      {
        name: "3.嵌套数据下的组件化设计方案",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969221401#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638062465358138&term_id=100396581&type=3072&vid=5285890800397119159",
        info: "13分钟",
      },
      {
        name: "4.嵌套数据下的课程列表组件的复用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969221401#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638066760325434&term_id=100396581&type=3072&vid=5285890800397341779",
        info: "15分钟",
      },
      {
        name: "5.优秀老师组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969221401#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638071055292730&term_id=100396581&type=3072&vid=5285890800397392555",
        info: "16分钟",
      },
      {
        name: "6.页面下拉刷新逻辑与组件配置方案",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969221401#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638075350260026&term_id=100396581&type=3072&vid=5285890800397493851",
        info: "16分钟",
      },
      {
        name: "7.列表页面的数据获取与必要配置",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969221401#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638079645227322&term_id=100396581&type=3072&vid=5285890800398841048",
        info: "9分钟",
      },
      {
        name: "8.Vuex状态管理与事件响应、tab组件的切换",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969221401#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638083940194618&term_id=100396581&type=3072&vid=5285890800399458397",
        info: "20分钟",
      },
      {
        name: "9.导航切换滚动定位解决方案",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969221401#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638088235161914&term_id=100396581&type=3072&vid=5285890800400663281",
        info: "11分钟",
      },
      {
        name: "10.课程列表的复用、下拉刷新数据技巧",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969221401#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638092530129210&term_id=100396581&type=3072&vid=5285890800401008502",
        info: "18分钟",
      },
    ],
  },
  {
    index: "188.",
    title: "【工程师综合项目四】Vue + Nuxt + Koa2全栈打造『官方移动端』（2节）",
    child: [
      {
        name: "1.自定义错误页面",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969220976#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638096825096506&term_id=100396581&type=3072&vid=5285890800401791723",
        info: "7分钟",
      },
      {
        name: "2.修复BUG、增加NUXT公共模板",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969220977#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638101120063802&term_id=100396581&type=3072&vid=5285890800523618578",
        info: "23分钟",
      },
    ],
  },
  {
    index: "189.",
    title: "【工程师综合项目一、二、三】项目上线部署（6节）",
    child: [
      {
        name: "1.部署前项目改造与修复、上线准备",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969220587#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466628845738298&term_id=100396581&type=3072&vid=5285890800072347708",
        info: "26分钟",
      },
      {
        name: "2.静态资源上传七牛脚本编写、打包上传配置",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969220587#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466633140705594&term_id=100396581&type=3072&vid=5285890800072347730",
        info: "16分钟",
      },
      {
        name: "3.创建、关联、上传3个项目到线上仓库",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969220588#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466637435672890&term_id=100396581&type=3072&vid=5285890800072347763",
        info: "11分钟",
      },
      {
        name: "4.PM2、域名解析、nginx代理、静态项目部署",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969220588#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466641730640186&term_id=100396581&type=3072&vid=5285890800072408791",
        info: "26分钟",
      },
      {
        name: "5.安装redis、MySQL、Puppeteer问题方案",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969220588#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7466646025607482&term_id=100396581&type=3072&vid=5285890800072418986",
        info: "27分钟",
      },
      {
        name: "6.Nuxt + Koa2项目上线方案",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969220588#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=7638105415031098&term_id=100396581&type=3072&vid=5285890800438492462",
        info: "20分钟",
      },
    ],
  },
  {
    index: "190.",
    title: "【工程师综合项目五】vite + 原生NodeJS开发『文档生成工具』（8节）",
    child: [
      {
        name: "1.项目展示、文档说明",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969219153#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10172260673722682&term_id=100396581&type=3072&vid=5285890808507494166",
        info: "26分钟",
      },
      {
        name: "2.项目搭建、工程初始化、程序设计",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969219153#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10172264968689978&term_id=100396581&type=3072&vid=5285890808507494199",
        info: "41分钟",
      },
      {
        name: "3.按需创建文件夹、复制文件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969219153#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10172269263657274&term_id=100396581&type=3072&vid=5285890808507494241",
        info: "24分钟",
      },
      {
        name: "4.编译index页面文件（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969219154#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10172273558624570&term_id=100396581&type=3072&vid=5285890808507494283",
        info: "24分钟",
      },
      {
        name: "5.编译index页面文件（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969219154#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10172277853591866&term_id=100396581&type=3072&vid=5285890808507494298",
        info: "24分钟",
      },
      {
        name: "6.编译index页面文件（3）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969219154#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10172282148559162&term_id=100396581&type=3072&vid=5285890808507504325",
        info: "15分钟",
      },
      {
        name: "7.Markdown转换HTML（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969219154#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10172286443526458&term_id=100396581&type=3072&vid=5285890808507504358",
        info: "24分钟",
      },
      {
        name: "8.Markdown转换HTML（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969219154#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10172290738493754&term_id=100396581&type=3072&vid=5285890808507504470",
        info: "15分钟",
      },
    ],
  },
  {
    index: "191.",
    title: "【工程师综合项目五】vite + 原生NodeJS开发『文档生成工具』（3节）",
    child: [
      {
        name: "1.监听HTML文件变化",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969218467#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10172295033461050&term_id=100396581&type=3072&vid=5285890808507524564",
        info: "20分钟",
      },
      {
        name: "2.监听markdown文件变化",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969218468#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10172299328428346&term_id=100396581&type=3072&vid=5285890808508165700",
        info: "26分钟",
      },
      {
        name: "3.修改BUG、使用工具、源码总结",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969218468#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10172303623395642&term_id=100396581&type=3072&vid=5285890808521466464",
        info: "25分钟",
      },
    ],
  },
  {
    index: "192.",
    title:
      "【工程师综合项目六】Vue3+EggJS全栈TypeScript重构『新闻头条』（8节）",
    child: [
      {
        name: "1.项目介绍、EggJS搭建环境、配置与封装",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969217972#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235237779183930&term_id=100396581&type=3072&vid=5285890809551380481",
        info: "42分钟",
      },
      {
        name: "2.封装请求、编写接口、请求分页数据跑通",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969217972#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235242074151226&term_id=100396581&type=3072&vid=5285890809048355674",
        info: "33分钟",
      },
      {
        name: "3.搭建Vue3项目、跑通路由、定义接口",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969217972#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235246369118522&term_id=100396581&type=3072&vid=5285890809048366153",
        info: "26分钟",
      },
      {
        name: "4.header与路由切换联动的高级技巧",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969217972#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235250664085818&term_id=100396581&type=3072&vid=5285890809048376187",
        info: "30分钟",
      },
      {
        name: "5.封装、store模块接口定义、初始化state",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969217973#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235254959053114&term_id=100396581&type=3072&vid=5285890809048416971",
        info: "29分钟",
      },
      {
        name: "6.跑通actions与mutations",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969217973#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235259254020410&term_id=100396581&type=3072&vid=5285890809048417153",
        info: "23分钟",
      },
      {
        name: "7.页面数据请求到Store设置数据、内容注释",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969217973#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235263548987706&term_id=100396581&type=3072&vid=5285890809048427227",
        info: "26分钟",
      },
      {
        name: "8.导航组件、导航切换指令编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969217973#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235267843955002&term_id=100396581&type=3072&vid=5285890809049188116",
        info: "29分钟",
      },
    ],
  },
  {
    index: "193.",
    title:
      "【工程师综合项目六】Vue3+EggJS全栈TypeScript重构『新闻头条』（7节）",
    child: [
      {
        name: "1.导航切换设置对应新闻类型操作、内容注释",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969216602#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235272138922298&term_id=100396581&type=3072&vid=5285890809050182994",
        info: "23分钟",
      },
      {
        name: "2.新闻列表按需加载、图片淡入hook",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969216602#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235276433889594&term_id=100396581&type=3072&vid=5285890809050696846",
        info: "25分钟",
      },
      {
        name: "3.上拉加载更多功能实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969216602#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235280728856890&term_id=100396581&type=3072&vid=5285890809053538940",
        info: "28分钟",
      },
      {
        name: "4.加载更多提示组件与骨架屏",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969216603#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235285023824186&term_id=100396581&type=3072&vid=5285890809053987242",
        info: "20分钟",
      },
      {
        name: "5.详情页内容展示与store的detail模块",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969216603#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235289318791482&term_id=100396581&type=3072&vid=5285890809062904009",
        info: "31分钟",
      },
      {
        name: "6.新闻收藏与检查收藏状态功能实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969216603#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235293613758778&term_id=100396581&type=3072&vid=5285890809064869512",
        info: "28分钟",
      },
      {
        name: "7.收藏列表以及无内容显示",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969216603#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235297908726074&term_id=100396581&type=3072&vid=5285890809065628184",
        info: "45分钟",
      },
    ],
  },
  {
    index: "194.",
    title: "【工程师综合项目七】React Hooks+EggJS全栈TS『驾照考题』（6节）",
    child: [
      {
        name: "1.Node中间层、前后端项目搭建与依赖安装",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969216090#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10246812716046650&term_id=100396581&type=3072&vid=5285890809227001119",
        info: "29分钟",
      },
      {
        name: "2.EggJS配置、请求封装与API接口实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969216091#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10246817011013946&term_id=100396581&type=3072&vid=5285890809547194989",
        info: "44分钟",
      },
      {
        name: "3.页面路由配置、Redux搭建、请求函数封装",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969216091#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10246821305981242&term_id=100396581&type=3072&vid=5285890809230158075",
        info: "30分钟",
      },
      {
        name: "4.state初始化与Header组件的编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969216091#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10246825600948538&term_id=100396581&type=3072&vid=5285890809232339232",
        info: "44分钟",
      },
      {
        name: "5.科目面板组件编写与切换数据操作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969216091#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10246829895915834&term_id=100396581&type=3072&vid=5285890809233034639",
        info: "25分钟",
      },
      {
        name: "6.驾照选择面板组件编写、数据切换",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969216091#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10246834190883130&term_id=100396581&type=3072&vid=5285890809235896474",
        info: "36分钟",
      },
    ],
  },
  {
    index: "195.",
    title: "【工程师综合项目七】React Hooks+EggJS全栈TS『驾照考题』（5节）",
    child: [
      {
        name: "1.数据请求与数据管理、自定义hooks",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969215659#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10246838485850426&term_id=100396581&type=3072&vid=5285890809259022713",
        info: "35分钟",
      },
      {
        name: "2.使用自定义Hooks、题目面板组件编写",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969215660#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10246842780817722&term_id=100396581&type=3072&vid=5285890809259022761",
        info: "20分钟",
      },
      {
        name: "3.选项切换和用户选项数据的处理逻辑(1)",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969215660#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10246847075785018&term_id=100396581&type=3072&vid=5285890809259032815",
        info: "31分钟",
      },
      {
        name: "4.选项切换和用户选项数据的处理逻辑(2)",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969215660#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10246851370752314&term_id=100396581&type=3072&vid=5285890809259391739",
        info: "29分钟",
      },
      {
        name: "5.结果页面展示和细节问题的处理方案",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969215660#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10246855665719610&term_id=100396581&type=3072&vid=5285890809261295655",
        info: "20分钟",
      },
    ],
  },
  {
    index: "196.",
    title: "【工程师综合项目八】React Hooks+Express全栈TS『购物车』（9节）",
    child: [
      {
        name: "1.第1部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969214404#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10538788887796026&term_id=100396581&type=3072&vid=5285890811711313788",
        info: "30分钟",
      },
      {
        name: "2.第2部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969214405#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10538793182763322&term_id=100396581&type=3072&vid=5285890811711313805",
        info: "30分钟",
      },
      {
        name: "3.第3部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969214405#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10538797477730618&term_id=100396581&type=3072&vid=5285890811710940287",
        info: "31分钟",
      },
      {
        name: "4.第4部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969214405#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10538801772697914&term_id=100396581&type=3072&vid=5285890811711313831",
        info: "30分钟",
      },
      {
        name: "5.第5部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969214405#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10538806067665210&term_id=100396581&type=3072&vid=5285890811710940320",
        info: "31分钟",
      },
      {
        name: "6.第6部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969214405#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10538810362632506&term_id=100396581&type=3072&vid=5285890811711313853",
        info: "31分钟",
      },
      {
        name: "7.第7部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969214405#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10538814657599802&term_id=100396581&type=3072&vid=5285890811711313864",
        info: "45分钟",
      },
      {
        name: "8.第8部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969214405#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10538818952567098&term_id=100396581&type=3072&vid=5285890811711313878",
        info: "29分钟",
      },
      {
        name: "9.第9部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969214406#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10538823247534394&term_id=100396581&type=3072&vid=5285890811710940361",
        info: "27分钟",
      },
    ],
  },
  {
    index: "197.",
    title: "【工程师综合项目八】React Hooks+Express全栈TS『购物车』（5节）",
    child: [
      {
        name: "1.第10部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969213887#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10538827542501690&term_id=100396581&type=3072&vid=5285890811711313908",
        info: "31分钟",
      },
      {
        name: "2.第11部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969213887#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10538831837468986&term_id=100396581&type=3072&vid=5285890811711316355",
        info: "30分钟",
      },
      {
        name: "3.第12部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969213887#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10538836132436282&term_id=100396581&type=3072&vid=5285890811711022846",
        info: "47分钟",
      },
      {
        name: "4.第13部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969213887#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10538840427403578&term_id=100396581&type=3072&vid=5285890811711023117",
        info: "25分钟",
      },
      {
        name: "5.第14部分",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969213888#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10538844722370874&term_id=100396581&type=3072&vid=5285890811711317017",
        info: "28分钟",
      },
    ],
  },
  {
    index: "198.",
    title: "阿里工程师解密『前端简历与面试技巧』（6节）",
    child: [
      {
        name: "1.第1课",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969213429#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3343189658638650&term_id=100396581&type=3072&vid=5285890790198916654",
        info: "103分钟",
      },
      {
        name: "2.第2课",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969213429#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3343193953605946&term_id=100396581&type=3072&vid=5285890790200334260",
        info: "35分钟",
      },
      {
        name: "3.第3课",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969213429#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3343198248573242&term_id=100396581&type=3072&vid=5285890790204496552",
        info: "103分钟",
      },
      {
        name: "4.第4课",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969213429#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=3343202543540538&term_id=100396581&type=3072&vid=5285890790227207111",
        info: "32分钟",
      },
      {
        name: "5.第5课",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969213430#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141430805436730&term_id=100396581&type=3072&vid=5285890797716975337",
        info: "123分钟",
      },
      {
        name: "6.第6课",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969213430#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=4141435100404026&term_id=100396581&type=3072&vid=5285890797716985492",
        info: "105分钟",
      },
    ],
  },
  {
    index: "199.",
    title: "【直播课】技术拓展课（9节）",
    child: [
      {
        name: "1.数据类型length方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969213010#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565504818354490&term_id=100396581&type=3072&vid=5285890801634699174",
        info: "21分钟",
      },
      {
        name: "2.封装typeof方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969213011#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565509113321786&term_id=100396581&type=3072&vid=5285890801634699187",
        info: "17分钟",
      },
      {
        name: "3.数组的方法以及特性",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969213011#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565513408289082&term_id=100396581&type=3072&vid=5285890801634699200",
        info: "37分钟",
      },
      {
        name: "4.从事件冒泡到事件代理机制",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969213011#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565517703256378&term_id=100396581&type=3072&vid=5285890797717769038",
        info: "39分钟",
      },
      {
        name: "5.减少HTTP请求的方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969213011#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565521998223674&term_id=100396581&type=3072&vid=5285890797716985763",
        info: "32分钟",
      },
      {
        name: "6.实现两栏与三栏布局的方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969213012#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565526293190970&term_id=100396581&type=3072&vid=5285890797716985790",
        info: "37分钟",
      },
      {
        name: "7.关于jQuery会不会退出历史舞台的己见",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969213012#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565530588158266&term_id=100396581&type=3072&vid=5285890801634729352",
        info: "20分钟",
      },
      {
        name: "8.用正则进行模板替换的方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969213012#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565534883125562&term_id=100396581&type=3072&vid=5285890797716985873",
        info: "13分钟",
      },
      {
        name: "9.选项卡的两种实现方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969213012#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565539178092858&term_id=100396581&type=3072&vid=5285890797716995914",
        info: "17分钟",
      },
    ],
  },
  {
    index: "200.",
    title: "【直播课】技术拓展课（8节）",
    child: [
      {
        name: "1.CSS3媒体查询进行屏幕适配",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969212620#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565543473060154&term_id=100396581&type=3072&vid=5285890797716995926",
        info: "21分钟",
      },
      {
        name: "2.px_em_rem",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969212620#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565547768027450&term_id=100396581&type=3072&vid=5285890801634739578",
        info: "30分钟",
      },
      {
        name: "3.map与parseInt经典笔试题",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969212621#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565552062994746&term_id=100396581&type=3072&vid=5285890801634739661",
        info: "15分钟",
      },
      {
        name: "4.重新探究this指向问题",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969212621#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565556357962042&term_id=100396581&type=3072&vid=5285890797716996082",
        info: "30分钟",
      },
      {
        name: "5.IE常见的BUG解决方案",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969212621#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565560652929338&term_id=100396581&type=3072&vid=5285890797716996108",
        info: "14分钟",
      },
      {
        name: "6.数组去重若干方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969212621#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565564947896634&term_id=100396581&type=3072&vid=5285890797717900953",
        info: "52分钟",
      },
      {
        name: "7.移动端页面常用的meta标签",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969212621#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565569242863930&term_id=100396581&type=3072&vid=5285890797716996141",
        info: "43分钟",
      },
      {
        name: "8.link与@import引入CSS样式表的区别",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969212621#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565573537831226&term_id=100396581&type=3072&vid=5285890797716996196",
        info: "15分钟",
      },
    ],
  },
  {
    index: "201.",
    title: "【直播课】技术拓展课（9节）",
    child: [
      {
        name: "1.各种三角形的画法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969211355#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565577832798522&term_id=100396581&type=3072&vid=5285890797717006221",
        info: "27分钟",
      },
      {
        name: "2.六边形的两种画法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969211355#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565582127765818&term_id=100396581&type=3072&vid=5285890797717290786",
        info: "22分钟",
      },
      {
        name: "3.数组扁平化、去重与排序",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969211356#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565586422733114&term_id=100396581&type=3072&vid=5285890797718042884",
        info: "51分钟",
      },
      {
        name: "4.Flutter基础知识概述",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969211356#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565590717700410&term_id=100396581&type=3072&vid=5285890801657438813",
        info: "69分钟",
      },
      {
        name: "5.走进Dart基础、从头开始写App",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969211356#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565595012667706&term_id=100396581&type=3072&vid=5285890801657438825",
        info: "71分钟",
      },
      {
        name: "6.构造函数、不同类型的参数",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969211356#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565599307635002&term_id=100396581&type=3072&vid=5285890801657438839",
        info: "54分钟",
      },
      {
        name: "7.Widgets分类和使用、连接函数",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969211356#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565603602602298&term_id=100396581&type=3072&vid=5285890801657438852",
        info: "61分钟",
      },
      {
        name: "8.Cookies、localStorage的区别",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969211356#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565607897569594&term_id=100396581&type=3072&vid=5285890801657438861",
        info: "62分钟",
      },
      {
        name: "9.拖拽事件及应用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969211357#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565612192536890&term_id=100396581&type=3072&vid=5285890801657438873",
        info: "58分钟",
      },
    ],
  },
  {
    index: "202.",
    title: "【直播课】技术拓展课（9节）",
    child: [
      {
        name: "1.Redis数据类型和常见命令",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969210726#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565616487504186&term_id=100396581&type=3072&vid=5285890801657438887",
        info: "78分钟",
      },
      {
        name: "2.Express入门、静态服务器的搭建",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969210726#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565620782471482&term_id=100396581&type=3072&vid=5285890801657438900",
        info: "58分钟",
      },
      {
        name: "3.简历辅导课",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969210726#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565625077438778&term_id=100396581&type=3072&vid=5285890801657438911",
        info: "67分钟",
      },
      {
        name: "4.JavaScript模块化",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969210727#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565629372406074&term_id=100396581&type=3072&vid=5285890797717321023",
        info: "127分钟",
      },
      {
        name: "5.面向对象编程及开发经验",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969210727#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565633667373370&term_id=100396581&type=3072&vid=5285890801798971924",
        info: "136分钟",
      },
      {
        name: "6.使用Express构建增删改查API",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969210727#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565637962340666&term_id=100396581&type=3072&vid=5285890801657458996",
        info: "77分钟",
      },
      {
        name: "7.手写MVVM——模板编译(一)",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969210727#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565642257307962&term_id=100396581&type=3072&vid=5285890801657459016",
        info: "57分钟",
      },
      {
        name: "8.手写MVVM——模板编译(二)",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969210727#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565646552275258&term_id=100396581&type=3072&vid=5285890801677530315",
        info: "55分钟",
      },
      {
        name: "9.手写MVVM——数据劫持、观察者",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969210727#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565650847242554&term_id=100396581&type=3072&vid=5285890801678153960",
        info: "59分钟",
      },
    ],
  },
  {
    index: "203.",
    title: "【直播课】技术拓展课（9节）",
    child: [
      {
        name: "1.VueRouter插件的注册",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969210313#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565655142209850&term_id=100396581&type=3072&vid=5285890801678175495",
        info: "59分钟",
      },
      {
        name: "2.VueRouter对象的初始化",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969210313#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565659437177146&term_id=100396581&type=3072&vid=5285890801678185639",
        info: "63分钟",
      },
      {
        name: "3.创建路由映射表",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969210313#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565663732144442&term_id=100396581&type=3072&vid=5285890801678931189",
        info: "67分钟",
      },
      {
        name: "4.match方法的实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969210314#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565668027111738&term_id=100396581&type=3072&vid=5285890801678931247",
        info: "66分钟",
      },
      {
        name: "5.开发经验课",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969210314#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565672322079034&term_id=100396581&type=3072&vid=5285890801798971878",
        info: "79分钟",
      },
      {
        name: "6.初识TypeScript",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969210314#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565676617046330&term_id=100396581&type=3072&vid=5285890801678952607",
        info: "65分钟",
      },
      {
        name: "7.生成器与迭代器的应用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969210314#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565680912013626&term_id=100396581&type=3072&vid=5285890797717392810",
        info: "91分钟",
      },
      {
        name: "8.类型注解和类型推断",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969210314#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565685206980922&term_id=100396581&type=3072&vid=5285890801678952679",
        info: "70分钟",
      },
      {
        name: "9.数组类型和元组",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969210315#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565689501948218&term_id=100396581&type=3072&vid=5285890801678952760",
        info: "52分钟",
      },
    ],
  },
  {
    index: "204.",
    title: "【直播课】技术拓展课（9节）",
    child: [
      {
        name: "1.接口的概念",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969209897#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565693796915514&term_id=100396581&type=3072&vid=5285890801679888001",
        info: "67分钟",
      },
      {
        name: "2.类的概念",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969209898#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565698091882810&term_id=100396581&type=3072&vid=5285890801679888095",
        info: "66分钟",
      },
      {
        name: "3.ObjectDefineProperty",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969209898#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565702386850106&term_id=100396581&type=3072&vid=5285890797717453753",
        info: "105分钟",
      },
      {
        name: "4.Proxy与ES-14种对象操作方法",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969209898#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565706681817402&term_id=100396581&type=3072&vid=5285890797717504658",
        info: "117分钟",
      },
      {
        name: "5.Vue脚手架工具剖析",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969209898#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565710976784698&term_id=100396581&type=3072&vid=5285890797950544971",
        info: "72分钟",
      },
      {
        name: "6.Vue路由的使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969209898#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565715271751994&term_id=100396581&type=3072&vid=5285890797950544994",
        info: "74分钟",
      },
      {
        name: "7.观察模式-购物车案例",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969209899#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565719566719290&term_id=100396581&type=3072&vid=5285890801805162901",
        info: "98分钟",
      },
      {
        name: "8.手写Promise之状态基本实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969209899#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565723861686586&term_id=100396581&type=3072&vid=5285890797950545014",
        info: "104分钟",
      },
      {
        name: "9.手写Promise之链式操作",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969209899#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565728156653882&term_id=100396581&type=3072&vid=5285890797950545015",
        info: "80分钟",
      },
    ],
  },
  {
    index: "205.",
    title: "【直播课】技术拓展课（9节）",
    child: [
      {
        name: "1.手写Promise之rejected状态实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969208603#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565732451621178&term_id=100396581&type=3072&vid=5285890797950545017",
        info: "53分钟",
      },
      {
        name: "2.春招准备课（1）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969208604#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565736746588474&term_id=100396581&type=3072&vid=5285890801805162946",
        info: "123分钟",
      },
      {
        name: "3.春招准备课（2）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969208604#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565741041555770&term_id=100396581&type=3072&vid=5285890801805173090",
        info: "105分钟",
      },
      {
        name: "4.基础Vue组件封装",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969208604#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565745336523066&term_id=100396581&type=3072&vid=5285890797950545032",
        info: "79分钟",
      },
      {
        name: "5.Koa基础之基本使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969208604#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565749631490362&term_id=100396581&type=3072&vid=5285890801679908348",
        info: "41分钟",
      },
      {
        name: "6.Koa基础之模板渲染",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969208604#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565753926457658&term_id=100396581&type=3072&vid=5285890801679908424",
        info: "75分钟",
      },
      {
        name: "7.TS在Vue中的使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969208605#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565758221424954&term_id=100396581&type=3072&vid=5285890801679918519",
        info: "62分钟",
      },
      {
        name: "8.Axios的基本使用（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969208605#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565762516392250&term_id=100396581&type=3072&vid=5285890801682080249",
        info: "61分钟",
      },
      {
        name: "9.Axios的基本使用（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969208605#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565766811359546&term_id=100396581&type=3072&vid=5285890801682080319",
        info: "45分钟",
      },
    ],
  },
  {
    index: "206.",
    title: "【直播课】技术拓展课（9节）",
    child: [
      {
        name: "1.NodeJS中使用jwt进行身份验证",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969207984#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565771106326842&term_id=100396581&type=3072&vid=5285890801682090429",
        info: "63分钟",
      },
      {
        name: "2.初识React Native",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969207984#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565775401294138&term_id=100396581&type=3072&vid=5285890801682090486",
        info: "34分钟",
      },
      {
        name: "3.用React Native开发一个购物清单",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969207985#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565779696261434&term_id=100396581&type=3072&vid=5285890801682090565",
        info: "84分钟",
      },
      {
        name: "4.Vue动态组件、CSS3翻转动画",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969207985#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565783991228730&term_id=100396581&type=3072&vid=5285890801682090617",
        info: "75分钟",
      },
      {
        name: "5.VueRouter介绍、两种模式、编程式导航",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969207985#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565788286196026&term_id=100396581&type=3072&vid=5285890801683097734",
        info: "71分钟",
      },
      {
        name: "6.路由参数、查询参数、命名视图、重定向",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969207985#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565792581163322&term_id=100396581&type=3072&vid=5285890801683098292",
        info: "75分钟",
      },
      {
        name: "7.过渡动效、滚动行为、导航守卫、路由懒加载",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969207986#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565796876130618&term_id=100396581&type=3072&vid=5285890801683138888",
        info: "54分钟",
      },
      {
        name: "8.Vuex之介绍、Getters",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969207986#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565801171097914&term_id=100396581&type=3072&vid=5285890801683149018",
        info: "67分钟",
      },
      {
        name: "9.Vuex之Mutations、Actions",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969207986#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565805466065210&term_id=100396581&type=3072&vid=5285890801683149106",
        info: "47分钟",
      },
    ],
  },
  {
    index: "207.",
    title: "【直播课】技术拓展课（9节）",
    child: [
      {
        name: "1.Vuex之模块",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969206421#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565809761032506&term_id=100396581&type=3072&vid=5285890801710936018",
        info: "39分钟",
      },
      {
        name: "2.脚手架创建项目分析、组件、state、样式",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969206421#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565814055999802&term_id=100396581&type=3072&vid=5285890801751750269",
        info: "70分钟",
      },
      {
        name: "3.React事件、更新State",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969206422#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565818350967098&term_id=100396581&type=3072&vid=5285890801751760313",
        info: "69分钟",
      },
      {
        name: "4.初识React Hooks",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969206422#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565822645934394&term_id=100396581&type=3072&vid=5285890801751760355",
        info: "69分钟",
      },
      {
        name: "5.Vue表单",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969206422#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565826940901690&term_id=100396581&type=3072&vid=5285890801751780395",
        info: "50分钟",
      },
      {
        name: "6.Vue表单中的v-model原理",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969206422#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565831235868986&term_id=100396581&type=3072&vid=5285890801890399439",
        info: "43分钟",
      },
      {
        name: "7.react-redux",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969206422#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565835530836282&term_id=100396581&type=3072&vid=5285890801805173174",
        info: "111分钟",
      },
      {
        name: "8.Vue组件通信（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969206422#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565839825803578&term_id=100396581&type=3072&vid=5285890801893140271",
        info: "92分钟",
      },
      {
        name: "9.Vue组件通信（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969206423#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565844120770874&term_id=100396581&type=3072&vid=5285890802596602190",
        info: "94分钟",
      },
    ],
  },
  {
    index: "208.",
    title: "【直播课】技术拓展课（7节）",
    child: [
      {
        name: "1.this指向的总结",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969205225#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565848415738170&term_id=100396581&type=3072&vid=5285890802795722512",
        info: "100分钟",
      },
      {
        name: "2.箭头函数的this、this的优先级",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969205225#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9153228143139130&term_id=100396581&type=3072&vid=5285890803257408573",
        info: "112分钟",
      },
      {
        name: "3.隐式数据类型转换（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969205226#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9153232438106426&term_id=100396581&type=3072&vid=5285890803257418663",
        info: "91分钟",
      },
      {
        name: "4.隐式数据类型转换（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969205226#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9153236733073722&term_id=100396581&type=3072&vid=5285890803785513988",
        info: "139分钟",
      },
      {
        name: "5.数组方法的总结1",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969205226#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565852710705466&term_id=100396581&type=3072&vid=5285890803927051022",
        info: "109分钟",
      },
      {
        name: "6.数组拓展方法2",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969205226#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565857005672762&term_id=100396581&type=3072&vid=5285890804087449767",
        info: "74分钟",
      },
      {
        name: "7.数组拓展方法3",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969205226#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=8565861300640058&term_id=100396581&type=3072&vid=5285890804332543176",
        info: "67分钟",
      },
    ],
  },
  {
    index: "209.",
    title: "【直播课】技术拓展课（9节）",
    child: [
      {
        name: "1.学习计划如何制定和实施",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969204696#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9600312763816250&term_id=100396581&type=3072&vid=5285890804790064032",
        info: "85分钟",
      },
      {
        name: "2.入门Vue3 Composition API",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969204697#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9600317058783546&term_id=100396581&type=3072&vid=5285890805051449825",
        info: "93分钟",
      },
      {
        name: "3.正则1",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969204697#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9600321353750842&term_id=100396581&type=3072&vid=5285890805156569728",
        info: "94分钟",
      },
      {
        name: "4.Vue3中代码复用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969204697#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9600325648718138&term_id=100396581&type=3072&vid=5285890805295736047",
        info: "93分钟",
      },
      {
        name: "5.正则2",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969204697#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9600329943685434&term_id=100396581&type=3072&vid=5285890805361916060",
        info: "91分钟",
      },
      {
        name: "6.正则3",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969204697#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9600334238652730&term_id=100396581&type=3072&vid=5285890805631285824",
        info: "84分钟",
      },
      {
        name: "7.Vue基础深入之介绍、响应式",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969204697#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9600338533620026&term_id=100396581&type=3072&vid=5285890805687712166",
        info: "97分钟",
      },
      {
        name: "8.原型链、继承、类",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969204698#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9600342828587322&term_id=100396581&type=3072&vid=5285890805915948517",
        info: "92分钟",
      },
      {
        name: "9.Vue3使用Proxy",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969204698#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9600347123554618&term_id=100396581&type=3072&vid=5285890805879278489",
        info: "106分钟",
      },
    ],
  },
  {
    index: "210.",
    title: "【直播课】技术拓展课（9节）",
    child: [
      {
        name: "1.1_初识React、JSX",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969203944#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9793457443117370&term_id=100396581&type=3072&vid=5285890806230020484",
        info: "106分钟",
      },
      {
        name: "2.2_了解React props、setState",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969203944#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9793461738084666&term_id=100396581&type=3072&vid=5285890806474933858",
        info: "102分钟",
      },
      {
        name: "3.Vue中实例方法、指令",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969203944#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9793466033051962&term_id=100396581&type=3072&vid=5285890806292818281",
        info: "96分钟",
      },
      {
        name: "4.Vue中事件处理函数绑定、v-model",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969203945#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9793470328019258&term_id=100396581&type=3072&vid=5285890806480370750",
        info: "91分钟",
      },
      {
        name: "5.Vue中自定定义一个表单控件、watch",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969203945#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9793474622986554&term_id=100396581&type=3072&vid=5285890806720748218",
        info: "92分钟",
      },
      {
        name: "6.3_了解React中生命周期",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969203945#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9793478917953850&term_id=100396581&type=3072&vid=5285890806737677755",
        info: "81分钟",
      },
      {
        name: "7.Vue中计算属性、过滤器、自定义属性",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969203945#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9793483212921146&term_id=100396581&type=3072&vid=5285890806916778153",
        info: "97分钟",
      },
      {
        name: "8.4_使用React开发TodoList",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969203945#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9793487507888442&term_id=100396581&type=3072&vid=5285890807016965749",
        info: "117分钟",
      },
      {
        name: "9.Vue中生命周期、组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969203946#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=9793491802855738&term_id=100396581&type=3072&vid=5285890807195664104",
        info: "92分钟",
      },
    ],
  },
  {
    index: "211.",
    title: "【直播课】技术拓展课（9节）",
    child: [
      {
        name: "1.5_React中高阶组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969203429#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10023908208351546&term_id=100396581&type=3072&vid=5285890807262145723",
        info: "117分钟",
      },
      {
        name: "2.Vue中Render函数、父子组件传值",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969203430#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10023912503318842&term_id=100396581&type=3072&vid=5285890807482729698",
        info: "111分钟",
      },
      {
        name: "3.6_React中pureComponent和memo",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969203430#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10023916798286138&term_id=100396581&type=3072&vid=5285890807544546132",
        info: "55分钟",
      },
      {
        name: "4.Vue中兄弟组件之间 的传值",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969203430#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10023921093253434&term_id=100396581&type=3072&vid=5285890807746457897",
        info: "92分钟",
      },
      {
        name: "5.课程重点总结",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969203431#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10023925388220730&term_id=100396581&type=3072&vid=387702295335808089",
        info: "103分钟",
      },
      {
        name: "6.Vue中插槽的使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969203431#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10023929683188026&term_id=100396581&type=3072&vid=5285890807991468542",
        info: "98分钟",
      },
      {
        name: "7.Vue中表单组件的开发",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969203431#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10023933978155322&term_id=100396581&type=3072&vid=5285890808209270895",
        info: "105分钟",
      },
      {
        name: "8.7_React中受控组件的封装",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969203431#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10023938273122618&term_id=100396581&type=3072&vid=5285890808579461625",
        info: "90分钟",
      },
      {
        name: "9.Vue中完成表单组件、无限多级菜单组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969203431#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10023942568089914&term_id=100396581&type=3072&vid=5285890808748370238",
        info: "95分钟",
      },
    ],
  },
  {
    index: "212.",
    title: "【直播课】技术拓展课（9节）",
    child: [
      {
        name: "1.自己开发vue-lazyload",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969201920#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235302203693370&term_id=100396581&type=3072&vid=5285890808942946153",
        info: "90分钟",
      },
      {
        name: "2.React_propTypes检测",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969201921#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235306498660666&term_id=100396581&type=3072&vid=5285890808920157797",
        info: "126分钟",
      },
      {
        name: "3.完成lazyload、调用函数式创建组件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969201921#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235310793627962&term_id=100396581&type=3072&vid=5285890809372092309",
        info: "92分钟",
      },
      {
        name: "4.typescript",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969201921#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235315088595258&term_id=100396581&type=3072&vid=5285890809341663862",
        info: "87分钟",
      },
      {
        name: "5.Render函数、服务端渲染",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969201921#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235319383562554&term_id=100396581&type=3072&vid=5285890809515739001",
        info: "109分钟",
      },
      {
        name: "6.实现Vue Router",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969201921#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235323678529850&term_id=100396581&type=3072&vid=5285890809641919197",
        info: "94分钟",
      },
      {
        name: "7.虚拟DOM",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969201921#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235327973497146&term_id=100396581&type=3072&vid=5285890810551455488",
        info: "99分钟",
      },
      {
        name: "8.diff算法之patch、patchVnode",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969201922#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235332268464442&term_id=100396581&type=3072&vid=5285890810815747740",
        info: "100分钟",
      },
      {
        name: "9.diff算法之updateChildren",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969201922#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235336563431738&term_id=100396581&type=3072&vid=5285890811146464636",
        info: "95分钟",
      },
    ],
  },
  {
    index: "213.",
    title: "【直播课】技术拓展课（9节）",
    child: [
      {
        name: "1.认识位运算",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969201367#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235340858399034&term_id=100396581&type=3072&vid=5285890811489747073",
        info: "138分钟",
      },
      {
        name: "2.认识Webpack",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969201368#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235345153366330&term_id=100396581&type=3072&vid=5285890811723919835",
        info: "92分钟",
      },
      {
        name: "3.webpack_本地服务器、处理样式、处理图片",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969201368#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235349448333626&term_id=100396581&type=3072&vid=5285890812168000927",
        info: "100分钟",
      },
      {
        name: "4.chrome插件_vs插件_快捷键",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969201368#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235353743300922&term_id=100396581&type=3072&vid=5285890812309679830",
        info: "78分钟",
      },
      {
        name: "5.多入口、抽离CSS文件",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969201368#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235358038268218&term_id=100396581&type=3072&vid=5285890812434246263",
        info: "94分钟",
      },
      {
        name: "6.提取公共代码、第三方模块",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969201368#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235362333235514&term_id=100396581&type=3072&vid=5285890812842765635",
        info: "97分钟",
      },
      {
        name: "7.原型深入",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969201369#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235366628202810&term_id=100396581&type=3072&vid=5285890816426804369",
        info: "84分钟",
      },
      {
        name: "8.浏览器控制台",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969201369#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235370923170106&term_id=100396581&type=3072&vid=3701925918967473165",
        info: "91分钟",
      },
      {
        name: "9.技术拓展直播课9",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969201369#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10235375218137402&term_id=100396581&type=3072&vid=3701925920319364191",
        info: "84分钟",
      },
    ],
  },
  {
    index: "214.",
    title: "【直播课】技术拓展课（9节）",
    child: [
      {
        name: "1.Vue数据持久化（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969200791#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564212329716026&term_id=100396581&type=3072&vid=3701925920822883347",
        info: "32分钟",
      },
      {
        name: "2.Vue数据持久化（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969200791#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564216624683322&term_id=100396581&type=3072&vid=3701925920822677264",
        info: "37分钟",
      },
      {
        name: "3.Vue数据持久化（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969200791#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564220919650618&term_id=100396581&type=3072&vid=3701925920822883775",
        info: "36分钟",
      },
      {
        name: "4.Vue实现动画（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969200791#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564225214617914&term_id=100396581&type=3072&vid=3701925920822677808",
        info: "31分钟",
      },
      {
        name: "5.Vue实现动画（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969200792#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564229509585210&term_id=100396581&type=3072&vid=3701925920822830029",
        info: "32分钟",
      },
      {
        name: "6.Vue实现动画（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969200792#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564233804552506&term_id=100396581&type=3072&vid=3701925920822678271",
        info: "33分钟",
      },
      {
        name: "7.Vue实现loading指令（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969200792#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564238099519802&term_id=100396581&type=3072&vid=3701925920822830567",
        info: "32分钟",
      },
      {
        name: "8.Vue实现loading指令（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969200792#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564242394487098&term_id=100396581&type=3072&vid=3701925920822678844",
        info: "32分钟",
      },
      {
        name: "9.Vue实现loading指令（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969200792#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564246689454394&term_id=100396581&type=3072&vid=3701925920822831103",
        info: "27分钟",
      },
    ],
  },
  {
    index: "215.",
    title: "【直播课】技术拓展课（9节）",
    child: [
      {
        name: "1.cookie在登录中的应用（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969199997#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564250984421690&term_id=100396581&type=3072&vid=3701925921098692777",
        info: "31分钟",
      },
      {
        name: "2.cookie在登录中的应用（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969199997#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564255279388986&term_id=100396581&type=3072&vid=3701925921098692892",
        info: "37分钟",
      },
      {
        name: "3.cookie在登录中的应用（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969199997#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564259574356282&term_id=100396581&type=3072&vid=3701925921098693104",
        info: "30分钟",
      },
      {
        name: "4.session在登录中的应用（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969199997#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564263869323578&term_id=100396581&type=3072&vid=3701925921342480083",
        info: "32分钟",
      },
      {
        name: "5.session在登录中的应用（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969199998#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564268164290874&term_id=100396581&type=3072&vid=3701925921342383649",
        info: "29分钟",
      },
      {
        name: "6.session在登录中的应用（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969199998#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564272459258170&term_id=100396581&type=3072&vid=3701925921342383501",
        info: "29分钟",
      },
      {
        name: "7.使用 redis 存储 session（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969199998#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564276754225466&term_id=100396581&type=3072&vid=3701925921722338088",
        info: "30分钟",
      },
      {
        name: "8.使用 redis 存储 session（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969199998#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564281049192762&term_id=100396581&type=3072&vid=3701925921722338187",
        info: "31分钟",
      },
      {
        name: "9.使用 redis 存储 session（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969199998#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564285344160058&term_id=100396581&type=3072&vid=3701925921722398781",
        info: "27分钟",
      },
    ],
  },
  {
    index: "216.",
    title: "【直播课】技术拓展课（9节）",
    child: [
      {
        name: "1.Koa入门、await的深入理解（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969198567#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732600817523002&term_id=100396581&type=3072&vid=3701925922073168427",
        info: "34分钟",
      },
      {
        name: "2.Koa入门、await的深入理解（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969198567#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732605112490298&term_id=100396581&type=3072&vid=3701925922073168625",
        info: "32分钟",
      },
      {
        name: "3.Koa入门、await的深入理解（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969198567#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732609407457594&term_id=100396581&type=3072&vid=3701925922073269059",
        info: "30分钟",
      },
      {
        name: "4.同步、异步异常处理（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969198568#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732613702424890&term_id=100396581&type=3072&vid=3701925922473889659",
        info: "30分钟",
      },
      {
        name: "5.同步、异步异常处理（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969198568#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732617997392186&term_id=100396581&type=3072&vid=3701925922473889869",
        info: "27分钟",
      },
      {
        name: "6.同步、异步异常处理（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969198568#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732622292359482&term_id=100396581&type=3072&vid=3701925922473890039",
        info: "25分钟",
      },
      {
        name: "7.微前端介绍、编写子应用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969198568#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12074737912322362&term_id=100396581&type=3072&vid=8602268011514454854",
        info: "28分钟",
      },
      {
        name: "8.打包子应用、编写父应用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969198569#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12074742207289658&term_id=100396581&type=3072&vid=8602268011514454936",
        info: "31分钟",
      },
      {
        name: "9.微前端qiankun框架的使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969198569#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12074746502256954&term_id=100396581&type=3072&vid=8602268011514454987",
        info: "27分钟",
      },
    ],
  },
  {
    index: "217.",
    title: "JS源码系列课集合（8节）",
    child: [
      {
        name: "1.VueRouter插件的注册（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969197633#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10728003672021306&term_id=100396581&type=3072&vid=5285890813603523466",
        info: "31分钟",
      },
      {
        name: "2.VueRouter插件的注册（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969197635#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10728007966988602&term_id=100396581&type=3072&vid=5285890813603523632",
        info: "29分钟",
      },
      {
        name: "3.VueRouter对象的初始化（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969197635#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10728012261955898&term_id=100396581&type=3072&vid=5285890813603532051",
        info: "31分钟",
      },
      {
        name: "4.VueRouter对象的初始化（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969197635#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10728016556923194&term_id=100396581&type=3072&vid=5285890813603532293",
        info: "33分钟",
      },
      {
        name: "5.创建路由映射表（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969197635#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10728020851890490&term_id=100396581&type=3072&vid=5285890813603524208",
        info: "32分钟",
      },
      {
        name: "6.创建路由映射表（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969197636#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10728025146857786&term_id=100396581&type=3072&vid=5285890813603532636",
        info: "36分钟",
      },
      {
        name: "7.match方法的实现（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969197636#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10728029441825082&term_id=100396581&type=3072&vid=5285890813603743300",
        info: "34分钟",
      },
      {
        name: "8.match方法的实现（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969197636#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10728033736792378&term_id=100396581&type=3072&vid=5285890813603743426",
        info: "33分钟",
      },
    ],
  },
  {
    index: "218.",
    title: "JS源码系列课集合（8节）",
    child: [
      {
        name: "1.实现Vue Router（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969196678#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10728038031759674&term_id=100396581&type=3072&vid=5285890813605988060",
        info: "30分钟",
      },
      {
        name: "2.实现Vue Router（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969196678#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10728042326726970&term_id=100396581&type=3072&vid=5285890813606015663",
        info: "32分钟",
      },
      {
        name: "3.实现Vue Router（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969196679#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10728046621694266&term_id=100396581&type=3072&vid=5285890813606026330",
        info: "31分钟",
      },
      {
        name: "4.虚拟DOM（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969196679#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10728050916661562&term_id=100396581&type=3072&vid=5285890813656036042",
        info: "33分钟",
      },
      {
        name: "5.虚拟DOM（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969196679#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10728055211628858&term_id=100396581&type=3072&vid=5285890813656052499",
        info: "36分钟",
      },
      {
        name: "6.diff算法（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969196679#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10728059506596154&term_id=100396581&type=3072&vid=5285890813656052661",
        info: "31分钟",
      },
      {
        name: "7.diff算法（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969196679#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10728063801563450&term_id=100396581&type=3072&vid=5285890813656082994",
        info: "32分钟",
      },
      {
        name: "8.diff算法（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969196680#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10728068096530746&term_id=100396581&type=3072&vid=5285890813656053119",
        info: "38分钟",
      },
    ],
  },
  {
    index: "219.",
    title: "JS源码系列课集合（6节）",
    child: [
      {
        name: "1.diff算法（四）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969194598#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10728072391498042&term_id=100396581&type=3072&vid=5285890813656037087",
        info: "33分钟",
      },
      {
        name: "2.diff算法（五）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969194599#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10728076686465338&term_id=100396581&type=3072&vid=5285890813656053525",
        info: "31分钟",
      },
      {
        name: "3.diff算法（六）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969194599#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=10728080981432634&term_id=100396581&type=3072&vid=5285890813656083857",
        info: "32分钟",
      },
      {
        name: "4.严格模式1",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969194599#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564289639127354&term_id=100396581&type=3072&vid=5285890814375940563",
        info: "31分钟",
      },
      {
        name: "5.严格模式2",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969194599#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564293934094650&term_id=100396581&type=3072&vid=5285890814379184882",
        info: "33分钟",
      },
      {
        name: "6.严格模式3",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969194599#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564298229061946&term_id=100396581&type=3072&vid=5285890814377834247",
        info: "36分钟",
      },
    ],
  },
  {
    index: "220.",
    title: "JS专题课（6节）",
    child: [
      {
        name: "1.块级作用域与函数作用域_1",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969193056#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11333868938664250&term_id=100396581&type=3072&vid=3701925919217588781",
        info: "32分钟",
      },
      {
        name: "2.块级作用域与函数作用域_2",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969193057#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11333873233631546&term_id=100396581&type=3072&vid=3701925919217748342",
        info: "32分钟",
      },
      {
        name: "3.块级作用域与函数作用域_3",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969193057#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11333877528598842&term_id=100396581&type=3072&vid=3701925919219014003",
        info: "35分钟",
      },
      {
        name: "4.大数危机与浮点数精度解决方案（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969193057#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564302524029242&term_id=100396581&type=3072&vid=3701925921304178829",
        info: "33分钟",
      },
      {
        name: "5.大数危机与浮点数精度解决方案（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969193057#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564306818996538&term_id=100396581&type=3072&vid=3701925921307662967",
        info: "33分钟",
      },
      {
        name: "6.大数危机与浮点数精度解决方案（三）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969193057#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11564311113963834&term_id=100396581&type=3072&vid=3701925921307662984",
        info: "31分钟",
      },
    ],
  },
  {
    index: "221.",
    title: "『网络安全』专题课（5节）",
    child: [
      {
        name: "1.XSS攻击介绍和预防措施",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969191896#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12153194079918394&term_id=100396581&type=3072&vid=387702292062567167",
        info: "18分钟",
      },
      {
        name: "2.XSRF、CSRF攻击介绍和预防措施",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969191896#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12153198374885690&term_id=100396581&type=3072&vid=387702292062490229",
        info: "12分钟",
      },
      {
        name: "3.SSRF攻击介绍和预防措施",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969191896#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12153202669852986&term_id=100396581&type=3072&vid=387702292110497570",
        info: "11分钟",
      },
      {
        name: "4.点击劫持介绍和预防措施",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969191897#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12203041470355770&term_id=100396581&type=3072&vid=387702292471348402",
        info: "19分钟",
      },
      {
        name: "5.sql注入介绍和预防措施",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969191897#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12211871923116346&term_id=100396581&type=3072&vid=387702292471290100",
        info: "35分钟",
      },
    ],
  },
  {
    index: "222.",
    title: "『前端国际化』专题课（2节）",
    child: [
      {
        name: "1.Vue国际化",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969191436#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12211876218083642&term_id=100396581&type=3072&vid=387702292762821721",
        info: "13分钟",
      },
      {
        name: "2.React国际化",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969191437#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12211880513050938&term_id=100396581&type=3072&vid=387702292762916810",
        info: "14分钟",
      },
    ],
  },
  {
    index: "223.",
    title: "『二进制操作』专题课（3节）",
    child: [
      {
        name: "1.Blob介绍、文件下载、文件分段上传",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969189838#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12253812278761786&term_id=100396581&type=3072&vid=387702293269189825",
        info: "35分钟",
      },
      {
        name: "2.Buffer介绍、Node中Buffer的使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969189838#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12253816573729082&term_id=100396581&type=3072&vid=387702293269170312",
        info: "22分钟",
      },
      {
        name: "3.ArrayBuffer介绍、类型化数组、视图",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969189839#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12253820868696378&term_id=100396581&type=3072&vid=387702293269142442",
        info: "20分钟",
      },
    ],
  },
  {
    index: "224.",
    title: "『前端面试』专题课 - 前端性能优化（9节）",
    child: [
      {
        name: "1.if/else优化--策略模式优化_1",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969189093#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732626587326778&term_id=100396581&type=3072&vid=3701925921696698668",
        info: "30分钟",
      },
      {
        name: "2.if/else优化--策略模式优化_2",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969189094#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732630882294074&term_id=100396581&type=3072&vid=3701925921696698682",
        info: "29分钟",
      },
      {
        name: "3.if/else优化--策略模式优化_3",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969189094#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732635177261370&term_id=100396581&type=3072&vid=3701925921693990006",
        info: "28分钟",
      },
      {
        name: "4.链式调用优化_责任链模式_1",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969189094#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732639472228666&term_id=100396581&type=3072&vid=3701925922052601824",
        info: "32分钟",
      },
      {
        name: "5.链式调用优化_责任链模式_2",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969189094#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732643767195962&term_id=100396581&type=3072&vid=3701925922054227626",
        info: "25分钟",
      },
      {
        name: "6.链式调用优化_责任链模式_3",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969189094#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732648062163258&term_id=100396581&type=3072&vid=3701925922054227649",
        info: "28分钟",
      },
      {
        name: "7.状态机_状态模式优化_1",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969189094#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732652357130554&term_id=100396581&type=3072&vid=387702302810340617",
        info: "96分钟",
      },
      {
        name: "8.状态机_状态模式优化_2",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969189095#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732656652097850&term_id=100396581&type=3072&vid=387702302810987158",
        info: "80分钟",
      },
      {
        name: "9.状态机_状态模式优化_3",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969189095#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11809347588135226&term_id=100396581&type=3072&vid=387702303090142239",
        info: "107分钟",
      },
    ],
  },
  {
    index: "225.",
    title: "『前端面试』专题课 - 前端性能优化（10节）",
    child: [
      {
        name: "1.发布订阅模式_1",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969188225#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732660947065146&term_id=100396581&type=3072&vid=3701925922916266058",
        info: "31分钟",
      },
      {
        name: "2.发布订阅模式_2",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969188225#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732665242032442&term_id=100396581&type=3072&vid=3701925922916266089",
        info: "29分钟",
      },
      {
        name: "3.发布订阅模式_3",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969188226#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732669536999738&term_id=100396581&type=3072&vid=3701925922917520455",
        info: "26分钟",
      },
      {
        name: "4.享元模式和性能优化_1",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969188226#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732673831967034&term_id=100396581&type=3072&vid=3701925923397696627",
        info: "29分钟",
      },
      {
        name: "5.享元模式和性能优化_2",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969188226#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732678126934330&term_id=100396581&type=3072&vid=3701925923397166076",
        info: "29分钟",
      },
      {
        name: "6.享元模式和性能优化_3",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969188226#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732682421901626&term_id=100396581&type=3072&vid=3701925923397166101",
        info: "25分钟",
      },
      {
        name: "7.享元模式和性能优化_4",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969188226#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732686716868922&term_id=100396581&type=3072&vid=3701925923397696731",
        info: "23分钟",
      },
      {
        name: "8.promise源码实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969188226#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11868244474665274&term_id=100396581&type=3072&vid=3701925924486628903",
        info: "36分钟",
      },
      {
        name: "9.promise源码实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969188226#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11868248769632570&term_id=100396581&type=3072&vid=3701925924485562843",
        info: "33分钟",
      },
      {
        name: "10.promise源码实现",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969188226#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11868253064599866&term_id=100396581&type=3072&vid=3701925924485562847",
        info: "30分钟",
      },
    ],
  },
  {
    index: "226.",
    title: "『前端面试』专题课 - Vue（9节）",
    child: [
      {
        name: "1.模板语法、表达式、v-html",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969187656#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732691011836218&term_id=100396581&type=3072&vid=3701925922908861901",
        info: "39分钟",
      },
      {
        name: "2.计算属性、计算属性的setter",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969187656#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732695306803514&term_id=100396581&type=3072&vid=3701925922908862156",
        info: "27分钟",
      },
      {
        name: "3.watch、样式、条件、列表",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969187656#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732699601770810&term_id=100396581&type=3072&vid=3701925922908843509",
        info: "36分钟",
      },
      {
        name: "4.事件、事件对象、事件源对象",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969187657#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732703896738106&term_id=100396581&type=3072&vid=3701925922909831710",
        info: "23分钟",
      },
      {
        name: "5.事件修饰符、表单",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969187657#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732708191705402&term_id=100396581&type=3072&vid=3701925922973618484",
        info: "29分钟",
      },
      {
        name: "6.父子组件之间的通讯",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969187657#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732712486672698&term_id=100396581&type=3072&vid=3701925923295123450",
        info: "29分钟",
      },
      {
        name: "7.兄弟组件之间的通讯",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969187657#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732716781639994&term_id=100396581&type=3072&vid=3701925923295124077",
        info: "24分钟",
      },
      {
        name: "8.组件生命周期",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969187657#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732721076607290&term_id=100396581&type=3072&vid=3701925923294977214",
        info: "38分钟",
      },
      {
        name: "9.父子组件的生命周期、实现v-model",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969187657#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11732725371574586&term_id=100396581&type=3072&vid=3701925923294977384",
        info: "25分钟",
      },
    ],
  },
  {
    index: "227.",
    title: "『前端面试』专题课 - Vue（9节）",
    child: [
      {
        name: "1.nextTick、Vue异步渲染",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969186923#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11765603346225466&term_id=100396581&type=3072&vid=3701925923638865783",
        info: "24分钟",
      },
      {
        name: "2.插槽、作用域插槽、具名插槽",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969186923#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11765607641192762&term_id=100396581&type=3072&vid=3701925923638865955",
        info: "30分钟",
      },
      {
        name: "3.动态组件、异步组件、keep-alive",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969186923#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11765611936160058&term_id=100396581&type=3072&vid=3701925923639102408",
        info: "36分钟",
      },
      {
        name: "4.mixin的使用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969186923#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11799443393550650&term_id=100396581&type=3072&vid=3701925923978653376",
        info: "30分钟",
      },
      {
        name: "5.mixin存在的问题",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969186924#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11799447688517946&term_id=100396581&type=3072&vid=3701925923978719244",
        info: "24分钟",
      },
      {
        name: "6.VueRouter的两种模式、动态路由",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969186924#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11799451983485242&term_id=100396581&type=3072&vid=3701925923983314502",
        info: "36分钟",
      },
      {
        name: "7.路由懒加载、Vuex状态、Mutation",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969186924#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11858018157533498&term_id=100396581&type=3072&vid=3701925924566506495",
        info: "28分钟",
      },
      {
        name: "8.Vuex actions、map辅助函数",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969186924#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11858022452500794&term_id=100396581&type=3072&vid=3701925924566784494",
        info: "31分钟",
      },
      {
        name: "9.组件化的发展",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969186924#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11858026747468090&term_id=100396581&type=3072&vid=3701925924567287179",
        info: "33分钟",
      },
    ],
  },
  {
    index: "228.",
    title: "『前端面试』专题课 - Vue（9节）",
    child: [
      {
        name: "1.理解MVVM（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969186336#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11880025569958202&term_id=100396581&type=3072&vid=3701925924861723890",
        info: "30分钟",
      },
      {
        name: "2.理解MVVM（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969186337#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11880029864925498&term_id=100396581&type=3072&vid=3701925924861842241",
        info: "24分钟",
      },
      {
        name: "3.理解Object.defineProperty",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969186337#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11880034159892794&term_id=100396581&type=3072&vid=3701925924861920688",
        info: "30分钟",
      },
      {
        name: "4.处理响应式对象情况",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969186337#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11961947776162106&term_id=100396581&type=3072&vid=3701925925672138504",
        info: "35分钟",
      },
      {
        name: "5.处理数组情况（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969186337#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11961952071129402&term_id=100396581&type=3072&vid=3701925925672272549",
        info: "24分钟",
      },
      {
        name: "6.处理数组情况（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969186338#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=11961956366096698&term_id=100396581&type=3072&vid=3701925925672385479",
        info: "22分钟",
      },
      {
        name: "7.虚拟DOM出现的原因、虚拟DOM的结构",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969186338#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12018899042507066&term_id=100396581&type=3072&vid=8602268010945634370",
        info: "32分钟",
      },
      {
        name: "8.虚拟DOM中patch函数的意义",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969186338#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12018903337474362&term_id=100396581&type=3072&vid=8602268010945757714",
        info: "29分钟",
      },
      {
        name: "9.使用虚拟DOM的好处、与jQuery作对比",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969186338#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12018907632441658&term_id=100396581&type=3072&vid=8602268010945757748",
        info: "31分钟",
      },
    ],
  },
  {
    index: "229.",
    title: "『前端面试』专题课 - Vue（8节）",
    child: [
      {
        name: "1.虚拟DOM和diff算法的关系",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969185847#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12018911927408954&term_id=100396581&type=3072&vid=8602268010945741445",
        info: "23分钟",
      },
      {
        name: "2.diff算法中vnode的结构和生成",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969185847#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12018916222376250&term_id=100396581&type=3072&vid=8602268010945741476",
        info: "36分钟",
      },
      {
        name: "3.diff算法中的patch函数",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969185848#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12018920517343546&term_id=100396581&type=3072&vid=8602268010945741513",
        info: "30分钟",
      },
      {
        name: "4.patchVnode的不同情况（一）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969185848#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12044278004259130&term_id=100396581&type=3072&vid=8602268011264760430",
        info: "25分钟",
      },
      {
        name: "5.patchVnode的不同情况（二）",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969185848#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12044282299226426&term_id=100396581&type=3072&vid=8602268011264745321",
        info: "21分钟",
      },
      {
        name: "6.分析updateChildren函数",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969185848#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12136727175305530&term_id=100396581&type=3072&vid=387702291473435869",
        info: "35分钟",
      },
      {
        name: "7.解析key的作用",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969185848#cid=334138&notShowNextTask=0&source=PC_COURSE_DETAIL&taid=12136731470272826&term_id=100396581&type=3072&vid=387702291473464766",
        info: "28分钟",
      },
      {
        name: "8.Vue首屏优化",
        href: "https://ke.qq.com/webcourse/index.html?r=1679969185849#cid=334138&notShowNextTask=1&source=PC_COURSE_DETAIL&taid=12136735765240122&term_id=100396581&type=3072&vid=387702291794882162",
        info: "32分钟",
      },
    ],
  },
];

for (let i = 0; i < list.length; i++) {
  let section = document.createElement("div");
  let title = document.createElement("div");
  let ulItem = document.createElement("ul");

  section.setAttribute("class", "wrapper");
  title.setAttribute("class", "title");
  title.innerText = `${list[i].index}${list[i].title}`;
  section.appendChild(title);
  section.appendChild(ulItem);

  for (let j = 0; j < list[i].child.length; j++) {
    let item = document.createElement("li");
    let link = document.createElement("a");
    let span = document.createElement("span");
    link.href = `${list[i].child[j].href}`;
    link.target = "blank";
    item.innerText = `${list[i].child[j].name}`;
    span.innerText = `${list[i].child[j].info}`;

    item.appendChild(link);
    item.appendChild(span);
    ulItem.appendChild(item);
  }

  document.body.appendChild(section);
}

let ch1 = [
  "好",
  "今天呢",
  "我们要讲这个路由权限的问题",
  "这是一个相对而言",
  "可能对于前端工程师来说",
  "稍微有点复杂的一个一个东西",
  "因为它涉及到后端",
  "所以说我为了给大家把这个理清楚呢",
  "可能这个课就比较长",
  "今天呢",
  "我们先把最基本的登录",
  "这个注册这些的API",
  "我们先把它写了",
  "因为这里边要涉及到很多知识点",
  "所以说我先把这个给大家讲了",
  "然后呢",
  "可能再过一天周五呢",
  "我再给大家讲一讲",
  "就是我们前端做这个登录注册这些的应该怎么样去跟后端对接",
  "我做这个课程的目的主要第一是什么呢",
  "让大家了解一个通盘了解一个前后端的这样的一个项目上的最主要的",
  "需求",
  "中间的涉及到的一些知识点",
  "因为你要知道",
  "你如果会一些后端的话",
  "对于你以后开发",
  "就是做测试也好",
  "或者是以后做中间层也好",
  "是非常非常有益处的",
  "所以说这个大家这这一套课程",
  "大家认真听过",
  "估计怎么也得个有一个十十个小时到11个小时的课",
  "这个这个课",
  "所以说大家反正认认真听",
  "我呢",
  "把这个知识点相对而言给大家认真",
  "就是说这个仔细一点讲",
  "让大家把每一个知识点都搞清楚",
  "那么这一节这一套课呢",
  "可能涉及到的一些知识点",
  "刚才我大概想了一下",
  "可能涉及到的",
  "比如说就像这个我们的express",
  "包括typescript是吧",
  "包括这个mango DB啊",
  "包括它的工具mangos",
  "这个其实我在MBC的时候已经讲过了",
  "这个可能还涉及到BCBC就是做加密用的",
  "还有就是GWT啊",
  "做这个校验",
  "权限校验用的",
  "然后呢",
  "就是一些比如说环境变量",
  "这一系列的东西",
  "可能大家都要涉及到",
  "包括这个我们的后端的表的关联",
  "数据表的关联",
  "包括关联的查询这一系列的知识点都要去用",
  "当然这些东西呢",
  "可能大部分的内容跟你们平时工作上面的",
  "你们可能用不到",
  "但是这些东西呢",
  "都跟你以后在前端工程师这个发展的这方面呢",
  "都是提供了非常非常好的这个实践基础的",
  "以后你们在单位上如果说职位稍微高一些的话",
  "这个",
  "作作为技术这个底层的这个这个开发者来说是非常重要的这些知识点",
  "那我们就开始讲一讲",
  "首先呢",
  "我们要搭建项目",
  "这个搭建项目呢",
  "实际上可能稍微还是会有一点困难",
  "那我们来慢慢慢来",
  "一步步来",
  "就是说哪儿算哪儿这个这个搭建项目",
  "比如说我叫它ru off",
  "好",
  "然后把它放到我们的",
  "Vs code里边来把它打开",
  "打开了以后呢",
  "首先",
  "派点J",
  "就是NPM1杠Y",
  "那现在有pack连接了以后呢",
  "我们要安装一系列的东西",
  "首先呢",
  "我们要安装",
  "因为这次我们全限都用typescript来写吧",
  "就以后呢",
  "能用typescript尽量用typescript",
  "但是如果说有一些东西确实涉及到typescript的很多",
  "就是说来要写很多很多内容的话",
  "我还是用GS",
  "就是说它内容就是typescript",
  "不会太扩展我们这个课程的这个这个长度的话",
  "我还是用GS",
  "好",
  "那么首先第一点呢",
  "我们就要安装一个",
  "express是吧",
  "Express",
  "然后呢",
  "我们要安装mangosmangos",
  "然后到这儿呢",
  "我还得给大家说一下",
  "你要安装mango DB",
  "安装mango DB的话",
  "大家可以把这个拿过来",
  "我我把这个给大家拿过来",
  "到时候源码的话",
  "你们就可以直接看这个了",
  "要应该是",
  "这个应该是这个",
  "应该是这个这个是安装mango DB的方法",
  "大家可以这个把把这个拿下来以后",
  "自己去就试一试等一会儿我要用到这条命令来启动我们的曼谷地狱",
  "我先把它启动起来吧然后我开一个这个QQ",
  "然后",
  "嗯",
  "没进去",
  "我还没有进到文件夹先进去",
  "先进到这个mango DB的文件夹",
  "我把它打大大一点",
  "先进到这个文件夹",
  "然后呢",
  "启动命令",
  "好这就启动了",
  "你看它这底下如果是没有可输入的这个",
  "就是这个显示了",
  "那就证明是启动成功了",
  "你也可以看底下的这个有一个叫exit code",
  "如果是没有exit code的话",
  "那么就是就代表它启动成功了",
  "然后我把它放下来",
  "然后呢",
  "我们安装mangos",
  "还要安装什么呢",
  "安装这个typesscript",
  "好",
  "还要安装什么呢",
  "就是我们的",
  "应该是",
  "BP",
  "啊",
  "这东西要安装",
  "往这边的",
  "这东西等一会儿我会讲",
  "这些东西都都是都是什么东西",
  "还有一个就是什么呢",
  "Jason web token",
  "这就叫JWT",
  "他是干什么的",
  "等会我也会讲",
  "还有一个叫dot env",
  "大家可能就是我其实有很很久都没用过这个了",
  "等一会儿我看一看它的这个配置是不是跟我",
  "就是用的方法是不是跟我以前用的方法是一样的",
  "等会我们看一下",
  "这东西主要是在项目当中",
  "你可以使用到点en nv",
  "点上production",
  "或者点上development",
  "你们可能很少用到这个东西",
  "原因是什么呢",
  "是因为你们用的是react跟view",
  "它已经帮你做好了",
  "但是呢",
  "如果说你完全的就是自己去搭建一个项目",
  "用原生的来写的话",
  "你就必须得使用到dot en nv这个东西",
  "Dot是什么东西",
  "就那个点是吧",
  "点en nv这种文件",
  "你要去从里边获取东西出来",
  "在我们的这个脚本里边使用的话",
  "你就要用这个东西才行",
  "这些都是相关的",
  "这些我们所需要的",
  "我看",
  "Express mangos type script",
  "web token",
  "还有DTV",
  "应该就生产环",
  "生产模式下应该就这些东西了",
  "我把它安装一下",
  "当然我们要用typescript呢",
  "还需要一些库",
  "就是我们的这个类型库",
  "这这里边所有安装的东西",
  "除了这个dot env不需要库以外",
  "其他实际上都需要一个类型库",
  "因为你写typescript的时候",
  "它其实需要注解的",
  "如果说你不用他的库的话",
  "你就得自己写主解",
  "所以说我们一般来说都要安装这些库",
  "但是你不用担心那一点",
  "这么多年了",
  "这些东西基本上都是有类型库的",
  "很少很少你遇到会有没有类型库的",
  "所以说你不用太担心",
  "一定都是可以安装上的",
  "好",
  "应该是都安装上了吧",
  "我们来看一看",
  "在dependence下边这六个都安装上了是吧",
  "然后还有什么呢",
  "就是类型库了",
  "首先呢",
  "我们先安装一个",
  "叫ts node",
  "然后第1B这个东西是什么呢",
  "以前我们在写的时候是用not去监听一个GS文件的变化是不是",
  "然后去去执行它",
  "但是呢",
  "我们TS涉及到编译",
  "Node Mo就不不好用了",
  "我们一般用ts no的DV去监听一个TS文件",
  "并且编译它",
  "就并且执行",
  "是这样的",
  "这是一个",
  "然后还需要什么呢",
  "就是我们的刚才安装的叫types",
  "安装express注解库",
  "然后呢",
  "类型库了叫",
  "然后还有什么呢",
  "就mangos是不是还有types types然后mangos它的格式都是这样的",
  "就是都是types斜杠什么什么东西好",
  "还有什么呢",
  "就是应该是还有一个",
  "安装express的话",
  "还得安装一个node的库",
  "Node的类型",
  "因为有一些是原生的",
  "我们的这个这个node里边的这个API",
  "我们的注解的话也需要node的类型库",
  "然后还有是什么呢",
  "Types",
  "然后是Jason web token",
  "这也需要注解",
  "因为我们要用到里边的方法",
  "然后还有什么呢",
  "Types下边的这个B叫叫叫BCBC应该是",
  "一个两个三个四个五个六个",
  "应该是没有了是吧",
  "港地他其实就是在生",
  "我们在开发环境上需要需要在真正的上线的时候",
  "它实际上都是转成GS的",
  "所以说我们就不需要他们",
  "而且这这些东西就不需要打包",
  "当然你不打包的话也可以是不是后端你不打包也可以",
  "然后打了包以后就变成GS文件了是吧",
  "好",
  "好",
  "这就是在安装",
  "应该就都没有什么问题了",
  "我们来看一看",
  "没什么问题是吧",
  "然后这改一下D",
  "然后这就是什么呢",
  "监听就是叫TS杠note杠D",
  "然后是当前目录下的",
  "我们就直接app.ts就行了",
  "这就可以监听",
  "直接监听TS",
  "然后我们在目录下呢",
  "就要建立这个APP",
  "点上TS",
  "好",
  "这是一个",
  "然后我们保存一下",
  "然后还有一个什么呢",
  "因为你TS的话",
  "需要一个TS的配置文件",
  "这个配置文件呢",
  "应该是TSC杠杠一米把它配置出来",
  "然后这就有了是吧",
  "有了以后呢",
  "我们需要把这个地方",
  "因为我们自己也要写一些类型相关的东西",
  "所以说呢",
  "我们得建立一个文件夹叫typestypes这个文件夹",
  "这个文件夹呢",
  "对应的就是这个type roots这个地方我们就要把它打开",
  "然后配置一下",
  "这地方叫做当前目录下的types",
  "这样去写",
  "这其实这已经找到了",
  "看见没",
  "就这样就没什么问题了就没什么问题了",
  "那么到到此为止",
  "安装这些东西都没有问题的",
  "扣个九",
  "都没有问题",
  "扣个九我们慢慢讲",
  "今天讲不完的话",
  "那就明天接着讲",
  "或者是后天接着讲好都明白了以后",
  "我来我来跟你讲一下这些东西都是干什么的",
  "我们把这些东西都拿过来",
  "这一些其实就不用说了嘛",
  "对吧",
  "主要是这一些东西",
  "我们把read me拿",
  "拿过来",
  "把这些放过来",
  "一个个来",
  "这个东西是做",
  "这个叫加密的",
  "这儿我给大家讲一下",
  "特别是对于这个password",
  "很多同学如果说你应多多少少了解点后端",
  "对于注册或者登录相关的这些操作",
  "你就应该知道",
  "Password是不可以铭文的",
  "铭文的",
  "也就是说它呢",
  "实际上是在来到我们的后端以后",
  "我们进行加密了以后",
  "存到数据库里边",
  "不是一个铭文的",
  "它是通过加了密的",
  "那加了密的话",
  "那我们怎么样去能够",
  "就是说能够去验证它呢",
  "这就有问题了",
  "是不是",
  "那你就要知道它一般是怎么加密的",
  "在原来",
  "一般来说我们都是这么加的",
  "就是说我们可以用MD51个方法",
  "把这个password",
  "再用MD5两次去把password拿到",
  "就这样拿到这个password以后",
  "然后呢",
  "它加了me以后",
  "再加一次MD5幂",
  "然后把它存到数据库",
  "数据库但是呢",
  "你要知道这样做",
  "它有个问题是你这个pass如果你不更改它的话",
  "这个值是永远都一样的",
  "它是一定的值",
  "虽然说你很难",
  "你你你反推就是解密这个东西",
  "你很难解密",
  "但是它是一定的",
  "所以说这样的话",
  "其实也不能保证",
  "就是理论上的就不能保证它的绝对的安全",
  "那我们想了一个什么办法呢",
  "就是我们有一个salt这样一个东西",
  "它叫颜值",
  "叫颜值它本身就叫颜嘛",
  "Salt就是颜",
  "为什么使用这个呢",
  "其实它是有故事的",
  "就是说我们希望在某一些东西里边加调料的时候",
  "因为盐非常细",
  "你知道吧",
  "就把这些东西放到那个食物里边去",
  "它就它就一下就化在里边融为一体了",
  "是吧",
  "这叫颜值",
  "它是其实是一种有一个小故事在里边",
  "当然这个故事就太长了",
  "我先不给大家详细说",
  "反正你记住它叫颜值",
  "它一般来说呢",
  "都是六到12位的一个随机字符串",
  "一个随机字符串",
  "它不一定是唯一的",
  "不一定是所有用户只有它唯一这一个",
  "它不一定是唯一的",
  "这东西是可以重复的",
  "比如说你用户",
  "在最初的时候",
  "我们使用颜值",
  "每一个这个用户呢",
  "他都会有一个颜值",
  "也就是说这个颜值实际上存到数据库里边了",
  "它是对应了一个用户",
  "比如说我举个例子",
  "ID啊",
  "唯一啊",
  "然后呢",
  "然后username是比如说小野C森",
  "然后呢",
  "他有一个password",
  "那他就是这里边就有很多很多了",
  "就不说了",
  "然后还有thought",
  "他有可能是",
  "它是有可能是这个东西六位",
  "它是这样存的",
  "最开始的时候这个东西是一定的",
  "但是问题就来了",
  "这个东西就算他一定的话",
  "它其实把这个拿过来",
  "然后在这儿我加你怎么加都可以了",
  "就看你怎么去做",
  "是不是你就这样去做的话",
  "它实际上这个东西得出来",
  "这个东西它也是一定的",
  "因为你这个password是一定的",
  "So是",
  "一定的",
  "所以说这个东西得出来的结果",
  "它就一定是一定的",
  "是不是所以说这个是一定的那么后来我们怎么去做呢",
  "就是说我们能不能这样salt呢",
  "在",
  "每次登录验证完毕以后",
  "就动态更改",
  "就是它不是一定的值这个东西",
  "这个东西变成了动态的了",
  "那么也就是说",
  "然后再次重新的去先把它存了",
  "然后再次重新的去把MD5",
  "在MD5把这个密码在数据库当中",
  "这个密码给它算出来",
  "再重新存一遍",
  "那么也就是说每隔一段时期",
  "Password这个字段里边其实是不一样的",
  "然后因为不一样",
  "它就肯定不一样",
  "但是它不影响你验证",
  "为什么呢",
  "因为只要你这个东西是一定的",
  "然后呢",
  "它能够取得出来",
  "然后最终得到的值",
  "就跟这个password里边存储的这个这个值它就是一样的了",
  "所以说以前是这么做的",
  "这个能理解的扣个九",
  "能理解的扣个九",
  "这就是以前最早的时候",
  "我们做对于这个密码加密",
  "来做的这个这些事情",
  "当然你一定要知道密码为什么不能是铭文呢",
  "就是说首先来说",
  "从职业道德上面来说",
  "明文存储密码是完全不道德的",
  "就是你作为你",
  "不管你作为平台方也好",
  "你作为用户也好",
  "或者作为其他的用户也好",
  "你都不能够知道",
  "就是说你自己就是说记别的用户人人家的这个密码到底是多多少",
  "为什么呢",
  "因为这里边涉及到一个什么安全问题",
  "就是说人家可能他的密码当中带有一些比如说银行信息",
  "或者是一些资产信息相关的东西那些密码",
  "那么你这样知道了以后",
  "他就可他就可能通过某些工具来去推测推测这些密码",
  "或者是他银行卡的密码",
  "或者是他的什么软件的密码这些的",
  "所以说这是不道德的",
  "所以说我们其接",
  "的的",
  "D里边去",
  "其实对于平台方他也不知道密码是吧",
  "他也不知道密码",
  "说那你重置密码一般怎么怎么做呢",
  "要不然用你的电话号码要都用你的邮箱是不是",
  "它其实就是什么呢",
  "给你一次重新设置密码的机会但是呢",
  "你要知道他不是知道你这个密码",
  "是他把这个密码他给你一个窗口",
  "你可以重新设置这个密码了以后",
  "然后再把新的出来的值再存进去",
  "那你下次登录的时候就用新密码登录就行了",
  "这是一个理论上的问题是不是",
  "但是你发现没有",
  "这样的话太复杂了",
  "就是说我们每一次要去做这样的事情的话",
  "其实很复杂是不是",
  "所以说就会出来了很多各式各样的这种加密算法工具",
  "其中一个呢",
  "就叫BC",
  "这个首先来说",
  "它之前它还有一个版本叫BCJS",
  "以前我们都是用的这个东西",
  "但这个东西呢",
  "就是比起第二个版本的它",
  "它的效率要差一些",
  "就这个东西效率要高一些",
  "有时候算法它它升级了嘛",
  "对不对",
  "所以说",
  "我们现在呢",
  "基本上对于密码加密呢",
  "用它用的比较多",
  "因为它呢",
  "还可以进行动态的一些设置",
  "所以说它呢",
  "可以满足我们对于各种各样的这种加密的这样的一个需求都能满足",
  "所以我们使用它",
  "那么这个CFT应该知道吧",
  "这个是地下室的意思是吧",
  "C啊",
  "这个是地下室当然呢",
  "它这个也是这个",
  "就是像像比如说比如说墓地底下的这些",
  "就是",
  "就墓室这些的",
  "地窖啊",
  "其实都是他都是他它词源就多了",
  "我们之前学过一个东西叫做cryal",
  "这它是它也是一种加密是吧",
  "这个东西实际上就是地窖",
  "墓室这些东西就是很隐蔽的",
  "隐蔽都是它",
  "都是它它的来源",
  "其实这个是一个拉丁语吧",
  "是吧",
  "拉丁语来的",
  "所以就隐演演变成了这个东西",
  "但是be c",
  "这个东西其实也是个单词",
  "它就是地下室",
  "它就是意思指的是这种就是就是年代比较久的这种这种地下室",
  "或者是这种老房子的地下室",
  "都是指它",
  "它是一个特有的单词就大概是这样的",
  "它呢",
  "到时候我们看怎么用就行了",
  "它仍然是可以帮我们去做",
  "比如说这个颜值的直接的加密的",
  "它是直接可以做的这个",
  "然后就是",
  "这个dot env",
  "我们有些时候",
  "需要一些公共的公共的配置",
  "这些公共的配置呢",
  "我们一般来说",
  "可以不把它放到这个giar上面去",
  "是吧",
  "不不不让它",
  "让GI去忽略它",
  "而但是我们在运行的过程当中呢",
  "我们又需要去这些东西",
  "那怎么办呢",
  "我们可以放到一个点en nv里边去",
  "当然如果说你的",
  "你在开发环境下",
  "你仅仅是开发环境下用的话",
  "那你就放到env",
  "点上这个development",
  "如果说你是生产环境用的话",
  "那你就用点env",
  "点上production",
  "这个对对对",
  "点production",
  "如果你是生产环境跟这个开发环境都要用的",
  "你就点env就行了",
  "这个是可以忽略的",
  "一般这里边放些什么东西呢",
  "放些比如说一些base ul这些东西",
  "包括一些什么secret",
  "C是",
  "Secret",
  "啊",
  "Secrets写错了",
  "应该是secret",
  "一些相关的",
  "比如说P之类的东西",
  "就这些东西实际上是不放在我们的这个giate上面吧",
  "它可以忽略掉点en nv的东西",
  "全部忽略掉是吧",
  "然后呢",
  "你在真正的在在某些环",
  "在不同的环境里边",
  "你可以在他们里边去写相应的这些配置",
  "你可以通过什么拿到呢",
  "叫",
  "进程中的en nv环境",
  "这个en nv什么意思",
  "叫environment",
  "叫环境的意思",
  "它里边就可以访问到这些base URL是这么来的",
  "当然呢",
  "一般来说需要一个配置",
  "就是说你需要用到dot env这个工具去",
  "配置一下",
  "它呢",
  "有个con方法执行",
  "你就可以通过它来做了",
  "实际上它做的事情就非常简单",
  "就是把它",
  "的",
  "量",
  "都是这样的",
  "其实做一个转换",
  "做一个映射转换",
  "映射转换",
  "这么一个过程",
  "这就是他要做的事情",
  "然后express我就不多说了",
  "Jason web token是什么东西呢",
  "它实际上也跟加密有关系",
  "它其实叫签名",
  "签名实际上本质上就是加密",
  "就是加密",
  "它的本质就是加密",
  "它呢",
  "是怎么做的呢",
  "它其实很简单",
  "就是你sign了以后",
  "你可以放入你的",
  "比如说你的这个字段",
  "你放入任何一个字段",
  "比如说ID字段",
  "加上一个",
  "比如说叫我们刚才说的这个secret key",
  "它可以让可以算出一个新的token出来",
  "这个东西叫令牌",
  "叫令牌",
  "令牌啊",
  "它叫令牌",
  "就这个东西呢",
  "它实际上是一个认证的标志",
  "它是随机字符串",
  "其实算出来一个随机字符串",
  "然后呢",
  "这个令牌呢",
  "在你就是说",
  "比如说HTTP请求的时候呢",
  "你可以在authorization里边呢",
  "带入这个token",
  "带入这个token",
  "然后呢",
  "我们可以在后端呢",
  "去拿到这个图片",
  "然后去验证是什么呢",
  "其实并不是先不是验证",
  "先是什么呢",
  "先是解密",
  "这个解密呢",
  "实际上也就是要用到什么",
  "用到这个token和这个secret key",
  "这个解密的过程叫verify",
  "他拿到它了以后会把什么算出来呢",
  "会把这个东西算出来",
  "ID算出来",
  "那你拿到这个ID了以后",
  "你就可以到数据表",
  "这个database这个数据库里边去",
  "去查找当前的profile",
  "同样我们也可以去验证它是否录对不对",
  "如果这个token",
  "它是有效的",
  "并且这个token是正确的话",
  "我们就可以通过verify和它去证明这个ton有效",
  "并且取出他当时签名的时候",
  "你加入的这个字段",
  "它是可以取出来的",
  "那么只要他能取出来它",
  "并且它存在",
  "那就证明什么你登录是成功的",
  "当然这个时候你也可以设置什么呢",
  "设置expiry",
  "expire in叫什么呢",
  "叫有效期",
  "你同样也可以设置",
  "它就是在有效期的范畴之内",
  "你是可以正常验证它的",
  "但是如果在有效期范围之外",
  "那你是没有办法准确的去验证出这个token是否存在的",
  "也就是说它的验证是失败的",
  "那这个时候你其实登录就是失败的了",
  "对不对",
  "你返回一个",
  "比如说你这验证失败了",
  "你返回一个状态码",
  "比如说是1004错误码吧",
  "1004",
  "然后只要前端看到有1004这个东西",
  "那就证明token验证失败了",
  "那怎么办呢",
  "那就跳转到什么登录页面重新登录是不是就可以了这个",
  "明白的扣个六",
  "完全听明白的扣个六",
  "好",
  "那这个地方呢",
  "就是说我们就可以不用cookie这些东西了",
  "是吧",
  "Cookie session这些东西了",
  "这样呢",
  "我就不详细讲cookie session了",
  "就是我把这个功能给你讲完了以后",
  "到时候你再来看这个怎么怎么弄",
  "然后mangos呢",
  "很多同学其实对mangos不是很明白",
  "这个mango DB啊",
  "你首先要明白",
  "它是一种动态的数据存储容器",
  "你也可以理解为它叫是什么呢",
  "动态的叫dynamic",
  "database",
  "作为动态的数据容器呢",
  "就是它的特点是什么",
  "是",
  "增删改查效率高",
  "但安全性",
  "这个",
  "安全性准确性低低",
  "然后呢",
  "你同样听过一个叫什么来着",
  "叫my cle是吧",
  "包括or Oracle这些数据库呢",
  "它是属于静态",
  "的数据存储容器",
  "它叫static database",
  "他是",
  "增山",
  "增删",
  "增删改查",
  "效率低",
  "安全性",
  "高",
  "准确性高",
  "就容错率比较",
  "高是不是",
  "那为什么会有这两种数数据库呢",
  "原因是因为有一些数据",
  "它是真的需要高效的去增删改查的",
  "我举个最简单的例子",
  "你们玩游戏",
  "那个人呢",
  "他不是到处动吗",
  "你是怎么看见别人在动的呢",
  "是因为别人的位置始终都在改",
  "也就是他的坐标在改变",
  "那这些坐标怎么传递到你这来的呢",
  "你你在你的这个视图里边",
  "一定是这个人的坐标是在改变的",
  "他才会他才会移动",
  "这些都是由数据库的",
  "还有一个就是你你现在你在这个场",
  "这个标在你推出的时候",
  "实际上它已经存到了数据了",
  "但是你想过没有",
  "这个数据是的",
  "一有些时候网络会有一点问题的话",
  "你可能你突然之间闪现了一下",
  "那是为什么呢",
  "原因是因为存储数据的这个",
  "就是这个效率太高了",
  "导致什么呢",
  "你有些数据实际上由于网络问题",
  "你没有存上",
  "所以说导致你闪现一下",
  "可能闪到刚才刚才那个位置上去了",
  "还有一些什么呢",
  "就是一些比如说像你的一些动作",
  "比如说你你做那很多很多的动作",
  "让别人知道a技能放B技能",
  "实际上都是有标识的",
  "那这些标识实际上都是在动态存储的",
  "它安全性、准确性就稍微低一些",
  "它就没有那么之准确",
  "它可能会受到这个影响",
  "网络影响",
  "但是你要知道他MYSQ能不能存呢",
  "像这种静态的它能不能存呢",
  "它也是可以存的",
  "但是你要知道它的增删改查效率太低了",
  "因为什么",
  "因为越安全的东西",
  "它对于安全加持的手段就越多",
  "你的增删改查对于这个性能的耗就高",
  "它的效率就低",
  "所以这种数据",
  "GOD这种数据",
  "它们是有别的",
  "你就可以",
  "准确",
  "存进去了",
  "你不能有误",
  "不能有错误",
  "不能有问题",
  "它是在乎的是安全性跟准确性",
  "而他不在乎效率",
  "所以说优我",
  "的",
  "的的",
  "的",
  "这个",
  "的",
  "问题",
  "而MYSQL就不一样",
  "数据库是需要优化的",
  "你如何的去进行增删改查",
  "如何的去对数据进行分析",
  "这一系列的都是对MYSQL的存储",
  "增删改查这些操作",
  "都是有影响的",
  "所以说我们怎么样能够尽可能的在MYSQL这种静态的数据存储容器的基础上能",
  "是",
  "流畅的在在走呢",
  "其实他走的每一步是在你视觉范围之内",
  "能够往前走的每一步实际上都是数据",
  "如果没有这个数据",
  "你是没有办法看到它那么流畅的运行的",
  "那这些数据你想一想要多少间隔就要存一次",
  "它一定是要存储的",
  "它不存储是不行的",
  "当然这个地方就有一系列的优化了",
  "比如说它可能跟web socket",
  "跟socket相关的",
  "或者是跟这个长连接相关的这种优化",
  "它可能是直接先给你传递数据",
  "然后再存储",
  "传递数据再存储",
  "它可能不是那么及时的去存储",
  "也有可能",
  "但是你要能保证整个的这个长连接所带来的这个数据的准确性一定要高",
  "所以这就是为什么我们分DBMY啊",
  "之前我们做的工程师项目都是用MY来做的",
  "因为我们什么我们的网站的这些所有的数据",
  "它必须得准确存储",
  "要安全才行",
  "我们就基本上不用mango DB",
  "当然现在我是为了教学",
  "像这样的东西都不适合用mango DB",
  "对不对",
  "但我为了让大家学习呢",
  "我用mango DB给大家做",
  "连接啊",
  "这些的相对而言比mango DB要麻烦一些",
  "Mango DB很简单",
  "它的iganma也很简单是吧",
  "所以说这个大家知道",
  "那么mangos是什么呢",
  "Mangos还有你们以前学习到的这个circle到底是什么呢",
  "你要记住",
  "我们实际上不管你是用MYC还是mango DB",
  "它都是基于一种语言叫做circle",
  "这种叫circle语言",
  "它一它的基本的这个形态呢",
  "就是字符串",
  "比如说select什么什么",
  "From什么什么",
  "就是这样的一个东西",
  "从哪个数据库里边选什么东西",
  "但是你要看到",
  "数据的",
  "这个",
  "circle",
  "它实际上这俩东西其实就是对于我们的circlel操作的circlel语言的运用与数据库操作",
  "的一种封装",
  "封装说白了就是什么呢",
  "就是数据库操作的方法化",
  "我们不再用circlel语言去做了",
  "我们直接调用方法就可以直接去操作我们的数据库了",
  "这就是方法化",
  "实际上你可以理解为circleize是my circleq的一种工具",
  "操作工具",
  "然后mangos呢",
  "是mango DB的一种操作工具",
  "它封装了很多方法",
  "让你更加方便的去对数据库进行增长改查操作",
  "好",
  "那下边typescript呢",
  "就是这就不说了嘛",
  "对于type script语法的支持是吧",
  "语法和注解",
  "类型",
  "注解",
  "注解的支持",
  "这就是所有的东西了",
  "Express刚才没讲",
  "我大大概这儿我也给大家讲一下",
  "把这个express也给给大家讲了",
  "你首先要知道node是什么",
  "Node是一种服务器程序",
  "就像你们之前在网络课里面学到的什么呢",
  "比如说像阿帕奇这样的东西",
  "实际上跟noe都差不多的",
  "都是在服务器搭建上的程序",
  "它的好处是什么呢",
  "是可以让可以解析或者叫解释javascript",
  "并且提供了",
  "提供了",
  "一系列在服务器上做",
  "程序的API",
  "比如像操作文件系统的",
  "比如说像操作net的",
  "比如说像操作HTTP的",
  "很多很多的API",
  "它提供了",
  "并且它可以解释解析我们的javascript",
  "以前我们的",
  "服务端没有note之前",
  "我们没有办法解释",
  "在服务器上面解释这个javascript对不对",
  "我们要让javascript形成一个后端语言",
  "后端的这个程序编写的这个语言和技术我们是做不到的",
  "Node帮我们做到了",
  "那node的基本东西呢",
  "它其实就是一个V8引擎",
  "这是一个Chrome推出的一种引擎",
  "它就是这个",
  "就第八个版本",
  "就是其实它叫它是",
  "Chrome",
  "m",
  "这个",
  "脱离了浏览器了",
  "因为JS引擎它的宿主应该是浏览器",
  "对不对",
  "但是现在呢",
  "就是我们谷歌呢",
  "把这个V8引擎给抽离出来了",
  "放到了服务器上面",
  "然后形成了一个服务器程序",
  "它是这样的一个东西",
  "那么express是什么呢",
  "Express是一个框架",
  "也就是说他给你封装了很多",
  "关于后端服务程序编写的一些这个方法",
  "你比如说像routeor是不是",
  "比如说像一些这个",
  "中间键",
  "中间键编程",
  "比如说还有一些这个服务器",
  "快速搭建是吧",
  "这些东西都是由express帮你完成的",
  "你要不自己",
  "你要不想这个用press",
  "你要自己用node的API写",
  "比如说你要搭建服务器是不是",
  "你就不能说",
  "我用个listen就行了",
  "不行",
  "你得用HTp.server这样的东西",
  "Create server这样的东西你要自己去写",
  "比如中间件编程",
  "你要自己去封装",
  "因为我们node它本身是没有中间间编程的这种方式的",
  "你必须得自己去封装",
  "Router你要自己去写",
  "你要有这个",
  "用这种就是最原始的方式自己去写",
  "所以这样的话就会给你带来很多很多麻烦",
  "而express",
  "这样呢",
  "他给你封装了这么一套东西",
  "让你自己让你可以很方便的去搭建你的后端服务",
  "这就是所有你今天所要用到的所有的这个依赖它的",
  "这些相关的一些知识听明白的扣六",
  "我们休息五分钟",
];

function textGlue(arr) {
  var doc;
  for (let i = 0; i < arr.length; i++) {
    doc += arr[i];
  }

  return doc;
}

console.log(textGlue(ch1));

/*

  undefined好今天呢我们要讲这个路由权限的问题这是一个相对而言可能对于前端工程师来说稍微有点复杂的一个一个东西因为它涉及到后端所以说我为了给大家把这个理清楚呢可能这个课就比较长今天呢我们先把最基本的登录这个注册这些的API我们先把它写了因为这里边要涉及到很多知识点所以说我先把这个给大家讲了然后呢可能再过一天周五呢我再给大家讲一讲就是我们前端做这个登录注册这些的应该怎么样去跟后端对接我做这个课程的目的主要第一是什么呢让大家了解一个通盘了解一个前后端的这样的一个项目上的最主要的需求中间的涉及到的一些知识点因为你要知道你如果会一些后端的话对于你以后开发就是做测试也好或者是以后做中间层也好是非常非常有益处的所以说这个大家这这一套课程大家认真听过估计怎么也得个有一个十十个小时到11个小时的课这个这个课所以说大家反正认认真听我呢把这个知识点相对而言给大家认真就是说这个仔细一点讲让大家把每一个知识点都搞清楚那么这一节这一套课呢可能涉及到的一些知识点刚才我大概想了一下可能涉及到的比如说就像这个我们的express包括typescript是吧包括这个mango DB啊包括它的工具mangos这个其实我在MBC的时候已经讲过了这个可能还涉及到BCBC就是做加密用的还有就是GWT啊做这个校验权限校验用的然后呢就是一些比如说环境变量这一系列的东西可能大家都要涉及到包括这个我们的后端的表的关联数据表的关联包括关联的查询这一系列的知识点都要去用当然这些东西呢可能大部分的内容跟你们平时工作上面的你们可能用不到但是这些东西呢都跟你以后在前端工程师这个发展的这方面呢都是提供了非常非常好的这个实践基础的以后你们在单位上如果说职位稍微高一些的话这个作作为技术这个底层的这个这个开发者来说是非常重要的这些知识点那我们就开始讲一讲首先呢我们要搭建项目这个搭建项目呢实际上可能稍微还是会有一点困难那我们来慢慢慢来一步步来就是说哪儿算哪儿这个这个搭建项目比如说我叫它ru off好然后把它放到我们的Vs code里边来把它打开打开了以后呢首先派点J就是NPM1杠Y那现在有pack连接了以后呢我们要安装一系列的东西首先呢我们要安装因为这次我们全限都用typescript来写吧就以后呢能用typescript尽量用typescript但是如果说有一些东西确实涉及到typescript的很多就是说来要写很多很多内容的话我还是用GS就是说它内容就是typescript不会太扩展我们这个课程的这个这个长度的话我还是用GS好那么首先第一点呢我们就要安装一个express是吧Express然后呢我们要安装mangosmangos然后到这儿呢我还得给大家说一下你要安装mango DB安装mango DB的话大家可以把这个拿过来我我把这个给大家拿过来到时候源码的话你们就可以直接看这个了要应该是这个应该是这个应该是这个这个是安装mango DB的方法大家可以这个把把这个拿下来以后自己去就试一试等一会儿我要用到这条命令来启动我们的曼谷地狱我先把它启动起来吧然后我开一个这个QQ然后嗯没进去我还没有进到文件夹先进去先进到这个mango DB的文件夹我把它打大大一点先进到这个文件夹然后呢启动命令好这就启动了你看它这底下如果是没有可输入的这个就是这个显示了那就证明是启动成功了你也可以看底下的这个有一个叫exit code如果是没有exit code的话那么就是就代表它启动成功了然后我把它放下来然后呢我们安装mangos还要安装什么呢安装这个typesscript好还要安装什么呢就是我们的应该是BP啊这东西要安装往这边的这东西等一会儿我会讲这些东西都都是都是什么东西还有一个就是什么呢Jason web token这就叫JWT他是干什么的等会我也会讲还有一个叫dot env大家可能就是我其实有很很久都没用过这个了等一会儿我看一看它的这个配置是不是跟我就是用的方法是不是跟我以前用的方法是一样的等会我们看一下这东西主要是在项目当中你可以使用到点en nv点上production或者点上development你们可能很少用到这个东西原因是什么呢是因为你们用的是react跟view它已经帮你做好了但是呢如果说你完全的就是自己去搭建一个项目用原生的来写的话你就必须得使用到dot en nv这个东西Dot是什么东西就那个点是吧点en nv这种文件你要去从里边获取东西出来在我们的这个脚本里边使用的话你就要用这个东西才行这些都是相关的这些我们所需要的我看Express mangos type scriptweb token还有DTV应该就生产环生产模式下应该就这些东西了我把它安装一下当然我们要用typescript呢还需要一些库就是我们的这个类型库这这里边所有安装的东西除了这个dot env不需要库以外其他实际上都需要一个类型库因为你写typescript的时候它其实需要注解的如果说你不用他的库的话你就得自己写主解所以说我们一般来说都要安装这些库但是你不用担心那一点这么多年了这些东西基本上都是有类型库的很少很少你遇到会有没有类型库的所以说你不用太担心一定都是可以安装上的好应该是都安装上了吧我们来看一看在dependence下边这六个都安装上了是吧然后还有什么呢就是类型库了首先呢我们先安装一个叫ts node然后第1B这个东西是什么呢以前我们在写的时候是用not去监听一个GS文件的变化是不是然后去去执行它但是呢我们TS涉及到编译Node Mo就不不好用了我们一般用ts no的DV去监听一个TS文件并且编译它就并且执行是这样的这是一个然后还需要什么呢就是我们的刚才安装的叫types安装express注解库然后呢类型库了叫然后还有什么呢就mangos是不是还有types types然后mangos它的格式都是这样的就是都是types斜杠什么什么东西好还有什么呢就是应该是还有一个安装express的话还得安装一个node的库Node的类型因为有一些是原生的我们的这个这个node里边的这个API我们的注解的话也需要node的类型库然后还有是什么呢Types然后是Jason web token这也需要注解因为我们要用到里边的方法然后还有什么呢Types下边的这个B叫叫叫BCBC应该是一个两个三个四个五个六个应该是没有了是吧港地他其实就是在生我们在开发环境上需要需要在真正的上线的时候它实际上都是转成GS的所以说我们就不需要他们而且这这些东西就不需要打包当然你不打包的话也可以是不是后端你不打包也可以然后打了包以后就变成GS文件了是吧好好这就是在安装应该就都没有什么问题了我们来看一看没什么问题是吧然后这改一下D然后这就是什么呢监听就是叫TS杠note杠D然后是当前目录下的我们就直接app.ts就行了这就可以监听直接监听TS然后我们在目录下呢就要建立这个APP点上TS好这是一个然后我们保存一下然后还有一个什么呢因为你TS的话需要一个TS的配置文件这个配置文件呢应该是TSC杠杠一米把它配置出来然后这就有了是吧有了以后呢我们需要把这个地方因为我们自己也要写一些类型相关的东西所以说呢我们得建立一个文件夹叫typestypes这个文件夹这个文件夹呢对应的就是这个type roots这个地方我们就要把它打开然后配置一下这地方叫做当前目录下的types这样去写这其实这已经找到了看见没就这样就没什么问题了就没什么问题了那么到到此为止安装这些东西都没有问题的扣个九都没有问题扣个九我们慢慢讲今天讲不完的话那就明天接着讲或者是后天接着讲好都明白了以后我来我来跟你讲一下这些东西都是干什么的我们把这些东西都拿过来这一些其实就不用说了嘛对吧主要是这一些东西我们把read me拿拿过来把这些放过来一个个来这个东西是做这个叫加密的这儿我给大家讲一下特别是对于这个password很多同学如果说你应多多少少了解点后端对于注册或者登录相关的这些操作你就应该知道Password是不可以铭文的铭文的也就是说它呢实际上是在来到我们的后端以后我们进行加密了以后存到数据库里边不是一个铭文的它是通过加了密的那加了密的话那我们怎么样去能够就是说能够去验证它呢这就有问题了是不是那你就要知道它一般是怎么加密的在原来一般来说我们都是这么加的就是说我们可以用MD51个方法把这个password再用MD5两次去把password拿到就这样拿到这个password以后然后呢它加了me以后再加一次MD5幂然后把它存到数据库数据库但是呢你要知道这样做它有个问题是你这个pass如果你不更改它的话这个值是永远都一样的它是一定的值虽然说你很难你你你反推就是解密这个东西你很难解密但是它是一定的所以说这样的话其实也不能保证就是理论上的就不能保证它的绝对的安全那我们想了一个什么办法呢就是我们有一个salt这样一个东西它叫颜值叫颜值它本身就叫颜嘛Salt就是颜为什么使用这个呢其实它是有故事的就是说我们希望在某一些东西里边加调料的时候因为盐非常细你知道吧就把这些东西放到那个食物里边去它就它就一下就化在里边融为一体了是吧这叫颜值它是其实是一种有一个小故事在里边当然这个故事就太长了我先不给大家详细说反正你记住它叫颜值它一般来说呢都是六到12位的一个随机字符串一个随机字符串它不一定是唯一的不一定是所有用户只有它唯一这一个它不一定是唯一的这东西是可以重复的比如说你用户在最初的时候我们使用颜值每一个这个用户呢他都会有一个颜值也就是说这个颜值实际上存到数据库里边了它是对应了一个用户比如说我举个例子ID啊唯一啊然后呢然后username是比如说小野C森然后呢他有一个password那他就是这里边就有很多很多了就不说了然后还有thought他有可能是它是有可能是这个东西六位它是这样存的最开始的时候这个东西是一定的但是问题就来了这个东西就算他一定的话它其实把这个拿过来然后在这儿我加你怎么加都可以了就看你怎么去做是不是你就这样去做的话它实际上这个东西得出来这个东西它也是一定的因为你这个password是一定的So是一定的所以说这个东西得出来的结果它就一定是一定的是不是所以说这个是一定的那么后来我们怎么去做呢就是说我们能不能这样salt呢在每次登录验证完毕以后就动态更改就是它不是一定的值这个东西这个东西变成了动态的了那么也就是说然后再次重新的去先把它存了然后再次重新的去把MD5在MD5把这个密码在数据库当中这个密码给它算出来再重新存一遍那么也就是说每隔一段时期Password这个字段里边其实是不一样的然后因为不一样它就肯定不一样但是它不影响你验证为什么呢因为只要你这个东西是一定的然后呢它能够取得出来然后最终得到的值就跟这个password里边存储的这个这个值它就是一样的了所以说以前是这么做的这个能理解的扣个九能理解的扣个九这就是以前最早的时候我们做对于这个密码加密来做的这个这些事情当然你一定要知道密码为什么不能是铭文呢就是说首先来说从职业道德上面来说明文存储密码是完全不道德的就是你作为你不管你作为平台方也好你作为用户也好或者作为其他的用户也好你都不能够知道就是说你自己就是说记别的用户人人家的这个密码到底是多多少为什么呢因为这里边涉及到一个什么安全问题就是说人家可能他的密码当中带有一些比如说银行信息或者是一些资产信息相关的东西那些密码那么你这样知道了以后他就可他就可能通过某些工具来去推测推测这些密码或者是他银行卡的密码或者是他的什么软件的密码这些的所以说这是不道德的所以说我们其接的的D里边去其实对于平台方他也不知道密码是吧他也不知道密码说那你重置密码一般怎么怎么做呢要不然用你的电话号码要都用你的邮箱是不是它其实就是什么呢给你一次重新设置密码的机会但是呢你要知道他不是知道你这个密码是他把这个密码他给你一个窗口你可以重新设置这个密码了以后然后再把新的出来的值再存进去那你下次登录的时候就用新密码登录就行了这是一个理论上的问题是不是但是你发现没有这样的话太复杂了就是说我们每一次要去做这样的事情的话其实很复杂是不是所以说就会出来了很多各式各样的这种加密算法工具其中一个呢就叫BC这个首先来说它之前它还有一个版本叫BCJS以前我们都是用的这个东西但这个东西呢就是比起第二个版本的它它的效率要差一些就这个东西效率要高一些有时候算法它它升级了嘛对不对所以说我们现在呢基本上对于密码加密呢用它用的比较多因为它呢还可以进行动态的一些设置所以说它呢可以满足我们对于各种各样的这种加密的这样的一个需求都能满足所以我们使用它那么这个CFT应该知道吧这个是地下室的意思是吧C啊这个是地下室当然呢它这个也是这个就是像像比如说比如说墓地底下的这些就是就墓室这些的地窖啊其实都是他都是他它词源就多了我们之前学过一个东西叫做cryal这它是它也是一种加密是吧这个东西实际上就是地窖墓室这些东西就是很隐蔽的隐蔽都是它都是它它的来源其实这个是一个拉丁语吧是吧拉丁语来的所以就隐演演变成了这个东西但是be c这个东西其实也是个单词它就是地下室它就是意思指的是这种就是就是年代比较久的这种这种地下室或者是这种老房子的地下室都是指它它是一个特有的单词就大概是这样的它呢到时候我们看怎么用就行了它仍然是可以帮我们去做比如说这个颜值的直接的加密的它是直接可以做的这个然后就是这个dot env我们有些时候需要一些公共的公共的配置这些公共的配置呢我们一般来说可以不把它放到这个giar上面去是吧不不不让它让GI去忽略它而但是我们在运行的过程当中呢我们又需要去这些东西那怎么办呢我们可以放到一个点en nv里边去当然如果说你的你在开发环境下你仅仅是开发环境下用的话那你就放到env点上这个development如果说你是生产环境用的话那你就用点env点上production这个对对对点production如果你是生产环境跟这个开发环境都要用的你就点env就行了这个是可以忽略的一般这里边放些什么东西呢放些比如说一些base ul这些东西包括一些什么secretC是Secret啊Secrets写错了应该是secret一些相关的比如说P之类的东西就这些东西实际上是不放在我们的这个giate上面吧它可以忽略掉点en nv的东西全部忽略掉是吧然后呢你在真正的在在某些环在不同的环境里边你可以在他们里边去写相应的这些配置你可以通过什么拿到呢叫进程中的en nv环境这个en nv什么意思叫environment叫环境的意思它里边就可以访问到这些base URL是这么来的当然呢一般来说需要一个配置就是说你需要用到dot env这个工具去配置一下它呢有个con方法执行你就可以通过它来做了实际上它做的事情就非常简单就是把它的量都是这样的其实做一个转换做一个映射转换映射转换这么一个过程这就是他要做的事情然后express我就不多说了Jason web token是什么东西呢它实际上也跟加密有关系它其实叫签名签名实际上本质上就是加密就是加密它的本质就是加密它呢是怎么做的呢它其实很简单就是你sign了以后你可以放入你的比如说你的这个字段你放入任何一个字段比如说ID字段加上一个比如说叫我们刚才说的这个secret key它可以让可以算出一个新的token出来这个东西叫令牌叫令牌令牌啊它叫令牌就这个东西呢它实际上是一个认证的标志它是随机字符串其实算出来一个随机字符串然后呢这个令牌呢在你就是说比如说HTTP请求的时候呢你可以在authorization里边呢带入这个token带入这个token然后呢我们可以在后端呢去拿到这个图片然后去验证是什么呢其实并不是先不是验证先是什么呢先是解密这个解密呢实际上也就是要用到什么用到这个token和这个secret key这个解密的过程叫verify他拿到它了以后会把什么算出来呢会把这个东西算出来ID算出来那你拿到这个ID了以后你就可以到数据表这个database这个数据库里边去去查找当前的profile同样我们也可以去验证它是否录对不对如果这个token它是有效的并且这个token是正确的话我们就可以通过verify和它去证明这个ton有效并且取出他当时签名的时候你加入的这个字段它是可以取出来的那么只要他能取出来它并且它存在那就证明什么你登录是成功的当然这个时候你也可以设置什么呢设置expiryexpire in叫什么呢叫有效期你同样也可以设置它就是在有效期的范畴之内你是可以正常验证它的但是如果在有效期范围之外那你是没有办法准确的去验证出这个token是否存在的也就是说它的验证是失败的那这个时候你其实登录就是失败的了对不对你返回一个比如说你这验证失败了你返回一个状态码比如说是1004错误码吧1004然后只要前端看到有1004这个东西那就证明token验证失败了那怎么办呢那就跳转到什么登录页面重新登录是不是就可以了这个明白的扣个六完全听明白的扣个六好那这个地方呢就是说我们就可以不用cookie这些东西了是吧Cookie session这些东西了这样呢我就不详细讲cookie session了就是我把这个功能给你讲完了以后到时候你再来看这个怎么怎么弄然后mangos呢很多同学其实对mangos不是很明白这个mango DB啊你首先要明白它是一种动态的数据存储容器你也可以理解为它叫是什么呢动态的叫dynamicdatabase作为动态的数据容器呢就是它的特点是什么是增删改查效率高但安全性这个安全性准确性低低然后呢你同样听过一个叫什么来着叫my cle是吧包括or Oracle这些数据库呢它是属于静态的数据存储容器它叫static database他是增山增删增删改查效率低安全性高准确性高就容错率比较高是不是那为什么会有这两种数数据库呢原因是因为有一些数据它是真的需要高效的去增删改查的我举个最简单的例子你们玩游戏那个人呢他不是到处动吗你是怎么看见别人在动的呢是因为别人的位置始终都在改也就是他的坐标在改变那这些坐标怎么传递到你这来的呢你你在你的这个视图里边一定是这个人的坐标是在改变的他才会他才会移动这些都是由数据库的还有一个就是你你现在你在这个场这个标在你推出的时候实际上它已经存到了数据了但是你想过没有这个数据是的一有些时候网络会有一点问题的话你可能你突然之间闪现了一下那是为什么呢原因是因为存储数据的这个就是这个效率太高了导致什么呢你有些数据实际上由于网络问题你没有存上所以说导致你闪现一下可能闪到刚才刚才那个位置上去了还有一些什么呢就是一些比如说像你的一些动作比如说你你做那很多很多的动作让别人知道a技能放B技能实际上都是有标识的那这些标识实际上都是在动态存储的它安全性、准确性就稍微低一些它就没有那么之准确它可能会受到这个影响网络影响但是你要知道他MYSQ能不能存呢像这种静态的它能不能存呢它也是可以存的但是你要知道它的增删改查效率太低了因为什么因为越安全的东西它对于安全加持的手段就越多你的增删改查对于这个性能的耗就高它的效率就低所以这种数据GOD这种数据它们是有别的你就可以准确存进去了你不能有误不能有错误不能有问题它是在乎的是安全性跟准确性而他不在乎效率所以说优我的的的的这个的问题而MYSQL就不一样数据库是需要优化的你如何的去进行增删改查如何的去对数据进行分析这一系列的都是对MYSQL的存储增删改查这些操作都是有影响的所以说我们怎么样能够尽可能的在MYSQL这种静态的数据存储容器的基础上能是流畅的在在走呢其实他走的每一步是在你视觉范围之内能够往前走的每一步实际上都是数据如果没有这个数据你是没有办法看到它那么流畅的运行的那这些数据你想一想要多少间隔就要存一次它一定是要存储的它不存储是不行的当然这个地方就有一系列的优化了比如说它可能跟web socket跟socket相关的或者是跟这个长连接相关的这种优化它可能是直接先给你传递数据然后再存储传递数据再存储它可能不是那么及时的去存储也有可能但是你要能保证整个的这个长连接所带来的这个数据的准确性一定要高所以这就是为什么我们分DBMY啊之前我们做的工程师项目都是用MY来做的因为我们什么我们的网站的这些所有的数据它必须得准确存储要安全才行我们就基本上不用mango DB当然现在我是为了教学像这样的东西都不适合用mango DB对不对但我为了让大家学习呢我用mango DB给大家做连接啊这些的相对而言比mango DB要麻烦一些Mango DB很简单它的iganma也很简单是吧所以说这个大家知道那么mangos是什么呢Mangos还有你们以前学习到的这个circle到底是什么呢你要记住我们实际上不管你是用MYC还是mango DB它都是基于一种语言叫做circle这种叫circle语言它一它的基本的这个形态呢就是字符串比如说select什么什么From什么什么就是这样的一个东西从哪个数据库里边选什么东西但是你要看到数据的这个circle它实际上这俩东西其实就是对于我们的circlel操作的circlel语言的运用与数据库操作的一种封装封装说白了就是什么呢就是数据库操作的方法化我们不再用circlel语言去做了我们直接调用方法就可以直接去操作我们的数据库了这就是方法化实际上你可以理解为circleize是my circleq的一种工具操作工具然后mangos呢是mango DB的一种操作工具它封装了很多方法让你更加方便的去对数据库进行增长改查操作好那下边typescript呢就是这就不说了嘛对于type script语法的支持是吧语法和注解类型注解注解的支持这就是所有的东西了Express刚才没讲我大大概这儿我也给大家讲一下把这个express也给给大家讲了你首先要知道node是什么Node是一种服务器程序就像你们之前在网络课里面学到的什么呢比如说像阿帕奇这样的东西实际上跟noe都差不多的都是在服务器搭建上的程序它的好处是什么呢是可以让可以解析或者叫解释javascript并且提供了提供了一系列在服务器上做程序的API比如像操作文件系统的比如说像操作net的比如说像操作HTTP的很多很多的API它提供了并且它可以解释解析我们的javascript以前我们的服务端没有note之前我们没有办法解释在服务器上面解释这个javascript对不对我们要让javascript形成一个后端语言后端的这个程序编写的这个语言和技术我们是做不到的Node帮我们做到了那node的基本东西呢它其实就是一个V8引擎这是一个Chrome推出的一种引擎它就是这个就第八个版本就是其实它叫它是Chromem这个脱离了浏览器了因为JS引擎它的宿主应该是浏览器对不对但是现在呢就是我们谷歌呢把这个V8引擎给抽离出来了放到了服务器上面然后形成了一个服务器程序它是这样的一个东西那么express是什么呢Express是一个框架也就是说他给你封装了很多关于后端服务程序编写的一些这个方法你比如说像routeor是不是比如说像一些这个中间键中间键编程比如说还有一些这个服务器快速搭建是吧这些东西都是由express帮你完成的你要不自己你要不想这个用press你要自己用node的API写比如说你要搭建服务器是不是你就不能说我用个listen就行了不行你得用HTp.server这样的东西Create server这样的东西你要自己去写比如中间件编程你要自己去封装因为我们node它本身是没有中间间编程的这种方式的你必须得自己去封装Router你要自己去写你要有这个用这种就是最原始的方式自己去写所以这样的话就会给你带来很多很多麻烦而express这样呢他给你封装了这么一套东西让你自己让你可以很方便的去搭建你的后端服务这就是所有你今天所要用到的所有的这个依赖它的这些相关的一些知识听明白的扣六我们休息五分钟
 */
