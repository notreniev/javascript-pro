(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const environment = {
    baseUrl: 'http://jsonplaceholder.typicode.com'
}

module.exports = environment
},{}],2:[function(require,module,exports){
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
},{"./../common/environment":1}],3:[function(require,module,exports){
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
},{"./Api":2}],4:[function(require,module,exports){
const Api = require('./Api')

class Menu {
    showPost () {
        const postId = this.dataset.postId
        console.log('carrega o post', postId)
    }
    render() {
        const api = new Api()
        api.get(`posts`, (posts) => {
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
},{"./Api":2}],5:[function(require,module,exports){
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
},{"./Api":2}],6:[function(require,module,exports){
const Menu = require('./Menu')
const Post = require('./Post')
const Comments = require('./Comments')

const menu = new Menu()
menu.render()

const comments = new Comments()
comments.render()

const post = new Post()
post.render()
},{"./Comments":3,"./Menu":4,"./Post":5}]},{},[6]);
