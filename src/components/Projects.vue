<template>
    <section class="w3-container w3-margin-bottom">
        <h3 class="w3-medium w3-border-bottom w3-padding-small">
            {{ isRu ? 'Проекты' : 'Projects' }}
        </h3>

        <div v-for="(project, i) in projectsView" :key="i" class="w3-margin-bottom">
            <p class="w3-medium w3-margin-bottom">
                <strong>{{ project.name }}</strong>
            </p>

            <ul class="w3-ul">
                <li v-for="(point, j) in project.points" :key="j">{{ point }}</li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useLanguageStore } from '@/stores/language.js'
import { useCvStore } from '@/stores/cv.js'

const { isRu } = storeToRefs(useLanguageStore())
const { projectsView } = storeToRefs(useCvStore())
</script>

<style scoped lang="scss"></style>
