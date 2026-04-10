<template>
  <el-form size="small">
    <schema-form
      :model="model"
      :schema="schema"
    >
      <template #name>
        <el-form-item label="活动名称">
          <el-input v-model="model.name"></el-input>
        </el-form-item>
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
  [{ slot: 'name' }]
]
</script>

<style scoped>

</style>
