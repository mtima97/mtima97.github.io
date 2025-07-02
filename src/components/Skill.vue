<template>
    <p>{{ name }}</p>
    <div class="w3-light-grey w3-round-xlarge w3-small">
        <div class="w3-container w3-center w3-round-xlarge w3-teal" :style="{width: lvlText}">{{ lvlText }}</div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const { skill } = defineProps({
    skill: Object,
})

const {name, level} = skill

const lvlText = computed(() => `${level}%`)
</script>
