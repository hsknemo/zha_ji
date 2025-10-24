<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ColDouble",

  data() {
    return {
      colData: [
          [
            {
              // 处理左侧 label 样式
              leftStyle: {
                style: {
                  color: 'red !important',
                }
              },
              // 处理右侧样式 label 样式
              rightStyle: {
                style: {
                  color: 'blue !important',
                }
              },
              leftFun: {
                click: (args) => {
                  console.log(this)
                }
              },
              label: '列1列1列1:',
              prop: 'col1',
              value: '值1值1值1值1值1值1值1值1'
            },
            {
              label: '列2列2列2:',
              prop: 'col2',
              value: '值2值2值1值1值1值1值1值1'
            },
          ],
        [
          {
            label: '列1列1列1:',
            prop: 'col1',
            value: '值1值1值1值1值1值1值1值1'
          },
          {
            label: '列2列2列2:',
            prop: 'col2',
            value: '值2值2值1值1值1值1值1值1'
          },
        ],
        [
          {
            label: '列1列1列1:',
            prop: 'col1',
            value: '值1值1值1值1值1值1值1值1'
          },
          {
            label: '列2列2列2:',
            prop: 'col2',
            value: '值2值2值1值1值1值1值1值1'
          },
        ],

        [
          {
            label: '单一Row:',
            prop: 'col1',
            value: '单一Row单一Row单一Row单一Row单一Row单一Row单一Row单一Row'
          },
        ],
      ]
    }
  },
})
</script>

<template>
  <div class="col_double_wrap">
    <template
        v-for="(item, index) in colData"
    >
      <div class="row-double"
           :key="index"
           v-if="item.length > 1"
      >
        <div  :key="idx"
              v-for="(it, idx) in item"
              class="row-item">
          <div v-on="it.leftFun ? it.leftFun.click.bind($event, it) : function() {}" v-bind="it.leftStyle || {}" class="l">{{ it.label }}</div>
          <div v-on="it.rightFun ? it.rightFun.click.bind($event, it) : function() {}" v-bind="it.rightStyle || {}" class="v">{{ it.value }}</div>
        </div>
      </div>
      <div class="single-row"
           :key="idx"
           v-for="(it, idx) in item" v-else>
        <div class="single-row-item">
          <div v-on="it.leftFun ? it.leftFun.click.bind($event, it) : function() {}" v-bind="it.leftStyle || {}" class="l">{{ it.label }}</div>
          <div v-on="it.rightFun ? it.rightFun.click.bind($event, it) : function() {}" v-bind="it.rightStyle || {}" class="v">{{ it.value }}</div>
        </div>
      </div>
    </template>

  </div>
</template>

<style scoped lang="scss">
  $font-color: #16CFF7;
  $font-size: 20px;
  $font-label-dir: right;
  @mixin flexStyle($align:'center', $justContent:'space-around') {
    display: flex;
    align-items: $align;
    justify-content: $justContent;
  }
  .col_double_wrap {
    .row-double , .row-item{
      @include flexStyle();
    }
    .row-item {
      margin-top: 10px;
      &:first-child {
        margin-right: 50px;
      }
      .l, .v {
        width: 100px;
        color: $font-color;
        text-align: $font-label-dir;
        font-size: $font-size;
      }
      .v {
        width: 150px;
        word-break: break-all;
        text-align: justify;
        color: #fff;
      }
      .l {
        white-space: nowrap;
        margin-right: 10px;
      }
    }

    .single-row {
      margin-top: 10px;
      .single-row-item {
        @include flexStyle();
        .l {
          width: 110px;
          text-align: $font-label-dir;
          white-space: nowrap;
          font-size: $font-size;
          color: $font-color;
          margin-right: 10px;
        }
        .v {
          font-size: $font-size;
          color: #fff;
        }

      }
    }
  }
</style>
