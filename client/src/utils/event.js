/***
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

