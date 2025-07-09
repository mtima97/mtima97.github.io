<template>
    <p v-text="lname"></p>
    <div ref="box" class="w3-light-grey w3-round-xlarge">
        <div class="w3-round-xlarge w3-teal" :style="lstyle"></div>
    </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
    language: Object,
})

const {name: lname, level} = props.language

const box = ref(null)
const lwidth = ref(0)
const lstyle = computed(() => {
    return {
        width: lwidth.value > 0 ? `${lwidth.value}%` : 0,
        height: '18px',
    }
})

const callback = entries => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            lwidth.value = level
            observer.unobserve(box.value)
        }
    }
}

const observer = new IntersectionObserver(callback, {
    threshold: 0.5,
})

onMounted(() => {
    if (box.value) {
        observer.observe(box.value)
    }
})

onBeforeUnmount(() => observer.disconnect())
</script>

<style scoped lang="scss">
div > div {
    transition: width .8s ease-out .4s;
}
</style>
