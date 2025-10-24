<script setup lang="ts">

const props = defineProps({
  tit: String,
})


</script>

<template>
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


</template>




<style scoped lang="scss">
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

</style>
