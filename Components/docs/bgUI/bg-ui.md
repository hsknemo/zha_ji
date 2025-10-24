

##### 示例
<bgUI />




:::code-group
```html
<div class="public_blue_border_bg">
    <div class="ass"></div>
</div>
```
```scss
@mixin assBefore($beforeTop: -4px, $afterTop: -4px) {
  &:before {
    position: absolute;
    left: 0;
    top: $beforeTop;
    content: '';
    width: 14px;
    height: 4px;
    background: #13BDE4;
  }

  &:after {
    position: absolute;
    right: 0;
    top: $afterTop;
    content: '';
    width: 14px;
    height: 4px;
    background: #13BDE4;
  }
}

@mixin usuBgBorder() {
  background: #0D4061;
  border: 1px solid #0068B7;
  @include assBefore();
  .ass {
    position: absolute;
    width: 100%;
    right: 0;
    bottom: 0;
    @include assBefore(1px, 1px);
  }
}

.public_blue_border_bg {
  --mainSize: 612px;
  width: var(--mainSize);

  padding: 35px 32px 32px 49px;
  position: relative;
  @include usuBgBorder();
}
```
:::


[//]: # (<PlayGround)

[//]: # (    :codeStr='initialCode')

[//]: # (/>)

<script setup>
    import bgUI from "../../playgroud/blue-bg-border.vue"
    // import originCode from '../../playgroud/blue-bg-border.vue?raw'

    // const initialCode = `
    //          ${originCode}
    //     `
</script>
