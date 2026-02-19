import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { toast } from 'vue3-toastify'
import { trackEvent } from '@/utils/analytics_v2.js'

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
        mounted(el, binding) {
            if (typeof binding.value === 'string') {
                el.dataset.event = binding.value
            }

            el.addEventListener('click', trackEvent)
        },
        unmounted(el) {
            el.removeEventListener('click', trackEvent)
        }
    })
    .mount('#app')
