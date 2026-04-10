import type { App } from 'vue'
import SchemaFormQuill from './SchemaFormQuill.vue'

SchemaFormQuill.install = function (app: App) {
  app.component(SchemaFormQuill.name as string, SchemaFormQuill)
}

export default SchemaFormQuill
