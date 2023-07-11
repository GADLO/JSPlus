import { addEvent } from '../utils/event.js';
import $$ from '../utils/AJAX.js'
import ajaxDomain from '../utils/ajaxDomain.js'
import AJAX from '../views/AJAX.js'

export async function AJAXView() {
    return AJAX();
}

export async function AJAXScript() {
    var jsonp = document.getElementById('JSONP'),
        oScript;

    addEvent(jsonp, 'click', function () {
        oScript = document.createElement('script');
        oScript.src = 'https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=36542,38643,38831,39027,39022,38943,38882,38907,38956,39009,39015,39039,38920,38973,38803,38780,38638,26350,38949,38683&wd=jquery&req=2&bs=jquery&pbs=jquery&csor=6&pwd=jquery&sugmode=2&hot_launch=0&cb=jQuery1102047008614309292374_1689057865488&_=1689057865505';
        document.body.appendChild(oScript);
        document.body.removeChild(oScript);
    })

    function jQuery1102047008614309292374_1689057865488(data) {
        console.log(data);
    }
}


/**
 * 
*/