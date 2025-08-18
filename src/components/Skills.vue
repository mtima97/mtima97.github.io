<template>
    <section class="w3-container w3-margin-bottom">
        <h3 class="w3-medium w3-border-bottom w3-padding-small">
            {{ isRu ? 'Навыки' : 'Skills' }}
        </h3>

        <ul class="w3-ul">
            <li v-for="(skill, i) in skillsView" :key="i">
                {{ skill.name }}
            </li>
        </ul>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import { useLanguageStore } from '@/stores/language'
import { useCvStore } from '@/stores/cv'

const { isRu } = storeToRefs(useLanguageStore())
const { skillsView } = storeToRefs(useCvStore())
</script>

<style scoped lang="scss"></style>
