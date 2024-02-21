/*
 * @Description:
 * @Author: Li cheng xue
 * @version:
 * @Date: 2024-02-21 12:16:09
 * @LastEditors: Li cheng xue
 * @LastEditTime: 2024-02-21 12:56:11
 * @FilePath: \src\router\book.route.js
 */
const Router = require('koa-router')

const { auth, hasAdminPermission } = require('../middleware/auth.middleware')

const {upload} = require('../controller/book.controller')

const router = new Router({ prefix: '/book'})

router.post('/upload', auth, hasAdminPermission, upload)

module.exports = router