<template>
	<section class="w3-container w3-margin-bottom">
		<h3 class="w3-medium w3-border-bottom w3-padding-small">{{ headers('languages') }}</h3>

		<ul class="w3-ul">
			<li v-for="l in languages" :key="l.name">
				<span class="w3-medium">{{ l.name }}</span>
				<span class="w3-small w3-text-grey"> &mdash; {{ l.level }}</span>
			</li>
		</ul>
	</section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCvStore  } from '@/stores/cv.js'

const { languages, headers } = storeToRefs(useCvStore())
</script>
