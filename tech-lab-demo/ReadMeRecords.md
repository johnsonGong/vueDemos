# 为尽快适应新的工作环境 和 开发工具。

### ### ### ### ### ### ### ### ### ### ### ### ###
[2017-12-26]
1. &lt;router-view/ &gt;:
配置 路由规则 后,忘了在初始化文件(App.vue)中添加此 元素,导致路由未生效。
低级错误。

2. 使用自定义组件:
一定要注意命名规则, 如:
定义:
PluginHeader.vue
引入:
import PluginHeader from '../components/PluginHeader'
使用:
'<plugin-header></plugin-header>'
--- ---
错误用法(无法渲染!):
引入:
import Header from '../components/PluginHeader'
使用:
'<header></header>'


3. 增加postcss 插件( 比如: postcss-adaptive ):
postcss 是一个css操作集合(类似: 小平台的感觉),
在 vue-cli 工程模板环境中, '不用'单独在 webpack.dev.conf.js文件中配置参数.
--- ---
[步骤]:
a. 安装:
  npm i postcss-adaptive --save-dev
b. 修改根目录下文件:.postcssrc.js
  即: 在 plugins 属性下增加
  "postcss-adaptive": {remUnit: 75, autoRem: true}
c.修改html模板:
  增加函数--setRemUnit()
d. 关键词:
postcss-loader, postcss-load-config

4. 增加前端 mock 功能(以前使用 express 实现):
a. 全局安装 json-server;
b. 新建文件 "./mock/mockTemp.json"
c. 在项目根目录下 执行命令 "json-server --watch mock/mockTemp.json --port 9090"
注意:　建议另开一个 命令行窗口, 分别控制 VUE 和 mock
--- --- ---
另(尝试局部安装 json-server):
"scripts": {
    "dev": "webpack-dev-server --inline --hot --no-info",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules",
    "mock": "node_modules/.bin/json-server --watch mock/db.json --port 9090",
    "mockdev": "npm run mock & npm run dev"
}
--- ---
其他方式 or 辅助:
4.1 axios-mock-adapter;
4.2 express;
4.3 faker.js;
4.4 mock.js;
