<template>
    <LangSwitcher />

    <div class="w3-row-padding">
        <!-- left column -->
        <div class="w3-third">
            <div class="w3-white w3-text-grey w3-card-4">
                <Avatar :firstname="data.firstname" :lastname="data.lastname" />
                <section class="w3-container">
                    <p><Icon fa-type="briefcase" :text="data.positionName" /></p>
                    <p><Icon fa-type="home" :text="data.residence" /></p>
                    <Links :contacts="data.contacts" />
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
        <div class="w3-twothird w3-animate-opacity mtop">
            <section class="w3-container w3-card w3-white w3-margin-bottom">
                <h2 class="w3-text-grey w3-padding-16">
                    <Icon fa-type="user" size="w3-xxlarge" />{{ isRu ? 'Обо мне' : 'About Me' }}
                </h2>
                <p v-text="data.texts.summary" class="summary"></p>
                <p v-text="data.texts.summaryVue" class="summary"></p>
            </section>

            <section class="w3-container w3-card w3-white w3-margin-bottom">
                <h2 class="w3-text-grey w3-padding-16">
                    <Icon size="w3-xxlarge" />{{ isRu ? 'Опыт работы' : 'Experience' }}
                </h2>
                <Experience v-for="(exp, i) in data.experience" :experience="exp" :is-last="data.experience.length - 1 === i" />
            </section>

            <section class="w3-container w3-card w3-white w3-margin-bottom">
                <h2 class="w3-text-grey w3-padding-16">
                    <Icon fa-type="graduation-cap" size="w3-xxlarge" />{{ isRu ? 'Образование' : 'Education' }}
                </h2>
                <Edu v-for="(edu, i) in data.education" :edu="edu" :is-hidden="data.education.length - 1 === i" />
            </section>

            <section class="w3-container w3-card w3-white w3-margin-bottom">
                <h2 class="w3-text-grey w3-padding-16">
                    <Icon fa-type="code" size="w3-xxlarge" />{{ isRu ? 'Проекты' : 'Projects' }}
                </h2>
                <Project v-for="(p, i) in data.projects" :project="p" :is-hidden="data.projects.length - 1 === i" />
            </section>

            <section class="w3-container w3-card w3-white">
                <h2 class="w3-text-grey w3-padding-16">
                    <Icon fa-type="bolt" size="w3-xxlarge" />{{ isRu ? 'Активность' : 'Activity' }}
                </h2>
                <iframe
                    class="w3-round"
                    height="460"
                    width="100%"
                    allowtransparency="true"
                    src="https://www.strava.com/athletes/103079022/latest-rides/a145ef42e2f96636a7cb7c9d88f3bab5362ca340"
                    style="border: none; overflow: hidden;"
                ></iframe>
            </section>
        </div>
    </div>

    <footer class="w3-container w3-center w3-padding-24 w3-small">
        <p class="w3-animate-fading" v-html="footerTxt"></p>
    </footer>
</template>

<script setup>
import { computed } from 'vue'

import { useData } from '@/composables/useData.js'
import { useLanguage } from '@/composables/useLanguage.js'

import Avatar from "@/components/Avatar.vue"
import Icon from "@/components/Icon.vue"
import Language from "@/components/Language.vue"
import Skill from "@/components/Skill.vue"
import LangSwitcher from '@/components/LangSwitcher.vue'
import Experience from "@/components/Experience.vue"
import Edu from '@/components/Edu.vue'
import Project from '@/components/Project.vue'
import Links from '@/components/Links.vue'

const { data } = useData()
const { isRu } = useLanguage()

const footerTxt = computed(() => {
    let toolName = '<span class="w3-text-teal"><strong>W3.CSS</strong></span>'
    let heart = '&#128150;'

    if (isRu.value) {
        return `Сделано с ${heart} на ${toolName}`
    }
    return `Made with ${heart} using ${toolName}`
})
</script>

<style scoped lang="scss">
@use "@/assets/partials/mixins";

.mtop {
    @include mixins.mobile {
        margin-top: 16px;
    }
}

.summary {
    text-indent: 1em;
}
</style>
