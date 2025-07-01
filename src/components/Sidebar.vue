<template>
    <div class="w3-col s12 m4 l3 w3-light-gray w3-padding-16">
        <section class="w3-center w3-section">
            <h2 class="w3-text-dark-grey">{{ content.data.fullName }}</h2>
            <p class="w3-text-gray">{{ content.data.positionName }}</p>
        </section>
    </div>
</template>

<script setup>
import { useContent } from '@/composables/useContent.js'

let { content } = useContent()
</script>
