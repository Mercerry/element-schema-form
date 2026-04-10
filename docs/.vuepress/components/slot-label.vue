<template>
  <el-form size="small" label-position="left" label-width="90px" class="slot-tool">
    <schema-form
      :model="model"
      :schema="schema"
    >
      <template #ageName>
        <span>标签插槽</span>
      </template>
    </schema-form>
  </el-form>
</template>

<script setup>
import { reactive } from 'vue'

const model = reactive({
  name: ''
})

const schema = [
  [
    {
      type: 'input',
      prop: 'name',
      frontHtml: '近',
      labelSlot: 'ageName',
      formItem: {},
      rearHtml: '天'
    }
  ]
]
</script>

<style >
.slot-tool  .el-input {
  width: auto;
}
</style>
