import { defineStore } from 'pinia'
import { getInitialLanguage, LANGUAGES } from '@/utils/languages.js'

export const useLanguageStore = defineStore('language', {
    state: () => ({
        language: null
    }),
    getters: {
        isRu: state => state.language === LANGUAGES.RU
    },
    actions: {
        setDefault() {
            this.setLanguage(getInitialLanguage())
        },
        setLanguage(v) {
            this.language = v
        }
    }
})
