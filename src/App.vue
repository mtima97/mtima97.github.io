<template>
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

import LangSwitcher from '@/components/LangSwitcher.vue'
import Resume from '@/components/resume/Resume.vue'
import Loader from '@/components/ui/Loader.vue'
</script>
