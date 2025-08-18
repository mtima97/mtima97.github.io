import { defineStore } from 'pinia'
import { LANG } from '@/constants/lang.js'

export const useLanguageStore = defineStore('lang', {
    state: () => ({
        language: LANG.RU,
        loadedOnes: []
    }),
    getters: {
        isLoaded: (state) => state.loadedOnes.includes(state.language),
        isRu: (state) => state.language === LANG.RU
    },
    actions: {
		setLanguageRu() {
			this.language = LANG.RU
		},
		setLanguageEn() {
			this.language = LANG.EN
		},
        pushToLoaded() {
            this.loadedOnes.push(this.language)
        }
    }
})
