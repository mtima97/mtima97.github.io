<script setup>
import {computed} from 'vue'

const msg = 'Hello World!';
const wifeName = 'Fari'
let fullWifeName = computed(() => wifeName.concat('za'));

function greet(name) {
    alert(`Hello ${name}!, your wife's name is ${wifeName}`);
}
</script>

<template>
    <header>
        <h1 :title="msg">Hello My Friends</h1>
        <button :title="fullWifeName" @click.prevent="greet('Timur')">Click</button>
    </header>
</template>

<style scoped>
button {
    border: none;
}
</style>
