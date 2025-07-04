<template>
    <div class="w3-container">
        <h5 class="w3-opacity"><b v-text="pname"></b></h5>
        <p v-for="d in descriptions">
            {{ d.text }}<a v-if="d.link" :href="d.link" target="_blank">{{ d.linkText }}</a>
        </p>
        <hr :hidden="isHidden">
    </div>
</template>

<script setup>
const { project } = defineProps({
    project: Object,
    isHidden: Boolean,
})

const { name: pname, descriptions } = project
</script>
