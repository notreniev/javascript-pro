const MovieDetails = require('../movieDetails/MovieDetails')

class MovieCard {
  constructor ({ id, title, description, imageUrl: img }) {
    this.id = id
    this.title = title
    this.description = description
    this.img = img
  }

  loadMovieDetails () {
    const { movieId } = this.dataset
    const details = new MovieDetails(movieId)
    details.render()
  }

  render () {
    const article = document.createElement('article')
    article.className = 'movie'
    article.style.backgroundImage = `url('${this.img}')`
    article.dataset.movieId = this.id
    article.onclick = this.loadMovieDetails

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
