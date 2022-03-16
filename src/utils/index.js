import dayjs from 'dayjs'

const getFormatedDate = (maybeDate, format) => {
    if (!maybeDate || !dayjs(maybeDate).isValid()) {
        return undefined
    }

    return dayjs(maybeDate).format(format)
}

export { getFormatedDate }
