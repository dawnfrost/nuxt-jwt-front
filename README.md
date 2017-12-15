# nuxt-express（正在开发）
> 本工程为spring boot security restful通用框架的前端部分
- 采用nuxt-express脚手架搭建
- 内置一个node.js-express服务端
  - 自带webpack
  - 自带各种loader
  - 自带反向代理
- 原生支持或已经集成常用的前端组件
  - vue
  - vuex
  - vue-router
  - nuxt-axios
  - element-ui
- 结合spring boot后端实现了大部分前端jwt相关通用逻辑
  - 用户登录
  - access_token获取
  - 使用refresh_token刷新access_token
  - 用户退出
  - axios拦截
  - 未登录不可见路由拦截

## 代码安装

``` bash
# install dependencies
$ npm i

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).


