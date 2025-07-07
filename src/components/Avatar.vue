<template>
    <section class="w3-display-container">
        <img src="@/assets/images/avatar-gpt.png" alt="avatar" />
        <div class="w3-display-bottomleft w3-container w3-text-white">
            <h2 v-if="isRu">{{ `${lastname} ${firstname}` }}</h2>
            <h2 v-else>{{ `${firstname} ${lastname}` }}</h2>
        </div>
    </section>
</template>

<script setup>
defineProps({
    firstname: String,
    lastname: String,
})

import { useLanguage } from '@/composables/useLanguage.js'

let { isRu } = useLanguage()
</script>

<style scoped lang="scss">
img {
    width: 100%;
}
</style>
