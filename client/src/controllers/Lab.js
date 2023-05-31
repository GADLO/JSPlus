import Lab from '../views/Lab'
import { addEvent } from '../utils/event'

export async function LabView() {
    return Lab()
}

export async function labScript() {
    let container = document.getElementsByClassName('lab-container')[0]

    let labProj = [
        {
            name: '鼠标事件',
            url: 'mouse'
        },
        {
            name: '搜索框',
            url: 'search'
        },
        {
            name: 'MouseOver Card',
            url: 'mouseover'
        },
        {
            name: '鼠标预测行为',
            url: 'forcastmouse'
        },
        {
            name: '放大镜',
            url: 'mag'
        },
        {
            name: '键盘事件',
            url: 'keyboard'
        },
        {
            name: 'ICON',
            url: 'icon'
        },
        {
            name: 'CSSWORLD',
            url: 'cssworld'
        }
    ]
    for (let i = 0; i < labProj.length; i++) {
        let curProj = document.createElement('div')
        curProj.innerText = labProj[i].name
        curProj._url = labProj[i].url
        curProj.setAttribute("class", "lab-proj");
        addEvent(curProj, 'click', toProj)
        container.appendChild(curProj)
    }

    function toProj() {
        console.log(this._url);
        window.location = '#/' + this._url
    }
}