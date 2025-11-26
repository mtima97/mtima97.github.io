<template>
    <header class="w3-container w3-padding-16 w3-border-bottom w3-margin-bottom">
        <h1 class="w3-xxlarge">{{ h.full_name }}</h1>

        <p :class="['w3-medium', h.position ? '' : 'header__info--invisible']">
            <span>{{ h.position }}</span>
            <span v-show="h.company"> &middot; {{ h.company }}</span>
            <span v-show="h.residence"> &middot; {{ h.residence }}</span>
        </p>
    </header>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCvStore }  from '@/stores/cv.js'

const { header: h } = storeToRefs(useCvStore())
</script>

<style scoped lang="scss">
.header__info {
	&--invisible {
		visibility: hidden;
	}
}
</style>
