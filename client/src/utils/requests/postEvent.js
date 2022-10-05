import { url } from '../url'

export const postEvent = async (event) => {

    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(event),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    };

    try {
        const response = await fetch(`${url}/events`, requestOptions);
        if (response.ok) {
            const message = 'Event successfully created!'
            const res = {
                message,
                ok: response.ok
            }
            return res
        }
        else {
            throw Error('Could not send data for that resource!')
        }
    } catch (err) {
        const message = "Event wasn't successfully created: " + err.message
        const res = {
            message,
            ok: false
        }
        return res
    }

}