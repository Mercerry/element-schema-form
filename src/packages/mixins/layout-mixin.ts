import cloneDeep from 'lodash.clonedeep'
import type { PropType } from 'vue'

interface ColItem {
  hide?: boolean
  colGrid?: { span: number }
  [key: string]: unknown
}

export default {
  props: {
    layout: {
      type: Object as PropType<Record<string, unknown>>,
      default: () => ({})
    },
    schema: {
      type: Array as PropType<ColItem[][]>,
      required: true as const,
      validator (val: ColItem[][]) {
        return val.every((arr: ColItem[]) => Array.isArray(arr) && arr.length > 0)
      }
    },
    model: {
      type: Object as PropType<Record<string, unknown>>,
      required: true as const,
      default: () => ({})
    },
    options: {
      type: Object as PropType<Record<string, unknown>>,
      default: () => ({})
    }
  },
  computed: {
    formatedSchema (): ColItem[][] {
      const _schema: ColItem[][] = cloneDeep(this.schema as ColItem[][])
      _schema.forEach((list: ColItem[]) => {
        const _showNum = list.filter((item: ColItem) => !item.hide).length || 1
        list.forEach((obj: ColItem) => {
          obj.colGrid = obj.colGrid || { span: Math.round(24 / _showNum) }
        })
      })
      return _schema
    }
  }
}
