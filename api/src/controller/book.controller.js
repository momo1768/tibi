class BookController {
  async upload(ctx, next){
    ctx.body = '封面上传成功'
  }
}

module.exports = new BookController()