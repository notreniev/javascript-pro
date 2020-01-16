(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const environment = {
  baseUrl: 'http://jsonplaceholder.typicode.com'
}

module.exports = environment

},{}],2:[function(require,module,exports){
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

},{"./../common/environment":1}],3:[function(require,module,exports){
const Api = require('./Api')

class Comments {
  addComment () {
    const textarea = document.querySelector('.comments textarea')
    const { value } = textarea

    const div = document.createElement('div')
    div.innerText = value

    const li = document.createElement('li')
    li.appendChild(div)

    const oldFirstLi = document.querySelector('.comments ul li')
    document.querySelector('.comments ul').insertBefore(li, oldFirstLi)
    textarea.value = ''
    textarea.focus()
  }

  render (postId) {
    const h2 = document.createElement('h2')
    h2.innerText = 'Comentários'

    const divInsertComment = document.createElement('div')

    const inputInsertComment = document.createElement('textarea')
    inputInsertComment.rows = 5
    divInsertComment.appendChild(inputInsertComment)

    const buttonInsertComment = document.createElement('button')
    buttonInsertComment.innerText = 'Adicionar comentário'
    buttonInsertComment.onclick = this.addComment
    divInsertComment.appendChild(buttonInsertComment)

    const ul = document.createElement('ul')

    const api = new Api()
    api.get(`comments?postId=${postId}`, function (comments) {
      for (const comment of comments) {
        const div = document.createElement('div')
        div.innerText = comment.body

        const li = document.createElement('li')
        li.appendChild(div)

        ul.appendChild(li)
      }
    })

    const sectionComments = document.querySelector('.comments')
    sectionComments.innerText = ''
    sectionComments.appendChild(h2)
    sectionComments.appendChild(divInsertComment)
    sectionComments.appendChild(ul)
  }
}

module.exports = Comments

},{"./Api":2}],4:[function(require,module,exports){
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

},{"./Api":2,"./Comments":3,"./Post":5}],5:[function(require,module,exports){
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

},{"./Api":2}],6:[function(require,module,exports){
const Menu = require('./Menu')

const menu = new Menu()
menu.render()

},{"./Menu":4}]},{},[6]);
