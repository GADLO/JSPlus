import { addEvent } from '../utils/event.js';
import $$ from '../utils/AJAX.js'
import ajaxDomain from '../utils/ajaxDomain.js'
import AJAX from '../views/AJAX.js'

export async function AJAXView() {
    return AJAX();
}

export async function AJAXScript() {
    window.name = '123'
    var iframe = document.createElement('iframe');
    iframe.src = 'http://127.0.0.1:5173/#/http';
    iframe.onload = function () {
        console.log(iframe.contentWindow.name);
    }
    document.body.appendChild(iframe);

    console.log(iframe.contentWindow.name);


    ajaxDomain({
        basicDomain: 'jsplusplus.com',
        frameUrl: 'http://test.jsplusplus.com/index.html',
        url: 'http://test.jsplusplus.com/get_courses1.php',
        type: 'POST',
        frameId: 'iframe',
        data: {
            status: 1
        },
        success: function (data) {
            console.log(data);
        },
        error: function () {
            console.log(0);
        }
    })
}

/**
 * 
*/