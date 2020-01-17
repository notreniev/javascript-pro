class MovieCard {
  constructor ({ title, description, img }) {
    this.title = title
    this.description = description
    this.img = img
  }

  render () {
    const article = document.createElement('article')
    article.className = 'movie'
    article.style.backgroundImage = `url('${this.img}')`

    const h1 = document.createElement('h1')
    h1.innerText = this.title
    article.appendChild(h1)

    const p = document.createElement('p')
    p.innerText = this.description
    article.appendChild(p)

    return article
  }
}

module.exports = MovieCard
