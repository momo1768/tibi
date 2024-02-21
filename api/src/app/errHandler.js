/*
 * @Description:
 * @Author: Li cheng xue
 * @version:
 * @Date: 2024-02-18 13:37:38
 * @LastEditors: Li cheng xue
 * @LastEditTime: 2024-02-21 12:52:27
 * @FilePath: \src\app\errHandler.js
 */
/*
 * @Description:
 * @Author: Li cheng xue
 * @version:
 * @Date: 2024-02-18 13:37:38
 * @LastEditors: Li cheng xue
 * @LastEditTime: 2024-02-18 14:04:37
 * @FilePath: \src\app\errHandler.js
 */
module.exports = (err, ctx) => {
  let status = 500
  switch (err.code) {
    case '10001':
      status = 400
      break
    case '10002':
      status = 409
      break
    default:
      status = 500
  }
  ctx.status = status
  ctx.body = err
  console.log(err)
}