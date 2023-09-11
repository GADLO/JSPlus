
import { addEvent, removeEvent } from '../utils/event';
import CanvasBasic from '../views/Canvas/CanvasBasics'

import { drawLine } from './Canvas/Line';


export async function CanvasBasicView() {
    return CanvasBasic();
}

export async function CanvasBasicScript() {
    //获取HTML里面的canvas标签
    const can = document.getElementById('canvasbasic'),
        btn = document.getElementById('btn');


    //获取canvas二维渲染的上下文
    const ctx = can.getContext('2d');

    //获取当前页面窗口宽高
    const clientWidth = document.documentElement.clientWidth,
        clientHeight = document.documentElement.clientHeight - 10;

    //不是给canvas标签增加样式，是给canvas画布添加样式
    can.height = clientHeight;
    can.width = clientWidth;




    drawLine({
        ctx,
        width: 1,
        color: 'gray',

        moveTo: [100, 80],
        lineTo: [100, 500]
    })

    drawLine({
        ctx,
        width: 1,
        color: 'gray',
        moveTo: [800, 80],
        lineTo: [800, 500]
    })

    drawLine({
        ctx,
        width: 30,
        color: 'red',

        moveTo: [100, 100],
        lineTo: [800, 100]
    })

    drawLine({
        ctx,
        width: 30,
        color: 'green',
        cap: 'square',
        moveTo: [100, 200],
        lineTo: [800, 200],
    })

    drawLine({
        ctx,
        width: 30,
        color: 'blue',
        cap: 'round',
        moveTo: [100, 300],
        lineTo: [800, 300]
    })






    /**
     * stroke是描边
     * fill是填充
    */

    //设置描边颜色
    ctx.strokeStyle = 'green'

    // 设置填充颜色
    ctx.fillStyle = 'red'


    /**
     * *绘制矩形
     * *默认颜色#000
     * 
     * *参数列表
     * *1.x横坐标
     * *2.y纵坐标
     * *3.width矩形宽度
     * *4.height矩形高度
    */
    //绘制描边矩形
    // ctx.strokeRect(10, 10, 100, 100)

    //绘制填充矩形
    // ctx.fillRect(200, 200, 100, 100)




    //清除画布颜色
    //通过设置画布区域内的像素点为透明达到清除画布的目的
    /**
     * *参数列表
     * *1.x横坐标
     * *2.y纵坐标
     * *3.width清除矩形宽度
     * *4.height清除矩形高度
    */
    //自定义清除画布范围函数
    function clearCanvas(x, y, w, h) {
        ctx.clearRect(x, y, w, h)
        // ctx.clearRect(0, 0, clientWidth, clientHeight)
    }

    //矩形类型
    let type = 'stroke'

    //记录当前矩形参数
    let rectInfo = null;

    //矩形历史数据容器
    const rectRecord = [];


    const init = () => {
        bindEvent()
    }






    addEvent(btn, 'click', (e) => { clearCanvas(0, 0, clientWidth, clientHeight) })

    //DOM事件绑定模块封装
    function bindEvent() {
        //添加鼠标点击事件监听
        addEvent(can, 'mousedown', handleCanMouseDown)
    }


    function handleCanMouseDown(e) {
        //装入初始鼠标坐标数据
        rectInfo = [e.clientX, e.clientY]

        //添加鼠标移动事件监听
        addEvent(can, 'mousemove', handleCanMouseMove)

        //添加鼠标抬起事件监听
        addEvent(can, 'mouseup', handleCanMouseUp)
    }

    function handleCanMouseMove(e) {
        createRect(rectInfo[0], rectInfo[1], e.clientX, e.clientY)
    }

    function handleCanMouseUp(e) {
        saveRect()
        removeEvent(can, 'mousemove', handleCanMouseMove);
        removeEvent(can, 'mouseup', handleCanMouseUp)
    }



    function createRect(x1, y1, x2, y2) {

        const w = Math.abs(x2 - x1);
        const h = Math.abs(y2 - y1);

        rectInfo = [x1, y1, w, h]

        clearCanvas(0, 0, clientWidth, clientHeight)


        drawRectRecord(type)
        drawRect(...rectInfo);
    }

    function drawRect(x, y, w, h) {

        type === 'stroke' ?
            ctx.strokeRect(x, y, w, h) :
            ctx.fillRect(x, y, w, h);
    }

    function drawRectRecord(type) {


        rectRecord.forEach(([x, y, w, h]) => drawRect(x, y, w, h))


    }

    function saveRect() {
        rectRecord.push(rectInfo)
    }

    init()

}