<template>
  <el-progress
    class="schema-form-progress"
    :percentage="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  />
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
  name: 'SchemaFormProgress',
  inheritAttrs: false
})

const { bindVal, attrsAll, onEvents } = useFormField('progress', props, emit)
</script>

<style lang="less" scoped>
.schema-form-progress {
  width: 100%;
}

</style>
