<template>
    <div class="cv-container">
        <aside class="cv-sidebar"></aside>
        <main class="cv-main"></main>
    </div>
</template>

<style lang="scss" scoped>
.cv-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    max-width: 1000px;
    margin: 0 auto;
    min-height: 100vh;
    font-family: sans-serif;
    background-color: white;
}

.cv-sidebar {
    background-color: #f5f5f5;
    padding: 20px;
}

.cv-main {
    padding: 20px;
}
</style>
