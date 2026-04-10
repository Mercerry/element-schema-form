export default {
  computed: {
    cmOptions (): Record<string, unknown> {
      const self = this as { attrsAll: Record<string, unknown> }
      return self.attrsAll.cmOptions
        ? (self.attrsAll.cmOptions as Record<string, unknown>)
        : { tabSize: 2, lineNumbers: true, line: true }
    }
  }
}
