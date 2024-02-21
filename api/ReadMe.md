<!--
 * @Description:
 * @Author: Li cheng xue
 * @version:
 * @Date: 2024-02-13 16:46:02
 * @LastEditors: Li cheng xue
 * @LastEditTime: 2024-02-17 11:59:19
 * @FilePath: \ReadMe.md
-->
# 一、项目初始化
## 1. npm初始化
```
npm init -y
```
生成`package.json`文件:

 - 记录项目依赖
## 2. git初始化
```
git init
```
生成'.git'隐藏文件夹，git的本地仓库
## 3. 创建ReadMe文件

# 二、搭建项目
## 1. 安装Koa框架
```
npm install koa
```

 - "koa": "^2.15.0"
## 2. 编写最基本的app
创建`src/main.js`
```
const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  ctx.body = 'hello api'
})

app.listen(3000, () => {
  console.log('server is running on http://localhost:3000')
})
```

## 3. 测试
在终端，使用node src/main.js