<template>
    <i class="fa fa-fw w3-margin-right w3-large w3-text-teal" :class="faType"></i>
</template>

<script setup>
defineProps({
    faType: {
        type: String,
        required: true
    }
})
</script>
