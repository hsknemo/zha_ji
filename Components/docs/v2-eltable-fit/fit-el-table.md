#### 基于v2 cdn el-table 根据内容撑满表格
> 思路
> 观察el-table 生成的 dom 结构 ，通过修改col 的 width 值，使表格宽度撑满
> 控制 col 宽度的值是 el-table-column 组件的 width 属性
> 修改样式 让 col 样式为 width: fit-content;
> 计算好宽度后，赋值给 el-table-column 组件的 width 属性

##### 示例

<FitElTable />

:::code-group
```html
<div class="playGround">
    <table-content-fit :table-header="tableHeader" :table-data="tableData">
    </table-content-fit>
</div>

```
```BaseVueComponent自己封装的基类组件
(function() {
    class BaseVueComonent {
        constructor() {
        }
        parse(obj) {
            // return JSON.parse(JSON.stringify(obj));
            return obj
        }

        static new(ops) {
            return new this(ops)
        }

        // vue 的 template 模板 要 return 出去， 继承子类可覆盖直接编写改方法
        baseHtml() {}

        // vue 的配置项 可自行编辑 覆盖 父类方法原始构造
        baseConfig() {
            return {};
        }

        // 生成该组件的 vue 配置项例如 methods props data 等
        baseOpt() {
            let t = this.baseHtml();
            let opt = {
                template: t,
                mixins: [this.baseConfig()]
            };

            return opt;
        }

        // 得到最后符合 vue 规范的组件配置进行 dom 挂载
        create() {
            return this.baseOpt();
        }

    }

    window.BaseVueComonent = BaseVueComonent
})();

```

```js
/**
 * 核心样式
 .g_table .cell {
 width: fit-content !important;
 white-space: nowrap;
 }
 *
 *
 **/

  // 计算宽度库
class ElTableWidthGet {
  constructor(prop) {
    this.header = prop.header
    this.prop = prop.prop || 'prop'
  }

  static new(prop) {
    return new this(prop)
  }

  getWidthFromRealCell(prop) {
    let doms = document.querySelectorAll(`td.query-table-${prop} .cell`)
    let tr_doms = document.querySelectorAll(`th.query-table-${prop} .cell`)
    let widthMap = []
    doms.forEach(item => {
      item.removeAttribute('lockWidth')
      if (!item.getAttribute('lockWidth')) {
        item.setAttribute('lockWidth', item.offsetWidth)
      }
      let width = Number(item.getAttribute('lockWidth'))
      if (item.offsetWidth > width) {
        width = item.offsetWidth
      }
      if (!width) {
        widthMap.push(100)
        return
      }
      widthMap.push(width)
    })
    tr_doms.forEach(item => {
      item.removeAttribute('lockWidth')
      if (!item.getAttribute('lockWidth')) {
        item.setAttribute('lockWidth', item.offsetWidth)
      }
      let width = Number(item.getAttribute('lockWidth'))
      widthMap.push(width)
    })



    // console.log(widthMap, doms, prop, 'doms')

    return widthMap
  }

  getHeaderWidth() {
    const obj = {}
    const tableHeader = this.header
    const prop = this.prop
    tableHeader.forEach((item) => {
      obj[item[prop]] = obj[item[prop]] || []
      const width = this.getWidthFromRealCell(item[prop])
      obj[item[prop]] = width.concat(obj[item[prop]])
    })
    tableHeader.forEach((item) => {
      const maxWidth = obj[item[prop]].sort((a, b) => b - a)[0] + 100 + 'px'
      item.width = maxWidth
    })


    return tableHeader
  }
}
// 封装的表格
class Table extends BaseVueComonent {
  constructor(arg) {
    super(arg)
  }

  baseConfig() {
    return {
      props: {
        tableData: {
          type: Array,
          default: () => ([])
        },
        tableHeader: {
          type: Array,
          default: () => ([])
        }
      },

      mounted() {
        this.$nextTick(this.init)
      },


      methods: {
        init() {
          this.tableHeader = ElTableWidthGet.new({
            header: this.tableHeader,
            // 指定读取的表头字段属性
            prop: 'prop'
          }).getHeaderWidth()

          this.$forceUpdate()
        },
      },
    }
  }
  baseHtml() {
    return `
           <el-table 
           class='g_table'
            height="100%" 
            :data="tableData"
             v-on='$listeners'>
             <template >
               <el-table-column v-for="(item, index) in tableHeader" 
               :fixed="item.fixed ? item.fixed : false"
                 v-slot="slotScope" :key="index" 
                 :label="item.label"
                  :prop="item.prop" 
                   :class-name="'query-table-' + item.prop"
                 :width="item.width || 'auto'"
                 >
                 <div class="isSlot" v-if="item.isSlot">
                   <slot :name="item.prop" v-if="item.isSlot" :prop="item.prop" :row="slotScope.row"
                     :index="slotScope.$index"></slot>
                 </div>
                 <div class="cell" v-else>
                   {{ slotScope.row[item.prop] }}
                 </div>
               </el-table-column>

             </template>

             <slot name="tableBefore">
             </slot>
           </el-table>
        `
  }
}

const prop = {
  el: '.container',
  components: {
    'table-content-fit': Table.new().create()
  },

  data() {
    return {
      tableHeader: [{
        label: '字段1',
        prop: 'test1'
      },
        {
          label: '字段2',
          prop: 'test2'
        }
      ],
      tableData: [{
        test1: '测试1',
        test2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet in veniam quae eum alias impedit officia at necessitatibus, officiis error, porro, voluptates praesentium dolor? Sunt illum velit possimus dolores fuga.'
      },

        {
          test1: '测试2',
          test2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet in veniam quae eum alias impedit officia at necessitatibus, officiis error, porro, voluptates praesentium dolor? Sunt illum velit possimus dolores fuga.'
        },
        {
          test1: '测试3',
          test2: 'Lorem iimpedit officia at necessitatibus, officiis error, porro, voluptates praesentium dolor? Sunt illum velit possimus dolores fuga.'
        },
      ]
    }
  },
}
new Vue(prop)

```

```scss
 .g_table .cell {
     width: fit-content !important;
     white-space: nowrap;
 }
```
:::

<script setup>
    import FitElTable from "../../playgroud/fit-el-table.vue";
</script>
