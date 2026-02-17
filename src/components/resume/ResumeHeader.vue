<script setup>
import { useCvStore } from '@/stores/cv_v2.js'
import { get } from 'lodash'

const cvStore = useCvStore()
</script>

<template>
    <header class="w3-container w3-padding-16 w3-border-bottom w3-margin-bottom">
        <h1 class="w3-xxlarge">{{ cvStore.cv?.profile?.full_name }}</h1>

        <p class="w3-medium" :class="{'header__info--invisible': cvStore.position === ''}">
            <span>{{ cvStore.position }}</span>
            <span> &middot; {{ get(cvStore.cv, 'experience.0.company') }}</span>
            <span> &middot; {{ cvStore.cv?.profile?.residence }}</span>
        </p>
    </header>
</template>

<style scoped lang="scss">
.header__info {
    &--invisible {
        visibility: hidden;
    }
}
</style>
