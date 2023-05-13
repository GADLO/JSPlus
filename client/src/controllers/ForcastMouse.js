import ForcastMouse from '../views/ForcastMouse'
import { addEvent, removeEvent, pagePos } from '../utils/event'
import { getStyles } from '../utils/styleMethods'
import { pointInTriangle } from '../utils/triangle'

export async function ForcastMouseView() {
    return ForcastMouse()
}

export async function forcastMouseScript() {

    /**
     * ?鼠标行为预测技术
     * *取四个点，P，A，B，C
     * *P点为鼠标在菜单中移动的点，A点为鼠标首次进入菜单的位置，B点为菜单右上角的点，C点为菜单右下角的点
     * *ABC三点形成一个三角形，当P点在三角形里面是，需要对鼠标事件做延迟处理（这个步骤预测用户鼠标行为走向子菜单）
     * *
    */

    function init() {
        initMenu();
    }

    var initMenu = (function () {
        var oMenu = document.getElementsByClassName('menu-wrap')[0],
            oSub = document.getElementsByClassName('sub')[0],
            oMenuItems = document.getElementsByClassName('main-item'),
            oSubItems = document.getElementsByClassName('sub-item'),
            menuLen = oMenuItems.length,
            subLen = oSubItems.length,
            subItem,
            menuItem,
            isInSub = false,
            t = null,
            isFirst = false,
            mousePoses = [];

        //使用循环绑定单个菜单项鼠标移入事件，绑定鼠标移入菜单后触发相应事件入口
        for (let i = 0; i < menuLen; i++) {
            menuItem = oMenuItems[i];
            addEvent(menuItem, 'mouseenter', menuItemMouseEnter)
        }

        //鼠标移入菜单事件绑定，在document层绑定鼠标移动事件
        addEvent(oMenu, 'mouseenter', function () {
            addEvent(document, 'mousemove', mouseMove)
        })

        //鼠标移出菜单事件绑定
        addEvent(oMenu, 'mouseleave', function () {

        })

        //子菜单鼠标移入事件绑定，作标记进入子菜单为true
        addEvent(oSub, 'mouseenter', function () {
            isInSub = true;
        })

        //子菜单鼠标移出事件绑定，作标记进入子菜单为false
        addEvent(oSub, 'mouseleave', function () {
            isInSub = false;
        })

        //鼠标移入单个菜单项触发函数
        function menuItemMouseEnter(e) {
            var e = e || window.event,                                          //事件兼容性
                tar = e.target || e.srcElement,                                 //获取事件源目标元素
                thisIdx = Array.prototype.indexOf.call(oMenuItems, tar),        //使用call获取事件源对象tar在oMenuItems中的索引
                lastPos = mousePoses[mousePoses.length - 2] || { x: 0, y: 0 },  //获取鼠标进入菜单的首个位置
                curPos = mousePoses[mousePoses.length - 1] || { x: 0, y: 0 },   //获取鼠标进入菜单的第三个位置
                toDelay = doTimeout(lastPos, curPos);                           //获取是否延迟激活菜单子项的判断值

            oSub.className = 'sub';

            //清除延时器
            if (t) {
                clearTimeout(t);
            }

            //第一次进入菜单不触发延迟
            if (!isFirst) {
                //延迟触发父菜单事件
                if (toDelay) {
                    t = setTimeout(function () {
                        if (isInSub) {
                            return
                        }
                        addActive(thisIdx);
                    }, 300)
                } else {
                    addActive(thisIdx)
                }
            } else {
                addActive(thisIdx);
                isFirst = false;
            }


        }

        //添加激活样式类函数
        function addActive(index) {
            removeAllActive()
            //给当前目标对象赋予激活的样式类
            oMenuItems[index].className += ' active';
            oSubItems[index].className += ' active';

        }

        //恢复默认样式类函数
        function removeAllActive() {


            for (let i = 0; i < menuLen; i++) {
                menuItem = oMenuItems[i];
                //重新给className赋值，清除之前的active类
                menuItem.className = 'main-item';
            }
            for (let i = 0; i < subLen; i++) {
                subItem = oSubItems[i];
                //重新给className赋值，清除之前的active类
                subItem.className = 'sub-item';
            }
        }

        //鼠标移动事件触发函数
        function mouseMove(e) {
            var e = e || window.event;             //事件兼容性

            //收集鼠标相对于浏览器视窗坐标集合
            mousePoses.push(
                {
                    x: pagePos(e).X,
                    y: pagePos(e).Y
                }
            )

            //只收集前三个坐标
            if (mousePoses.length > 3) {
                mousePoses.shift();
            }


        }

        //鼠标移出事件触发函数
        function mouseOut() {
            oSub.className += ' hide';
            removeAllActive();
            removeEvent(document, 'mousemove', mouseMove);
        }


        //执行延时操作与否的判断方法，即判断当前鼠标位置是否在三角形之内
        function doTimeout(lastPos, curPos) {
            var topLeft = {
                x: getStyles(oMenu, 'width') + getStyles(oMenu, 'margin-left'),
                y: getStyles(oMenu, 'margin-top')
            };

            var bottomLeft = {
                x: getStyles(oMenu, 'width') + getStyles(oMenu, 'margin-left'),
                y: getStyles(oMenu, 'margin-top') + getStyles(oSub, 'height')
            }

            // console.log(pointInTriangle(curPos, lastPos, topLeft, bottomLeft));
            return pointInTriangle(curPos, lastPos, topLeft, bottomLeft)
        }
    });

    init()
}