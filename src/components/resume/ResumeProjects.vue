<script setup>
import { useLanguageStore } from '@/stores/language_v2.js'
import { useCvStore } from '@/stores/cv_v2.js'

const languageStore = useLanguageStore()
const cvStore = useCvStore()
</script>

<template>
    <section class="w3-container w3-margin-bottom">
        <h3 id="projects" class="w3-medium w3-border-bottom w3-padding-small">
            {{ languageStore.isRu ? 'Проекты' : 'Projects' }}
        </h3>

        <div class="w3-margin-bottom" v-for="(p, i) in cvStore.cv?.projects ?? []" :key="i">
            <p class="w3-medium w3-margin-bottom">
                <a :href="p.link" target="_blank"><strong>{{ p.name }}</strong></a>
            </p>

            <ul class="w3-ul">
                <li v-for="(pt, j) in p?.points ?? []" :key="j">{{ pt }}</li>
            </ul>
        </div>
    </section>
</template>

<style scoped lang="scss"></style>
