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
