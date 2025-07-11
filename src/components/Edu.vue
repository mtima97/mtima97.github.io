<template>
    <div class="w3-container">
        <h5 class="w3-opacity">
            <b v-text="edu.university"></b>
        </h5>
        <h6 class="w3-text-teal">
            <Icon fa-type="calendar" size="" color="" /><span v-html="studyPeriodHtml"></span>
        </h6>
        <p v-for="achv in edu.achievements">{{ achv }}</p>
        <hr :hidden="isHidden">
    </div>
</template>

<script setup>
import { computed } from 'vue'

import Icon from '@/components/Icon.vue'

const props = defineProps({
    edu: Object,
    isHidden: Boolean,
})

const studyPeriodHtml = computed(() => {
    let d = props.edu.duration

    return `${d.start} &mdash; ${d.end}`
})
</script>
