import { url } from '../url'

export const fetchEvents = async () => {

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
    };

    try {
        const response = await fetch(`${url}/events`, requestOptions);
        if (response.ok) {
            const data = await response.json()
            const newData = data.map(event => {
                event.eventDate = new Date(event.eventDate)
                const day = event.eventDate.getDate()
                const month = (event.eventDate.getMonth() + 1) < 10 ? `0${event.eventDate.getMonth() + 1}` : event.eventDate.getMonth() + 1
                const year = event.eventDate.getFullYear()
                event.eventDate = `${day}.${month}.${year}`
                return event
            })
            const res = {
                data: newData
            }
            return res
        }
        else {
            throw Error('Could not fetch data!')
        }
    } catch (err) {
        console.log(err);
        const res = {
            message: err.message
        }
        return res
    }

}