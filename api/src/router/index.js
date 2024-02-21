/*
 * @Description:
 * @Author: Li cheng xue
 * @version:
 * @Date: 2024-02-21 12:28:35
 * @LastEditors: Li cheng xue
 * @LastEditTime: 2024-02-21 12:37:24
 * @FilePath: \src\router\index.js
 */
const fs = require('fs')

const Router = require('koa-router')
const router = new Router()

fs.readdirSync(__dirname).forEach(file => {
  if( file !== 'index.js' ) {
    let r = require('./' + file)
    router.use(r.routes())
  }
  // console.log(file)
})

module.exports = router