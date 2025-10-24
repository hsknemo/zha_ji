# 目录结构

```html

├── _requestResponse 响应设置
 ├── response_mid.js
 └── setResponse.js
├── app.js 主入口启动文件
├── config  配置文件（包含端口，数据库 redis）
 ├── mysql.js
 ├── Port.js
 ├── Proxy
  └── main.js
 ├── redis_config.js
 └── upload.js
├── controller 接口控制器 编写接口
 ├── _main_.js 勿删主文件导出
 ├── controllerConfig
  └── controllerExport.config.js 需要导出的接口控制器，配置在此文件中
 └── HelloWorldController.js
├── log       日志输出配置
 ├── beautifulLog.js
 ├── heartbeat.json
 └── logControl.js
├── logControl
 ├── config.js
 └── index.js
├── middware  中间件配置
 ├── Authorization.js
 ├── testVali.js
 └── Validator.js
├── model       数据模型配置 编写sql
 └── hello_world_model.js
├── package.json
├── public
├── route     路由封装
 ├── init_routes.js
 └── routes_regis.js
├── Service   服务层，调用数据模型层
 └── hello_world_service.js
├── utils    工具库
 ├── Js_Tool.js
 └── log_debug.js
└── views  视图层
    └── log.html

```

- controllerExport.config.js
```html
将controller目录下的文件配置在此文件中，可以
导出需要的接口，文件中提供了一个简单的模板示例
```


