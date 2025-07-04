<template>
    <i :class="[isBrand ? 'fab' : 'fa', `fa-${faType}`, 'fa-fw', 'w3-margin-right', size, color]"></i>{{ text || '' }}
</template>

<script setup>
defineProps({
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
    },
    isBrand: {
        type: Boolean,
        default: false
    },
    text: {
        type: String,
        default: ''
    }
})
</script>
