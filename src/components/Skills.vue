<template>
    <section class="w3-container w3-margin-bottom">
        <h3 class="w3-medium w3-border-bottom w3-padding-small">{{ headers('skills') }}</h3>

        <div class="w3-container container">
            <span v-for="(skill, i) in skills" :key="i" class="w3-small w3-padding w3-border w3-round">
                {{ skill.name }}
            </span>
        </div>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCvStore  } from '@/stores/cv'

const { skills, headers } = storeToRefs(useCvStore())
</script>

<style lang="scss" scoped>
@use "sass:map";
@use "@/assets/base";

.container {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    padding-left: 0;

    @media screen and (max-width: map.get(base.$breakpoints, mobile)) {
        flex-direction: column;
    }
}
</style>
