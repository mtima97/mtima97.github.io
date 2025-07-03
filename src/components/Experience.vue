<template>
    <div v-for="(exp, i) in experience" class="w3-container">
        <h5 class="w3-opacity">
            <b>{{ exp.role }} &frasl; {{ exp.company }}</b>
        </h5>
        <h6 class="w3-text-teal">
            <Icon fa-type="calendar" size="" color="" />{{ exp.time.start }} &mdash; <span :class="hasEndTime(exp.time.end)">Сейчас</span>
        </h6>
        <p v-for="skill in exp.skills">{{ skill }}</p>
        <hr :hidden="experience.length === i + 1">
    </div>
</template>

<script setup>
import Icon from '@/components/Icon.vue'

defineProps({
    experience: Array
})

function hasEndTime(tString) {
    if (tString === '') {
        return 'w3-tag w3-teal w3-round'
    }
    return ''
}
</script>

<style scoped lang="scss">
</style>
