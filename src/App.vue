<template>
    <div class="cv-container">
        <aside class="cv-sidebar">
            <section class="cv-profile">
                <h1>Тимур</h1>
                <p class="cv-role">Go Developer</p>
            </section>
            <section class="cv-section">
                <h2>Контакты</h2>
                <ul>
                    <li>Email: mtima97@gmail.com</li>
                </ul>
            </section>
            <section class="cv-section">
                <h2>Навыки</h2>
                <ul>
                    <li>Go</li>
                </ul>
            </section>
            <section class="cv-section">
                <h2>Языки</h2>
                <ul>
                    <li>Казахский</li>
                </ul>
            </section>
        </aside>

        <main class="cv-main">
            <section class="cv-section">
                <h2>Обо мне</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet aperiam asperiores at blanditiis culpa, dignissimos,
                    dolorem hic in iure minima non quibusdam recusandae repellat repellendus reprehenderit tenetur totam veniam!
                </p>
            </section>
            <section class="cv-section">
                <h2>Опыт работы</h2>

                <section class="cv-job">
                    <h3>Wildberries — Go-разработчик</h3>
                    <p class="cv-period">Апрель 2023 — настоящее время</p>
                    <ul>
                        <li>Разработка микросервисов для обработки заказов</li>
                    </ul>
                </section>
            </section>
        </main>
    </div>
</template>

<style lang="scss" scoped>
@use "assets/partials/mixins" as *;

.cv-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    max-width: 1000px;
    margin: 0 auto;
    min-height: 100vh;
    font-family: sans-serif;
    background-color: white;
    @include mobile {
        grid-template-columns: 1fr;
    }
}

.cv-sidebar {
    background-color: #f5f5f5;
    padding: 20px;
    @include mobile {
        order: 2;
    }
}

.cv-main {
    padding: 20px;
    @include mobile {
        order: 1;
    }
}
</style>
