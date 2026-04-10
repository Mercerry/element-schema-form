import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'normalize.css'

import router from './router'

import SchemaFormPlugin, { SchemaFormItem } from '../src/index'

import App from './App.vue'

const app = createApp(App)

// Register all Element Plus icons globally
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus, { size: 'small' })
app.use(router)

app.component('SchemaFormItem', SchemaFormItem)

app.use(SchemaFormPlugin, {
  input: {
    placeholder: '全局定义变量实验'
  }
})

app.mount('#app')
