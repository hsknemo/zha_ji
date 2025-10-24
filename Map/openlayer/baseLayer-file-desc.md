# 基类BaseLayer 使用
## 基本结构 （只关注核心方法）
```js
// 注：结构与代码可能有差异，但是核心都是面向对象，只不过项目代码使用了 jquery 的 对象合并
class BaseLayer {
  constructor(options) {
    this.name = options.name
    this.openTips = options.openTips
    this.cache = options.cache
    this.tipsWidth = options.tipsWidth
    this.tipsHeight = options.tipsHeight
    this.delay = options.delay
  }
  
  
  init() {}
  
  loadData() {}
  
  addLayer() {}

  showTips() {}

  addTipsHandler() {}

  makeInfoContent() {}

  setVisible() {}

  flash() {}

  flyToExtent() {}

  flyTo() {}

  makeFeature() {}

  refreshFeature() {}
}



```
> 核心方法介绍 
- ``init``: 初始化调用方法，用户参数初始化配置，接收参数，挂载继承类上
- ``loadData``: 作为继承调用后台接口使用 
- `addLayer`: 创建基本的`点` `线` `面`图层, 如果复杂的图层需要在子类进行覆盖 例如`热力图` `聚类图`
- `showTips`: 创建的 `Tips` 气泡方法, 内部使用的是 `openlayer` 的 `Overlay` 功能，内部js 写了一个基本的
文档dom模板,在加载的时候会自动用 jquery 替换调对应继承图层的自身html 模板，配合方法为：`addTipsHandler`, `makeInfoContent`
- `addTipsHandler` ： 气泡创建前调用，用户绑定气泡底部dom 图标点击事件，再此生命周期`形参`可以获取到 `dom`
- `makeInfoContent`: 气泡创建前调用，在此生命周期期间可以自定义气泡内容（html）, 注意需要有返回值 返回一个数组
- `setVisible`: 图层的可视与隐藏方法
- `flash`: 图层内部某个`feature`元素闪烁方法
- `flyToExtent`: 图层范围定位方法
- `flyTo`: 图层`feature`定位方法, 如果不传则定位整个自身图层范围（利用自身feature计算范围）
- `makeFeature`: 图层创建 循环调用的创建 `feature` 元素样式方法
- `refreshFeature`: 图层创建 调用 `cache` 循环调用 `makeFeature` 进行图层元素创建，构建图层源， 并添加到图层上去

> 核心属性介绍
- `name`: 继承 `BaseLayer` 的唯一标识，也是全局变量，禁止重复，也小心命名重复，建议使用文件名进行命名 
- `openTips`: 用于控制对应继承的子类地图图层是否点击 ``点`` 、``线``、 ``面``、 需要弹出来Tips
- `cache`: 缓存接口数据，配置在自己的基类上面，配合 `loadData` 方法使用, 默认数组
- `tipsWidth`: 控制tips 宽度 项目使用 `rem` 单位
- `tipsHeight`: 控制tips 高度 项目使用 `rem` 单位
- `delay`: 配置图层`loadData`方法请求接口 `轮询`调用时间

<div class="botm">
 文档编辑时间 {{ processTime(new Date()) }}
</div>

<script setup>
 import moment from 'moment'
 const processTime = (time) => {
    return moment(time).format('YY年MM月DD日 HH:mm')
 }
</script>
<style lang="scss">

.botm {
    padding-left: 10px;
    border-left: rgb(128, 128, 128) 1px solid;
}
</style>
