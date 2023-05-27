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
            //keyCode37为左方向键，38上方向键，39右方向键，40上方向键
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
        var snakeWrap = document.getElementsByClassName('snake-wrap')[0],
            snakeWrapW = getStyles(snakeWrap, 'width'),
            snakeWrapH = getStyles(snakeWrap, 'height'),
            t;
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

            this.dir = 'DOWN'
        }

        Snake.prototype = {
            //统一管理prototype里的方法
            init: function () {
                this.initSnake();
                this.createFood();
                this.bindEvent();
                this.run()
            },
            //统一管理绑定事件处理函数
            bindEvent: function () {
                var _self = this;
                addEvent(document, 'keydown', function (e) {
                    var e = e || window.event;


                    _self.changeDir(e);


                })
            },
            //初始化贪吃蛇
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

            run: function () {
                var _self = this;
                t = setInterval(function () {
                    _self.move()
                }, 300)
            },

            //控制snake移动方向
            move: function (direction) {
                var arr = this.bodyArr,
                    len = arr.length;

                for (var i = 0; i < len; i++) {
                    if (i === len - 1) {
                        this.setHeadXY(arr)
                    } else {
                        //让上后面素顺位继承前面元素的坐标
                        arr[i].x = arr[i + 1].x;
                        arr[i].y = arr[i + 1].y;
                    }
                }
                this.eatFood(arr);
                this.removeSnake();
                this.initSnake();
                this.headInBody(arr);
            },

            //设置前进方向
            setHeadXY: function (arr) {
                var head = arr[arr.length - 1];

                switch (this.dir) {
                    case 'LEFT':
                        head.x <= 0 ? (head.x = snakeWrapW - 20) : (head.x -= 20);
                        break;
                    case 'RIGHT':
                        head.x >= snakeWrapW ? (head.x = 0) : (head.x += 20);
                        break;
                    case 'UP':
                        head.y <= 0 ? (head.y = snakeWrapH - 20) : (head.y -= 20);
                        break;
                    case 'DOWN':
                        head.y >= snakeWrapH ? (head.y = 0) : (head.y += 20);
                        break;
                    default:
                        break;
                }
            },

            //判断head的坐标是否跟body有重合
            headInBody: function (arr) {
                var headX = arr[arr.length - 1].x,
                    headY = arr[arr.length - 1].y,
                    item;

                for (var i = 0; i < arr.length - 2; i++) {
                    item = arr[i];
                    if (headX === item.x && headY === item.y) {
                        var _self = this;
                        setTimeout(() => {
                            alert('游戏结束');
                            clearInterval(t);
                            _self.removeSnake()
                            _self.removeFood()
                        }, 100);
                    }

                }
            },
            removeSnake: function () {
                var bodys = document.getElementsByClassName('round');

                while (bodys.length > 0) {
                    bodys[0].remove()
                }
            },

            //触发改变贪吃蛇前进方向函数
            changeDir: function (e) {
                var e = e || window.e,
                    code = e.keyCode;

                this.setDir(code)
            },

            //通过键盘方向键改变贪吃蛇前进方向
            setDir: function (code) {
                //keyCode37为左方向键，38上方向键，39右方向键，40上方向键
                switch (code) {
                    case 37:
                        if (this.dir !== 'RIGHT' && this.dir !== 'LEFT') {
                            this.dir = 'LEFT'
                        }
                        break;
                    case 39:
                        if (this.dir !== 'RIGHT' && this.dir !== 'LEFT') {
                            this.dir = 'RIGHT'
                        }

                        break;
                    case 38:

                        if (this.dir !== 'UP' && this.dir !== 'DOWN') {
                            this.dir = 'UP'
                        }
                        break;
                    case 40:
                        if (this.dir !== 'UP' && this.dir !== 'DOWN') {
                            this.dir = 'DOWN'
                        }
                        break;
                    default:
                        break;
                }
            },

            //创建贪吃蛇食物函数
            createFood: function () {
                var food = document.createElement('i');

                food.className = 'food';
                food.style.left = this.randomFoodPos(snakeWrapW) * 20 + 'px';
                food.style.top = this.randomFoodPos(snakeWrapH) * 20 + 'px';
                snakeWrap.appendChild(food);
            },

            //随机生成食物位置函数
            randomFoodPos: function (wOrH) {
                return Math.floor(Math.random() * (wOrH / 20))
            },

            eatFood: function (arr) {
                //获取容器空间当中的food元素
                var food = document.getElementsByClassName('food')[0],
                    //获取food相对容器的left和top值
                    foodX = getStyles(food, 'left'),
                    foodY = getStyles(food, 'top'),
                    //获取当前snake头部相对容器的left和top值
                    headX = arr[arr.length - 1].x,
                    headY = arr[arr.length - 1].y,
                    x,
                    y;

                //判断food的位置和snake头部位置是否重合
                if (headX === foodX && headY === foodY) {

                    //若重合，移除当前food并创建新的food
                    this.removeFood();
                    this.createFood();

                    //在snake的尾部添加一个元素
                    if (arr[0].x === arr[1].x) {
                        //判断尾部方向，这里为纵向，即x位置相同
                        x = arr[0].x;

                        if (arr[0].y < arr[1].y) {
                            //纵向，运动方向向下
                            y = arr[0].y - 20;
                        } else if (arr[0].y < arr[1].y) {
                            //纵向，运动方向向上
                            y = arr[0].y + 20;
                        }
                    } else if (arr[0].y === arr[1].y) {
                        //判断尾部方向，这里为横向，即y位置相同
                        y = arr[0].y;

                        if (arr[0].x < arr[1].x) {
                            //横向，运动方向向右
                            x = arr[0].x - 20;
                        } else if (arr[0].x < arr[1].x) {
                            //横向，运动方向向左
                            x = arr[0].x + 20;
                        }
                    }

                    arr.unshift({ x, y });
                }
            },
            //找到当前food并移除他
            removeFood: function () {
                var food = document.getElementsByClassName('food')[0];

                food.remove()
            }
        }

        return new Snake().init();
    });

    init()

}