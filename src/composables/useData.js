import { computed } from 'vue'
import ruData from '@/data/ru/data.json'
import ruLongTexts from '@/data/ru/long_texts.js'

const ru = Object.assign({texts: ruLongTexts}, ruData)

export function useData() {
    return {
        data: computed(() => ru)
    }
}
