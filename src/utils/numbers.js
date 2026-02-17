export function formatSalary(number) {
    return new Intl.NumberFormat().format(number)
}

export function normalizeDateString(date) {
    if (typeof date === 'string') {
        return date.replace(/-/g, '.')
    }

    return date
}
