import { addEvent } from '../utils/event';
import Icon from '../views/Icon'

export async function IconView() {
    return Icon();
}

export async function IconScript() {
    var iconWrap = document.getElementsByClassName('icon-wrap')[0],
        iconArr = ['icon-arrow-up', 'icon-arrow-right', 'icon-arrow-down', 'icon-arrow-left', 'icon-upward', 'icon-forward', 'icon-downward', 'icon-back', 'icon-caret', 'icon-menu',],
        sinWrap,
        cssIcon,
        oFrag = document.createDocumentFragment();



    for (var i = 0; i < iconArr.length; i++) {
        sinWrap = document.createElement('span');
        cssIcon = document.createElement('css-icon');

        sinWrap.className = 'icon-wrap-single';
        cssIcon.className = iconArr[i];

        console.log(iconArr[i]);
        sinWrap.appendChild(cssIcon);
        oFrag.appendChild(sinWrap);

    }

    iconWrap.appendChild(oFrag)

    addEvent(sinWrap, 'click', function () {
        sinWrap.className = icon - wrap - single
    })
}