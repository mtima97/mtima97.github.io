import _ from 'lodash'

function getDateStrIfExists(timestamp, fallback) {
    if (_.isString(timestamp)) {
        return new Date(timestamp).toLocaleDateString()
    }

    return fallback
}

function getStartFallback(isRu) {
    return isRu ? 'дата начала' : 'start'
}

function getEndFallback(isRu) {
    return isRu ? 'наст.время' : 'now'
}

export { getDateStrIfExists, getStartFallback, getEndFallback }
