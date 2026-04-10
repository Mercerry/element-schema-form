<template>
  <div class="schema-form-codemirror-placeholder">
    <span>CodeMirror Editor (not available in this build)</span>
  </div>
</template>

<script setup lang="ts">
import { useFormField } from '../../composables/use-form-field'
import type { FormProps, FormValue } from '../../composables/use-form-field'

const props = withDefaults(defineProps<FormProps>(), {
  options: () => [],
  onEvents: () => ({})
})

const emit = defineEmits<{
  (event: 'update:value', value: FormValue): void
  (event: 'change', payload: { prop?: string; value: unknown }): void
}>()

defineOptions({
  name: 'SchemaFormCodemirror',
  inheritAttrs: false
})

useFormField('codemirror', props, emit)
</script>

<style lang="less" scoped>

</style>
