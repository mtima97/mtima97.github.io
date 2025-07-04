<template>
    <div class="w3-container">
        <h5 class="w3-opacity"><b v-text="university"></b></h5>
        <h6 class="w3-text-teal">
            <Icon fa-type="calendar" size="" color="" /><span v-html="studyPeriodHtml"></span>
        </h6>
        <p v-for="a in achievements">{{ a }}</p>
        <hr :hidden="isHidden">
    </div>
</template>

<script setup>
import { computed } from 'vue'

import Icon from '@/components/Icon.vue'

const { edu } = defineProps({
    edu: Object,
    isHidden: Boolean,
})

const { university, duration, achievements } = edu

const studyPeriodHtml = computed(() => `${duration.start} &mdash; ${duration.end}`)
</script>
