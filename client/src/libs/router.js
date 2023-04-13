export default function router(routes) {

    // console.log(routes);

    //http://localhost:5173/#/detail/1
    function handleloadView() {
        //解析当前浏览器路由信息
        const pathInfo = getRouteInfo(location.hash)

        //循环比对当前路由信息与本地路由信息
        routes.forEach(async item => {
            const routeInfo = getRouteInfo('#' + item.path)
            if (pathInfo.viewName === routeInfo.viewName) {
                const params = {}
                routeInfo.params.map((routeItem, routeIndex) => {
                    pathInfo.params.map((pathItem, pathIdex) => {
                        if (routeIndex === pathIdex) {
                            params[routeItem] = pathItem
                        }
                    })
                })

                this.innerHTML = await item.view(params)
            }
        });
    }

    //创建解析路由信息函数
    function getRouteInfo(hash) {
        const pathItems = hash.substring(1).split('/').filter(item => item !== '')
        // console.log(hash, pathItems);

        const params = pathItems.slice(1).map(item => item.replace(':', ''))
        // console.log(params);

        return {
            viewName: pathItems[0] || 'home',
            params,
        }
    }

    return function (el) {
        window.addEventListener('load', handleloadView.bind(el), false)
        window.addEventListener('hashchange', handleloadView.bind(el), false)
    }
}