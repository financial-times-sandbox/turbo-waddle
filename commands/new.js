exports.command = 'new <name> <dir>'
exports.desc = 'Create an new migration'
exports.builder = {}
exports.handler = function (argv) {
  console.log('new called for migration', argv.name)
}