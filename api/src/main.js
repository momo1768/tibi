/*
 * @Description:
 * @Author: Li cheng xue
 * @version:
 * @Date: 2024-02-17 11:45:46
 * @LastEditors: Li cheng xue
 * @LastEditTime: 2024-02-17 14:07:39
 * @FilePath: \src\main.js
 */
const { APP_PORT } = require('./config/config.default')

const app = require('./app')

app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`)
})

