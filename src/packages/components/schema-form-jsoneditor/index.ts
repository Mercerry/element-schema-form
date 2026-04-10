import type { App } from 'vue'
import SchemaFormJsoneditor from './SchemaFormJsoneditor.vue'

SchemaFormJsoneditor.install = function (app: App) {
  app.component(SchemaFormJsoneditor.name as string, SchemaFormJsoneditor)
}

export default SchemaFormJsoneditor
