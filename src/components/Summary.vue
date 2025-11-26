<template>
    <section class="w3-container w3-margin-bottom">
        <h3 class="w3-medium w3-border-bottom w3-padding-small">{{ headers('about me') }}</h3>

        <p class="w3-small">{{ summary.text }}</p>

        <p :title="isRu ? 'Желаемая зарплата' : 'Expected salary'" class="w3-small w3-text-grey">
            <span>{{ summary.salary }} {{ summary.salary_sfx }}</span>
        </p>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCvStore  } from '@/stores/cv.js'

const { summary, headers } = storeToRefs(useCvStore())

import { useLanguageStore } from '@/stores/language.js'

const { isRu } = storeToRefs(useLanguageStore())
</script>
