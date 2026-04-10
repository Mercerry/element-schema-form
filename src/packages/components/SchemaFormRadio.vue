<template>
  <el-radio-group
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  >
    <el-radio
      v-for="(option,idx) in options"
      :key="`${option.value}_${idx}`"
      :label="option.value"
      :disabled="option.disabled"
    >
      {{option.label}}
    </el-radio>
  </el-radio-group>
</template>

<script setup lang="ts">
import { useFormField } from '../composables/use-form-field'
import type { FormProps, FormValue } from '../composables/use-form-field'

const props = withDefaults(defineProps<FormProps>(), {
  options: () => [],
  onEvents: () => ({})
})

const emit = defineEmits<{
  (event: 'update:value', value: FormValue): void
  (event: 'change', payload: { prop?: string; value: unknown }): void
}>()

defineOptions({
  name: 'SchemaFormRadio',
  inheritAttrs: false
})

const { bindVal, attrsAll, onEvents, options } = useFormField('radio', props, emit)
</script>

<style lang="less" scoped>

</style>
