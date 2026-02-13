<template>
	<!--<Loader v-if="cv.isLoading" />-->
    <Loader v-if="cvStore.loading" />

	<div v-else class="w3-content">
        <!--<Switcher @switch="loadPage" />-->
        <LangSwitcher />

        <!--<div id="resume">
            <Header />
            <Summary />
            <Contacts />
            <Skills />
			<Languages />
            <Exp />
            <Education />
            <Projects />
        </div>-->
        <Resume />

        <!--<DownloadBtn />-->
    </div>
</template>

<script setup>
import { useCvStore } from '@/stores/cv_v2.js'

const cvStore = useCvStore()

import Header from '@/components/Header.vue'
import Contacts from '@/components/Contacts.vue'
import Skills from '@/components/Skills.vue'
import Exp from '@/components/Exp.vue'
import Education from '@/components/Education.vue'
import Projects from '@/components/Projects.vue'
import Summary from '@/components/Summary.vue'
import DownloadBtn from '@/components/DownloadBtn.vue'
import Switcher from '@/components/Switcher.vue'
import Languages from "@/components/Languages.vue";
import LangSwitcher from '@/components/LangSwitcher.vue'
import Resume from '@/components/resume/Resume.vue'
import Loader from '@/components/ui/Loader.vue'
</script>
