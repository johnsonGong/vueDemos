# 为尽快适应新的工作环境 和 开发工具。

### ### ### ### ### ### ### ### ### ### ### ### ###
[2017-12-26]
1. <router-view/>:
配置 路由规则 后,忘了在初始化文件(App.vue)中添加此 元素,导致路由未生效。
低级错误。

2. 使用自定义组件:
一定要注意命名规则, 如:
定义:
PluginHeader.vue
引入:
import PluginHeader from '../components/PluginHeader'
使用:
<plugin-header></plugin-header>
--- ---
错误用法(无法渲染!):
引入:
import Header from '../components/PluginHeader'
使用:
<header></header>
