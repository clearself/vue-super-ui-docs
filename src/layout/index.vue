<template>
  <ClientOnly>
    <FirstLoading />
  </ClientOnly>
  <defaultLayout :class="getCurClass">
    <template #aside-outline-after>
      <ins
        class="adsbygoogle"
        style="display: block; height: 230px"
        data-ad-client="ca-pub-6209757986574246"
        data-ad-slot="6047648655"
        data-ad-format="auto"
        data-full-width-responsive="true"
      >
      </ins>
    </template>
    <template
      #doc-before
      v-if="!isMobile"
    >
      <ins
        class="adsbygoogle"
        style="display: block; margin: 1em auto"
        data-ad-client="ca-pub-6209757986574246"
        data-ad-slot="9323844417"
        data-ad-format="auto"
        data-full-width-responsive="true"
      >
      </ins>
      <div class="page_pv">
        本文总阅读量
        <span id="busuanzi_value_page_pv">
          <el-icon-loading class="loading-icon" />
        </span>
        次
      </div>
    </template>
    <template #doc-after>
      <div id="gitalk-container"></div>
    </template>
  </defaultLayout>
  <div :style="{width: isMobile ? '96%' : '60%',margin:'0 auto'}" v-if="showGlobalComment" id="gitalk-container"></div>
  <Live2D v-if="!isMobile" />

  <el-backtop
    v-if="!isMobile"
    :right="300"
  />
</template>

<script setup lang="ts">
import defaultLayout from "vitepress/dist/client/theme-default/Layout.vue"
import { useRoute, useRouter, useData, inBrowser } from "vitepress"
import { computed, onMounted, watch, nextTick } from "vue"
import "gitalk/dist/gitalk.css";
import createGitalk from "./gitalk";
import Live2D from "./Live2d.vue"
// import SideTool from "./SideTool.vue"
import { isMobile } from "@/utils"
import { report } from "@/api"

import FirstLoading from "./FirstLoading.vue"

const route = useRoute()
// const router = useRouter()
const debounce = (func:any, wait:any) => {
  let timeout:any;
  return function(...args:any) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};
const data = useData()

const getCurClass = computed(() => data.frontmatter.value.class)

const showGlobalComment = computed(() => data.frontmatter.value.layout)
const toReport = () => {
  report({
      path: encodeURI(route.path),
      url: encodeURI(window.location.href),
      remark: document.title,
    })
}
const debReport = debounce(toReport, 500)
// 初始化 Gitalk
const initGitalk = () => {
    if (typeof window !== 'undefined') {
    const container = document.getElementById('gitalk-container');
    if (container) {
        container.innerHTML = '';
        createGitalk(route.path);
        if(import.meta.env.DEV){
          return
        }
        debReport()
    }
    }
};
let script: any
onMounted(async () => {
  
  // eslint-disable-next-line no-import-assign
  script = await import("busuanzi.pure.js")
  script?.fetch()

  // google 文章内嵌广告
  ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})

  if (import.meta.env.DEV) {
    const v = (await import("vconsole")) as any
    new v.default()
  }


  // 初次加载时初始化 Gitalk
  nextTick(() => {
      initGitalk();
  });
})

watch(
  async () => route.path,
  async () => {
    await nextTick()
    // 访问量统计
    script?.fetch()
    initGitalk();
  },
  {
    immediate: true,
  }
)
if (inBrowser) {
  const resize = () => {
    let vh = window.innerHeight
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }
  window.addEventListener("resize", resize)
  resize()
}
</script>
<style lang="scss" scoped>
.home-comment {
  padding: 2em;
}

.el-backtop {
  z-index: 2001;
}

:deep(.VPNavBar) {
  .content {
    white-space: nowrap;
  }
}

:deep(.VPDoc.has-aside) {
  .content-container {
    max-width: 850px;
  }
}

:deep(.VPMenuGroup) {
  .title {
    white-space: nowrap;
  }
}

.page_pv {
  line-height: var(--page-pv-height);
  font-size: 14px;
  font-weight: 500;
  text-align: right;
  font-family: var(--vp-font-family-base);
  color: var(--vp-c-text-1);
}
</style>

<style lang="scss">
.loading-icon {
  display: inline;
  vertical-align: middle;
  animation: loading-rotate 2s linear infinite;
}
</style>
