const MovieCard = require('../movieCard/MovieCard')
const { html } = require('htm/preact')

class Category {
  constructor ({ description: name, gender, movies } = {}) {
    this.name = name
    this.gender = gender
    this.movies = movies || []
  }

  render () {
    return html`<section class="category">
        <h1>${this.name}</h1>
        <div class="movies">
          ${this.movies.map(movie => {
            const movieCard = new MovieCard(movie)
            const movieCardHtml = movieCard.render()
            return movieCardHtml
          })}
        </div>
    </section>`

    // const section = document.createElement('section')
    // section.className = 'category'

    // const h1 = document.createElement('h1')
    // h1.innerText = this.name
    // section.appendChild(h1)

    // const divMovies = document.createElement('div')
    // divMovies.className = 'movies'

    // for (const movie of this.movies) {
    //   const card = new MovieCard(movie)
    //   const cardRendered = card.render()

      

    //   divMovies.appendChild(cardRendered)
    // }
    // section.appendChild(divMovies)

    // return section
  }
}

module.exports = Category
