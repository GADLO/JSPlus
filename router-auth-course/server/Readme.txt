1. MongoDB安装及启动
   1. 下载：https://www.mongodb.com/try/download/community
   2. 解压缩：tar zxvf /Users/amojs/Desktop/mongodb-macos-x86_64-6.0.3.tgz
   3. 移动文件：mv mongodb-macos-x86_64-6.0.3 ~/mongodb
   4. 进入文件夹：cd ~/mongodb
   5. 创建文件夹：mkdir -p data/db
   6. 进入启动文件夹：cd ~/mongodb/bin
   7. 执行启动程序：sudo ./mongod --dbpath /Users/amojs/mongodb/data/db

   "bcrypt": "^5.1.0",
   
   加密

   password -> 不可以明文
      MD5(MD5(password)) -> 数据库

      id: 1  username: xiaoyesensen password: xxxxx   salt: 5b43kd

      salt -> 盐值  6-12位  不一定是唯一的

      MD5(MD5(password) + salt) -> 一定的

      salt -> 每次登录验证完毕以后 -> 动态更改

      加密算法工具

      bcrypt -> crypto

    "dotenv": "^16.0.3",
    
    公共的配置 -> .env -> .env.development -> .env.production

    dotenv -> config() -> 映射转换

    BASE_URL
    SECRET_KEY

    process.env.BASE_URL

    "express": "^4.18.2",

    Node -> 服务器程序 -> 解析  解释 JavaScript  
            提供了一系列在服务器上做程序的API

            V8引擎  -> chromemium

   Express 框架 -> router  中间件编程   服务器快速搭建

    "jsonwebtoken": "^9.0.0",
    
    签名 -> 加密 

    sign -> id + SECRET_KEY -> token -> 令牌

    http -> authorization: token

    后端 -> token -> 解密 -> verify -> token + SECRET_KEY -> expireIn -> id
        -> id -> database -> profile

    "mongoose": "^6.9.2",

    MongoDB -> 动态的数据存储容器 -> Dynamic Database
            -> 增删改查效率高，安全性，准确性低

    MySQL   -> 静态的数据存储容器 -> static Database
            -> 增删改查效率低，安全性高，准确性高

   mongoose / sequelize

   SQL -> 'SELECT * FROM ...'

   mongoose / sequelize -> 封装 -> 数据库操作的方法化

    "typescript": "^4.9.5"

    typescript语法和类型注解的支持