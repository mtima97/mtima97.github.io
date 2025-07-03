<template>
    <i :class="['fa', `fa-${faType}`, 'fa-fw', 'w3-margin-right', size, color]"></i>
</template>

<script setup>
const props = defineProps({
    faType: {
        type: String,
        default: 'suitcase'
    },
    size: {
        type: String,
        default: 'w3-large'
    },
    color: {
        type: String,
        default: 'w3-text-teal'
    }
})
</script>
