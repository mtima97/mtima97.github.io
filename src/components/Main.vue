<template>
    <div class="w3-col s12 m8 l9 w3-padding-16">
        <section class="w3-section">
            <h4 class="w3-text-dark-grey">{{ content.data.headings.summary }}</h4>
            <p class="w3-small">{{ content.long.summary }}</p>
        </section>
    </div>
</template>

<script setup>
import { useContent } from '@/composables/useContent.js'

let { content } = useContent()
</script>

<style scoped lang="scss">
</style>