<template>
  <el-form-item :prop="col.prop" v-bind="col.formItem" class="schema-form-item">
    <template #label v-if="col.labelSlot">
      <slot :name="col.labelSlot"></slot>
    </template>
    <template #label v-else-if="col.labelTooltip">
      <span class="schema-label">{{ labelContent }}</span>
      <el-tooltip :content="col.labelTooltip">
        <el-icon><Warning /></el-icon>
      </el-tooltip>
    </template>
    <span v-if="col.frontHtml" v-html="col.frontHtml" />
    <slot :name="col.frontSlot" v-if="col.frontSlot"></slot>
    <component
      v-bind="{ ...col.attrs, ...$attrs }"
      :is="getComponentName(col.type)"
      :prop="col.prop"
      v-model:value="model[col.prop]"
      :modifier="col.modifier"
      :dynamicAttrs="col.dynamicAttrs"
      :onEvents="col.on"
      :options="options[col.prop]"
    >
    </component>
    <slot :name="col.rearSlot" v-if="col.rearSlot"></slot>
    <span v-if="col.rearHtml" v-html="col.rearHtml" />
  </el-form-item>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Warning } from '@element-plus/icons-vue'

interface SchemaCol {
  prop?: string
  formItem?: Record<string, unknown>
  type?: string
  modifier?: string
  dynamicAttrs?: Record<string, unknown>
  on?: Record<string, (...args: unknown[]) => unknown>
  attrs?: Record<string, unknown>
  labelSlot?: string
  labelTooltip?: string
  frontHtml?: string
  frontSlot?: string
  rearHtml?: string
  rearSlot?: string
}

const props = withDefaults(defineProps<{
  model?: Record<string, unknown>
  options?: Record<string, unknown>
  col?: SchemaCol
}>(), {
  model: () => ({}),
  options: () => ({}),
  col: () => ({})
})

defineOptions({
  name: 'SchemaFormItem',
  inheritAttrs: false
})

const builtInNames = ['input', 'select', 'radio', 'datepicker',
  'cascader', 'placeholder', 'checkbox', 'slider', 'timeselect', 'timepicker', 'jsoneditor', 'quill', 'codemirror',
  'rate', 'switch', 'colorpicker', 'tags', 'progress']

const labelContent = computed<string>(() => {
  const formItem = (props.col as Record<string, Record<string, string>>)?.formItem || {}
  return formItem.label || ''
})

function getComponentName (type = ''): string {
  if (builtInNames.includes(type)) {
    return 'schema-form-' + type
  }
  return type
}
</script>

<style lang="less" scoped>
.schema-form-item{
  .el-select{
    width: 100%;
  }
  .el-date-editor{
    width: 100%;
  }
  .el-cascader{
    width: 100%;
  }
  .el-date-editor.el-input{
    width:100%;
  }
}
</style>
