import Keyboard from '../views/Keyboard'
import { addEvent } from '../utils/event';
import { getStyles } from '../utils/styleMethods';

export async function KeyboardView() {
    return Keyboard();
}

export async function keyboardScript() {
    function intro() {//keydown无charCode,所有按键都能触发，keydown需求会更大
        document.onkeydown = function () {
            console.log('keydown');
        }

        //
        document.onkeyup = function () {
            console.log('keyup');
        }

        //keypress更大作用是区分大小写，只有ASC字符类按键触发
        document.onkeypress = function (e) {
            //将charCode转换为键值字符串，区分大小写
            var str = String.fromCharCode(e.charCode)
            console.log(str);
        }
    }

    //通过监听keydown使元素移动
    function keydownExam() {
        var box = document.getElementsByClassName('key-box')[0];

        addEvent(document, 'keydown', function (e) {
            var e = e || window.event,
                code = e.keyCode,
                bLeft = getStyles(box, 'left'),
                bTop = getStyles(box, 'top');

            console.log(code);
            //keyCode37为左方向键，38右方向键，39上方向键，40上方向键
            switch (code) {
                case 37:
                    box.style.left = bLeft - 5 + 'px';
                    break;
                case 39:
                    box.style.left = bLeft + 5 + 'px';
                    break;
                case 38:
                    box.style.top = bTop - 5 + 'px';
                    break;
                case 40:
                    box.style.top = bTop + 5 + 'px';
                    break;
                default:
                    break;
            }
        })
    }


    //贪吃蛇原理，使用数组代表贪吃蛇

    //初始化函数，所有的模块会由这个函数来统一管理
    function init() {
        initGame();
    }

    var initGame = (function () {
        var snakeWrap = document.getElementsByClassName('snake-wrap')[0];
        var Snake = function () {

            // 存储坐标对象
            this.bodyArr = [
                { x: 0, y: 0 },
                { x: 0, y: 20 },
                { x: 0, y: 40 },
                { x: 0, y: 60 },
                { x: 0, y: 80 },
                { x: 0, y: 100 },
                { x: 0, y: 120 },
                { x: 0, y: 140 },
            ];
        }

        Snake.prototype = {
            //统一管理prototype里的方法
            init: function () {
                this.initSnake()
                this.bindEvent()
            },
            //统一管理绑定事件处理函数
            bindEvent: function () {
                var _self = this;
                addEvent(document, 'keydown', function (e) {
                    var e = e || window.event,
                        code = e.keyCode;



                    console.log(code);
                    //keyCode37为左方向键，38右方向键，39上方向键，40上方向键
                    switch (code) {
                        case 37:
                            _self.move('l')
                            break;
                        case 39:
                            _self.move('r')

                            break;
                        case 38:
                            _self.move('u')

                            break;
                        case 40:
                            _self.move('d')

                            break;
                        default:
                            break;
                    }
                })
            },

            initSnake: function () {
                var arr = this.bodyArr,
                    len = arr.length,
                    //创建DocumentFragment对象，用于存储DOM节点，减少DOM操作，统一更新DOM结构
                    frag = document.createDocumentFragment(),
                    item;

                for (var i = 0; i < len; i++) {
                    item = arr[i];
                    var round = document.createElement('i');

                    //判断snake实例头部与否，使用不同的样式
                    round.className = i === len - 1 ? 'round head' : 'round';
                    round.innerHTML = i
                    //给每个新建的元素赋值坐标，定义在文档中的位置
                    round.style.left = item.x + 'px';
                    round.style.top = item.y + 'px';
                    frag.appendChild(round);
                }


                snakeWrap.appendChild(frag);

            },

            move: function (direction) {
                var arr = this.bodyArr,
                    len = arr.length,
                    head = arr[len - 1];



                for (var i = 0; i < len; i++) {
                    if (i === len - 1) {
                        switch (direction) {
                            case 'l':
                                head.x -= 20
                                break;
                            case 'u':
                                head.y -= 20

                                break;
                            case 'r':
                                head.x += 20

                                break;
                            case 'd':
                                head.y += 20

                                break;
                            default:
                                break;
                        }

                    } else {
                        //让上后面素顺位继承前面元素的坐标
                        arr[i].x = arr[i + 1].x;
                        arr[i].y = arr[i + 1].y;
                    }
                }

                this.removeSnake();
                this.initSnake()
            },

            removeSnake: function () {
                var bodys = document.getElementsByClassName('round');

                while (bodys.length > 0) {
                    bodys[0].remove()
                }
            }
        }

        return new Snake().init();
    });

    init()

}