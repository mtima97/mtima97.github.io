<template>
    <section class="w3-container w3-margin-bottom">
        <h3 class="w3-medium w3-border-bottom w3-padding-small">{{ headers('education') }}</h3>

        <div v-for="(edu, i) in education" :key="i" class="w3-margin-bottom">
            <p class="w3-medium w3-margin-bottom">
                <strong>{{ edu.university }}</strong>
            </p>

            <p class="w3-small w3-text-grey w3-margin-bottom">
				<span v-html="edu.period"></span>
			</p>

            <ul class="w3-ul">
                <li v-for="(p, j) in edu.points" :key="j">{{ p }}</li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCvStore  } from '@/stores/cv.js'

const { education, headers } = storeToRefs(useCvStore())
</script>
