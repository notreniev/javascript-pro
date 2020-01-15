const Api = require('./Api')
class Comments {
    render () {
        const api = new Api()
        api.get(`comments?postId=1`, function (comments) {
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