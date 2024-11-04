<template>
  <div class="vp-doc">
    <h2
      id="评论"
      tabindex="-1"
    >
      评论
      <a
        class="header-anchor"
        href="#评论"
        aria-hidden="true"
      >
      </a>
    </h2>
    <div ref="commentRef"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from "vue"
import { Comment } from "@tomiaa/comment"
import { useRoute } from "vitepress"

const route = useRoute()
const commentRef = ref()

const client_id =
  "54ec64a545decc698356485b822017a6df6463bc2935fca00d99e9f2cc2af3c6"
const client_secret = `14f411ec7a94c99c6b095e90168218e58adb73c541cf6916a99820703f4355ba`
let inst: any

watch(
  () => route.path,
  async () => {
    await nextTick()
    inst?.getList()
  },
  {
    deep: true,
  }
)
onMounted(() => {
  inst = new Comment({
    client_id,
    client_secret,
    owner: "clearself",
    repo: "https://gitee.com/fu-leiyang/vue-super-ui-docs.git",
    prefix: "[vueSuperUi]",
  })
  inst.mount(commentRef.value)
})
</script>
