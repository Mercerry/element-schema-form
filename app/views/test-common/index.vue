<template>
  <div class="page-form">
    <el-form :model="formModel" label-width="80px">
      <schema-form
        :model="formModel"
        :schema="formSchema"
        :options="formOptions"
      >
        <template #inputName>
          <el-icon><CircleCheckFilled /></el-icon>
        </template>
      </schema-form>
    </el-form>
    <div class="page-footer">
      <el-button type="primary" @click="handleAddRow">新增</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { CircleCheckFilled } from '@element-plus/icons-vue'
import { model, schema, options } from './const'

const formModel = ref(model)
const formOptions = ref(options)
const schemaRef = ref(schema)

const formSchema = computed(() => {
  return schemaRef.value.map(list => {
    return list.map((item: Record<string, unknown>) => {
      if (item.prop === 'phone') return { ...item, on: { blur: onSelectBlur } }
      return item
    })
  })
})

function onSelectBlur (val: unknown) {
  console.log('val: ', val)
}

function handleAddRow () {
  schemaRef.value.push([{
    type: 'input',
    prop: 'phone',
    formItem: { label: '联系电话' },
    colGrid: { span: 8 },
    labelTooltip: '请输入联系电话'
  }])
}

defineOptions({
  name: 'TestPage'
})
</script>

<style lang="less" scoped>

</style>
