import cssIcon from '../styles/cssIcon.css'

import http from '../styles/http.css'

export default function HTTP() {
    //不是异步请求，页面必定会跳转
    return `
    <p class="center"><span class='explain'>HTTP</span></p>
    <div class='http-wrap'>
    <p class="center"><span class='explain'>form get请求方式</span></p>

    <div class="http-item">
    <form action = "/study/index/http" method ="get">
    <input type="text" name="username" placeholder="用户名"/>
    <input type="password" name="password" placeholder="密码"/>
    <input type="submit"/>
  </form>
    </div>

    <p class="center"><span class='explain'>form post请求方式</span></p>

    <div class="http-item">
    <form action = "/study/index/http" method ="post">
    <input type="text" name="username" placeholder="用户名"/>
    <input type="password" name="password" placeholder="密码"/>
    <input type="submit"/>
  </form>
    </div>
    <p class="center"><span class='explain'>ajax请求方式</span></p>
    <div class="http-item">
    <input type="text" name="username" id="username" placeholder="用户名"/>
    <input type="password" name="password" id="password" placeholder="密码"/>
    <button id="submit">提交</button>
    </div>
    </div>
    `
}