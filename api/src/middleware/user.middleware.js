/*
 * @Description:
 * @Author: Li cheng xue
 * @version:
 * @Date: 2024-02-18 13:13:11
 * @LastEditors: Li cheng xue
 * @LastEditTime: 2024-02-20 18:43:11
 * @FilePath: \src\middleware\user.middleware.js
 */
const bcrypt = require('bcryptjs')
const { getUserInfo } = require('../service/user.service')
const {
  userFormateError,
  userAlreadyExited,
  userRegisterError,
  userDoesNotExist,
  userLoginError,
  invalidPassword
} = require('../constant/err.type')
const userValidator = async(ctx, next) => {
  const {user_name, password} = ctx.request.body
  // 合法性
  if(!user_name || !password) {
    console.error('用户名或密码为空', ctx.request.body)
    // ctx.status = 400
    // ctx.body = {
    //   code: '10001',
    //   message: '用户名或密码为空',
    //   result: '',
    // }
    ctx.app.emit('error', userFormateError, ctx)
    return
  }
  await next()
}

const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body
  // 合理性
  // if(await getUserInfo({ user_name })) {
  //   ctx.app.emit('error', userAlreadyExited, ctx)
  //   return
  // }
  try {
    const res = await getUserInfo({user_name})
    if (res) {
      console.error('用户名已经存在', {user_name})
      ctx.app.emit('error', userAlreadyExited, ctx)
      return
    }
  }catch (err){
    console.error('获取用户信息错误', err)
    ctx.app.emit('error', userRegisterError, ctx)
    return
  }

  await next()
}

const cryptPassword = async (ctx, next) => {
  const {password} = ctx.request.body

  const salt = bcrypt.genSaltSync(10)

  const hash = bcrypt.hashSync(password, salt)

  ctx.request.body.password = hash

  await next()
}

const verifyLogin = async (ctx, next) => {
  // 1. 根据用户是否存在(不存在:报错)
  const {user_name, password} = ctx.request.body

  try {
    const res = await getUserInfo({ user_name })

    if(!res) {
      console.error('用户名不存在',{ user_name })
      ctx.app.emit('error', userDoesNotExist, ctx)
      return
    }

    // 2. 密码是否匹配(不匹配:报错)
    if(!bcrypt.compareSync(password, res.password)){
      ctx.app.emit('error', invalidPassword, ctx)
      return
    }
  } catch(err){
    console.error(err)
    return ctx.app.emit('error', userLoginError, ctx)
  }

  await next()
}

module.exports = {
  userValidator,
  verifyUser,
  cryptPassword,
  verifyLogin
}