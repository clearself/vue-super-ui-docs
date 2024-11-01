# vue3.5新增特性

北京时间 2024年 9月 3日晚，Vue正式发布了稳定的3.5版本，看看它都有哪些改进。

![img](/vue3/vue1.png)

## useTemplateRef()

引入 useTemplateRef()，进一步简化了模板引用的使用，之前模板引用的方式是使用ref()，现在可以使用该API

```vue
<script setup>
import { onMounted, useTemplateRef } from "vue";
const aaaa = useTemplateRef("div"); //参数绑定DOM元素上的ref属性
onMounted(() => {
  console.log(aaaa.value);
});
</script>
​
<template>
  <div ref="div">前端学研社</div>
</template>

```

## 默认支持对 props 进行解构时，仍然保持其响应式特性

在 Vue 3.5 中，props 对象中的属性通常是响应式的。但是，当开发者将 props 解构为独立变量时，解构后的变量就不再保持响应性，必须使用toRefs之类的API来保持响应性。

Vue3.5中，默认支持对 props 进行解构时，仍然保持其响应式特性。

```ts
const { title } = defineProps(["title"]);
// title 仍然是响应式的

const { count = 0, msg = 'hello' } = defineProps<{
  count?: number
  message?: string
}>()

function handle() {
    doSomething(count);
}


const { count = 0 } = defineProps<{ count?: number }>()

// 这么写会编译错误。
watch(count /* ... */)

// 实际上需要这么做。
watch(() => count /* ... */)

```

## useId()

为每个应用程序创建单独的id，它们可用于生成表单元素和可访问性属性的 ID，并可在 SSR 应用程序中使用，而不会导致水合不匹配

组件1：

```ts
console.log(useId()) //v:0

```

组件2：

```ts
console.log(useId()) //v:1

```

结合 app.config.idPrefix前缀，使开发者可以更轻松地管理应用中的 ID，尤其是在多应用场景下能够避免 ID 冲突。

## onWatcherCleanup() watch的清理

注册一个清理函数，在当前 watcher 即将重新运行时执行。只能在watchEffect效果函数或watch回调函数的同步执行过程中调用（即不能await在异步函数中的语句之后调用）。

```ts
import { watch, onWatcherCleanup } from 'vue'
​
watch(id, (newId) => {
  const { response, cancel } = doAsyncWork(newId)
  // 如果之前的请求还没有完成的话
  onWatcherCleanup(cancel)
})

// 另一种调用方式
watch(id, (newId, oldId, onCleanup) => {
  const { response, cancel } = doAsyncWork(newId)
  // TODO
   onCleanup(cancel);
})
```

## watch的暂停和恢复

之前：

```ts
const stop = watch(source, callback)
​
stop()

```

3.5+：

```ts
const { stop, pause, resume } = watchEffect(() => {})
​
// 暂时暂停观察者
pause()
​
// 恢复观察者
resume()
​
// 停止观察
stop()

```

## 响应式系统优化

3.5 中，Vue 的响应式系统经历了另一次重大重构，在行为没有变化的情况下实现了更好的性能和显著改善的内存使用率。

重构还解决了 SSR 期间计算值挂起导致的过时计算值和内存问题。

## 其他特性

- data-allow-mismatch

有选择地抑制不可避免的水合不匹配。

如果客户端值不可避免地与服务器对应值不同（例如日期），我们现在可以使用data-allow-mismatch属性来抑制由此产生的水合不匹配警告：

```js
<span data-allow-mismatch>{{ data.toLocaleString() }}</span>

```

- Teleport 与 Transition 的新功能

Vue 的 Teleport 组件在 3.5 版本中也得到了增强，支持直接嵌套在 Transition 组件中。这一改进使得在构建复杂的 UI 动画效果时有了更多可能性。
同时，支持 deferred Teleport 功能，允许开发者控制组件的延迟挂载。
