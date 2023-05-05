import Mouse from '../views/Mouse'
import { getScrollOffset } from '../utils/event';
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



    function pagePos(e) {
        //获取滚动条位置
        var sLeft = getScrollOffset().left,
            sTop = getScrollOffset().top,

            //获取文档偏移距离，有可能不存在
            cLeft = document.documentElement.clientLeft || 0,
            cTop = document.documentElement.clientTop || 0;

        return {
            X: e.clientX + sLeft + cLeft,
            Y: e.clientY + sTop + cTop
        }
    }
}