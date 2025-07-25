<template>
	<footer class="w3-container w3-center w3-padding-24 w3-small">
		<p>
			<span v-html="footerTxt"></span> <strong class="w3-text-teal">W3.CSS</strong>
		</p>
	</footer>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage.js'

const { isRu } = useLanguage()
const heart = '&#128150;'
const footerTxt = computed(() => {
	return isRu.value ? `Сделано с ${heart} на` : `Made with ${heart} using`
})
</script>

<style scoped lang="scss">
@keyframes txtrotation {
	0%, 100% {
		transform: rotateX(0deg) scale(1);
	}
	50% {
		transform: rotateX(20deg) scale(1.1);
	}
}

footer {
	perspective: 1000px;

	& > p {
		@media (orientation: portrait), (min-width: 1200px) {
			animation: txtrotation 2s linear infinite;
		}
	}
}
</style>
