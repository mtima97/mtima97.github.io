<template>
    <section class="w3-container w3-margin-bottom">
        <h3 id="projects" class="w3-medium w3-border-bottom w3-padding-small">{{ headers('projects') }}</h3>

        <div v-for="(project, i) in projects" :key="i" class="w3-margin-bottom">
            <p class="w3-medium w3-margin-bottom">
				<a :href="project.link" target="_blank">
					<strong>{{ project.name }}</strong>
				</a>
            </p>

            <ul class="w3-ul">
                <li v-for="(point, j) in project.points" :key="j">{{ point }}</li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCvStore  } from '@/stores/cv.js'

const { projects, headers } = storeToRefs(useCvStore())
</script>
