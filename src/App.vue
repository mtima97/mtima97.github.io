<template>
	<Loader v-if="cv.isLoading" />

	<div v-else class="w3-content">
        <Switcher @switch="loadPage" />

        <div id="resume">
            <Header />
            <Summary />
            <Contacts />
            <Skills />
			<Languages />
            <Exp />
            <Education />
            <Projects />
        </div>

        <DownloadBtn />
    </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'

import { useCvStore } from '@/stores/cv.js'

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
import Loader from "@/components/Loader.vue";

const cv = useCvStore()

function loadPage() {
	cv.load()
}

onBeforeMount(() => loadPage())
</script>
