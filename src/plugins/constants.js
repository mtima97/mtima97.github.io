export const languages = {
    RU_LANG: 'ru',
    EN_LANG: 'en',
}

export default {
    install(app) {
        app.provide('$consts', languages)
    }
}
