<template>
    <div class="w3-container">
        <h5 class="w3-opacity">
            <b>{{ experience.role }} &frasl; {{ experience.company }}</b>
        </h5>
        <h6 v-if="experience.duration.end" class="w3-text-teal">
            <Icon fa-type="calendar" size="" color="" />{{ experience.duration.start }} &mdash; {{ experience.duration.end }}
        </h6>
        <h6 v-else class="w3-text-teal">
            <Icon fa-type="calendar" size="" color="" />{{ experience.duration.start }} &mdash; <span :class="classes">{{ isRu ? 'Сейчас' : 'Now' }}</span>
        </h6>
        <p v-for="skill in experience.skills">{{ skill }}</p>
        <hr :hidden="isLast">
    </div>
</template>

<script setup>
import Icon from '@/components/Icon.vue'
import { useLanguage } from '@/composables/useLanguage.js'

defineProps({
    experience: Object,
    isLast: Boolean,
})

const { isRu } = useLanguage()

const classes = 'w3-tag w3-teal w3-round'
</script>
