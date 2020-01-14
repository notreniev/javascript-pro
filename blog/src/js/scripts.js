
const baseUrl = 'http://jsonplaceholder.typicode.com'

getPost = () => {
    const request = new XMLHttpRequest()
    request.open('get', `${baseUrl}/posts/2`)
    request.onload = function(){
        const postDetail = JSON.parse(request.responseText)
        document.querySelector('article h1').innerText = postDetail.title
        document.querySelector('article p').innerText = postDetail.body
    }
    
    request.onerror = function(){
        console.error('aconteceu um erro')
    }
    
    request.send()
    
}

getPostTitles = () => {
    const request = new XMLHttpRequest()
    request.open('get', `${baseUrl}/posts`)
    request.onload = function(){
        const posts = JSON.parse(request.responseText)
        
        for (const post of posts.slice(0,10)){
            const link = document.createElement('a')
            link.href = `${baseUrl}/${post.id}`
            link.innerText = post.title

            const li = document.createElement('li')
            li.appendChild(link)

            document.querySelector('aside ul').appendChild(li)
        }
    }

    request.send()
 }

 getComments = () => {
    const request = new XMLHttpRequest()
    request.open('get', `${baseUrl}/comments?postId=1`)
    request.onload = function(){
        const comments = JSON.parse(request.responseText)
        
        for (const comment of comments){
            const div = document.createElement('div')
            div.innerText = comment.body

            const li = document.createElement('li')
            li.appendChild(div)

            document.querySelector('.comments ul').appendChild(li)
        }
    }

    request.send()

 }

 getPost()
 getPostTitles()
 getComments()