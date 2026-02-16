<script setup>
import { useLanguageStore } from '@/stores/language_v2.js'
import { downloadAsPdf } from '@/utils/download.js'

const languageStore = useLanguageStore()

function download() {
    downloadAsPdf('resume', 'timur_myngbay.pdf')
}
</script>

<template>
    <div class="w3-center w3-margin-top w3-margin-bottom w3-hide-small">
        <button class="w3-button w3-black" @click="download">
            {{ languageStore.isRu ? 'Скачать PDF' : 'Download PDF' }}
        </button>
    </div>
</template>

<style scoped lang="scss"></style>
