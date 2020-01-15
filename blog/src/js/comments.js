const Api = require('./Api')

class Comments {
  clear () {
    document.querySelector('.comments ul').innerText = ''
  }

  render (postId) {
    this.clear()
    const api = new Api()
    api.get(`comments?postId=${postId}`, function (comments) {
      for (const comment of comments) {
        const div = document.createElement('div')
        div.innerText = comment.body

        const li = document.createElement('li')
        li.appendChild(div)

        document.querySelector('.comments ul').appendChild(li)
      }
    })
  }
}

module.exports = Comments
