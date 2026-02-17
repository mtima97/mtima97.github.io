<template>
    <Loader v-if="cvStore.loading" />

	<div v-else class="w3-content">
        <Switcher />

        <Resume />

        <DownloadButton />
    </div>
</template>

<script setup>
import { useCvStore } from '@/stores/cv_v2.js'

const cvStore = useCvStore()

import Switcher from '@/components/Switcher.vue'
import Resume from '@/components/resume/Resume.vue'
import Loader from '@/components/ui/Loader.vue'
import DownloadButton from '@/components/DownloadButton.vue'
</script>
