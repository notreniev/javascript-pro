const Api = require('./Api')
class Post {
  render (postId) {
    const api = new Api()
    api.get(`posts/${postId}`, function (post) {
      document.querySelector('article h1').innerText = post.title
      document.querySelector('article p').innerText = post.body
    })
  }
}

module.exports = Post
