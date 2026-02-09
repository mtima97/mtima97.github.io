import { defineStore } from 'pinia'
import conf from '@/config/api.js'
import cache from '@/utils/cache'

export const useCvStore = defineStore('mycv', {
    state: () => ({
        cv: null,
        loading: false,
    }),
    actions: {
        load(language) {
            if (cache.exists(`cv:${language}`)) {
                this.cv = cache.get(`cv:${language}`)
            } else {
                this.loading = true

                fetch(`${conf.base_url}/api/v2/cv?lang=${language}`)
                    .then(res => res.json())
                    .then(res => this.cv = res?.data)
                    .then(res => cache.set(`cv:${language}`, res))
                    .finally(() => this.loading = false)
            }
        }
    }
})
