//参考jquery模块化封装原生AJAX
var $ = (function () {
    function _doAjax(opt) {

        console.log(opt);
        //兼容性
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

        //若浏览器不支持AJAX请求
        if (!xhr) {
            throw new Error('Your Browser do not surpport AJAX! Please update your browser then try again')
        }

        //格式化传入请求方法，强制转换为大写格式
        var method = (opt.method || 'GET').toUpperCase(),

            //请求地址
            url = opt.url,

            //同步请求或异步请求
            async = '' + opt.async === 'false' ? false : true,

            //请求参数
            data = opt.data || null,

            //响应返回后的数据格式
            dataType = opt.dataType || 'JSON',

            //成功后的回调函数
            success = opt.success || function () { },

            //失败后的回调函数
            error = opt.error || function () { },

            //无论成功还是失败都会执行的complete函数
            complete = opt.complete || function () { },

            //	设置超时时间
            timeout = opt.timeout || 5000,

            //设置定时器
            t = null;

        //若未传入url参数
        if (!url) {
            throw new Error('未传入URL参数');
        }

        //AJAX绑定事件监听处理函数
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                    switch (dataType.toUpperCase()) {
                        case 'JSON':
                            success(JSON.parse(xhr.responseText));
                            break;
                        case 'XML':
                            success(xhr.responseXML);
                            break;
                        case 'TEXT':
                            success(responseText);
                            break;
                        default:
                            success(JSON.parse(xhr.responseText));
                            break;
                    }
                } else {
                    error()
                }

                //请求成功，清除定时器
                clearTimeout(t);
                t = null;
                xhr = null;

                //最后执行complete函数
                complete();
            }
        }

        //处理AJAX请求的逻辑
        xhr.open(method, url, async);

        method === 'POST' && xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        //处理请求数据中的data格式
        xhr.send(method === 'GET' ? null : dataFormat(data));

        //设置超时配置
        t = setTimeout(function () {
            xhr.abort();
            clearTimeout(t);
            t = null;
            xhr = null;
            throw new Error('请求超时，请稍后重试！');
        }, timeout);

    }

    //传参数据格式化,JSON数据转换为字符串数据
    function dataFormat(data) {
        //{'name': 'David', 'sex': 'male'}    =>     'name=Tom&sex=male'

        var str = '';

        //循环对象拼接成字符串
        for (var key in data) {
            //只遍历对象本身的属性
            if (data.hasOwnProperty(key)) {
                str += key + '=' + data[key] + '&';
            }
        }

        return str.replace(/&$/, '');
    }

    return {
        Ajax: function (opt) {
            //处理传入的参数问题，抽离函数，能够让所有方法能够在Ajax
            _doAjax(opt);
        },
        post: function (url, data, timeout, dataType, successCB, errorCB, completeCB) {
            _doAjax({
                method: 'POST',
                url: url, data: data,
                dataType: dataType,
                timeout: timeout,
                success: successCB,
                error: errorCB,
                complete: completeCB
            });
        },
        get: function (url, data, timeout, dataType, successCB, errorCB, completeCB) {
            _doAjax({
                method: 'GET',
                url: url,
                data: data,
                dataType: dataType,
                timeout: timeout,
                success: successCB,
                error: errorCB,
                complete: completeCB
            })
        },
    }
})()

export default $;