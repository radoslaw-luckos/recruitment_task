import { formatDate } from '../helpers/formatDate';
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
                const formattedDate = formatDate(event.eventDate)
                event.eventDate = formattedDate
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