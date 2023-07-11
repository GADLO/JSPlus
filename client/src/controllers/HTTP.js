import { addEvent } from '../utils/event';
import HTTP from '../views/HTTP'
import $$ from '../utils/AJAX.js'

export async function HTTPView() {
    return HTTP();
}

export async function HTTPScript() {




    let ajaxReq = document.getElementsByClassName('http-item')[2],
        username = document.getElementById('username'),
        password = document.getElementById('password'),
        oBtn = document.getElementById('submit');


    addEvent(oBtn, 'click', submitForm);


    function submitForm() {
        const ajax = new XMLHttpRequest();
        ajax.open("GET", "http://www.example.org/some", true);
        ajax.send();
    }
}

//报文传输过程中是有基本格式的
/**
 * HTTP请求分为起始行（start-line）、标头（Header）、主体（Body）
 * 起始行（start-line）包含三个元素：一个HTTP方法（GET、POST等），请求目标（通常是一个 URL，或者是协议、端口和域名的绝对路径，通常以请求的环境为特征），HTTP版本
 * 起始行（start-line）例子：GET http://developer.mozilla.org/en-US/docs/Web/HTTP/Messages HTTP/1.1
 * 
 * 
 * 
 * 
 * 
*/

/**
*/

/**从有浏览器开始，http就有演变的过程
 * 最初，一个TCP连接只能处理一个请求，每一个HTTP请求都要创建一个连接，这叫串行连接
 * HTTP1.0,HTTP1.1开始有持久化连接（keep-alive），一次连接，多次请求
 * HTTP1.1开始管道化连接，允许在不需要等待响应的情况下发送多个HTTP请求
*/