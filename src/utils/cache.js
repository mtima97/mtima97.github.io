export default {
    set(k, v) {
        sessionStorage.setItem(k, JSON.stringify(v))
    },
    get(k) {
        return JSON.parse(sessionStorage.getItem(k))
    },
    exists(k) {
        return this.get(k) !== null
    }
}
