import { isNil, get as getSafely } from 'lodash'
import track from './analytics.js'

function getDtFallback(dateStr, isRu) {
    if (isNil(dateStr)) {
        return isRu ? 'наст.время' : 'now';
    }

    return dateStr
}

function collectMetrics(event) {
    let theName = getSafely(event, 'target.dataset.event')

    if (!isNil(theName)) {
        track(theName)
    }
}

export {
    getDtFallback,
    collectMetrics,
}
