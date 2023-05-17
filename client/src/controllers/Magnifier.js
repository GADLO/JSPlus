import Magnifier from '../views/Magnifier'
import { addEvent, pagePos, removeEvent } from '../utils/event';
import { getStyles } from '../utils/styleMethods'

export async function MagnifierView() {
    return Magnifier();
}

export async function magnifierScript() {



    /**
     * *放大镜原理：放大镜原理使用的是元素跟随鼠标移动技术和CSS3的遮罩、transform技术，当激活放大镜原理
     * *使用到的web技术：DOM（mousemove、mouseenter、mouseout），CSS（transform：scale（））、
     * 
    */

    function init() {
        initMagnifier();
    }

    var initMagnifier = (function () {
        //获取需要进行DOM操作的元素
        var oImgWrap = document.getElementsByClassName('img-wrap')[0],
            oMagWrap = document.getElementsByClassName('mag-wrap')[0],
            oMagImg = document.getElementsByClassName('mag-img')[0],

            //获取MagWrap容器相对于offsetParent左偏移值和顶部偏移值
            oMagWrapX = oMagWrap.offsetLeft,
            oMagWrapY = oMagWrap.offsetLeft,

            //获取MagWrap的宽高
            MagWidth = getStyles(oMagWrap, 'width'),
            MagHeight = getStyles(oMagWrap, 'height'),

            //取oImgWrap容器相对于offsetParent左偏移值和顶部偏移值
            imgX = oImgWrap.offsetLeft,
            imgY = oImgWrap.offsetTop;

        //oImgWrap增加mouseover事件监听
        addEvent(oImgWrap, 'mouseover', function (e) {
            var e = e || window.event;

            //
            showMag(getXY().x, getXY().y);

            //放大镜容器添加显示的类样式名
            oMagWrap.className += ' show';

            //document增加mousemove事件监听，实时获取鼠标位置
            addEvent(document, 'mousemove', mouseMove);
        })

        //oImgWrap增加mouseout事件监听
        addEvent(oImgWrap, 'mouseout', mouseOut)

        //计算当前oMagWrap位置
        function getXY(e) {
            var e = e || window.event;

            return {
                //计算出当前oMagWrap位置，oMagWrap中心点就是当前鼠标在oImgWrap内的位置
                x: pagePos(e).X - imgX - MagWidth / 2,
                y: pagePos(e).Y - imgY - MagHeight / 2,

                //计算当前鼠标位置距离oImgWrap左边框和顶部边框的距离
                mouseX: pagePos(e).X - imgX,
                mouseY: pagePos(e).Y - imgY,
            }
        }

        //抽象封装放大镜显示坐标
        function showMag(x, y, mouseX, mouseY) {
            //oMagWrap赋值当前计算值，让其跟随鼠标移动
            oMagWrap.style.left = x + 'px';
            oMagWrap.style.top = y + 'px';

            //oMagImg赋值当前计算值负值，让内容显示跟随鼠标移动
            oMagImg.style.left = -x + 'px';
            oMagImg.style.top = -y + 'px';



            //若当前鼠标位置距离oImgWrap左边框和顶部边框的距离同时存在
            if (mouseX && mouseY) {
                //判断当前鼠标是否在oImgWrap容器内，若不在将oMagWrap重置默认状态
                if (mouseX < 0 || mouseX > getStyles(oImgWrap, 'width') || mouseY < 0 || mouseY > getStyles(oImgWrap, 'height')) {
                    oMagWrap.className = "mag-wrap"
                }
            }
        }

        //mousemove触发函数，设置放大镜位置以及显示放大镜
        function mouseMove(e) {
            var e = e || window.event;
            // console.log(mouseX, pagePos(e).X);
            showMag(getXY().x, getXY().y, getXY().mouseX, getXY().mouseY);
        }

        function mouseOut(params) {

            //鼠标离开图片区域时，恢复默认样式
            oMagWrap.className = 'mag-wrap';

            //鼠标离开图片区域时，移除mousemove事件监听事件
            removeEvent(document, 'mousemove', mouseMove)
        }
    });

    init()
}



