<template>
    <section class="w3-container w3-margin-bottom">
        <h3 class="w3-medium w3-border-bottom w3-padding-small">{{ headers('contacts') }}</h3>

        <ul class="w3-ul">
            <li v-for="(c, i) in contacts" :key="i">
                <strong>{{ `${headers(c.key)}: ` }}</strong>

                <a :href="buildRef(c.value)" target="_blank" rel="noopener noreferrer">
                    {{ c.value }}
                </a>
            </li>
        </ul>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCvStore  } from '@/stores/cv'

const { contacts, headers } = storeToRefs(useCvStore())

function buildRef(v) {
    if (/\.(kz|com|ru)$/.test(v)) {
        return `mailto:${v}`
    } else if (/\d{11,}/.test(v)) {
        return `tel:${v}`
    }

    return ''
}
</script>
