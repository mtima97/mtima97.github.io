<template>
    <div class="w3-container">
        <h5 class="w3-opacity">
            <b v-text="pname"></b>
        </h5>
        <p v-for="d in descriptions">
            <span>{{ `${d.text} ` }}</span>
            <a v-if="d.link" :href="d.link" target="_blank" class="w3-tag w3-teal w3-round w3-small w3-hover-shadow">
                {{ d.linkText }}
            </a>
        </p>
        <hr :hidden="isHidden">
    </div>
</template>

<script setup>
const props = defineProps({
    project: Object,
    isHidden: Boolean,
})

const { name: pname, descriptions } = props.project
</script>
