export default class Api {
    getAsPromise(url) {
        return new Promise((resolve, reject) => {
            const request = new window.XMLHttpRequest()
            request.open('GET', url)
            request.onload = () => {
                const json = JSON.parse(request.responseText)
                resolve(json)
            }

            request.onerror = (error) => {
                reject(error)
            }

            request.send()
        })
    }
}
