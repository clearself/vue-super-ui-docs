---
layout: home

title: Vue Super UI
titleTemplate: Super UI Components Library

hero:
  name: Vue Super UI
  text: Super UI 组件库
  tagline: 基于 Vue3 + Ant Design Vue + Vite 开发
  image:
    src: /amazing-logo.svg
    alt: Vue Super UI
  actions:
    - theme: brand
      text: Get Started
      link: /docs/guide/features
    - theme: brand
      text: GitHub
      link: https://github.com/clearself
features:
  - icon:
      src: /svgs/fe.svg
      alt: 前端
      width: 32
      height: 32
    title: WEB前端技术当前形势
    details: 新技术的出现和老技术的淘汰让前端开发者们需要不断地学习和更新知识。特别是在经济不好的情况下，是否掌握新的技术很大程度决定着你是否被淘汰。
  - icon:
      src: /svgs/vue.svg
      alt: Vue
      width: 32
      height: 32
    title: Vue3 渐进式界面构建框架
    details: 最火的框架之一，比vue2速度更快，体积更小；提供更先进的内置组件；组合API，更好的组合逻辑，更接近js，按需加载，越来越多公司开始使用vue3。
  - icon:
      src: /svgs/react.svg
      alt: React
      width: 32
      height: 32
    title: React 构建用户界面的首选
    details: 是由Facebook开发的开源JavaScript库，用于构建用户界面。它以组件化的思想为基础，将用户界面划分为多个可重用的组件。这使得开发者可以将复杂的UI拆分为简单的部分，便于开发和维护。
  - icon: 🛠️
    title: 开发依赖
    details: 采用 Vue@3.3.4 + TypeScript@5.2.2 + Vite@4.4.11 + Less@4.2.0 实现
  - icon: ⚡️
    title: border-box
    details: '所有组件 CSS 样式均使用 box-sizing: border-box; 模式'
  - icon: 🚀
    title: 开箱即用
    details: 目前共有 52 个常用基础 UI 组件，以及 11 个常用工具函数
---

<script setup>
// import GithubChart from './components/GithubChart.vue'
import SitePv from './components/SitePv.vue'
</script>

<!-- <GithubChart /> -->

<SitePv />

