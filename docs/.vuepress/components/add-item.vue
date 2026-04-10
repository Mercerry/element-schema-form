<template>
  <section class="basic-add-item">
    <el-form size="small" label-width="100px" :model="model" :rules="rules"  ref="ruleForm">
      <schema-form
        :model="model"
        :schema="schema"
      >
        <template v-for="flag in indexList" :key="flag" #[`delete_${flag}`]>
          <el-button
            size="small"
            type="primary"
            class="delBtn"
            @click="delDomain(flag)"
          >删除</el-button>
        </template>
        <template #submit>
          <el-form-item>
            <el-button type="primary" @click="submitForm">立即创建</el-button>
            <el-button type="primary" plain @click="addDomain">新增域名</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </template>
      </schema-form>
    </el-form>
  </section>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

const ruleForm = ref()
const indexList = ref([0])
const flagRecord = ref(0)

const model = reactive({
  email: '',
  domains_0: ''
})

const rules = {
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
  ]
}

const schema = computed(() => {
  const list = indexList.value.map((flag, index) => ([
    {
      type: 'input',
      prop: `domains_${flag}`,
      formItem: {
        label: `域名${index}`,
        rules: { required: true, message: '域名不能为空', trigger: 'blur' }
      },
      colGrid: { span: 20 }
    },
    { slot: `delete_${flag}`, colGrid: { span: 4 } }
  ]))

  return [
    [{ type: 'input', prop: 'email', formItem: { label: '邮箱' } }],
    ...list,
    [{ slot: 'submit' }]
  ]
})

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

function addDomain () {
  flagRecord.value += 1
  indexList.value.push(flagRecord.value)
  model[`domains_${flagRecord.value}`] = ''
}

function delDomain (flag) {
  indexList.value = indexList.value.filter(idx => idx !== flag)
  delete model[`domains_${flag}`]
}
</script>

<style scoped>

.basic-add-item .delBtn{
  margin-left: 20px;
}
</style>