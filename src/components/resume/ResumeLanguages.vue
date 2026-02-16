<script setup>
import { useCvStore } from '@/stores/cv_v2.js'
import { useLanguageStore } from '@/stores/language_v2.js'

const cvStore = useCvStore()
const languageStore = useLanguageStore()
</script>

<template>
    <section class="w3-container w3-margin-bottom">
        <h3 class="w3-medium w3-border-bottom w3-padding-small">
            {{ languageStore.isRu ? 'Языки' : 'Languages' }}
        </h3>

        <ul class="w3-ul">
            <li v-for="(l, i) in cvStore.cv?.languages" :key="i">
                <span class="w3-medium">{{ l.name }}</span> &mdash; <span class="w3-small w3-text-grey">{{ l.level }}</span>
            </li>
        </ul>
    </section>
</template>

<style scoped lang="scss"></style>
