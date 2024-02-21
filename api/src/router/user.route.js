/*
 * @Description:
 * @Author: Li cheng xue
 * @version:
 * @Date: 2024-02-17 13:46:54
 * @LastEditors: Li cheng xue
 * @LastEditTime: 2024-02-20 20:49:34
 * @FilePath: \src\router\user.route.js
 */
const Router = require('koa-router')

const {
  userValidator,
  verifyUser,
  cryptPassword,
  verifyLogin
} = require('../middleware/user.middleware')

const {auth} = require('../middleware/auth.middleware')

const { register, login, changePassword } = require('../controller/user.controller')

const router = new Router({ prefix: '/users' })

// 注册接口
router.post('/register', userValidator, verifyUser, cryptPassword, register)

// 登录接口
router.post('/login', userValidator, verifyLogin, login)

// 修改密码接口
router.patch('/', auth, cryptPassword, changePassword)
module.exports = router
