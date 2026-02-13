import { defineStore } from 'pinia'
import conf from '@/config/api.js'
import cache from '@/utils/cache'
import { formatSalary } from '@/utils/numbers.js'
import { get } from 'lodash'

export const useCvStore = defineStore('mycv', {
    state: () => ({
        cv: null,
        loading: false,
    }),
    getters: {
        position(state) {
            return get(state.cv, 'experience.0.position', '')
        },
        email(state) {
            return get(state.cv, 'profile.email')
        },
        phone(state) {
            return get(state.cv, 'profile.phone')
        },
        finance(state) {
            return {
                salary: formatSalary(get(state.cv, 'profile.salary', 0)),
                salary_sfx: get(state.cv, 'profile.salary_sfx'),
            }
        }
    },
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
