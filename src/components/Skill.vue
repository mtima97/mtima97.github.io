<template>
    <p>{{ lname }}</p>
    <div class="w3-light-grey w3-round-xlarge w3-small">
        <div class="w3-container w3-center w3-round-xlarge w3-teal" :style="{width: `${level}%`}">
            {{ `${level}%` }}
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    skill: Object,
})

const {name: lname, level} = props.skill
</script>
