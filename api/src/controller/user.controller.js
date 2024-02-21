/*
 * @Description:
 * @Author: Li cheng xue
 * @version:
 * @Date: 2024-02-17 14:13:18
 * @LastEditors: Li cheng xue
 * @LastEditTime: 2024-02-20 21:11:02
 * @FilePath: \src\controller\user.controller.js
 */
const jwt = require('jsonwebtoken')

const { createUser, getUserInfo, updateById } = require('../service/user.service')

const {userRegisterError} =require('../constant/err.type')

const {JWT_SECRET} = require('../config/config.default')

class UserController {
  async register(ctx, next) {
    // 1. 获取数据
    // console.log(ctx.request.body)
    const { user_name, password } = ctx.request.body
    // 2. 操作数据库
    try {
      const res = await createUser(user_name, password)
      // console.log(res)
      // 3. 返回结果
      ctx.body = {
        code: 0,
        message:'用户注册成功',
        result: {
          id: res.id,
          user_name: res.user_name,
        }
      }
    } catch (err) {
      console.log(err)
      ctx.app.emit('error', userRegisterError, ctx)
    }

  }
  async login(ctx, next) {
    const { user_name } = ctx.request.body

    // 1. 获取用户信息
    try {
      const {password, ...res} = await getUserInfo({user_name})

      ctx.body = {
        code: 0,
        message: '用户登录成功',
        result: {
          token: jwt.sign(res, JWT_SECRET, { expiresIn: '1d' }),
        }
      }
    } catch (err) {

    }
  }

  async changePassword(ctx, next) {
    // 1. 获取数据
    const id = ctx.state.user.id
    const password = ctx.request.body.password
    // 2. 操作数据库
    if (await updateById({id, password})) {
      ctx.body = {
        code: 0,
        message: '修改密码成功'
      }
    } else {
      ctx.body = {
        code: '10007',
        message: '修改密码失败',
        result: ''
      }
    }
  }

}

module.exports = new UserController()