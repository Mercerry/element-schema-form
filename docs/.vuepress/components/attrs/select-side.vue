<template>
  <el-form size="small" label-position="left" label-width="90px" class="select-side">
    <schema-form
      :model="model"
      :schema="schema"
      :options="options"
    >
    </schema-form>
  </el-form>
</template>

<script setup>
import { reactive } from 'vue'

const model = reactive({
  age: ''
})

const schema = [
  [
    {
      type: 'select',
      prop: 'age',
      attrs: {
        optionSides: ['label', 'desc'],
        popperClass: 'attr-side'
      },
      formItem: { label: '年龄' }
    }
  ]
]

const options = {
  age: [
    { label: '18', value: 18, desc: '描述A' },
    { label: '19', value: 19, desc: '描述B' },
    { label: '20', value: 20, desc: '描述C' }
  ]
}
</script>

<style lang="less">
  .attr-side {
    .side-1 {
      margin-left: 5px;
      color: #b7b4b4;
    }
  }
</style>
