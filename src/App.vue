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
                    <p>
                        <a :href="`tel:${data.contacts.phone.replace(/\s+/g, '')}`" target="_blank" rel="noopener" class="w3-hover-opacity">
                            <Icon fa-type="phone" :text="data.contacts.phone" />
                        </a>
                    </p>
                    <p>
                        <a :href="`mailto:${data.contacts.email}`" target="_blank" rel="noopener" class="w3-hover-opacity">
                            <Icon fa-type="envelope" :text="data.contacts.email" />
                        </a>
                    </p>
                    <p>
                        <a href="https://github.com/mtima97?tab=repositories" target="_blank" rel="noopener" class="w3-hover-opacity">
                            <Icon fa-type="github" is-brand text="github.com/mtima97" />
                        </a>
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
                    <Icon fa-type="user" size="w3-xxlarge" />{{ isRu ? 'Обо мне' : 'About Me' }}
                </h2>
                <p v-text="data.texts.summary" class="summary"></p>
            </div>

            <div class="w3-container w3-card w3-white w3-margin-bottom">
                <h2 class="w3-text-grey w3-padding-16">
                    <Icon size="w3-xxlarge" />{{ isRu ? 'Опыт работы' : 'Experience' }}
                </h2>
                <Experience v-for="(exp, i) in data.experience" :experience="exp" :is-last="data.experience.length - 1 === i" />
            </div>

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
        </div>
    </div>

    <footer class="w3-container w3-center w3-padding-24 w3-small">
        <p v-html="footerTxt"></p>
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

const { data } = useData()
const { isRu } = useLanguage()

const footerTxt = computed(() => {
    let toolName = '<span class="w3-text-teal"><strong>W3.CSS</strong></span>'

    if (isRu.value) {
        return `Сделано с &#128150; на ${toolName}`
    }
    return `Made with &#128150; using ${toolName}`
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
