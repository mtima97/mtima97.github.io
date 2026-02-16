<script setup>
import { useLanguageStore } from '@/stores/language_v2.js'
import { useCvStore } from '@/stores/cv_v2.js'
import { computed } from 'vue'

const languageStore = useLanguageStore()
const cvStore = useCvStore()

const fallbackTxt1 = computed(() => {
    return languageStore.isRu ?
        'Полный список прошлых мест работы доступен в моём' :
        'The full list of my previous work experience is available in my'
})

const fallbackTxt2 = computed(() => {
    return languageStore.isRu ? 'профиле LinkedIn' : 'LinkedIn profile'
})
</script>

<template>
    <section class="w3-container w3-margin-bottom">
        <h3 class="w3-medium w3-border-bottom w3-padding-small">
            {{ languageStore.isRu ? 'Опыт работы' : 'Experience' }}
        </h3>

        <div class="w3-margin-bottom" v-for="(e, i) in cvStore.cv?.experience ?? []" :key="i">
            <p class="w3-medium w3-margin-bottom">
                <strong>{{ e.position }}</strong> &middot; <span>{{ e.company }}</span>
            </p>

            <p class="w3-small w3-text-grey w3-margin-bottom">
                {{ e.start_dt }} &mdash; {{ e.end_dt ?? languageStore.isRu ? 'наст.время' : 'now' }} &middot; {{ e.location }}
            </p>

            <ul class="w3-ul">
                <li v-for="(a, j) in e.achiev" :key="j">{{ a }}</li>
            </ul>
        </div>

        <div class="w3-padding-small w3-text-grey w3-small">
            {{ fallbackTxt1 }} <a href="https://www.linkedin.com/in/tmyngbay-230397/" target="_blank">{{ fallbackTxt2 }}</a>
        </div>
    </section>
</template>

<style scoped lang="scss"></style>
