#### 基础使用


- 初始化地图

<div style="width: 100%; height: 30vh">
    <iframe frameborder="no" style='width: 100%' height='100%' src="/map/kuang-jia-ji-ben.html"></iframe>
</div>


:::code-group
```html
<div id="map"></div>
```

```js
 mapboxgl.accessToken = 'pk.eyJ1IjoiNGgzajgiLCJhIjoiY202cTRneXdpMDlheDJpb21rdGs2M3V6cSJ9.Ifg4pD0p8LxYmxmxwoTBNA';

const map = (window.map = new mapboxgl.Map({
  container: 'map',
  center: [121.74380266722233, 31.097567372835357],
  zoom: 10,
  style: 'mapbox://styles/mapbox/standard',
  minZoom: 10,
  maxZoom: 21,
  preserveDrawingBuffer: true,
}));
```
```css
  body { margin: 0; padding: 0; }
  #map { position: absolute; top: 0; bottom: 0; width: 100%; }

```
:::
