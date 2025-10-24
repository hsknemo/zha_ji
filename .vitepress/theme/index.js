import Theme from 'vitepress/theme';
import ElementPlus from 'element-plus'; // 引入组件库
import 'element-plus/dist/index.css'; // 引入样式
import moment from 'moment'
import './Style/OhYo.css'
import PlayGround from '../../components/index.vue'; // 引入自定义组件
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
window.mapboxgl = mapboxgl
window.ElementPlus = ElementPlus
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(ElementPlus); // 注册组件库
    app.use(moment)
    app.component('Playground', PlayGround);
  },
};
