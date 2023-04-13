//插件写法
(function () {
    var wHeight = getViewportSize().height,
        sHeight = getScrollSize().height,
        auto = false,
        t = null;

    var AutoRead = function (opt) {
        this.autoBtn = opt.autoBtn;
        this.scrollTopBtn = opt.scrollTop;
        var _self = this;

        //监听自动播放按钮
        addEvent(this.autoBtn, "click", function () {
            console.log("autoBtn clicked");
            //绑定this为构造函数AutoRead
            _self.autoScroll.call(_self);
        });

        //监听回到顶部按钮
        addEvent(this.scrollTopBtn, "click", function () {
            clearInterval(t);
            _self.autoBtn.innerText = "Play";
            window.scrollTo(0, 0);
        });

        //监听滚动条事件
        addEvent(window, "scroll", function () {
            //绑定this为构造函数AutoRead
            _self.scrollTopShow.call(_self);
        });
    };

    AutoRead.prototype = {
        autoScroll: function () {
            console.log("autoScroll invoked");
            var scrollTop = getScrollOffset().top,
                _self = this;
            console.log('autoMode:', auto);
            if (sHeight <= wHeight + scrollTop) {
                alert("Arrive Bottom");
                _self.autoBtn.innerText = "Play";
                return;
            }

            if (!auto) {
                //设置定时器，让垂直像素值自增
                t = setInterval(function () {
                    console.log("Interval Initial");
                    var scrollTop = getScrollOffset().top;
                    //判断元素内容高度是否等于当前滚动距离到顶部的距离
                    if (sHeight <= wHeight + scrollTop) {
                        alert("Arrive Bottom");
                        _self.autoBtn.innerText = "Play";
                        clearInterval(t);
                        auto = false;
                        return;
                    } else {

                        //自动阅读发生时，按钮显示为Stop
                        _self.autoBtn.innerText = "Stop";
                        //流动形式

                        window.scrollBy(0, 1);

                        //翻页形式
                        // window.scrollBy(0, wHeight);
                        // console.log(scrollTop);
                    }
                }, 1);
                auto = true;
            } else {
                clearInterval(t);
                _self.autoBtn.innerText = "Play";
                auto = false;
            }
        },
        scrollTopShow: function () {
            var scrollTop = getScrollOffset().top,
                scrollBtn = this.scrollTopBtn;
            scrollBtn.style.display = scrollTop ? "block" : "none";
        },
    };

    window.AutoRead = AutoRead;
})();
