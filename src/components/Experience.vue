<template>
    <div class="w3-container">
        <h5 class="w3-opacity">
            <b>{{ role }} &frasl; {{ company }}</b>
        </h5>
        <h6 class="w3-text-teal">
            <Icon fa-type="calendar" size="" color="" />{{ period.start }} &mdash; <span v-text="endTimeTxt" :class="[period.end ? '' : classes]"></span>
        </h6>
        <p v-for="skill in skills">{{ skill }}</p>
        <hr :hidden="isLast">
    </div>
</template>

<script setup>
import { computed } from 'vue'

import Icon from '@/components/Icon.vue'
import { useLanguage } from '@/composables/useLanguage.js'

const props = defineProps({
    experience: Object,
    isLast: Boolean,
})

const { isRu } = useLanguage()
const { company, role, time: period, skills } = props.experience

const classes = 'w3-tag w3-teal w3-round'

const endTimeTxt = computed(() => {
    if (period.end) {
        return period.end
    }

    return isRu.value ? 'Сейчас' : 'Now'
})
</script>
