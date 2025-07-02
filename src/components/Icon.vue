<template>
    <i class="fa fa-fw w3-margin-right w3-large w3-text-teal" :class="classname"></i>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    faType: {
        type: String,
        required: true
    }
})

let classname = computed(() => `fa-${props.faType}`)
</script>
