export const formatDate = (dateString) => {
    const date = new Date(dateString)
    const day = (date.getDate()) < 10 ? `0${date.getDate()}` : date.getDate()
    const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    const year = date.getFullYear()
    const formatedDate = `${day}.${month}.${year}`
    return formatedDate
}