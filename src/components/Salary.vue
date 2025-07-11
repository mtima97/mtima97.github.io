<template>
    <p>
        <Icon fa-type="dollar-sign" />
        <CountUp :duration="4" :end-val="sum" :options="counterOpts" />
    </p>
</template>

<script setup>
import CountUp from 'vue-countup-v3'
import Icon from '@/components/Icon.vue'
import { computed } from 'vue'

const props = defineProps({
    sum: Number,
    text: String,
})

const counterOpts = computed(() => ({
    enableScrollSpy: true,
    scrollSpyDelay: 500,
    prefix: '$',
    suffix: ` ${props.text}`,
    separator: ' ',
    decimal: '.',
    useEasing: true,
}))
</script>
