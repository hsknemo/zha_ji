

# 例子 - 绘制点位图层
```js
class TestLayer extends BaseLayer {
  constructor(props) {
    super(props);
    this.name = 'TestLayer';
    super.init()
  }

  init() {
    
  }
  
  loadData() {
    this.cache = [
      {
        lng: '121.2333',
        lat: '31.2333'
      }
    ]
    
    this.refreshFeature()
  }
  
  getStyle(item) {
    return ol.style.Style({
        image: new ol.style.Icon({
          src: '图片地址',
          scale: 1 //缩放属性 默认 1
        })
      })
  }
  
  makeFeature(item) {
    var feature = new ol.Feature({
      gemmetry: new ol.geom.Point([item.lng, item.lat]),
    })
    feature.setStyle(this.getStyle(item))
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
