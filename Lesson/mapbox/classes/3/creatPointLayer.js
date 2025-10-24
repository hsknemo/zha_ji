var pointLayer1 = {
  id: 'pointLayer2',
  type: 'symbol',
  source: 'pointSource',
  layout: {
    // 为图层设置引用的图片ID
    "icon-image": ['get', 'icon'],
    "icon-size": 1,
  }
}
map.addLayer(pointLayer1)
