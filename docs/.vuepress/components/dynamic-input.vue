<template>
   <el-form label-width="80px">
    <schema-form
      :model="model"
      :schema="schema"
    >
    </schema-form>
  </el-form>
</template>

<script setup>
import { computed, reactive } from 'vue'

const model = reactive({
  name: '',
  editable: true
})

const schema = computed(() => {
  return [
    [
      {
        type: 'switch',
        prop: 'editable',
        formItem: { label: '可编辑' }
      }
    ],
    [
      {
        type: 'input',
        prop: 'name',
        formItem: { label: '姓名' },
        dynamicAttrs: { disabled: !model.editable }
      }
    ]
  ]
})
</script>

<style scoped>

</style>
