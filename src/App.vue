<template>
    <div class="w3-container w3-padding w3-white w3-center">
        <button class="w3-button w3-border w3-round w3-margin-right" :class="{'w3-teal': isRu}" @click="setRu">RU</button>
        <button class="w3-button w3-border w3-round" :class="{'w3-teal': !isRu}" @click="setEn">EN</button>
    </div>

    <div class="w3-row-padding">
        <!-- left column -->
        <div class="w3-third">
            <div class="w3-white w3-text-grey w3-card-4">
                <section class="w3-display-container">
                    <img src="./assets/images/avatar.jpg" style="width: 100%" alt="avatar" />
                    <div class="w3-display-bottomleft w3-container w3-text-white">
                        <h2>{{ content.fullName }}</h2>
                    </div>
                </section>

                <section class="w3-container">
                    <p><Icon fa-type="fa-briefcase" />{{ content.positionName }}</p>
                    <hr>

                    <p class="w3-large"><b><Icon fa-type="fa-asterisk" />Навыки</b></p>

                    <p>Go</p>
                    <div class="w3-light-grey w3-round-xlarge w3-small">
                        <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width: 90%">90%</div>
                    </div>
                    <br>

                    <p class="w3-large w3-text-theme"><b><Icon fa-type="fa-globe" />Языки</b></p>
                    <p>Русский</p>
                    <div class="w3-light-grey w3-round-xlarge">
                        <div class="w3-round-xlarge w3-teal" style="height:18px; width:100%"></div>
                    </div>
                    <br>
                </section>
            </div>
        </div>
        <!-- right column -->
        <div class="w3-twothird"></div>
    </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import Icon from "@/components/Icon.vue";
import { useContent } from '@/composables/useContent.js'

let { content, setLang, lang } = useContent()
const $consts = inject('$consts')

function setRu() {
    setLang($consts.RU_LANG);
}

function setEn() {
    setLang($consts.EN_LANG)
}

let isRu = computed(() => lang.value === $consts.RU_LANG)
</script>

<style lang="scss" scoped>
</style>
