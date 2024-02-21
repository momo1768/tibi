/*
 * @Description:
 * @Author: Li cheng xue
 * @version:
 * @Date: 2024-02-17 14:02:46
 * @LastEditors: Li cheng xue
 * @LastEditTime: 2024-02-21 13:27:32
 * @FilePath: \src\app\index.js
 */
const path = require('path')

const Koa = require('koa')
const { koaBody } = require('koa-body');

const errHandler = require('./errHandler')

// const userRouter = require('../router/user.route')

// const bookRouter = require('../router/book.route')

const router = require('../router')

const app = new Koa()

app.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, '../upload'),
      keepExtensions: true,
    }
  })
)
app.use(router.routes())
// app.use(userRouter.routes())
// app.use(bookRouter.routes())
app.use(router.allowedMethods())

// 统一的错误处理
app.on('error', errHandler)

module.exports = app