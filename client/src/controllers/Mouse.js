import Mouse from '../views/Mouse'
import { getScrollOffset } from '../utils/event';

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
    //offsetX/Y  鼠标位置相对于块元素的坐标
    document.onclick = function (e) {
        var e = e || window.event;

        console.log('client', e.clientX, e.clientY,);
        console.log('layer', e.layerX, e.layerY);
        console.log('x/y', e.x, e.y);
        console.log('page', e.pageX, e.pageY);
        console.log('screen', e.screenX, e.screenY);
        console.log('offset', e.offsetX, e.offsetY);
    }

    function pagePos(e) {
        //获取滚动条位置
        var sLeft = getScrollOffset().left,
            sTop = getScrollOffset().top,
            cLeft = document.documentElement.clientLeft,
            cTop = document.documentElement.clientTop;
    }
}