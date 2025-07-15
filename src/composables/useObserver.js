import { onBeforeUnmount, watch } from 'vue'

export function useObserver(elRef, callback) {
    const opts = {
        threshold: 0.9
    }

    const observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
            callback(entry.isIntersecting)
        }
    }, opts)

    watch(elRef, (n, o) => {
        if (o) {
            observer.unobserve(o)
        }

        if (n) {
            observer.observe(n)
        }
    })

    onBeforeUnmount(() => observer.disconnect())
}
