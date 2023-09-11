

// *beginPath()开启一个新的绘制路径
/**
 * ctx.lineCap = 'round'     //定义线段两端样式，有默认值butt，round，square三种类型，round和square会在线段原来的长度上在两端再增加当前线段的宽度值的一半
 * ctx.beginPath()           //新建一个路径绘制
 * ctx.strokeStyle = 'red'； //定义线段颜色
 * ctx.lineWidth = 40；      //定义线段宽度，默认1.0（0，负数，infinity，null都会使用默认值）
 * ctx.moveTo(100, 100)；    //定义起始点坐标
 * ctx.lineTo(500,500)；     //定义终点坐标
 * ctx.stroke()              //开始绘制
*/

export function drawLine({
    ctx,
    beginPath,    //string
    width,        //number
    color,        //string
    cap,          //string
    moveTo,       //[]
    lineTo,       //[]
}) {
    const lineCap = ['butt', 'square', 'round'];

    beginPath = beginPath === undefined ? !beginPath : beginPath();
    beginPath ? ctx.beginPath() : ''
    width && (ctx.lineWidth = width);
    color && (ctx.strokeStyle = color);
    lineCap.includes(cap) && (ctx.lineCap = cap);
    Array.isArray(moveTo) && moveTo.length === 2 && (ctx.moveTo(...moveTo));
    Array.isArray(lineTo) && lineTo.length === 2 && (ctx.lineTo(...lineTo));
    if (lineTo) {
        ctx.stroke();
    }
}




