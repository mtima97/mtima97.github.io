<template>
    <section class="w3-container w3-margin-bottom">
        <h3 class="w3-medium w3-border-bottom w3-padding-small">{{ headers('experience') }}</h3>

        <div v-for="(exp, i) in experience" :key="i" class="w3-margin-bottom">
            <p class="w3-medium w3-margin-bottom">
                <strong>{{ exp.position }}</strong>
                <span v-show="exp.company">&nbsp;{{ exp.company }}</span>
            </p>

            <p class="w3-small w3-text-grey w3-margin-bottom">
                <span v-html="exp.period"></span>
                <span v-show="exp.location"> &middot; {{ exp.location }}</span>
            </p>

            <ul class="w3-ul">
                <li v-for="(a, j) in exp.achiev" :key="j">{{ a }}</li>
            </ul>

            <div class="w3-padding-small w3-text-grey w3-small">
                {{ earlier[0] }} <a :href="linkedInUrl" target="_blank">{{ earlier[1] }}</a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCvStore } from '@/stores/cv.js'

const { headers, experience } = storeToRefs(useCvStore())

const linkedInUrl = 'https://www.linkedin.com/in/tmyngbay-230397/'

import { useLanguageStore } from '@/stores/language.js'
import { computed } from 'vue'

const { isRu } = storeToRefs(useLanguageStore())

const earlier = computed(() => {
    return isRu.value ?
        ['Полный список прошлых мест работы доступен в моём', 'профиле LinkedIn'] :
        ['The full list of my previous work experience is available in my', 'LinkedIn profile']
})
</script>
