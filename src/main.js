import 'normalize.css'
import '@/assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'

const app = createApp(App)

app.config.errorHandler = err => {
    console.log('error', err)
}

app.mount('#app')
