<script setup>
import { useCvStore } from '@/stores/cv_v2.js'
import { useLanguageStore } from '@/stores/language_v2.js'
import { get } from 'lodash'
import { computed } from 'vue'

const cvStore = useCvStore()
const languageStore = useLanguageStore()

const title = computed(() => {
    return languageStore.isRu ? 'Желаемая зарплата' : 'Expected salary'
})
</script>

<template>
    <section class="w3-container w3-margin-bottom">
        <h3 class="w3-medium w3-border-bottom w3-padding-small">
            {{ languageStore.isRu ? 'Обо мне' : 'About Me' }}
        </h3>

        <p class="w3-small">{{ get(cvStore.cv, 'profile.summary') }}</p>

        <p class="w3-small w3-text-grey" :title="title">
            {{ cvStore.finance.salary }} {{ cvStore.finance.salary_sfx }}
        </p>
    </section>
</template>

<style scoped lang="scss"></style>
