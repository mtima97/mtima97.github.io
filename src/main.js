import { createPinia } from 'pinia'
import { createApp } from 'vue'
import './assets/main.scss'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.config.errorHandler = (err, instance, info) => {
	console.error('vue error', err, info)
}

app.use(pinia).mount('#app')
