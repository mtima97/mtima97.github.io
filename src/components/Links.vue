<template>
    <p v-for="item in items">
        <a :href="item.link" target="_blank" rel="noopener" class="w3-hover-opacity">
            <Icon :fa-type="item.itype" :text="item.text" :is-brand="isBrand(item.itype)" />
        </a>
    </p>
</template>

<script setup>
import { computed } from 'vue'
import Icon from '@/components/Icon.vue'

const props = defineProps({
    contacts: Object
})

const { email, phone } = props.contacts

const items = computed(() => {
    return [
        {
            link: `tel:${phone.replace(/\s+/g, '')}`,
            itype: 'phone',
            text: phone
        },
        {
            link: `mailto:${email}`,
            itype: 'envelope',
            text: email
        },
        {
            link: 'https://github.com/mtima97?tab=repositories',
            itype: 'github',
            text: 'github.com/mtima97'
        },
        {
            link: 'https://www.linkedin.com/in/tmyngbay-230397/',
            itype: 'linkedin',
            text: 'LinkedIn (tmyngbay-230397)'
        }
    ]
})

function isBrand(typeName) {
    const brands = ['github', 'linkedin']

    return brands.includes(typeName)
}
</script>
