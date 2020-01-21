const MovieDetails = require('../movieDetails/MovieDetails')
const { html } = require('htm/preact')

class MovieCard {
  constructor ({ id, title, description, imageUrl: img }) {
    this.id = id
    this.title = title
    this.description = description
    this.img = img

    this.loadMovieDetails = this.loadMovieDetails.bind(this)
  }

  loadMovieDetails () {
    const details = new MovieDetails(this.id) 
    details.render()
  }

  render () {
    return html`<article class="movie" data-movie-id="${this.id}" 
                         onclick="${this.loadMovieDetails}" 
                         style="background-image: url('${this.img}')">
      <h1>${this.title}</h1>
      <p>${this.synopsis}</p>
    </article>`

    // const article = document.createElement('article')
    // article.className = 'movie'
    // article.style.backgroundImage = `url('${this.img}')`
    // article.dataset.movieId = this.id
    // article.onclick = this.loadMovieDetails

    // const h1 = document.createElement('h1')
    // h1.innerText = this.title
    // article.appendChild(h1)

    // const p = document.createElement('p')
    // p.innerText = this.description
    // article.appendChild(p)

    // return article
  }
}

module.exports = MovieCard
