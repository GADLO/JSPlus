import Mouse from '../views/Mouse'
import { getViewportSize, pagePos, addEvent, cancelBubble, preventDefaultEvent, removeEvent } from '../utils/event';
import { getStyles } from '../utils/styleMethods';

export async function MouseView() {
    // const todolist = await TodoService.getTodoList()
    return Mouse()
}

export async function mouseScript() {
    console.log('mouse');

    //鼠标行为
    //clientX/Y  鼠标位置相对于当前页面可视区域坐标（不包括滚动条的距离）
    //layerX/Y   同pageX/Y相同   IE11以下同clientX/Y
    //x/y        与clientX/Y相对   火狐浏览器不支持
    //pageX/Y    鼠标相对于当前文档的坐标（包含当前滚动条的距离） IE9以下不支持 
    //screenX/Y  鼠标位置相对于屏幕的坐标
    //offsetX/Y  鼠标位置相对于块元素的坐标（包含边框，Safari除外）
    // document.onclick = function (e) {
    //     var e = e || window.event;



    //     console.log('client', e.clientX, e.clientY,);
    //     console.log('layer', e.layerX, e.layerY);
    //     console.log('x/y', e.x, e.y);
    //     console.log('page', e.pageX, e.pageY);
    //     console.log('screen', e.screenX, e.screenY);
    //     console.log('offset', e.offsetX, e.offsetY);
    //     console.log('pagePos', pagePos(e).X, pagePos(e).Y);
    // }

    var box = document.getElementsByClassName('box')[0],
        x,
        y;

    //mousedown mouseup mousemove

    box.onmouseup = function (e) {
        document.onmousemove = null
    }

    //鼠标按下触发事件
    box.onmousedown = function (e) {
        var e = e || window.event;

        //获取鼠标在相对于box边界坐标值
        x = pagePos(e).X - getStyles(box, 'left');
        y = pagePos(e).Y - getStyles(box, 'top')


        // box.onmousemove = function (e) {
        //     var e = e || window.event,
        //         page = pagePos(e);

        //     box.style.left = page.X + 'px';
        //     box.style.top = page.Y + 'px'
        // }

        //box跟随鼠标坐标值
        document.onmousemove = function (e) {
            var e = e || window.event,
                page = pagePos(e);

            //onmouemove的时候box位置需要减去鼠标距离box边界值，保证鼠标位于box内部
            box.style.left = page.X - x + 'px';
            box.style.top = page.Y - y + 'px'


        }
    }



    //封装拖拽函数模块
    var oLink = document.getElementsByClassName('link')[0]
    var dragNClick = (function (elem, elemClick) {
        //记录mouse事件时间戳，初始位置，当前窗口宽度,元素宽高
        var beginTime = 0,
            endTime = 0,
            initPos = [],
            wWidth = getViewportSize().width,
            wHeight = getViewportSize().height,
            elemWidth = getStyles(elem, 'width'),
            elemHeight = getStyles(elem, 'height');

        drag()
        function drag() {
            var x, y;

            addEvent(elem, 'mousedown', function (e) {
                var e = e || window.event;

                //开始时间戳
                beginTime = new Date().getTime();

                //初始位置赋值
                initPos = [getStyles(elem, 'left'), getStyles(elem, 'top')]

                //获取鼠标在相对于elem边界坐标值
                x = pagePos(e).X - getStyles(elem, 'left');
                y = pagePos(e).Y - getStyles(elem, 'top');

                //elem跟随鼠标坐标值
                addEvent(document, 'mousemove', mouseMove);
                addEvent(document, 'mouseup', mouseUp);

                cancelBubble(e)
                preventDefaultEvent(e)
            });

            //获取鼠标在相对于elem边界坐标值函数
            function mouseMove(e) {
                var e = e || window.event,
                    elemLeft = pagePos(e).X - x,
                    elemTop = pagePos(e).Y - y;

                //当元素超过横向边界时，重新赋值操作
                if (elemLeft <= 0) {
                    elemLeft = 0
                } else if (elemLeft >= wWidth - elemWidth) {
                    elemLeft = wWidth - elemWidth
                }

                //当元素超过纵向边界时，重新赋值操作
                if (elemTop <= 0) {
                    elemTop = 0
                } else if (elemTop >= wHeight - elemHeight) {
                    elemTop = wHeight - elemHeight
                    console.log(1);
                }


                //让元素跟随拖拽位置
                elem.style.left = elemLeft + 'px';
                elem.style.top = elemTop + 'px'


            }

            //鼠标释放取消监听鼠标移动事件函数
            function mouseUp(e) {
                var e = e || window.event;
                endTime = new Date().getTime();

                //若mousedown和mouseup时间间隔小于200 则默认为奠基事件，反之为拖拽事件
                if (endTime - beginTime < 200) {
                    elemClick();
                    elem.style.left = initPos[0];
                    elem.style.top = initPos[1];
                }


                removeEvent(document, 'mouseup', mouseUp);
                removeEvent(document, 'mousemove', mouseMove);

            }
        }
    })

    // dragNClick(oLink, function () {
    //     window.open('http://google.com')
    // })

    //封装拖拽函数进Elemnt原型
    Element.prototype.dragNClick = (function (elemClick) {
        //记录mouse事件时间戳，初始位置
        var beginTime = 0,
            endTime = 0,
            initPos = [],
            wWidth = getViewportSize().width,
            wHeight = getViewportSize().height,
            elemWidth = getStyles(this, 'width'),
            elemHeight = getStyles(this, 'height');

        //改变this指向，指向当前调用元素
        drag.call(this)

        function drag() {
            var x, y, _self = this;

            addEvent(this, 'mousedown', function (e) {
                var e = e || window.event;

                //开始时间戳
                beginTime = new Date().getTime();

                //初始位置赋值
                initPos = [getStyles(_self, 'left'), getStyles(_self, 'top')]

                //获取鼠标在相对于elem边界坐标值
                x = pagePos(e).X - getStyles(_self, 'left');
                y = pagePos(e).Y - getStyles(_self, 'top');

                //elem跟随鼠标坐标值
                addEvent(document, 'mousemove', mouseMove);
                addEvent(document, 'mouseup', mouseUp);

                cancelBubble(e);
                preventDefaultEvent(e);
            });

            //获取鼠标在相对于elem边界坐标值函数
            function mouseMove(e) {
                var e = e || window.event,
                    elemLeft = pagePos(e).X - x,
                    elemTop = pagePos(e).Y - y;

                //当元素超过横向边界时，重新赋值操作
                if (elemLeft <= 0) {
                    elemLeft = 0
                } else if (elemLeft >= wWidth - elemWidth) {
                    elemLeft = wWidth - elemWidth
                }

                //当元素超过纵向边界时，重新赋值操作
                if (elemTop <= 0) {
                    elemTop = 0
                } else if (elemTop >= wHeight - elemHeight) {
                    elemTop = wHeight - elemHeight

                }

                //让元素跟随拖拽位置
                _self.style.left = elemLeft + 'px';
                _self.style.top = elemTop + 'px'

            }

            //鼠标释放取消监听鼠标移动事件函数
            function mouseUp(e) {
                var e = e || window.event;
                endTime = new Date().getTime();

                //若mousedown和mouseup时间间隔小于200 则默认为奠基事件，反之为拖拽事件
                if (endTime - beginTime < 200) {
                    elemClick();
                    _self.style.left = initPos[0];
                    _self.style.top = initPos[1];
                }

                removeEvent(document, 'mouseup', mouseUp);
                removeEvent(document, 'mousemove', mouseMove);

            }
        }
    })


    oLink.dragNClick(function () {
        window.open('http://google.com')
    })
}