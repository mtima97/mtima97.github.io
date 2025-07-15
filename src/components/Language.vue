<template>
    <p v-text="language.name"></p>
    <div ref="box" class="w3-light-grey w3-round-xlarge">
        <div class="w3-round-xlarge w3-teal" :style="lstyle"></div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useObserver } from '@/composables/useObserver.js'

const props = defineProps({
    language: Object,
})

let { level } = props.language

const box = ref(null)
const wdh = ref(0)

const lstyle = computed(() => {
    return {
        width: wdh.value > 0 ? `${wdh.value}%` : 0,
        height: '18px',
    }
})

useObserver(box, function (intersects) {
	if (intersects && wdh.value === 0) {
		wdh.value = level
	}
})
</script>

<style scoped lang="scss">
@use "@/assets/partials/mixins";

div > div {
    @include mixins.transitionable(2.5s, .2s)
}
</style>
