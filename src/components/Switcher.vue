<template>
    <div class="w3-right w3-margin-top w3-margin-bottom">
        <button
            :class="[clicked[0], 'w3-button', 'w3-small']"
            @click.prevent="updateLanguage('ru')"
            v-text="txts[0]"
            v-track
            data-event="click_ru"
        ></button>

        <button
            :class="[clicked[1], 'w3-button', 'w3-small']"
            @click.prevent="updateLanguage('en')"
            v-text="txts[1]"
            v-track
            data-event="click_en"
        ></button>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useLanguageStore } from '@/stores/language.js'

const store = useLanguageStore()

const { isRu } = storeToRefs(store)

const clicked = computed(() => {
    if (isRu.value) {
        return ['w3-black', 'w3-light-grey']
    }

    return ['w3-light-grey', 'w3-black']
})

const txts = ['RU', 'EN']

const emit = defineEmits(['switch'])

function updateLanguage(language) {
	switch (language) {
		case 'en':
			store.setLanguageEn()
			break
		case 'ru':
			store.setLanguageRu()
			break
	}

	emit('switch')
}
</script>
