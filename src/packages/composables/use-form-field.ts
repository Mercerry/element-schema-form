import { computed, getCurrentInstance, useAttrs } from 'vue'
import type { ComputedRef } from 'vue'

export type FormValue = number | string | Array<unknown> | Record<string, unknown> | boolean | Date | null | undefined

export type FormProps = {
  value?: FormValue
  prop?: string
  modifier?: string
  dynamicAttrs?: Record<string, unknown>
  options?: Array<Record<string, unknown>>
  onEvents?: Record<string, (...args: unknown[]) => unknown>
}

export type FormEmit = {
  (event: 'update:value', value: FormValue): void
}

function formatVal (val: FormValue, modifier?: string): FormValue {
  if (modifier === 'number') {
    const n = parseFloat(String(val))
    return isNaN(n) ? val : n
  }
  if (modifier === 'trim' && typeof val === 'string') {
    return val.trim()
  }
  return val
}

export function useFormField (componentName: string, props: FormProps, emit: FormEmit): {
  bindVal: ComputedRef<FormValue>
  attrsAll: ComputedRef<Record<string, unknown>>
  onEvents: ComputedRef<Record<string, (...args: unknown[]) => unknown>>
  options: ComputedRef<Array<Record<string, unknown>>>
} {
  const attrs = useAttrs()
  const instance = getCurrentInstance()

  const globalOptions = computed<Record<string, unknown>>(() => {
    const globalParams = instance?.appContext.config.globalProperties.$globalParams as Record<string, Record<string, unknown>> | undefined
    return (globalParams || {})[componentName] || {}
  })

  const bindVal = computed<FormValue>({
    get () {
      return formatVal(props.value, props.modifier)
    },
    set (val) {
      emit('update:value', formatVal(val, props.modifier))
    }
  })

  const attrsAll = computed<Record<string, unknown>>(() => {
    return {
      ...globalOptions.value,
      ...attrs,
      ...(props.dynamicAttrs || {})
    }
  })

  const onEvents = computed<Record<string, (...args: unknown[]) => unknown>>(() => {
    return props.onEvents || {}
  })

  const options = computed<Array<Record<string, unknown>>>(() => {
    return props.options || []
  })

  return {
    bindVal,
    attrsAll,
    onEvents,
    options
  }
}
