<template>
    <div class="w3-container w3-center">
        <div class="w3-bar">
            <button class="w3-button w3-bar-item w3-hover-none" :class="{'active-btn': isRu}" @click="setRu">
                <b v-text="languages.ru"></b>
            </button>

            <button class="w3-button w3-bar-item w3-hover-none" :class="{'active-btn': !isRu}" @click="setEn">
                <b v-text="languages.en"></b>
            </button>
        </div>
    </div>
</template>

<script setup>
import { useLanguage } from '@/composables/useLanguage.js'
import { inject } from 'vue'

const languages = {
    ru: 'RU',
    en: 'EN',
}

const { isRu, setLanguage } = useLanguage()

const $consts = inject('$consts')

function setRu() {
    setLanguage($consts.RU_LANG)
}

function setEn() {
    setLanguage($consts.EN_LANG)
}
</script>

<style scoped lang="scss">
$color: #fff;
$bgcolor: #009688;

.active-btn {
    color: $color;
    background-color: $bgcolor;

    &:hover {
        color: $color !important;
        background-color: $bgcolor !important;
    }
}
</style>
