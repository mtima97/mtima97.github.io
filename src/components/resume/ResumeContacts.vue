<script setup>
import { useLanguageStore } from '@/stores/language_v2.js'
import { useCvStore } from '@/stores/cv_v2.js'
import { computed } from 'vue'

const languageStore = useLanguageStore()
const cvStore = useCvStore()

const contacts = computed(() => {
    return [
        {
            label: languageStore.isRu ? 'Почта' : 'Email',
            link:  `mailto:${cvStore.email}`,
            text:  cvStore.email,
        },
        {
            label: languageStore.isRu ? 'Телефон' : 'Phone',
            link:  `tel:${cvStore.phone}`,
            text:  cvStore.phone,
        },
    ]
})
</script>

<template>
    <section class="w3-container w3-margin-bottom">
        <h3 class="w3-medium w3-border-bottom w3-padding-small">
            {{ languageStore.isRu ? 'Контакты' : 'Contacts' }}
        </h3>

        <ul class="w3-ul">
            <li v-for="(c, i) in contacts" :key="i">
                <strong>{{ c.label }}:</strong> <a :href="c.link" target="_blank">{{ c.text }}</a>
            </li>
        </ul>
    </section>
</template>

<style scoped lang="scss"></style>
