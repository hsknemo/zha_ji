# 上手
> 首先项目需要你了解自己在用的地图是哪个，基础的api 使用


## BaseLayer 
> 所有的图层都应继承自BaseLayer 类
```js
class BaseLayer {
  constructor(options) {
    this.visible = options.visible || true; // 图层的可见性
    this.maxZoom = options.maxZoom || 18; // 最大缩放级别
    this.minZoom = options.minZoom || 0;  
    this.init()
  }
  
  init() {
    // 初始化调用
  }
  
  loadData() {
    // 加载图层数据  
  }
  
  setVisible(visible) {
    // 设置图层的可见性
  }
}
```

## BasePopup 地图弹出框
```js
class BasePopup {
  constructor(options) {
    // 坐标
    this.coord = options.coords // [121, 31];
    this.template = options.template // 弹出模板
  }
  
  load() {
    // 各自地图加载气泡的方法
  }
  
  
}
```
