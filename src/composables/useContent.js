import { ref, computed } from 'vue'
import ruData from '@/data/ru/data.json'
import ruLongTexts from '@/data/ru/long_texts.js'

const lang = ref('ru')

const ru = Object.assign({texts: ruLongTexts}, ruData)

export function useContent() {
    return {
        content: computed(() => ru),
        setLang(l) {
            lang.value = l
        },
        lang
    }
}
