# 快速上手<BackTop />

## 安装

**With PNPM**

```bash
$ pnpm i vue-super-ui
# or
$ pnpm add vue-super-ui
```

**With YARN**

```bash
$ yarn add vue-super-ui
```

**With NPM**

```bash
$ npm i vue-super-ui
```

## 使用

> **Global**

```ts
import { createApp } from 'vue'
import App from './App.vue'

import VueSuperUI from 'vue-super-ui'
import 'vue-super-ui/css'

const app = createApp(App)
app.use(VueSuperUI)

app.mount('#app')
```

> **Local**

```vue
<script setup lang="ts">
import { Button } from 'vue-super-ui'
import 'vue-super-ui/css'
</script>

<template>
  <Button></Button>
</template>
```
