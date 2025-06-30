<template>
    <div class="w3-container w3-padding-16 w3-white cv-cont">
        <div class="w3-row-padding">
            <Sidebar />
            <Main />
        </div>
    </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Main from './components/Main.vue'
</script>

<style lang="scss" scoped>
    .cv- {
        &cont {
            max-width: 1000px;
            margin: auto;
        }
    }
</style>
