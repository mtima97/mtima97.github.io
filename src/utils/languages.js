export const LANGUAGES = Object.freeze({
    EN: 'en',
    RU: 'ru',
})

export function getInitialLanguage() {
    if (localStorage.getItem('language') !== null) {
        return localStorage.getItem('language')
    }
    return LANGUAGES.RU
}

export function saveLanguage(language) {
    localStorage.setItem('language', language)
}
