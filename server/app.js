const express = require("express");
const { join } = require("path");

const port = 8000;
const app = express();

//配置服务器映射到静态文件夹Public
app.use(express.static(join(__dirname, "public")));

//服务监听
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});