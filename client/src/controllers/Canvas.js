import { addEvent, removeEvent } from '../utils/event';
import Canvas from '../views/Canvas/Canvas'

export async function CanvasView() {
    return Canvas();
}

export async function CanvasScript() {
    const $ = function (str) { return document.getElementById(str) }

    const canvas = $('canvas'),
        colorSelect = $('colorInput'),
        clear = $('clearAllBtn'),
        lineWidthVal = $('lineWidthValue'),
        lineWidthRange = $('lineWidthRange'),
        eraser = $('eraserBtn'),
        eraserCircle = $('eraserCircle'),
        eraserWidthVal = $('eraserLineWidthValue'),
        eraserWidthRange = $('eraserLineWidthRange')


    const ctx = canvas.getContext('2d'),
        clientWidth = document.documentElement.clientWidth,
        clientHeight = document.documentElement.clientHeight;

    //不是给canvas标签增加样式，是给canvas画布添加样式
    canvas.height = clientHeight;
    canvas.width = clientWidth;

    //存储状态容器
    const state = {
        initPos: null,
        eraserStatus: false,
    }



    ctx.setColor = function (color) {
        this.fillStyle = color;
        this.strokeStyle = color;
    }

    ctx.setLineStyle = function (style) {
        this.lineStyle = style;
    }

    ctx.setLineWidth = function (width) {
        this.lineWidth = width;
    }


    eraserCircle.setVisible = function (visible) {
        this.style.display = visible ? 'block' : 'none';
    }

    eraserCircle.setSize = function (size) {
        this.style.width = size + 'px';
        this.style.height = size + 'px';
    }

    eraserCircle.setPosition = function (x, y) {
        this.style.left = x - this.offsetWidth / 2 + 'px';
        this.style.top = y - this.offsetHeight / 2 + 'px';
    }


    const CANVAS_VALUES = {
        DEFAULT_COLOR: '#ccc',
        DEFAULT_LINESTYLE: 'round',
        DEFAULT_LINEWIDTH: 10,
        ERASER_COLOR: '#fff'
    }
    function initStyle() {
        ctx.setColor(CANVAS_VALUES.DEFAULT_COLOR);
        ctx.setLineStyle(CANVAS_VALUES.DEFAULT_LINESTYLE);
        ctx.setLineWidth(CANVAS_VALUES.DEFAULT_LINEWIDTH)
    }

    function bindEvent() {

        addEvent(canvas, 'mousedown', handleCanvasMouseDown); //监听鼠标点击行为

        addEvent(colorSelect, 'click', handleColorInput);    //监听颜色选择器点击事件

        addEvent(colorSelect, 'input', handleColorInput);    //监听颜色选择器颜色输入

        addEvent(clear, 'click', handleClearAllBtn)          //监听清除按钮

        addEvent(eraser, 'click', handleEraserBtn)             //监听橡皮擦按钮

        addEvent(lineWidthRange, 'input', handleLineWidthInput)     //监听线条宽度输入

        addEvent(eraserWidthRange, 'input', handleEraserWidthInput)   //监听橡皮擦宽度按钮


    }
    function initStyle() {
        ctx.setColor(CANVAS_VALUES.DEFAULT_COLOR);
        ctx.setLineStyle(CANVAS_VALUES.DEFAULT_LINESTYLE);
        ctx.setLineWidth(CANVAS_VALUES.DEFAULT_LINEWIDTH)
    }



    const init = () => {
        initStyle()
        bindEvent()
    }



    function textFill(text, x, y) {
        ctx.font = "bold 48px Chalkduster";
        ctx.fillText(text, x, y);
    }


    //鼠标移动触发函数
    function handleCanvasMouseMove(e) {
        const x2 = e.clientX,
            y2 = e.clientY;
        drawLine({ ...state.initPos, x2, y2 })
        state.eraserStatus && eraserCircle.setPosition(x2, y2);
        state.initPos = { x1: x2, y1: y2 };
    }

    //鼠标按下触发函数
    function handleCanvasMouseDown(e) {

        const x1 = e.clientX,
            y1 = e.clientY;

        state.initPos = { x1, y1 };
        drawPoint(x1, y1);
        addEvent(canvas, 'mousemove', handleCanvasMouseMove);
        addEvent(canvas, 'mouseup', handleCanvasMouseUp)

        if (state.eraserStatus) {
            eraserCircle.setVisible(true);
            eraserCircle.setPosition(x1, y1);
            addEvent(eraserCircle, 'mouseup', handleEraserCircleMouseUp)
        }
    }

    //鼠标释放触发函数
    function handleCanvasMouseUp(e) {
        removeEvent(canvas, 'mousemove', handleCanvasMouseMove)
        removeEvent(canvas, 'mouseup', handleCanvasMouseUp)
    }

    //颜色选择器赋值函数
    function handleColorInput(e) {
        const color = this.value;

        ctx.setColor(color);

    }

    // 清除画布元素函数
    function handleClearAllBtn() {
        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
        ctx.setColor('#ccc');
        textFill('Drawing Board', 50, 50)
    }


    function handleEraserBtn() {
        const widthVal = eraserWidthRange.value;
        state.eraserStatus = true;
        ctx.setColor(CANVAS_VALUES.ERASER_COLOR);
        ctx.setLineWidth(widthVal);
        eraserCircle.setSize(widthVal)
    }
    function handleEraserCircleMouseUp() {
        eraserCircle.setVisible(false);
        eraserCircle.removeEventListener('mouseup', handleEraserCircleMouseUp, false);
        // removeEvent(eraserCircle, 'mouseup', handleEraserCircleMouseUp);
        handleCanvasMouseUp();
    }


    function handleEraserWidthInput() {
        const width = this.value;
        console.log(eraserWidthVal);
        eraserWidthVal.textContent = width;
        eraserCircle.setSize(width);
        state.eraserStatus && ctx.setLineWidth(width);
    }

    function handleLineWidthInput(e) {
        const width = this.value;
        lineWidthVal.textContent = this.value;
        ctx.setLineWidth(this.value)

    }





    //canvas画点封装
    function drawPoint(x, y) {
        ctx.beginPath();
        //画圆
        ctx.arc(x, y, ctx.lineWidth / 2, 0, 2 * Math.PI, false);
        ctx.fill()
    }

    //canvas划线封装
    function drawLine({ x1, y1, x2, y2 }) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }


    function first() {
        //确定线条样式：strokeStyle
        //确定填充颜色：fillStyle
        ctx.fillStyle = 'green';
        ctx.strokeStyle = 'red'

        //交叉头样式
        ctx.lineJoin = 'round';


        //线段宽度
        ctx.lineWidth = 2;

        //开始画东西=>开启绘制路径
        ctx.beginPath();

        //确定起始位置
        ctx.moveTo(100, 100);

        //确定终点
        ctx.lineTo(300, 300)
        ctx.lineTo(900, 400)
        ctx.lineTo(500, 500)

        //绘制线条
        ctx.stroke();

        //填充颜色
        ctx.fill();
    }

    function sec() {
        ctx.fillStyle = '#000';
        ctx.strokeStyle = '#000'

        ctx.lineCap = 'round'

        //线段宽度
        ctx.lineWidth = 2;
    }

    sec()
    init()
    textFill('Drawing Board', 50, 50)


}
