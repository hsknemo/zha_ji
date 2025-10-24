# 如何创建 tips 



## 全局气泡对象
直接看 `basePopup.js`即可，利用的也是MapBox 的 popup 对象进行封装

## 使用
> 在自身图层文件里面创建 方法, 套路使用

```js
...
getTemplate() {
  return `
    <div>
      232323
    </div>
  `
}

getTipsData(feature) {
   return {
     title: 'tips标题',
     // tips 图片
     bottom: `
      <div id="id-xxx" class='btns' popup-title='关联工单' >
        <img src='图片路径'> 
      </div>
     `
  } 
}

setTipsData(data) {
  // 获取到dom 模板父级对象
  let tipsContent = $(this.getTipsContentClass())
  // 传入 每次打开后清空
  eventBus.emit('app.BaseDom.clear', tipsContent)
  eventBus.emit('app.BaseDom.addDom', {
    template: this.getTemplate()
  })
}

```

