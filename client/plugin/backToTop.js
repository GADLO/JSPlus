//封装插件写法
;(function () {
    //首先自动滚动需要获取的宽高有：滚动条的高度（实时获取），文档的高度（固定静态的），浏览器可视化的窗口高度（固定静态的）
    // var docHeight = getDocSize().y,
    //     clientHeight = getClientSize().y,
    //     playing = false,
    //     bodyMargin = parseInt(getStyle(document.body,'margin-top')),
    //     t = null;

    btn.addEventListener('click', ()=>{window.scroll({top: 0, left: 0, behavior: 'smooth'})})
})();