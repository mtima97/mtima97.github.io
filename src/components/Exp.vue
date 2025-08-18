<template>
    <section class="w3-container w3-margin-bottom">
        <h3 class="w3-medium w3-border-bottom w3-padding-small">
            {{ isRu ? 'Опыт работы' : 'Experience' }}
        </h3>

        <div v-for="(job, i) in experienceView" :key="i" class="w3-margin-bottom">
            <p class="w3-medium w3-margin-bottom">
                <strong>{{ job.position }}</strong>
                <span v-show="job.company">&nbsp;{{ job.company }}</span>
            </p>

            <p class="w3-small w3-text-grey w3-margin-bottom">
                <span v-html="job.period"></span>
                <span v-show="job.location"> &middot; {{ job.location }}</span>
            </p>

            <ul class="w3-ul">
                <li v-for="(p, j) in job.points" :key="j">{{ p }}</li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import { useCvStore } from '@/stores/cv.js'
import { useLanguageStore } from '@/stores/language.js'

const { experienceView } = storeToRefs(useCvStore())
const { isRu } = storeToRefs(useLanguageStore())
</script>

<style scoped lang="scss"></style>
