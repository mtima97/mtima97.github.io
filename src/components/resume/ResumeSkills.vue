<script setup>
import { useLanguageStore } from '@/stores/language_v2.js'
import { useCvStore } from '@/stores/cv_v2.js'
import { computed } from 'vue'
import { get } from 'lodash'

const languageStore = useLanguageStore()
const cvStore = useCvStore()

const skills = computed(() => {
    return get(cvStore.cv, 'profile.key_skills', [])
        .toSorted((a, b) => a.order - b.order)
})
</script>

<template>
    <section class="w3-container w3-margin-bottom">
        <h3 class="w3-medium w3-border-bottom w3-padding-small">
            {{ languageStore.isRu ? 'Навыки' : 'Skills' }}
        </h3>

        <div class="w3-container container">
            <span v-for="(s, i) in skills" :key="i" class="w3-small w3-padding w3-border w3-round">
                {{ s.name }}
            </span>
        </div>
    </section>
</template>

<style scoped lang="scss">
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
