#### 基本样式
<titBorder tit="这是一个标题Yo"/>
<template v-for="item in 1">
<br />
</template>

#### 带插槽
> 样式需要自己实现yo
##### 插槽 icon
<titBorder tit="这是一个icon Yo">
    <template #icon>icon</template>
</titBorder>

<template v-for="item in 2">
<br />
</template>

##### 插槽 right

<titBorder tit="这是一个right Yo">
    <template #right>right</template>
</titBorder>

:::code-group
```html
 <div
      class="treeConWrapTitle"
  >
    <div class="left">
      <slot name="icon"></slot>
      <div class="title">{{ tit }}</div>
    </div>

    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
```

```scss
@mixin flexStyle($align: unset, $justify: unset) {
  display: flex;
  align-items: $align;
  justify-content: $justify;
}

@mixin imgStyle() {
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.treeConWrapTitle {
  position: relative;
  margin: 10px auto;
  .left {
    display: flex;
    align-items: center;

    .title {
      font-family: Microsoft YaHei;
      font-weight: 400;
      font-size: 31px;
      color: #00B2FF;
    }
  }

  &:before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 34px;
    height: 3px;
    background: #00B2FF;
  }

  &:after {
    display: block;
    margin-top: 23px;
    content: '';
    width: 100%;
    height: 1px;
    border-top: 1px solid rgba(0, 178, 255, 0.4);;
  }

  .icon {
    display: block;
    --size: 36px;
    @include imgStyle();
    width: var(--size);
    height: var(--size);
    margin-right: 15px;


  }
}

.t_header {
  .title {
    font-weight: bold !important;
  }

  .right {
    position: absolute;
    right: 0;
    top: 10px;
  }
}

.noBefore {
  .treeConWrapTitle {
    &:before {
      display: none;
    }
  }
}
```

:::

<template v-for="item in 1">
<br />

</template>

#### 插槽用法
<template v-for="item in 1">
<br />

</template>
<el-table
    height="200"
    style="width: 100%"
    :data="data.tableData"
>
<el-table-column label="名称" prop='name'>
</el-table-column>
<el-table-column label="描述" prop='desc'>
</el-table-column>

</el-table>


<script setup>
    import { reactive } from 'vue'
    import titBorder from "../../playgroud/tit-border.vue";

    const data = reactive({
        tableData: [
            {
               name: 'icon',
                desc: '左icon插槽',
            },
            {
               name: 'right',
                desc: '右侧插槽',
            }
        ]
    })
</script>
