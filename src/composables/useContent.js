import { ref, computed } from 'vue'
import ruData from '@/data/ru/data.json'
import ruLongTexts from '@/data/ru/long_texts.js'

const lang = ref('ru')

export function useContent() {
    return {
        content: computed(() => ({
            data: ruData,
            long: ruLongTexts,
        }))
    }
}
