<script setup>
import { useLanguageStore } from '@/stores/language_v2.js'
import { onBeforeMount } from 'vue'
import { LANGUAGES } from '@/utils/languages.js'
import { toast } from 'vue3-toastify'

const languageStore = useLanguageStore()

onBeforeMount(() => {
    languageStore.setDefault()
})

function updateLanguage(event) {
    let language = event.target.textContent

    if (language.toLowerCase() === languageStore.language) {
        return
    }

    switch (language) {
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

const metrics = ['click_ru', 'click_en']
</script>

<template>
    <div class="w3-right w3-margin-top w3-margin-bottom">
        <button class="w3-button w3-small" :class="languageStore.isRu ? 'w3-black' : 'w3-light-grey'" @click="updateLanguage" v-track="metrics[0]">RU</button>

        <button class="w3-button w3-small" :class="languageStore.isRu ? 'w3-light-grey' : 'w3-black'" @click="updateLanguage" v-track="metrics[1]">EN</button>
    </div>
</template>

<style scoped lang="scss"></style>
