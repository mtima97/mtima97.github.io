export default function(event, params = {}) {
    if (typeof window?.gtag === 'function') {
        gtag('event', event, params);
    }
}
