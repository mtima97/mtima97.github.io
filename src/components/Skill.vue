<template>
    <p>{{ skill.name }}</p>
    <div class="w3-light-grey w3-round-xlarge w3-small">
        <div class="w3-container w3-center w3-round-xlarge w3-teal" :style="{width: `${level}%`}">
            <CountUp :end-val="level" :options="countUpOptions" />
        </div>
    </div>
</template>

<script setup>
import { toRef } from 'vue'

import CountUp from 'vue-countup-v3'

const props = defineProps({
    skill: Object,
})

const level = toRef(props.skill, 'level')

const countUpOptions = {
    enableScrollSpy: true,
    suffix: '&#37;'
}
</script>
