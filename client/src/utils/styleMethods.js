//获取样式属性兼容性写法
export function getStyles(elem, prop) {
    if (window.getComputedStyle) {
        if (prop) {
            return parseInt(window.getComputedStyle(elem, null).getPropertyValue(prop));
        } else {
            return window.getComputedStyle(elem, null);
        }
    } else {
        if (prop) {
            return parseInt(elem.currentStyle[prop]);
        } else {
            return elem.currentStyle;
        }
    }
}