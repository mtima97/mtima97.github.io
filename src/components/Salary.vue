<template>
    <p>
        <Icon fa-type="dollar-sign" />
        <CountUp :key="text" :end-val="sum" :options="counterOpts" />
    </p>
</template>

<script setup>
import { computed } from 'vue'

import CountUp from 'vue-countup-v3'
import Icon from '@/components/Icon.vue'

const props = defineProps({
    sum: Number,
    text: String,
})

const counterOpts = computed(() => ({
    enableScrollSpy: true,
    prefix: '$',
    suffix: ` ${props.text}`,
    separator: ' ',
    decimal: '.',
    useEasing: false,
}))
</script>
