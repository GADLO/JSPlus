//设置基础域名 + iframe跨域封装，使用此方法需要满足前提：基础域名一致才能用这个方法
var ajaxDomain = (function () {
    //创建iframe元素
    function createIframe(frameId, frameUrl) {
        var iframe = document.createElement('iframe');
        iframe.src = frameUrl;
        iframe.id = frameId;
        iframe.style.display = 'none';
        return frameId;
    }

    //跨域过程
    return function (opt) {
        //设置当前服务器的域名
        document.domain = opt.basicDomain;
        var iframe = createIframe(opt.frameId, opt.frameUrl);
        iframe.onload = function () {
            //获取与api同源子级页面中的ajax
            var $$ = document.getElementById(opt.frameId).contentWindow.$;

            //请求数据
            $$.ajax({
                url: opt.url,
                method: opt.method,
                data: opt.data,
                success: opt.success,
                error: opt.error
            })
        }

        document.body.appendChild(iframe);
    }
})();

export default ajaxDomain;