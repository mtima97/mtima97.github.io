<template>
    <p v-text="name"></p>
    <div class="w3-light-grey w3-round-xlarge">
        <div class="w3-round-xlarge w3-teal lang-level" :style="{width: `${level}%`}"></div>
    </div>
</template>

<script setup>
const { language } = defineProps({
    language: Object,
})

const {name, level} = language
</script>

<style scoped lang="scss">
.lang- {
    &level {
        height: 18px;
    }
}
</style>
