<template>
	<section class="w3-container w3-margin-bottom">
		<h3 class="w3-medium w3-border-bottom w3-padding-small">
			{{ isRu ? 'Языки' : 'Languages' }}
		</h3>

		<ul class="w3-ul">
			<li v-for="lang in languagesView" :key="lang.id">
				<span class="w3-medium">{{ lang.language }}</span>
				<span class="w3-small w3-text-grey"> &mdash; {{ lang.level }}</span>
			</li>
		</ul>
	</section>
</template>

<script setup>
import {storeToRefs} from 'pinia'

import { useLanguageStore } from '@/stores/language.js'
import { useCvStore } from '@/stores/cv.js'

const { isRu } = storeToRefs(useLanguageStore())
const { languagesView } = storeToRefs(useCvStore())
</script>

<style scoped lang="scss"></style>
