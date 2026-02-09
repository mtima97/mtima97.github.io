import { defineStore } from 'pinia'

export const useCvStore = defineStore('cv', {
    state: () => ({
        cv: null,
        loading: false,
    }),
    actions: {
        load() {}
    }
})
