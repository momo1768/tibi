/*
 * @Description:
 * @Author: Li cheng xue
 * @version:
 * @Date: 2024-02-18 09:21:37
 * @LastEditors: Li cheng xue
 * @LastEditTime: 2024-02-18 11:07:31
 * @FilePath: \src\db\seq.js
 */
const { Sequelize } = require('sequelize')

const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB
} = require('../config/config.default')

const seq = new Sequelize(MYSQL_DB,MYSQL_USER,MYSQL_PWD, {
  host:MYSQL_HOST,
  dialect:'mysql',
})

// seq
//   .authenticate()
//   .then(() => {
//     console.log('数据库连接成功')
//   })
//   .catch(err => {
//     console.log('数据库连接失败', err)
//   })

module.exports = seq
