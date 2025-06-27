export const WebHandler = async (url, verb, params) => {
    try {
        let options = {
            method: verb,
            headers: { 'Content-Type': "application/json" },
            body: params,
            credentials: 'include',
        }
        const data = await fetch(url, options)

        const status = data.status
        const response = await data.json()

        return { response, status }
    } catch (error) {
        return error.message
    }
}


