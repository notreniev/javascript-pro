const Api = require('./Api')
const Post = require('./Post')
const Comments = require('./Comments')

class Menu {
  showPost () {
    const { postId } = this.dataset

    const post = new Post()
    post.render(postId)

    const comments = new Comments()
    comments.render(postId)
  }

  filterPosts () {
    const value = document.querySelector('#search-field').value
    console.log('value', value)

    const items = document.querySelectorAll('aside li a')

    for (const menuItem of items) {
      if (!menuItem.innerText.includes(value)) {
        menuItem.parentElement.style.display = 'none'
      } else {
        menuItem.parentElement.style.display = ''
      }
    }
  }

  render () {
    const inputSearch = document.createElement('input')
    inputSearch.id = 'search-field'
    inputSearch.type = 'text'
    inputSearch.onkeyup = this.filterPosts
    inputSearch.placeholder = 'O que você procura?'

    const divSearch = document.createElement('div')
    divSearch.appendChild(inputSearch)

    const h2 = document.createElement('h2')
    h2.innerText = 'Posts'

    const ul = document.createElement('ul')

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

        ul.appendChild(li)
      }
    })

    const aside = document.querySelector('aside')
    aside.appendChild(divSearch)
    aside.appendChild(h2)
    aside.appendChild(ul)
  }
}

module.exports = Menu
