# 如何创建 tips 
> 老项目中使用了 `makeInfoContent` 及 `addTipsHandler` 方法 写的过于复杂，所以我封装了一个简单版本
> 的代码

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
addTipsHandler(popup, $contenr) {
  eventBus.emit('app.BaseDom.clear', $content)  
},

makeInfoContent(feature, position, pnt) {
  eventBus.emit('app.BaseDom.addDom', {
    template: this.getTemplate()
  })
  
  return []
}


```

