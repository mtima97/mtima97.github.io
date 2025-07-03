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
        <div class="w3-twothird mtop">
            <div class="w3-container w3-card w3-white w3-margin-bottom">
                <h2 class="w3-text-grey w3-padding-16">
                    <i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Опыт работы
                </h2>
            </div>
            <div class="w3-container">
                <h5 class="w3-opacity">
                    <b>Backend Developer / Wildberries</b>
                </h5>
                <h6 class="w3-text-teal">
                    <i class="fa fa-calendar fa-fw w3-margin-right"></i>Июнь 2022 – <span class="w3-tag w3-teal w3-round">Сейчас</span>
                </h6>
                <p>Разработка микросервисов, интеграция Sumsub, работа с PostgreSQL, Docker, Kafka, gRPC, очереди и API.</p>
                <hr>
            </div>
            <div class="w3-container">
                <h5 class="w3-opacity">
                    <b>Intern / KTZ Express</b>
                </h5>
                <h6 class="w3-text-teal">
                    <i class="fa fa-calendar fa-fw w3-margin-right"></i>
                    Июль 2021 – Сентябрь 2021
                </h6>
                <p>Анализ закупок, построение отчетов в Power BI, автоматизация процессов анализа данных.</p>
            </div>
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
