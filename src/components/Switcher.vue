<script setup>
import { useLanguageStore } from '@/stores/language_v2.js'
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'
import { LANGUAGES } from '@/utils/languages.js'
import { toast } from 'vue3-toastify'

const languageStore = useLanguageStore()

const { isRu } = storeToRefs(languageStore)

onBeforeMount(() => {
    languageStore.setDefault()
})

function updateLanguage(event) {
    switch (event.target.textContent) {
        case 'RU':
            languageStore.setLanguage(LANGUAGES.RU)
            break
        case 'EN':
            languageStore.setLanguage(LANGUAGES.EN)
            break
        default:
            toast.error('invalid language')
    }
}
</script>

<template>
    <div class="w3-right w3-margin-top w3-margin-bottom">
        <button class="w3-button w3-small" :class="isRu ? 'w3-black' : 'w3-light-grey'" @click="updateLanguage">RU</button>

        <button class="w3-button w3-small" :class="isRu ? 'w3-light-grey' : 'w3-black'" @click="updateLanguage">EN</button>
    </div>
</template>

<style scoped lang="scss"></style>
