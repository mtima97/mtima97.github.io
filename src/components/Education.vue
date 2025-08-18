<template>
    <section class="w3-container w3-margin-bottom">
        <h3 class="w3-medium w3-border-bottom w3-padding-small">
            {{ isRu ? 'Образование' : 'Education' }}
        </h3>

        <div v-for="(edu, i) in educationView" :key="i" class="w3-margin-bottom">
            <p class="w3-medium w3-margin-bottom">
                <strong>{{ edu.university }}</strong>
            </p>

            <p class="w3-small w3-text-grey w3-margin-bottom" v-html="edu.period"></p>

            <ul class="w3-ul">
                <li v-for="(p, i) in edu.points" :key="i">{{ p }}</li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import { useLanguageStore } from '@/stores/language'
import { useCvStore } from '@/stores/cv.js'

const { isRu } = storeToRefs(useLanguageStore())
const { educationView } = useCvStore()
</script>

<style scoped lang="scss"></style>
