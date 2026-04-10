<template>
  <el-time-picker
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  >
  </el-time-picker>
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
  name: 'SchemaFormTimepicker',
  inheritAttrs: false
})

const { bindVal, attrsAll, onEvents } = useFormField('timepicker', props, emit)
</script>

<style lang="less" scoped>

</style>
