<template>
  <el-select
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  >
    <el-option
      v-for="(option,idx) in options"
      :key="`${option.value}_${idx}`"
      :label="option.label"
      :value="option.value"
      :disabled="option.disabled"
    >
      <template v-if="hasOptionSides">
        <span v-for="(items, index) in optionSides" :key="index" :class="`side-${index}`">
          {{ option[items] }}
        </span>
      </template>
      <span v-else>{{ option.label }}</span>
    </el-option>
  </el-select>
</template>

<script setup lang="ts">
import { computed } from 'vue'
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
  name: 'SchemaFormSelect',
  inheritAttrs: false
})

const { bindVal, attrsAll, onEvents, options } = useFormField('select', props, emit)

const optionSides = computed<string | string[]>(() => {
  return (attrsAll.value.optionSides as string | string[]) || ''
})

const hasOptionSides = computed<boolean>(() => {
  return Array.isArray(optionSides.value) && optionSides.value.length >= 2
})
</script>

<style lang="less" scoped>

</style>
