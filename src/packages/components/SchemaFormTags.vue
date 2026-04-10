<template>
  <div class="schema-form-tag">
    <el-tag
      v-for="(tag,idx) in bindVal"
      :key="`${tag}_${idx}`"
      :type="type"
      :hit="hit"
      :size="size"
      :effect="effect"
      :color="color"
      :closable="closable"
      :disable-transitions="false"
      @close="handleClose(tag)">
      {{tag}}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="showAdd && inputVisible  "
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button
      v-if="showAdd && !inputVisible"
      class="button-new-tag"
      :size="buttonSize"
      :type="buttonType"
      @click="showInput"
    >{{buttonWords}}</el-button>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { useFormField } from '../composables/use-form-field'
import type { FormProps, FormValue } from '../composables/use-form-field'

type TagInputRef = {
  focus?: () => void
}

const props = withDefaults(defineProps<FormProps>(), {
  options: () => [],
  onEvents: () => ({})
})

const emit = defineEmits<{
  (event: 'update:value', value: FormValue): void
  (event: 'change', payload: { prop?: string; value: string[] }): void
}>()

defineOptions({
  name: 'SchemaFormTags',
  inheritAttrs: false
})

const { bindVal, attrsAll } = useFormField('tags', props, emit)

const inputVisible = ref(false)
const inputValue = ref('')
const saveTagInput = ref<TagInputRef | null>(null)

const showAdd = computed<boolean>(() => {
  return attrsAll.value['show-add'] ? Boolean(attrsAll.value['show-add']) : false
})
const closable = computed<boolean>(() => {
  return Object.prototype.hasOwnProperty.call(attrsAll.value, 'closable')
    ? Boolean(attrsAll.value.closable)
    : true
})
const type = computed<string>(() => attrsAll.value.type ? String(attrsAll.value.type) : '')
const hit = computed<boolean>(() => attrsAll.value.hit ? Boolean(attrsAll.value.hit) : false)
const size = computed<string>(() => attrsAll.value.size ? String(attrsAll.value.size) : '')
const effect = computed<string>(() => attrsAll.value.effect ? String(attrsAll.value.effect) : 'light')
const color = computed<string>(() => attrsAll.value.color ? String(attrsAll.value.color) : '')
const buttonSize = computed<string>(() => attrsAll.value['button-size'] ? String(attrsAll.value['button-size']) : 'small')
const buttonWords = computed<string>(() => attrsAll.value['button-words'] ? String(attrsAll.value['button-words']) : '+ New Tag')
const buttonType = computed<string>(() => attrsAll.value['button-type'] ? String(attrsAll.value['button-type']) : '')

function currentTags (): string[] {
  return Array.isArray(bindVal.value) ? [...(bindVal.value as string[])] : []
}

function handleClose (tag: string) {
  const tags = currentTags().filter(item => item !== tag)
  bindVal.value = tags
  emit('change', { prop: props.prop, value: tags })
}

function showInput () {
  inputVisible.value = true
  nextTick(() => {
    saveTagInput.value?.focus?.()
  })
}

function handleInputConfirm () {
  const tags = currentTags()
  if (inputValue.value) tags.push(inputValue.value)
  inputVisible.value = false
  inputValue.value = ''
  bindVal.value = tags
  emit('change', { prop: props.prop, value: tags })
}
</script>

<style lang="less">
.schema-form-tag{
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
}

</style>
