import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
import generateMd from '../plugins/generateMd'
import route from "./route.js";

export default defineConfig({
  title: "雜記",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '组件库', link: '/Components/docs/Tips/Tips-Table.md' },
      { text: '地图项目', link: '/Map/openlayer/openlayer-introl.md' },
      { text: '地图封装的一些东西', link: '/MapCore/intro.md' },
      { text: '课程笔记', link: '/Lesson/mapbox/create-point.md' },
      { text: 'Stone CLI', link: '/Node/toneBox/intro.md' },
      { text: 'UPMD', link: '/ProfileLib/upMarkDown.md' },
    ],

    sidebar: route,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    lineNumbers: true
  },
  vite: {
    plugins: [
      // 引入本地插件，可以传递选项
      generateMd()
    ]
  }
})
