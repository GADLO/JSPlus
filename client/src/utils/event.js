/**
 *    __/\\\\\\\\\\\\\\\___/\\\________/\\\___/\\\\\\\\\\\\\\\___/\\\\\_____/\\\___/\\\\\\\\\\\\\\\_
 *     _\/\\\///////////___\/\\\_______\/\\\__\/\\\///////////___\/\\\\\\___\/\\\__\///////\\\/////__
 *      _\/\\\______________\//\\\______/\\\___\/\\\______________\/\\\/\\\__\/\\\________\/\\\_______
 *       _\/\\\\\\\\\\\_______\//\\\____/\\\____\/\\\\\\\\\\\______\/\\\//\\\_\/\\\________\/\\\_______
 *        _\/\\\///////_________\//\\\__/\\\_____\/\\\///////_______\/\\\\//\\\\/\\\________\/\\\_______
 *         _\/\\\_________________\//\\\/\\\______\/\\\______________\/\\\_\//\\\/\\\________\/\\\_______
 *          _\/\\\__________________\//\\\\\_______\/\\\______________\/\\\__\//\\\\\\________\/\\\_______
 *           _\/\\\\\\\\\\\\\\\_______\//\\\________\/\\\\\\\\\\\\\\\__\/\\\___\//\\\\\________\/\\\_______
 *            _\///////////////_________\///_________\///////////////___\///_____\/////_________\///________
 */
//读取滚动条位置兼容写法
export function getScrollOffset() {
    if (window.pageXOffset) {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        };
    } else {
        return {
            //document.body和document.documentElement只可能存在一个
            left: document.body.scrollLeft + document.documentElement.scrollLeft,
            top: document.body.scrollTop + document.documentElement.scrollTop,
        };
    }
}

//给元素事件程序添加函数兼容写法
export function addEvent(elem, event, fn) {
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

//移除元素事件程序函数兼容写法
export function removeEvent(elem, type, fn) {
    if (elem.addEventListener) {
        elem.removeEventListener(type, fn, false);
    } else if (elem.attachEvent) {
        elem.detachEvent('on' + type, fn);
    } else {
        elem['on' + type] = null;
    }
}

//获取页面位置，pageX/Y兼容性写法
export function pagePos(e) {
    //获取滚动条位置
    var sLeft = getScrollOffset().left,
        sTop = getScrollOffset().top,
        //获取文档偏移，有可能不存在
        cLeft = document.documentElement.clientLeft || 0,
        cTop = document.documentElement.clientTop || 0;

    return {
        X: e.clientX + sLeft + cLeft,
        Y: e.clientY + sTop + cTop
    }
}

//取消冒泡功能
export function cancelBubble(e) {
    var e = e || window.event;
    if (e.stopPropagation) {
        e.stopPropagation()
    } else {
        e.cancelBubble = true;
    }
}


//取消默认事件
export function preventDefaultEvent(e) {
    var e = e || window.event;

    if (e.preventDefault) {
        event.preventDefault()
    } else {
        event.returnValue = false;
    }
}


//获取浏览器可视区域的尺寸兼容性写法
export function getViewportSize() {
    if (window.innerWidth) {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else {
        if (document.compatMode === 'BackCompat') {
            return {
                width: document.body.clientWidth,
                height: document.body.clientheight
            }
        } else {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientheight
            }
        }
    }
}


//元素拖拽函数
export function elemDrag(elem) {
    var x, y;

    addEvent(elem, 'mousedown', function (e) {
        var e = e || window.event;

        //获取鼠标在相对于elem边界坐标值
        x = pagePos(e).X - getStyles(box, 'left');
        y = pagePos(e).Y - getStyles(box, 'top')

        //elem跟随鼠标坐标值
        addEvent(document, 'mousemove', mouseMove);
        addEvent(document, 'mouseup', mouseUp);

        cancelBubble(e)
        preventDefaultEvent(e)
    });

    //获取鼠标在相对于elem边界坐标值函数
    function mouseMove(e) {
        var e = e || window.event;

        elem.style.left = page.X - x + 'px';
        elem.style.top = page.Y - y + 'px'
    }

    //鼠标释放取消监听鼠标移动事件函数
    function mouseUp(e) {
        var e = e || window.event;

        e.onmousemove = null
    }

}


