<template>
    <div class="w3-right w3-margin-top w3-margin-bottom">
        <button :class="ruBtnClasses" @click.prevent="setRu">RU</button>
        <button :class="enBtnClasses" @click.prevent="setEn">EN</button>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useLanguageStore } from '@/stores/language.js'

const store = useLanguageStore()

const { isRu } = storeToRefs(store)

const ruBtnClasses = computed(() => {
    return `w3-button ${isRu.value ? 'w3-black' : 'w3-light-grey'} w3-small`
})

const enBtnClasses = computed(() => {
    return `w3-button ${!isRu.value ? 'w3-black' : 'w3-light-grey'} w3-small`
})

const emit = defineEmits(['switch'])

function setRu() {
	store.setLanguageRu()
	emit('switch')
}

function setEn() {
	store.setLanguageEn()
	emit('switch')
}
</script>

<style scoped lang="scss"></style>
