import { isNil } from 'lodash'

function getDtFallback(dateStr, isRu) {
    if (isNil(dateStr)) {
        return isRu ? 'наст.время' : 'now';
    }

    return dateStr
}

export {
    getDtFallback,
}
