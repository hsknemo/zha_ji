---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "雜記"
  image:
    src: /hsq.svg
    alt: VitePress
  text: "筆記記錄、見聞所感"
#  actions:
#    - theme: brand
#      text: Markdown Examples
#      link: /markdown-examples
#    - theme: alt
#      text: API Examples
#      link: /api-examples

features:
  - icon: 🛠️
    title: 日常开发收集
    details: 所见所得
  - icon: 🚗
    title: 保姆教程
    details: 提供工作中项目比较核心的介绍
  - icon: ♿
    title: 插件集中
    details: 自己开发的一些插件
  - icon: 🐴
    title: 通用组件
    details: 写了一些界面组件
---

<footer
    class="mit_footer"
>
MIT License 2025-Present (<a href="https://github.com/hsknemo/hsknemo.github.io">
            <span class="mit_git"  style="--icon: url(https://api.iconify.design/simple-icons/github.svg); "></span>
            haskNemo 
</a>)
</footer>

<style>
.mit_footer {
    margin-top: 20px; display: flex; align-items: center; justify-content: center; width: 100%
}

.mit_footer a {
    display: flex; 
    align-items: center;
    gap: 5px;
    text-decoration: underline;
}

.mit_footer .mit_git {
    display: block;
    --size: 16px;
    width: var(--size);
    height: var(--size);
    mask-size: 100% 100%;
    background-color: currentColor;
    mask: var(--icon) no-repeat
}
</style>
