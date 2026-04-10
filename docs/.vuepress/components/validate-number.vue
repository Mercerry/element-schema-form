<template>
   <section class="basic-number-validate">
    <el-form size="small" label-width="100px" :model="model" :rules="rules"  ref="ruleForm">
      <schema-form
        :model="model"
        :schema="schema"
      >
        <template #submit>
          <el-form-item>
            <el-button type="primary" @click="submitForm">立即创建</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </template>
      </schema-form>
    </el-form>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const ruleForm = ref()

const model = reactive({
  age: ''
})

const schema = [
  [
    { type: 'input', prop: 'age', formItem: { label: '年龄' }, modifier: 'number' }
  ],
  [
    { slot: 'submit' }
  ]
]

const rules = {
  age: [
    { required: true, message: '年龄不能为空' },
    { type: 'number', message: '年龄必须为数字值' }
  ]
}

function submitForm () {
  ruleForm.value?.validate((valid) => {
    if (valid) {
      alert('submit!')
    }
  })
}

function resetForm () {
  ruleForm.value?.resetFields()
}
</script>

<style scoped>
.basic-number-validate{
  padding: 30px;
}
</style>