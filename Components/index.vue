<template>
  <div class="p_edit_container">
    <div class="layout_left">
      <el-tabs v-model="activeName" >
        <el-tab-pane
            :key="index" v-for="(item, index) in codeEditType"
            :label="item" :name="item">
          <div
              :ref="'codeContainer' + item" class="coder-editor"></div>
        </el-tab-pane>
      </el-tabs>
      <el-button
          class="ohyo-button"
          size="small"
          v-for="button in buttons"
          :key="button.text"
          :type="button.type"
          plain
          @click="onClick(button)"
      >
        {{ button.text }}
      </el-button>
    </div>



    <div class="layout_right">
      <iframe ref="iframe_wrap" width="100%" height="100%" src="/editor.html" frameborder="0"></iframe>
    </div>

  </div>
</template>

<script>
import * as monaco from 'monaco-editor';
import { ElMessage } from 'element-plus'

export default {
  props: {
    cssCode: {
      type: String,
      default: ''
    },
    jsCode: {
      type: String,
      default: ''
    },
    htmlCode: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      activeName: 'html',
      buttons: [
          {
            text: '运行',
            type: 'primary'
          },
      ],
      codeEditType: ['html', 'css', 'js'],
    }
  },

  mounted(){
    this.init()

    window.onmessage = ev => {
      if (ev.data.type === 'RESPONSE') {
        ElMessage({
          type: 'success',
          message: '加载成功☺️'
        })
      }

      if (ev.data.type === 'loaded') {
        ElMessage({
          type: 'success',
          message: 'iframe 加载完毕 准备运行代码~'
        })

        this.onClick({text: '运行'})
      }
    }

  },

  methods: {
    init(){
      this.codeEditType.forEach(item => {
        console.log(this[item + 'Code'])
        window['codeContainer' + item] = monaco.editor.create(this.$refs['codeContainer' + item][0], {
          value: this[item + 'Code'], // 编辑器初始显示文字
          language: 'javascript', // 语言
          automaticLayout: true, // 自动布局
          theme: 'vs-dark', // 官方自带三种主题vs, hc-black, or vs-dark
          // 关闭小地图
          // minimap: {
          //   enabled: false,
          // },
        });

      })
    },

    onClick(button){
      if(button.text === '运行'){
        const html = window.codeContainerhtml.getValue();
        const css = window.codeContainercss.getValue();
        const js = window.codeContainerjs.getValue();
        const iframe = this.$refs.iframe_wrap;
        iframe.contentWindow.postMessage( {
          html,
          css,
          js
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.p_edit_container {
  --el-color-primary: var(--oh-yo-default-color);
  --el-text-color-primary: #fff;
  box-sizing: border-box;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;

  .ohyo-button {
    --el-button-bg-color: #000;
    --el-button-border-color: #353535;
    --el-color-primary: #fff;
    --el-button-active-bg-color: var(--oh-yo-default-color);
    --el-button-hover-text-color: #999;
    --el-button-hover-bg-color: #000;
    --el-button-hover-border-color: #666;
    --el-border: 1px solid #999 !important;
    --el-button-active-border-color: #999;
  }

  .layout_left {
    flex: 1;
    padding: 5px;
    border-radius: 5px;
  }
  .layout_right {
    width: 100%;
    height: 100%;
  }
}
.coder-editor{
  width: 100%;
  height: 160px;
  border: 1px solid rgba(0, 0, 0, 0.08);
}
</style>
