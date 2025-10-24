

# 例子 - 绘制点位图层
```js
class TestLayer extends BaseLayer {
  constructor(props) {
    super(props);
    this.name = 'TestLayer';
    super.init()
  }

  init() {
    this.initLayer()
    this.loadImage(this.imgList)
  }
  
  imgList: [
    { name: '图片1', value: '图片1地址' },
    { name: '图片2', value: '图片2地址' },
  ]
  
  loadData() {
    this.cacheData = [
      {
        lng: '121.2333',
        lat: '31.2333'
      }
    ]
    
    this.refreshFeature()
  }
  
  getStyle(item) {
    return '图片1'
  }
  
  makeFeature(item) {
    var feature = {
      type: 'point',
      geometry: {
        coordinates: [item.lng, item.lat]
      },
      properties: {
        icon: this.getStyle(item)
      }
    }
    return feature
  }
  
  
  
}
```
> 将文件引入到.map_kf.html 即可


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
