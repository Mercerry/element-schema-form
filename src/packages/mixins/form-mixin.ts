import type { PropType } from 'vue'

type FormValue = number | string | Array<unknown> | Record<string, unknown> | boolean | Date | null | undefined

export default {
  props: {
    value: [Number, String, Array, Object, Boolean, Date] as PropType<FormValue>,
    prop: String,
    modifier: String,
    dynamicAttrs: Object as PropType<Record<string, unknown>>,
    options: Array as PropType<Array<Record<string, unknown>>>,
    onEvents: {
      type: Object as PropType<Record<string, (...args: unknown[]) => unknown>>,
      default: () => ({})
    }
  },
  computed: {
    bindVal: {
      get (): FormValue {
        return (this as InstanceType<typeof Object> & { formatVal: (v: FormValue) => FormValue; value: FormValue }).formatVal(
          (this as { value: FormValue }).value
        )
      },
      set (val: FormValue) {
        const self = this as InstanceType<typeof Object> & { formatVal: (v: FormValue) => FormValue; $emit: (...args: unknown[]) => void }
        self.$emit('update:value', self.formatVal(val))
      }
    },
    componentName (): string {
      const _name = (this as { $options: { name?: string } }).$options.name || ''
      return _name.replace('SchemaForm', '').toLowerCase()
    },
    globalOptions (): Record<string, unknown> {
      const self = this as { $globalParams?: Record<string, unknown>; componentName: string }
      return (self.$globalParams || {})[self.componentName] as Record<string, unknown> || {}
    },
    attrsAll (): Record<string, unknown> {
      const self = this as {
        globalOptions: Record<string, unknown>
        $attrs: Record<string, unknown>
        dynamicAttrs?: Record<string, unknown>
      }
      return { ...self.globalOptions, ...self.$attrs, ...self.dynamicAttrs }
    }
  },
  methods: {
    formatVal (val: FormValue): FormValue {
      const self = this as { modifier?: string }
      if (self.modifier === 'number') {
        const n = parseFloat(String(val))
        return isNaN(n) ? val : n
      }
      if (self.modifier === 'trim' && val) return (val as string).trim()
      return val
    }
  }
}
