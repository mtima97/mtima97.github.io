<template>
    <div class="w3-container w3-padding w3-white w3-center">
        <button class="w3-button w3-border w3-round w3-margin-right" :class="{'w3-teal': isRu}" @click="setRu">RU</button>
        <button class="w3-button w3-border w3-round" :class="{'w3-teal': !isRu}" @click="setEn">EN</button>
    </div>

    <div class="w3-row-padding">
        <!-- left column -->
        <div class="w3-third">
            <div class="w3-white w3-text-grey w3-card-4">
                <Avatar :firstname="data.firstname" :lastname="data.lastname" />
                <section class="w3-container">
                    <p><Icon fa-type="briefcase" />{{ data.positionName }}</p>
                    <p><Icon fa-type="home" />{{ data.residence }}</p>
                    <p v-for="c in data.contacts">
                        <Icon :fa-type="c.label === 'email' ? 'envelope' : 'phone'" />{{ c.value }}
                    </p>
                    <hr>
                    <p class="w3-large">
                        <b><Icon fa-type="asterisk" />{{ isRu ? 'Навыки' : 'Skills' }}</b>
                    </p>
                    <Skill v-for="s in data.skills" :skill="s" />
                    <br>
                    <p class="w3-large w3-text-theme">
                        <b><Icon fa-type="globe" />{{ isRu ? 'Языки' : 'Languages' }}</b>
                    </p>
                    <Language v-for="l in data.languages" :language="l" />
                    <br>
                </section>
            </div>
        </div>
        <!-- right column -->
        <div class="w3-twothird"></div>
    </div>
</template>

<script setup>
import { inject } from 'vue'

import { useData } from '@/composables/useData.js'
import { useLanguage } from '@/composables/useLanguage.js'

import Avatar from "@/components/Avatar.vue"
import Icon from "@/components/Icon.vue"
import Language from "@/components/Language.vue"
import Skill from "@/components/Skill.vue"

const { data } = useData()
const { isRu, setLanguage } = useLanguage()

const $consts = inject('$consts')

function setRu() {
    setLanguage($consts.RU_LANG);
}

function setEn() {
    setLanguage($consts.EN_LANG)
}
</script>
