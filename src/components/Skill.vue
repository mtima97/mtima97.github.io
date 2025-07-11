<template>
    <p>{{ skill.name }}</p>
    <div class="w3-light-grey w3-round-xlarge w3-small">
        <div class="w3-container w3-center w3-round-xlarge w3-teal" :style="{width: `${skill.level}%`}">
            {{ `${skill.level}%` }}
        </div>
    </div>
</template>

<script setup>
defineProps({
    skill: Object,
})
</script>
