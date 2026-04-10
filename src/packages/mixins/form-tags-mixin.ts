export default {
  computed: {
    showAdd (): boolean {
      const self = this as { attrsAll: Record<string, unknown> }
      return self.attrsAll['show-add'] ? Boolean(self.attrsAll['show-add']) : false
    },
    closable (): boolean {
      const self = this as { attrsAll: Record<string, unknown> }
      return Object.prototype.hasOwnProperty.call(self.attrsAll, 'closable')
        ? Boolean(self.attrsAll.closable)
        : true
    },
    type (): string {
      const self = this as { attrsAll: Record<string, unknown> }
      return self.attrsAll.type ? String(self.attrsAll.type) : ''
    },
    hit (): boolean {
      const self = this as { attrsAll: Record<string, unknown> }
      return self.attrsAll.hit ? Boolean(self.attrsAll.hit) : false
    },
    size (): string {
      const self = this as { attrsAll: Record<string, unknown> }
      return self.attrsAll.size ? String(self.attrsAll.size) : ''
    },
    effect (): string {
      const self = this as { attrsAll: Record<string, unknown> }
      return self.attrsAll.effect ? String(self.attrsAll.effect) : 'light'
    },
    color (): string {
      const self = this as { attrsAll: Record<string, unknown> }
      return self.attrsAll.color ? String(self.attrsAll.color) : ''
    },
    buttonSize (): string {
      const self = this as { attrsAll: Record<string, unknown> }
      return self.attrsAll['button-size'] ? String(self.attrsAll['button-size']) : 'small'
    },
    buttonWords (): string {
      const self = this as { attrsAll: Record<string, unknown> }
      return self.attrsAll['button-words'] ? String(self.attrsAll['button-words']) : '+ New Tag'
    },
    buttonType (): string {
      const self = this as { attrsAll: Record<string, unknown> }
      return self.attrsAll['button-type'] ? String(self.attrsAll['button-type']) : ''
    }
  }
}
