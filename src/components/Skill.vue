<template>
    <p>{{ skill.name }}</p>
    <div class="w3-light-grey w3-round-xlarge w3-small">
        <div ref="box" class="w3-container w3-center w3-round-xlarge w3-teal" :style="{width: boxWidth > 0 ? `${boxWidth}%` : 0}">
            <CountUp v-if="boxWidth > 0" :end-val="skill.level" :duration="2" :options="countUpOptions" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import { useObserver } from '@/composables/useObserver.js'

import CountUp from 'vue-countup-v3'

const props = defineProps({
    skill: Object,
})

const box = ref(null)
const boxWidth = ref(0)

useObserver(box, function (intersects) {
	if (intersects) {
		boxWidth.value = props.skill.level
	}
})

const countUpOptions = {
	useEasing: false,
    suffix: '&#37;'
}
</script>

<style scoped lang="scss">
@use "@/assets/partials/mixins";

div > div {
	@include mixins.transitionable(2s, 0s);
}
</style>
