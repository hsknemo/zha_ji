#### 基础使用
> 初始化地图

<Playground
    :jsCode="jsCode"
    :cssCode="cssCode"
    :htmlCode="htmlCode"
/>

<script setup>
const jsCode = ` mapboxgl.accessToken = 'pk.eyJ1IjoiNGgzajgiLCJhIjoiY202cTRneXdpMDlheDJpb21rdGs2M3V6cSJ9.Ifg4pD0p8LxYmxmxwoTBNA';

window.mapControl = new mapboxgl.Map({
  container: 'map',
  center: [121.74380266722233, 31.097567372835357],
  zoom: 10,
  style: 'mapbox://styles/mapbox/standard',
  minZoom: 10,
  maxZoom: 21,
  preserveDrawingBuffer: true,
});
console.log(133)
 
 `
const cssCode = ` body {
    margin: 0;
    padding: 0;
}

#map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}

 
 `
const htmlCode = ` <div id="map"></div>
<div>4444</div>

 
 `
</script>
