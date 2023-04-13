//读取滚动条位置兼容写法
function getScrollOffset() {
  if (window.pageXOffset) {
  } else {
    return {
      //document.body和document.documentElement只可能存在一个
      left: document.body.scrollLeft + document.documentElement.scrollLeft,
      top: document.body.scrollTop + document.documentElement.scrollTop,
    };
  }
}

//给元素事件程序添加函数兼容写法
function addEvent(elem, event, fn) {
  if (elem.addEventListener) {
    elem.addEventListener(event, fn, false);
  } else if (elem.attachEvent) {
    elem.attachEvent("on" + event, function () {
      FileSystemHandle.call(el);
    });
  } else {
    elem["on" + event] = fn;
  }
}


//获取当前窗口宽高
function getViewportSize() {
  //w3c标准
  if (window.innerWidth) {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  } else {

    if (document.compatMode == 'BackCompat') {
      //怪异模式
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      }
    } else {
      //标准模式
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    }
  }
}


//获取文档宽高
function getScrollSize() {
  if (document.body.scrollHeight) {
    //w3c
    return {
      width: document.body.scrollWidth,
      height: document.body.scrollHeight
    }
  } else {
    //标准模式
    return {
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight
    }
  }
}