/**
 * log4js 日志输出配置文件
 * @type {exports}
 */
var log4js = require('log4js');

// logger configure
log4js.configure(
    {
      appenders: {
        console : {
          type :'console',
        },
        log : {
          type: 'dateFile',
          filename: './logs/sa.logs',
          pattern: 'yyyy-MM-dd',
          alwaysIncludePattern: true,
          compress: true
        }
      },
      replaceConsole:true,
      categories: {
        default: { appenders: ['console','log'], level: 'all' }
      }
    }
  )

module.exports = log4js.getLogger('log');