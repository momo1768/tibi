/*
 * @Description:
 * @Author: Li cheng xue
 * @version:
 * @Date: 2024-02-20 22:37:35
 * @LastEditors: Li cheng xue
 * @LastEditTime: 2024-02-20 22:44:10
 * @FilePath: \.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential'
    // '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
