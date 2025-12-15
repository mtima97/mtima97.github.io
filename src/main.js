import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { toast } from 'vue3-toastify'

import '@/assets/main.scss'

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.config.errorHandler = (err, instance, info) => {
    toast.error(err?.message ?? info)
}

app.use(pinia).mount('#app')
