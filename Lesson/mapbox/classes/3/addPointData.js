var pointSource = {
  type: 'geojson',
  data: {
    type: "FeatureCollection",
    features: []
  },
}
map.addSource('pointSource', pointSource)
var point_source = map.getSource('pointSource');
point_source.setData(pointDataGeojson2)
