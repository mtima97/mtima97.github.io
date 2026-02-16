import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { toast } from 'vue3-toastify'
import track from '@/utils/analytics.js'

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
            el.addEventListener('click', function (event) {
                track(binding.value, event.target?.innerText)
            })
        },
        unmounted(el, binding) {
            el.removeEventListener('click', function(event) {
                track(binding.value, event.target?.innerText)
            })
        }
    })
    .mount('#app')
