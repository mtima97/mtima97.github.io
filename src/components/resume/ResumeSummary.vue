<script setup>
import { useCvStore } from '@/stores/cv_v2.js'
import { useLanguageStore } from '@/stores/language_v2.js'
import { get } from 'lodash'

const cvStore = useCvStore()
const languageStore = useLanguageStore()
</script>

<template>
    <section class="w3-container w3-margin-bottom">
        <h3 class="w3-medium w3-border-bottom w3-padding-small">
            {{ languageStore.isRu ? 'Обо мне' : 'About Me' }}
        </h3>

        <p class="w3-small">{{ get(cvStore.cv, 'profile.summary') }}</p>
    </section>
</template>

<style scoped lang="scss"></style>
