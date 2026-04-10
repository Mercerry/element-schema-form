<template>
  <div class="page-form">
    <el-form :model="formModel" label-position="top">
      <schema-form
        :model="formModel"
        :schema="formSchema"
        :options="formOptions"
        ref="schemaForm"
        @change="onChange"
      >
        <template #json>
          <el-button type="primary" class="btn" @click="onPreview">预览</el-button>
        </template>
      </schema-form>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { model, schema, options } from './const'

const formModel = ref(model)
const formOptions = ref(options)
const schemaRef = ref(schema)
const mode = ref('code')

const formSchema = computed(() => {
  return schemaRef.value.map(list => {
    return list.map((item: Record<string, unknown>) => {
      if (item.prop === 'json') {
        return {
          ...item,
          dynamicAttrs: {
            mode: mode.value,
            options: { onError, onValidate }
          }
        }
      }
      if (item.prop === 'quill') return { ...item, on: { focus: onFocus } }
      if (item.prop === 'code') return { ...item, on: { blur: onBlur } }
      return item
    })
  })
})

function onPreview () {
  mode.value = mode.value === 'code' ? 'preview' : 'code'
}

function onError (err: unknown) {
  console.log('err: ', err)
}

function onValidate (json: Record<string, unknown>) {
  const errors: Array<{ path: string[]; message: string }> = []
  if (json && json.customer && !(json.customer as Record<string, unknown>).address) {
    errors.push({
      path: ['customer'],
      message: 'Required property "address" missing.'
    })
  }
  return errors
}

function onChange ({ instance }: { instance: unknown }) {
  console.log('json编辑器instance: ', instance)
}

function onFocus (quill: unknown) {
  console.log('quill编辑器instance ', quill)
}

function onBlur (code: unknown) {
  console.log('codeMirror编辑器instance ', code)
}

defineOptions({
  name: 'TestPage'
})
</script>

<style lang="less" scoped>
.page-form{
  .btn{
    margin-bottom:25px;
  }
}
</style>
