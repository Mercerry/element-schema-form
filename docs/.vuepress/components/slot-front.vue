<template>
  <el-form size="small">
    <schema-form
      :model="model"
      :schema="schema"
    >
      <template #name>
        <div>
          <span>姓名</span>
          <el-tooltip content="请输入用户姓名" placement="right">
            <i class="el-icon-warning"></i>
          </el-tooltip>
        </div>
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
      formItem: { label: '' },
      frontSlot: 'name'
    }
  ]
]
</script>

<style scoped>

</style>
