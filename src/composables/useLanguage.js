import { computed, inject, ref } from 'vue'
import { languages } from '@/plugins/constants.js'

const language = ref(languages.RU_LANG)

export function useLanguage() {
    const $consts = inject('$consts')

    return {
        isRu: computed(() => language.value === $consts.RU_LANG),
        setLanguage: (value) => language.value = value
    }
}
