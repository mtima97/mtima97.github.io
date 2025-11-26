import _ from 'lodash'

function getDtFallback(dateStr, isRu) {
    if (_.isNil(dateStr)) {
        return isRu ? 'наст.время' : 'now';
    }

    return dateStr
}

export {
    getDtFallback,
}
