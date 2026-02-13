import { defineStore } from 'pinia'
import { getInitialLanguage, LANGUAGES, saveLanguage } from '@/utils/languages.js'
import { useCvStore } from '@/stores/cv_v2.js'

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

            this.cacheTheLanguage()
            this.updateCV()
        },
        updateCV() {
            let cvStore = useCvStore()

            cvStore.load(this.language)
        },
        cacheTheLanguage() {
            saveLanguage(this.language)
        }
    }
})
