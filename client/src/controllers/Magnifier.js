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
            //获取MagWrap的偏移量
            oMagWrapX = oMagWrap.offsetLeft,
            oMagWrapY = oMagWrap.offsetLeft,

            //获取MagWrap的宽高
            MagWidth = getStyles(oMagWrap, 'width'),
            MagHeight = getStyles(oMagWrap, 'height'),
            imgX = oImgWrap.offsetLeft,
            imgY = oImgWrap.offsetTop;

        //增加
        addEvent(oImgWrap, 'mouseover', function (e) {
            var e = e || window.event;


            console.log(mouseX, pagePos(e).X);


            oMagWrap.style.left = x + 'px';
            oMagWrap.style.top = y + 'px';
            oMagImg.style.left = -x + 'px';
            oMagImg.style.top = -y + 'px';
            oMagWrap.className += ' show';

            if (mouseX && mouseY) {
                if (mouseX < 0 || mouseX > getStyles(oImgWrap, 'width') || mouseY < 0 || mouseY > getStyles(oImgWrap, 'height')) {
                    oMagWrap.className = "mag-wrap"
                }
            }



            addEvent(document, 'mousemove', mouseMove);


        })

        addEvent(oImgWrap, 'mouseout', mouseOut)

        function getXY(e) {

            var e = e || window.event;

            return {
                x: pagePos(e).X - imgX - MagWidth / 2,
                y: pagePos(e).Y - imgY - MagHeight / 2,
                mouseX: pagePos(e).X - imgX,
                mouseY: pagePos(e).Y - imgY,

            }
        }

        function mouseMove(params) {

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



