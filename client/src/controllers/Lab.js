import Lab from '../views/Lab'
import { addEvent } from '../utils/event'

export async function LabView() {
    return Lab()
}

export async function labScript() {
    let container = document.getElementsByClassName('lab-container')[0],
        frag = document.createDocumentFragment();


    let labProj = [
        {
            name: '鼠标事件',
            url: 'mouse',
            dsc: 'description',
            imgUrl: './'
        },
        {
            name: '搜索框',
            url: 'search',
            dsc: 'description',
            imgUrl: './'
        },
        {
            name: 'MouseOver Card',
            url: 'mouseover',
            dsc: 'description',
            imgUrl: './'
        },
        {
            name: '鼠标预测行为',
            url: 'forcastmouse',
            dsc: 'description',
            imgUrl: './'
        },
        {
            name: '放大镜',
            url: 'mag',
            dsc: 'description',
            imgUrl: './'
        },
        {
            name: '键盘事件',
            url: 'keyboard',
            dsc: 'description',
            imgUrl: './'
        },
        {
            name: 'ICON',
            url: 'icon',
            dsc: 'description',
            imgUrl: './'
        },
        {
            name: 'CSSWORLD',
            url: 'cssworld',
            dsc: 'description',
            imgUrl: './'
        },
        {
            name: 'HTTP',
            url: 'http',
            dsc: 'description',
            imgUrl: './'
        },
        {
            name: 'AJAX',
            url: 'ajax',
            dsc: 'description',
            imgUrl: './'
        },
        {
            name: 'Iframe',
            url: 'iframe',
            dsc: 'description',
            imgUrl: './'
        },
        {
            name: 'Canvas',
            url: 'canvas',
            dsc: 'description',
            imgUrl: './'
        },
        {
            name: 'JianYi',
            url: 'jianyi',
            dsc: 'description',
            imgUrl: './'
        },
    ]
    for (let i = 0; i < labProj.length; i++) {
        let curProj = document.createElement('div'),
            projTitle = document.createElement('p'),
            projImg = document.createElement('div'),
            projDsc = document.createElement('p');


        projTitle.innerText = labProj[i].name;
        curProj._url = labProj[i].url;
        projDsc.innerText = labProj[i].dsc

        projTitle.setAttribute("class", 'proj-title');
        projImg.setAttribute("class", 'proj-img');
        projDsc.setAttribute('class', 'proj-dsc');

        curProj.appendChild(projTitle);
        curProj.appendChild(projImg);
        curProj.appendChild(projDsc);
        curProj.setAttribute("class", "lab-proj");
        addEvent(curProj, 'click', toProj);
        frag.appendChild(curProj);
    }

    function toProj() {
        console.log(this._url);
        window.location = '#/' + this._url
    }

    container.appendChild(frag)
}