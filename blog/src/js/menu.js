const Api = require('./Api')
const Post = require('./Post')
const Comments = require('./Comments')

class Menu {
  showPost () {
    const postId = this.dataset.postId
    console.log('carrega o post', postId)

    const post = new Post()
    post.render(postId)

    const comments = new Comments()
    comments.render(postId)
  }

  render () {
    const api = new Api()
    api.get('posts', (posts) => {
      for (const post of posts.slice(0, 10)) {
        const link = document.createElement('a')
        link.href = '#'
        link.dataset.postId = post.id
        link.onclick = this.showPost
        link.innerText = post.title

        const li = document.createElement('li')
        li.appendChild(link)

        document.querySelector('aside ul').appendChild(li)
      }
    })
  }
}

module.exports = Menu
