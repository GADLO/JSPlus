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
