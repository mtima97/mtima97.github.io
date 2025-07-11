import { computed } from 'vue'

import { useLanguage } from './useLanguage.js'

import ruData from '@/data/ru/data.json'
import ruLongTexts from '@/data/ru/long_texts.js'
import enData from '@/data/en/data.json'
import enLongTexts from '@/data/en/long_texts.js'

const ru = {...ruData, texts: ruLongTexts}

const en = {...enData, texts: enLongTexts}

export function useData() {
    const { isRu } = useLanguage()

    const data = computed(() => isRu.value ? ru : en)

    return {
        data,
    }
}
