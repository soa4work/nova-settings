let mix = require('laravel-mix')

require('./nova.mix')

mix
  .setPublicPath('dist')
  .js('resources/js/tool.js', 'js')
  .vue({ version: 2 })
  .css('resources/css/tool.css', 'css')
  .nova('ferdiunal/nova-settings')
