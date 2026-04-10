
<template>
  <el-input-number 
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
  ></el-input-number>
</template>

<script setup lang="ts">
import { useFormField } from '../../../../src/packages/composables/use-form-field'
import type { FormProps, FormValue } from '../../../../src/packages/composables/use-form-field'

const props = withDefaults(defineProps<FormProps>(), {
  options: () => [],
  onEvents: () => ({})
})

const emit = defineEmits<{
  (event: 'update:value', value: FormValue): void
}>()

defineOptions({
  name: 'CustomNumber',
  inheritAttrs: false
})

const { bindVal, attrsAll, onEvents } = useFormField('customnumber', props, emit)

</script>

<style scoped>

</style>