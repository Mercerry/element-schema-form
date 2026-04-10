import type { App } from 'vue'
import SchemaFormCodemirror from './SchemaFormCodemirror.vue'

SchemaFormCodemirror.install = function (app: App) {
  app.component(SchemaFormCodemirror.name as string, SchemaFormCodemirror)
}

export default SchemaFormCodemirror
