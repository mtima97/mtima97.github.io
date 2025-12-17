import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { toast } from 'vue3-toastify'
import { collectMetrics } from '@/utils/base.js'

import '@/assets/main.scss'

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.config.errorHandler = (err, instance, info) => {
    toast.error(err?.message ?? info)
}

app
    .use(pinia)
    .directive('track', {
        mounted(el) {
            el.addEventListener('click', collectMetrics)
        },
        unmounted(el) {
            el.removeEventListener('click', collectMetrics)
        }
    })
    .mount('#app')
