const environment = require('./../common/environment')

class Api {
  baseUrl () {
    return `${environment.baseUrl}`
  }

  get (url, callback) {
    const request = new window.XMLHttpRequest()
    request.open('GET', `${environment.baseUrl}/${url}`)
    request.onload = function () {
      const parseContent = JSON.parse(request.responseText)
      callback(parseContent)
    }
    request.onerror = function () {}
    request.send()
  }
}

module.exports = Api
