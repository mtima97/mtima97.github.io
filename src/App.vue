<template>
    <LangSwitcher />

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
                        <b><Icon fa-type="asterisk" size="" />{{ isRu ? 'Навыки' : 'Skills' }}</b>
                    </p>
                    <Skill v-for="s in data.skills" :skill="s" />
                    <br>
                    <p class="w3-large w3-text-theme">
                        <b><Icon fa-type="globe" size="" />{{ isRu ? 'Языки' : 'Languages' }}</b>
                    </p>
                    <Language v-for="l in data.languages" :language="l" />
                    <br>
                </section>
            </div>
        </div>
        <!-- right column -->
        <div class="w3-twothird mtop">
            <div class="w3-container w3-card w3-white w3-margin-bottom">
                <h2 class="w3-text-grey w3-padding-16">
                    <Icon size="w3-xxlarge" />{{ isRu ? 'Опыт работы' : 'Experience' }}
                </h2>
            </div>

            <Experience v-for="(exp, i) in data.experience" :experience="exp" :is-last="data.experience.length === i + 1" />
        </div>
    </div>
</template>

<script setup>
import { useData } from '@/composables/useData.js'
import { useLanguage } from '@/composables/useLanguage.js'

import Avatar from "@/components/Avatar.vue"
import Icon from "@/components/Icon.vue"
import Language from "@/components/Language.vue"
import Skill from "@/components/Skill.vue"
import LangSwitcher from '@/components/LangSwitcher.vue'
import Experience from "@/components/Experience.vue"

const { data } = useData()
const { isRu } = useLanguage()
</script>

<style scoped lang="scss">
@use "@/assets/partials/mixins";

.mtop {
    @include mixins.mobile {
        margin-top: 16px;
    }
}
</style>
