<template>
    <section class="w3-container w3-margin-bottom">
        <h3 class="w3-medium w3-border-bottom w3-padding-small">
            {{ isRu ? 'Обо мне' : 'About me' }}
        </h3>

        <p class="w3-small">{{ summaryView }}</p>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import { useLanguageStore } from '@/stores/language.js'
import { useCvStore } from '@/stores/cv.js'

const { isRu } = storeToRefs(useLanguageStore())
const { summaryView } = storeToRefs(useCvStore())
</script>

<style scoped lang="scss"></style>
