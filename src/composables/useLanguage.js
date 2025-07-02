import { computed, inject, ref } from 'vue'

const language = ref('ru')

export function useLanguage() {
    const $consts = inject('$consts')

    return {
        isRu: computed(() => language.value === $consts.RU_LANG),
        setLanguage: (value) => language.value = value
    }
}
