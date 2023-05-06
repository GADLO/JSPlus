import mouse from '../styles/mouse.css'


export default function Mouse() {
    return (`
    <a href="javascript:;" class="link">link</a>
    <div class='box'><div>
    `)
}

//href="javascript:;"这个是为了防止a标签的href生效


//等待执行模块化编写写法
var moduleA = (function (a, b) {
    console.log(a, b);
})

moduleA(1, 2);


//立即执行模块化写法
(function (a, b) {
    console.log(a, b);
})(3, 4);

