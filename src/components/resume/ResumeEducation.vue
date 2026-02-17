<script setup>
import { useCvStore } from '@/stores/cv_v2.js'
import { useLanguageStore } from '@/stores/language_v2.js'

const languageStore = useLanguageStore()
const cvStore = useCvStore()

import { normalizeDateString } from '@/utils/numbers.js'
</script>

<template>
    <section class="w3-container w3-margin-bottom">
        <h3 class="w3-medium w3-border-bottom w3-padding-small">
            {{ languageStore.isRu ? 'Образование' : 'Education' }}
        </h3>

        <div class="w3-margin-bottom" v-for="(e, i) in cvStore.cv?.education ?? []" :key="i">
            <p class="w3-medium w3-margin-bottom">
                <strong>{{ e.university }}</strong>
            </p>

            <p class="w3-small w3-text-grey w3-margin-bottom">
                {{ normalizeDateString(e.start_dt) }} &mdash; {{ normalizeDateString(e.end_dt) }}
            </p>

            <ul class="w3-ul">
                <li v-for="(a, j) in e?.achiev ?? []" :key="j">{{ a }}</li>
            </ul>
        </div>
    </section>
</template>

<style scoped lang="scss"></style>
