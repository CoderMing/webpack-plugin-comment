
module.exports = class SetAuthorPlugin {
  constructor(options) {
    this.titleStr = `/* ${options.str} */`

  }

  apply(compiler) {
    console.log(compiler)
  }
}






