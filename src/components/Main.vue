<template>
    <div class="w3-col s12 m8 l9 w3-padding-16">
        <section class="w3-section">
            <h4 class="w3-text-dark-grey" v-text="summary"></h4>
        </section>
    </div>
</template>

<script setup>
import ruData from '@/data/ru/main.json'

const summary = ruData.headings.summary
</script>

<style scoped lang="scss">
</style>