const Api = require('./Api')
class Post{
    render(){
        const api = new Api()
        api.get(`posts/2`, function (post) {
            document.querySelector('article h1').innerText = post.title
            document.querySelector('article p').innerText = post.body
        })    
    }
}

module.exports = Post