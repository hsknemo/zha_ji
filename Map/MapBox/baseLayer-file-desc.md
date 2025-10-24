# 基类BaseLayer 使用
## 基本结构 （只关注核心方法）
```js
// 注：结构与代码可能有差异，但是核心都是面向对象，只不过项目代码使用了 jquery 的 对象合并
class BaseLayer {
  constructor(options) {
    this.name = options.name
    this.openTips = options.openTips
    this.cacheData = options.cacheData
    this.tipsWidth = options.tipsWidth
    this.tipsHeight = options.tipsHeight
    this.imgList = options.imgList
  }
  
  
  init() {}
  
  loadImage() {}
  
  loadData() {}
  
  initLayer() {}

  setTipsData() {}
  
  getTipsData() {}

  setVisible() {}

  makeFeature() {}

  refreshFeature() {}
}



```
> 核心方法介绍 
- ``init``: 初始化调用方法，用户参数初始化配置，接收参数，挂载继承类上
- ``loadData``: 作为继承调用后台接口使用 
- `initLayer`: 图层创建``核心``方法， 创建基本的`点` `线` `面`图层, 如果复杂的图层需要在子类进行覆盖 例如`热力图` `聚类图`, 支持传参覆盖，
- `loadImage`: 点位图片显示``核心``方法，用于mapbox 加载点位图片 `点位图层调用`
- `setTipsData`: 作为`创建 气泡 dom 弹窗`内部页面使用方法
- `getTipsData`: 作为弹窗气泡标题配置方法， 该方法需要 `return 一个配置对象`
- `setVisible`: 图层的可视与隐藏方法 可传`Boolean` 也可传 MapBox `visible` | `none`
- `refreshFeature`: 图层创建 调用 `cacheData` 循环调用 `makeFeature` 进行图层元素创建，构建图层源， 并添加到图层上去
- `makeFeature`: 创建元素核心方法，mapbox 不支持一个图层创建多状态元素，也就是说点位图层只能创建点，不能创建线，配合initLayer 方法创建对应
图层的所需元素，点就是点，线就是线，`基本的Feature数据格式对象`

> 核心属性介绍
- `name`: 继承 `BaseLayer` 的唯一标识，也是全局变量，禁止重复，也小心命名重复，建议使用文件名进行命名 
- `openTips`: 用于控制对应继承的子类地图图层是否点击 ``点`` 、``线``、 ``面``、 需要弹出来Tips
- `cacheData`: 缓存接口数据，配置在自己的基类上面，配合 `loadData` 方法使用, 默认数组
- `tipsWidth`: 控制tips 宽度 项目使用 `rem` 单位
- `tipsHeight`: 控制tips 高度 项目使用 `rem` 单位
- `layerSource`: mapbox 的 LayerSource
> 核心巧用
- 利用turf.js 计算边界 (以下示例是伪代码)
```js
// 假设一个点位图层
var layerSource = 拿取到 图层的 layerSource
var extent = turf.bbox(layerSource) // 得到一个范围

// 调用
全局mapBox地图对象.fitBounds(extent) // 定位到一个范围， 第二个参数是 fitBounds 配置项



```
[fitBounts 配置项 ](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#fitbounds>)
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
