/***
 *    __/\\\\\\\\\\\\___________/\\\\\________/\\\\____________/\\\\_
 *     _\/\\\////////\\\_______/\\\///\\\_____\/\\\\\\________/\\\\\\_
 *      _\/\\\______\//\\\____/\\\/__\///\\\___\/\\\//\\\____/\\\//\\\_
 *       _\/\\\_______\/\\\___/\\\______\//\\\__\/\\\\///\\\/\\\/_\/\\\_
 *        _\/\\\_______\/\\\__\/\\\_______\/\\\__\/\\\__\///\\\/___\/\\\_
 *         _\/\\\_______\/\\\__\//\\\______/\\\___\/\\\____\///_____\/\\\_
 *          _\/\\\_______/\\\____\///\\\__/\\\_____\/\\\_____________\/\\\_
 *           _\/\\\\\\\\\\\\/_______\///\\\\\/______\/\\\_____________\/\\\_
 *            _\////////////___________\/////________\///______________\///__
 */
//封装childNodes方法，实现Children的效果
function elemChildren(node) {
    var temp = {
        length: 0,
        push: Array.prototype.push,
        slice: Array.prototype.slice,
    },
        children = node.childNodes;

    for (let i = 0; i < children.length; i++) {
        var childItem = children[i];
        if (childItem.nodeType == 1) {
            temp.push(childItem);
        }
    }
    return temp;
}

//遍历传入的父元素，找到它的子元素节点，如果传递数字参数的话，返回对应的子元素，没有参数的话，返回子元素节点的集合。
Element.prototype.checkChildren = function (number) {
    var nodeLen = this.childNodes.length,
        nodeObj = {
            length: 0,
            splice: Array.prototype.slice,
            push: Array.prototype.push,
        };
    if (number !== undefined && typeof number !== "number") {
        return undefined;
    }

    return number === undefined
        ? filterChildrenNode(this)
        : filterChildrenNode(this)[number];

    //过滤子节点元素
    function filterChildrenNode(node) {
        for (var i = 0; i < nodeLen; i++) {
            var nodeItem = node.childNodes[i];
            if (nodeItem.nodeType === 1) {
                nodeObj[nodeObj["length"]] = nodeItem;
                nodeObj["length"]++;
            }
        }
        return nodeObj;
    }
};

//在原型上编程，找出一个元素的第N层父级元素。
Element.prototype.checkParent = function (num) {
    var elem = this;
    if (typeof num !== "number" || num <= 0 || num === undefined) {
        return "参数非数字或小于0";
    }

    while (num) {
        if (elem.nodeName === "HTML") {
            elem = null;
            return elem;
        }
        elem = elem.parentNode;
        num--;
    }
    return elem;
};

//在原型上编程，寻找兄弟节点，+找之后，-找之前，0找自己
Element.prototype.elemSibling = function (n) {
    var elem = this;

    while (n) {
        if (n > 0) {
            for (
                elem = elem.previousSibling;
                elem && elem.nodeType !== 1;
                elem = elem.previousSibling
            );
            n--;
        } else if (n < 0) {
            for (
                elem = elem.nextSibling;
                elem && elem.nodeType !== 1;
                elem = elem.nextSibling
            );
            n++;
        }
    }

    return elem;
};

