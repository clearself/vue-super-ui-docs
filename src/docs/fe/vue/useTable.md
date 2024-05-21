# 基于Ant Design Vue 封装useTable hooks

- 在项目开发中经常会使用Table,我们用的antd或者element等前端UI框架中的Table组件需要传递一些参数,比如tableData、pagination、tableData还有就是一些查询的方法和参数,每次使用都要重新声明就很繁琐,所以现在就来封装一个Vue3中的useTable。

## 1. 新建hooks useTable.ts 文件

```ts
// useTable.ts
import { ref, toRefs, reactive, computed, nextTick } from 'vue'
// 国际化
import { $t } from '@/i18n'
export default function useTable(options?: Record<string, any>) {
  const loading = ref<boolean>(false)
  const dataObj = reactive({
    selectedRowKeys: <any>[], // 选中的数据的key 
    selectedRows: <any>[]    // 选中的数据
  })
  const pagination = reactive({
    current: 1,
    pageSize: options?.pageSize ?? 30,
    showSizeChanger: options?.showSizeChanger ?? true, // 用于控制展示每页多少条的下拉
    showQuickJumper: options?.showQuickJumper ?? false,
    total: 0,
    pageSizeOptions: options?.pageSizeOptions ?? ['10', '20', '30', '40', '50', '100'],
    showTotal: (total: number) => `${$t('total')} ${total} ${$t('pieces')}`,
    onShowSizeChange: pageSizeChange,
    onChange: pageChange
  })
  // 页数改变的方法
  function pageSizeChange(_val: number, pageNum: number) {
    pagination.pageSize = pageNum // 修改每页显示的条数
    pagination.current = 1
  }
  // 点击上一页下一页的方法
  function pageChange(page: number) {
    pagination.current = page
  }
  // 选中处理
  const rowSelection = computed(() => (type: string = 'radio') => {
    const { selectedRowKeys } = dataObj
    return {
      preserveSelectedRowKeys: true, // 跨页选中
      type: type, // 单选/复选  默认单选
      columnWidth: 80,
      columnTitle: type === 'radio' ? $t('columns.selection') : '',
      selectedRowKeys, // 取消选中（必须加上不然无效）
      onChange: (selectedRowKeys: (string | number)[], selectedRows: any[]) => {
        dataObj.selectedRowKeys = selectedRowKeys
        dataObj.selectedRows = selectedRows
      }
    }
  })
  // 取消表格选中方法
  const clearTableSelected = () => {
    dataObj.selectedRowKeys = []
    dataObj.selectedRows = []
  }

  return {
    ...toRefs(dataObj),
    pagination,
    loading,
    rowSelection,
    clearTableSelected
  }
}

```

## 2. 改造 useTable hooks 让表格高度可以自适应

```ts
// useTable.ts
import { ref, toRefs, reactive, computed, onMounted, nextTick } from 'vue'
// 国际化
import { $t } from '@/i18n'
/**
 * 获取第一个表格的可视化高度
 * @param {*} extraHeight 额外的高度(表格底部的内容高度 Number类型,默认为74)
 * @param {*} id 当前页面中有多个table时需要制定table的id
 */
const getTableScroll = (extraHeight?: number, id?: any) => {
  extraHeight = extraHeight || 64
  let tHeader = null
  if (id) {
    const tableDom = document.getElementById(id)
    tHeader = tableDom ? tableDom.getElementsByClassName('ant-table-thead')[0] : null
  } else {
    tHeader = document.getElementsByClassName('ant-table-thead')[0]
  }
  //表格内容距离顶部的距离
  let tHeaderBottom = 0
  if (tHeader) {
    tHeaderBottom = tHeader.getBoundingClientRect().bottom
  }
  //窗体高度-表格内容顶部的高度-表格内容底部的高度
  const height = `calc(100vh - ${tHeaderBottom + extraHeight}px)`
  return height
}
export default function useTable(options?: Record<string, any>) {
  const loading = ref<boolean>(false)
  const scrollY = ref('')
  const dataObj = reactive({
    selectedRowKeys: <any>[], // 选中的数据的key 
    selectedRows: <any>[]    // 选中的数据
  })
  const pagination = reactive({
    current: 1,
    pageSize: options?.pageSize ?? 30,
    showSizeChanger: options?.showSizeChanger ?? true, // 用于控制展示每页多少条的下拉
    showQuickJumper: options?.showQuickJumper ?? false,
    total: 0,
    pageSizeOptions: options?.pageSizeOptions ?? ['10', '20', '30', '40', '50', '100'],
    showTotal: (total: number) => `${$t('total')} ${total} ${$t('pieces')}`,
    onShowSizeChange: pageSizeChange,
    onChange: pageChange
  })
  // 页数改变的方法
  function pageSizeChange(_val: number, pageNum: number) {
    pagination.pageSize = pageNum // 修改每页显示的条数
    pagination.current = 1
  }
  // 点击上一页下一页的方法
  function pageChange(page: number) {
    pagination.current = page
  }
  // 选中处理
  const rowSelection = computed(() => (type: string = 'radio') => {
    const { selectedRowKeys } = dataObj
    return {
      preserveSelectedRowKeys: true, // 跨页选中
      type: type, // 单选/复选  默认单选
      columnWidth: 80,
      columnTitle: type === 'radio' ? $t('columns.selection') : '',
      selectedRowKeys, // 取消选中（必须加上不然无效）
      onChange: (selectedRowKeys: (string | number)[], selectedRows: any[]) => {
        dataObj.selectedRowKeys = selectedRowKeys
        dataObj.selectedRows = selectedRows
      }
    }
  })
  // 取消表格选中方法
  const clearTableSelected = () => {
    dataObj.selectedRowKeys = []
    dataObj.selectedRows = []
  }
    onMounted(() => {
        nextTick(() => {
        scrollY.value = getTableScroll()
        window.onresize = debounce(() => {
            scrollY.value = getTableScroll()
        }, 50)
        })
    })
  return {
    ...toRefs(dataObj),
    pagination,
    loading,
    rowSelection,
    clearTableSelected,
    scrollY
  }
}

```

## 3. 在 index.vue 文件中使用 useTable hooks

```vue
<!-- index.vue -->
<template>
    <a-table
        bordered
        :row-selection="rowSelection()"
        :columns="columns"
        :row-key="(record: any) => record.id"
        :data-source="dataSource"
        :pagination="pagination"
        :loading="loading"
        :scroll="{ y: scrollY}"
        @change="handleTableChange"
    >
    </a-table>
</template>
<script setup lang="ts">
import { computed, watch, reactive, ref } from 'vue'
import useTable from '@/hooks/useTable'
const { pagination, selectedRowKeys, selectedRows, rowSelection, clearTableSelected,scrollY } = useTable()
</script>
```

- 注：rowSelection()不传任何参数默认单选，rowSelection('checkbox')时多选
