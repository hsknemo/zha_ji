const mdFileName = 'create-point'

const mdContent = {
  二级标题: 'mapbox课程3 创建一个点',

  块引: '准备点位数据，准备撒点图标，将数据源和图层添加到地图上',

  原样输出: `
    <br/>
    
    - 课程地址
    
    <br/>
    
    <a style="display: flex; align-items: center" href='https://www.bilibili.com/video/BV1XrGFzBESG/?spm_id_from=333.1387.homepage.video_card.click&vd_source=6d401709c12c2c12d4ed83b1335b9d95' target='_blank'>
    <img style="display: block;margin-right: 10px; filter: grayscale(1)" width="20rem" height="20rem" src="https://i0.hdslb.com/bfs/static/jinkela/long/images/favicon.ico" alt="">课程地址
    </a>
  `,
  输出用列表: [
    {
      title: '1.引入撒点图标',
      content: '',
      type: 'content'
    }
  ],
  输出用单一代码块: {
    codeType: 'javascript',
    type: 'file',
    file: '/Lesson/mapbox/classes/3/3.js',
  },
  输出2用列表: [
    {
      title: '2.准备撒点数据',
      content: '',
      type: 'content'
    }
  ],
  输出2用单一代码块: {
    codeType: 'javascript',
    type: 'file',
    file: '/Lesson/mapbox/classes/3/pointData.js',
  },

  输出3用列表: [
    {
      title: '3.创建数据源并添加',
      content: '',
      type: 'content'
    }
  ],
  输出3用单一代码块: {
    codeType: 'javascript',
    type: 'file',
    file: '/Lesson/mapbox/classes/3/addPointData.js',
  },

  输出4用列表: [
    {
      title: '4.创建图层并添加',
      content: '',
      type: 'content'
    }
  ],
  输出4用单一代码块: {
    codeType: 'javascript',
    type: 'file',
    file: '/Lesson/mapbox/classes/3/creatPointLayer.js',
  },
}

const content = {
  // 导出md 名字
  mdFileName,
  // 导出md 内容
  mdContent,
}

export default content
