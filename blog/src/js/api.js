const environment = require('./../common/environment')

class Api {
    baseUrl = {
        base:`${environment.baseUrl}`
    }
    get (url, callback){
        const request = new XMLHttpRequest()
        request.open('GET', `${environment.baseUrl}/${url}`)
        request.onload = function() {
            const parseContent = JSON.parse(request.responseText)
            callback(parseContent)
        }
        request.onerror = function() {}
        request.send()
    }
}

module.exports = Api