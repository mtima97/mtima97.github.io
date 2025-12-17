<template>
    <div class="w3-center w3-margin-top w3-margin-bottom w3-hide-small">
        <button class="w3-button w3-black" @click="download" v-track data-event="download">
            {{ isRu ? 'Скачать PDF' : 'Download PDF' }}
        </button>
    </div>
</template>

<script setup>
import html2pdf from 'html2pdf.js'
import { storeToRefs } from 'pinia'

import { useLanguageStore } from '@/stores/language.js'

const { isRu } = storeToRefs(useLanguageStore())

function download() {
	let block = document.getElementById('resume')

	const options = {
		margin: 10,
		filename: 'timur_myngbay.pdf',
		image: {
			type: 'jpeg',
			quality: 0.98
		},
		html2canvas: {
			scale: 2,
			useCORS: true
		},
		jsPDF: {
			unit: 'mm',
			format: 'a4',
			orientation: 'portrait'
		}
	}

	html2pdf()
		.set(options)
		.from(block)
		.save('resume-timur.pdf')
}
</script>
