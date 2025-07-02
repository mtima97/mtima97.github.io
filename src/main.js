import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.errorHandler = err => {
    console.log('error', err)
}

import ConstantsPlugin from './plugins/constants.js'

app.use(ConstantsPlugin).mount('#app')
