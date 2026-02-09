<script setup>
import { useLanguageStore } from '@/stores/language_v2.js'
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'

const languageStore = useLanguageStore()

const { isRu } = storeToRefs(languageStore)

onBeforeMount(() => {
    languageStore.setDefault()
})
</script>

<template>
    <div class="w3-right w3-margin-top w3-margin-bottom">
        <button class="w3-button w3-small" :class="isRu ? 'w3-black' : 'w3-light-grey'">RU</button>

        <button class="w3-button w3-small" :class="isRu ? 'w3-light-grey' : 'w3-black'">EN</button>
    </div>
</template>

<style scoped lang="scss"></style>
