<template>
  <div class="schema-form">
    <el-row
      class="schema-form__row"
      v-bind="layout"
      v-for="(row, rowIndex) in formatedSchema"
      :key="rowIndex"
    >
      <template v-for="(col, colIndex) in row">
        <el-col v-bind="col.colGrid" v-if="!col.hide" :key="colIndex">
          <slot v-if="col.slot" :name="col.slot"></slot>
          <template v-else>
            <!-- 具体组件的配置项目 -->
            <schema-form-item
              v-bind="{ ...col.formItem, prop: col.prop, col, model, options, ...$attrs }"
            >
              <template v-if="col.labelSlot" #[col.labelSlot]>
                <slot :name="col.labelSlot"></slot>
              </template>
              <template v-if="col.frontSlot" #[col.frontSlot]>
                <slot :name="col.frontSlot"></slot>
              </template>
              <template v-if="col.rearSlot" #[col.rearSlot]>
                <slot :name="col.rearSlot"></slot>
              </template>
            </schema-form-item>
          </template>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import cloneDeep from 'lodash.clonedeep'
import SchemaFormItem from './SchemaFormItem.vue'

interface ColItem {
  hide?: boolean
  colGrid?: { span: number }
  [key: string]: unknown
}

const props = withDefaults(defineProps<{
  layout?: Record<string, unknown>
  schema: ColItem[][]
  model: Record<string, unknown>
  options?: Record<string, unknown>
}>(), {
  layout: () => ({}),
  options: () => ({})
})

defineOptions({
  name: 'SchemaForm',
  inheritAttrs: false
})

const formatedSchema = computed<ColItem[][]>(() => {
  const schema: ColItem[][] = cloneDeep(props.schema || [])
  schema.forEach((list: ColItem[]) => {
    const showNum = list.filter((item: ColItem) => !item.hide).length || 1
    list.forEach((obj: ColItem) => {
      obj.colGrid = obj.colGrid || { span: Math.round(24 / showNum) }
    })
  })
  return schema
})
</script>

<style lang="less">

</style>
