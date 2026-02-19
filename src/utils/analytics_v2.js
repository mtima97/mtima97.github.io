export function trackEvent(event) {
    const metrics = event.currentTarget?.dataset?.event
    const text = event.currentTarget?.innerText

    if (typeof window?.gtag === 'function' && metrics !== undefined) {
        gtag('event', metrics, {
            text,
        })
    }
}
