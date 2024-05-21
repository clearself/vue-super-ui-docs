# table表头自定义组件封装

## 功能需求

1. 表头字段可自定义显示/隐藏。
2. 表头字段可拖拽排序。
3. 自定义设置可保持记忆。
4. 国际化。

## 功能实现

- 基于 vuedraggable +i18n + Ant Design Vue 实现组件封装

1. 新建文件 FieldsSetting.vue

```vue
<script setup lang="ts">
import { onMounted, computed, ref, h, watchEffect } from 'vue'
import { $t } from '@/i18n'
import draggable from 'vuedraggable'
import { SettingOutlined } from '@ant-design/icons-vue'
const emit = defineEmits(['update:value', 'changeState'])
const props = defineProps({
  value: {
    type: Array,
    default: () => []
  },
  // tabKey 表格全系统唯一标识建议用一级菜单名+二级菜单名等依次类推
  tabKey: {
    type: String,
    default: ''
  },
  // 全部字段
  columns: {
    type: Array,
    default: () => []
  },
  // 过滤无操作字段
  filter: {
    type: Array,
    default: () => []
  }
})
// 默认无需操作字段'index', 'operation'
const _filters: string[] = ['index', 'operation']
const checkList = ref<string[]>([])
const allList = ref<colPro[]>([])
const disabledData = computed(() => {
  return [..._filters, ...props.filter]
})
// 全部数据处理
const initAllList = () => {
  const cacheData = localStorage.getItem(props.tabKey)
  if (cacheData) {
    const _cacheData = JSON.parse(cacheData)
    return _cacheData
  } else {
    return props.columns.map((item: any) => {
      item.checked = true
      return item
    })
  }
}
// 选中数据处理
const initList = () => {
  const cacheData = localStorage.getItem(props.tabKey)
  if (cacheData) {
    const _cacheData = JSON.parse(cacheData)
    return _cacheData.map((item: any) => item.checked && item.dataIndex)
  } else {
    return props.columns.map((item: any) => item.dataIndex)
  }
}

onMounted(() => {
  // 表头初始化及表头显示处理
  allList.value = initAllList()
  checkList.value = initList()
})
// 监听allList变化 筛选出排序后并且被选中的数据双向绑定出去
watchEffect(() => {
  const list: colPro[] = allList.value.filter((item) => item.checked)
  const _list: colPro[] = list.map((item: colPro) => {
    item.title = $t(item.lang)
    return item
  })
  emit('update:value', _list)
})
// 排序处理
const onEnd = () => {
  localStorage.setItem(props.tabKey, JSON.stringify(allList.value))
}
// 选中处理
const changeHeader = () => {
  const _allList = allList.value.map((item) => {
    if (checkList.value.includes(item.dataIndex)) {
      item.checked = true
    } else {
      if (disabledData.value.includes(item.dataIndex)) {
        item.checked = true
      } else {
        item.checked = false
      }
    }
    return item
  })
  localStorage.setItem(props.tabKey, JSON.stringify(_allList))
}
</script>
<template>
  <a-dropdown>
    <a-button size="small" shape="circle" :icon="h(SettingOutlined)" />
    <template #overlay>
      <a-menu>
        <div class="left-tip my-1 pl-1">
          <span>{{ $t('dragOrder') }}</span>
        </div>
        <a-checkbox-group v-model:value="checkList" @change="changeHeader">
          <draggable
            tag="div"
            :item-key="(key: any) => key.dataIndex"
            class="pb-1"
            :list="allList"
            animation="300"
            @end="onEnd"
          >
            <template #item="{ element }">
              <div class="pl-1">
                <a-checkbox v-if="!disabledData.includes(element.dataIndex)" :value="element.dataIndex">{{
                  $t(element.lang)
                }}</a-checkbox>
              </div>
            </template>
          </draggable>
        </a-checkbox-group>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<style lang="scss" scoped></style>

```

2. 组件中使用

```vue
<template>
      <div>
        <!-- tabKey 表格全系统唯一标识 -->
        <fields-setting 
            tabKey="base-setting-customer"
            v-model:value="columnsList"
            :columns="columns" />
      </div>
    </div>
      <a-table
        bordered
        :columns="columnsList"
        :row-key="(record: any) => record.id"
        :data-source="tableData"
        :pagination="pagination"
        :loading="loading"
        :scroll="{ y: scrollY }"
        @change="handleTableChange"
      >
      </a-table>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
// 引入自定义表头设置组件 FieldsSetting
import FieldsSetting from '@/components/FieldsSetting'
import useTable from '@/hooks/useTable'
import { useList } from './hooks/useCustomer'
const { pagination, loading, scrollY } = useTable()
const { columns } = useList()
/*
    columns 全部表头字段集合
    columns = [
        {
            lang: 'columns.operation', // 国际化处理的字符串
            dataIndex: 'operation',
            fixed: 'left',
            width: 130
        },
        ...
    ]
*/
import { $t } from '@/i18n'
const tableData = ref<any[]>([])
// columnsList 自定义设置后得到的表头字段集合
const columnsList = ref<any[]>([])
// 改变页数
const handleTableChange = (page: any) => {
  pagination.current = page.current
  pagination.pageSize = page.pageSize
  initData()
}
</script>

```
