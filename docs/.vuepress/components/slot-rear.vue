<template>
  <el-form size="small">
    <schema-form
      :model="model"
      :schema="schema"
    >
      <template #name>
        <div class="text-area">
          <span class="text-area__num">{{ model.name.length }}</span>字
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
      formItem: { label: '姓名' },
      rearSlot: 'name'
    }
  ]
]
</script>

<style scoped>
.text-area{
  text-align: right;
}
.text-area__num{
  margin-right:5px;
}
</style>
