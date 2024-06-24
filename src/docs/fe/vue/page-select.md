# 基于Ant Design Vue 封装远程模糊搜索下拉分页组件page-select

- 在项目开发中经常会使用大数据量的下拉选这交互，且要模糊检索，下面是基于Ant Design Vue实现远程模糊搜索下拉分页组件page-select。

## 1. page-select 组件封装

```vue
<!-- page-select.vue -->
<template>
  <a-select
    popupClassName="page-select-box"
    show-search
    style="width: 100%"
    optionFilterProp="label"
    v-model:value="selectedKey"
    :placeholder="placeholder"
    allow-clear
    :disabled="disabled"
    :virtual="false"
    :filterOption="false"
    @popupScroll="handlePopupScroll"
    @search="searchFun"
  >
    <a-select-option v-for="(item, index) in optionsList" :key="index" :value="item.value">{{
      item.label
    }}</a-select-option>
    <a-select-option v-if="hasmore" class="select-disabled" disabled>
      <div class="ub w100 ub-ac ub-pc">
        <a-spin size="small" />
      </div>
    </a-select-option>
  </a-select>
</template>
<script setup lang="ts">
import { request } from '@/utils/service'
import { ref, onMounted, computed } from 'vue'
import { debounce } from 'lodash-es'
import { v4 as uuidv4 } from 'uuid'
const emit = defineEmits(['update:value'])
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  // aip 远程接口地址
  api: {
    type: String,
    default: ''
  },
  // disabled 禁用状态
  disabled: {
    type: Boolean,
    default: false
  },
  // immediate 是否立初始化时即执行
  immediate: {
    type: Boolean,
    default: false
  },
  // fieldNames label，value的映射字段，根据需要制定映射，默认label，value
  fieldNames: {
    type: Object,
    default: () => {
      return {
        label: 'label',
        value: 'value'
      }
    }
  },
  // query 对象，额外参数
  query: {
    type: Object,
    default: () => {}
  }
})
// 当前页数
const page = ref(1)
// 默认分页大小10 可添加额外参数进行覆盖
const pageSize = ref(10)
const totalPage = ref(0)
const selectedKey = computed({
  get() {
    return props.value ? props.value : undefined
  },
  set(val) {
    emit('update:value', val)
  }
})
const searchValue = ref('')
let uuid = uuidv4()
interface OptionsList {
  label: string
  value: string | number
}
const optionsList = ref<OptionsList[]>([])
const searchFun = debounce((value: string) => {
  searchValue.value = value
  page.value = 1
  totalPage.value = 0
  initList()
}, 500)
const hasmore = computed(() => {
  let _boolean = false
  if (page.value < totalPage.value) {
    _boolean = true
  }

  return _boolean
})
const requestData = () => {
  return request<ApiResponseData>({
    method: 'GET',
    url: props.api,
    params: { ...props.query, ...{ pageNum: page.value, pageSize: pageSize.value, searchKey: searchValue.value } }
  })
}
const isItemObj = (item: any) => {
  if (item) {
    return typeof item === 'object' ? true : false
  } else {
    return false
  }
}
// 数据初始化
const initList = async () => {
  uuid = uuidv4()
  const _uuid = uuid
  if (!props.api) {
    return
  }
  const res = await requestData()
  if (_uuid !== uuid) {
    return
  }
  if (res?.code === 200) {
    const { total = 0, data = [] } = res
    if (page.value === 1) {
      optionsList.value = data.map((item: any) => ({
        label: isItemObj(item) ? item[props.fieldNames.label] : item,
        value: isItemObj(item) ? item[props.fieldNames.value] : item
      }))
    } else {
      const list = data.map((item: any) => ({
        label: isItemObj(item) ? item[props.fieldNames.label] : item,
        value: isItemObj(item) ? item[props.fieldNames.value] : item
      }))
      optionsList.value = optionsList.value.concat(list)
    }
    totalPage.value = Math.ceil(total / pageSize.value)
  }
}
// 刷新数据
const refresh = () => {
  page.value = 1
  initList()
}
// 重置数据
const reset = () => {
  page.value = 1
  searchValue.value = ''
  totalPage.value = 0
  optionsList.value = []
}
const handlePopupScroll = (e: any) => {
  const { scrollHeight, scrollTop, clientHeight } = e.target
  //这里就是通过滚动条判断是否触底，如果触底了就让页码page加1并判断是否小于总数，执行函数
  if (scrollHeight - scrollTop === clientHeight) {
    page.value = page.value + 1
    if (page.value <= totalPage.value) {
      initList()
    } else {
      page.value = totalPage.value
    }
  }
}
defineExpose({
  refresh,
  reset
})
onMounted(() => {
  if (props.immediate) {
    initList()
  }
})
</script>
<style lang="scss">
.page-select-box .ant-select-item-option-disabled.select-disabled {
  cursor: default !important;
}
</style>

```

## 2. 在 index.vue 文件中使用 page-select

```vue
<!-- index.vue -->
<template>
    <page-select
        style="width: 220px"
        :query="{ id: 22}"
        api="/wms/manual/inbound/dropdownSkuSn"
        v-model:value="value"
        :placeholder="$t('selectTips')"
      />
    </a-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import PageSelect from './page-select.vue'
const value = ref<string>('')
</script>
```