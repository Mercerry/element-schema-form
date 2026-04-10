export default {
  computed: {
    width (): string {
      const self = this as { attrsAll: Record<string, unknown> }
      return self.attrsAll.width ? String(self.attrsAll.width) : '100%'
    },
    height (): string {
      const self = this as { attrsAll: Record<string, unknown> }
      return self.attrsAll.height ? String(self.attrsAll.height) : '400px'
    },
    mode (): string {
      const self = this as { attrsAll: Record<string, unknown> }
      return self.attrsAll.mode ? String(self.attrsAll.mode) : 'code'
    },
    editorOptions (): Record<string, unknown> {
      const self = this as { attrsAll: Record<string, unknown> }
      return self.attrsAll.options ? (self.attrsAll.options as Record<string, unknown>) : {}
    }
  }
}
