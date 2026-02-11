<script setup>
import { useCvStore } from '@/stores/cv_v2.js'

const cvStore = useCvStore()
</script>

<template>
    <header class="w3-container w3-padding-16 w3-border-bottom w3-margin-bottom">
        <h1 class="w3-xxlarge">{{ cvStore.cv?.profile?.full_name }}</h1>
    </header>
</template>

<style scoped lang="scss"></style>
