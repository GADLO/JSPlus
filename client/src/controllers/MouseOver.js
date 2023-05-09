import MouseOver from '../views/MouseOver'
import { addEvent } from '../utils/event';

export async function MouseOverView() {
    // const todolist = await TodoService.getTodoList()
    return MouseOver()
}
export async function mouseOverScript() {
    console.log('mouse move');

    // *mouseover mouseout mouseenter事件

    ; (function (doc) {
        var oList = doc.getElementsByClassName('list')[0],
            oItems = doc.getElementsByClassName('list-item'),
            curIdx = 0;

        var init = function () {
            bindEvent();
        }

        function bindEvent() {
            addEvent(doc, 'mouseover', slide)
            addEvent(doc, 'mouseout', slide)
        }

        function slide(ev) {
            var e = ev || window.event,
                tar = e.target || e.srcElement,
                oParent = getParent(tar, 'li'),
                thisIdx = Array.prototype.indexOf.call(oItems, oParent);

            if (curIdx !== thisIdx) {
                oItems[curIdx].className = 'list-item';
                curIdx = thisIdx;
                oItems[curIdx].className += ' active';
            }

            //寻找父元素,传入当前元素以及想要寻找的父元素
            function getParent(target, element) {
                console.log(target?.tagName);
                while (target?.tagName.toLowerCase() !== element) {
                    target = target?.parentNode;
                }

                //当元素等于要寻找的父元素时，返回
                return target;
            }


        }
        init();
    })(document);







}
