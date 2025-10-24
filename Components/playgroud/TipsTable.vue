<script setup>
import { ref } from 'vue'
const datas = ref([
  {
    label: '标题1',
    prop: 'txt1',
  },
  {
    label: '标题2',
    prop: 'txt2',
  },
  {
    label: '标题3',
    prop: 'txt3',
  },
  {
    label: '标题4',
    prop: 'txt4',
  }
])

const tableData = ref([
  {txt1: 'txt1', txt2: 'txt5', txt3: 'txt3', txt4: 'txt4'},
  {txt1: 'txt1', txt2: '655', txt3: 'txt3', txt4: 'txt4'},
  {txt1: 'txt1', txt2: '3333333', txt3: 'txt3', txt4: 'txt4'},
  {txt1: 'txt1', txt2: 'txt2', txt3: 'txt3', txt4: 'txt4'},
])

const proceesValue = txt => {
  if (txt.length > 5) {
    return txt.slice(0, 5) + '...';
  }

  return txt;
}

</script>

<template>
  <div class="table_wrap">
    <header class="flex-head">
      <div class="flex_item_head" :key="index" v-for="(item, index) in datas">{{ item.label }}</div>
    </header>

    <main class="flex_tb_content">
      <div class="table_row_style" :key="idx" v-for="(it, idx) in tableData">
        <div class="content_item" :title="it[item.prop]" :key="index" v-for="(item, index) in datas">
          {{ proceesValue(it[item.prop]) }}
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
$tableWidth: 100px;
$tableAlign: center;
@mixin flexStyle($align:'center', $justContent:'space-around') {
  display: flex;
  align-items: $align;
  justify-content: $justContent;
}
.table_wrap {
  width: 500px;
  height: 300px;
  overflow: auto;
  background-color: rgba(8, 73, 151, 0.1);
  .flex-head {
    .flex_item_head {
      width: $tableWidth;
      text-align: $tableAlign;
    }
  }
  .flex-head, .table_row_style {
    @include flexStyle(center, space-around);
  }

  .table_row_style {
    &:nth-child(2n) {
      background-color: #084997;
    }
    .content_item {
      margin: 3px 0;
      width: $tableWidth;
      text-align: $tableAlign;
    }
  }




}
</style>
