<template>
  <div
    class="schema-form-json-editor"
    :style="{width: width, height: height}"
    ref="jsonEditorEl"
  >
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useFormField } from '../../composables/use-form-field'
import type { FormProps, FormValue } from '../../composables/use-form-field'
import JSONEditor from 'jsoneditor/dist/jsoneditor.js'

const props = withDefaults(defineProps<FormProps>(), {
  options: () => [],
  onEvents: () => ({})
})

const emit = defineEmits<{
  (event: 'update:value', value: FormValue): void
  (event: 'change', payload: { prop?: string; value: FormValue; instance: InstanceType<typeof JSONEditor> | null }): void
}>()

defineOptions({
  name: 'SchemaFormJsoneditor',
  inheritAttrs: false
})

const { bindVal, attrsAll } = useFormField('jsoneditor', props, emit)

const jsonEditorEl = ref<HTMLElement | null>(null)
const jsonEditor = ref<InstanceType<typeof JSONEditor> | null>(null)

const width = computed<string>(() => attrsAll.value.width ? String(attrsAll.value.width) : '100%')
const height = computed<string>(() => attrsAll.value.height ? String(attrsAll.value.height) : '400px')
const mode = computed<string>(() => attrsAll.value.mode ? String(attrsAll.value.mode) : 'code')
const editorOptions = computed<Record<string, unknown>>(() => {
  return attrsAll.value.options ? (attrsAll.value.options as Record<string, unknown>) : {}
})

watch(mode, (val: string) => {
  if (val && jsonEditor.value) jsonEditor.value.setMode(val)
})

onMounted(() => {
  init()
})

onBeforeUnmount(() => {
  clearInstance()
})

function init () {
  if (!jsonEditorEl.value) return
  const option = {
    onChange,
    mode: mode.value,
    ...editorOptions.value
  }
  jsonEditor.value = new JSONEditor(jsonEditorEl.value, option)
  jsonEditor.value.set((bindVal.value as Record<string, unknown>) || {})
  emit('change', { prop: props.prop, value: bindVal.value, instance: jsonEditor.value })
}

function onChange () {
  try {
    const value = jsonEditor.value?.get() || {}
    bindVal.value = { ...value }
    emit('change', { prop: props.prop, value: bindVal.value, instance: jsonEditor.value })
  } catch {
    // ignore parse errors
  }
}

function clearInstance () {
  if (jsonEditor.value) {
    jsonEditor.value.destroy()
    jsonEditor.value = null
  }
}
</script>

<style lang="less" scoped>

</style>
