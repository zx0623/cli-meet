// 定义脚手架的文件路径
process.env.NODE_PATH = __dirname + '/../node_modules/'

const program = require('commander')
const chalk = require('chalk')
/**
 * commander.js 
 * 1.第一个优势提供了简单介绍可选项，参数进行解析。
 * 2.第二个优势就是自动生成帮助文本信息。
 * 3.option，意为选项 / .option('-n, --name <name>', 'your name', 'GK')
 * 4.command 命令 / .command('init <path>', 'description')
 * 5.description 用于设置命令的描述 / .description('command description')
 * 6.action 执行相关安全， fn 可以接受命令的参数作为函数的形式，顺序与command() 中定义的顺序一直。 / .action(fn)
 * 7.parse 用于解析process.argv,一般用在最后 / .program.parse(process.argv)
 * 8.outputHelp 一般用于未录入参数时自动打印帮助信息 /.program.outputHelp()
 * 
 */
program.version(require('../package').version)

// 定义使用方法
program.usage('<command>')

program
  .command('add')
  .description('Add a new template')
  .alias('a')
  .action(() => {
    require('../command/add')()
  })

program
  .command('list')
  .description('List all the templates')
  .alias('l')
  .action(() => {
    require('../command/list')()
  })

program
  .command('init')
  .description('Generate a new project')
  .alias('i')
  .action(() => {
    require('../command/init')()
  })

program
  .command('delete')
  .description('Delete a template')
  .alias('d')
  .action(() => {
    require('../command/delete')()
  })

program.parse(process.argv)

// 处理参数和提供帮助信息
if (!program.args.length) {
  program.outputHelp(make_red);
}
function make_red(txt) { 
  return chalk.red(txt); 
}