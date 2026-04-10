<template>
  <el-form label-position="top">
    <schema-form
      :model="model"
      :schema="schema"
    >
    </schema-form>
  </el-form>
</template>

<script setup>
import { reactive } from 'vue'

const model = reactive({ code: 'let a = 100' })

function codeChange (code) {
  console.log(code)
}

const schema = [
  [
    {
      type: 'codemirror',
      prop: 'code',
      formItem: { label: '代码镜像' },
      attrs: {
        cmOptions: {
          tabSize: 2,
          mode: 'text/javascript',
          theme: 'night',
          lineNumbers: true,
          line: true
        }
      },
      on: {
        change: codeChange
      }
    }
  ]
]
</script>

<style scoped>

</style>
