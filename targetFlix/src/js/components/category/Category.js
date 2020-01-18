const MovieCard = require('../movieCard/MovieCard')

class Category {
  constructor ({ description: name, movies }) {
    this.name = name
    this.movies = movies
  }

  render () {
    // return `<section class="category">
    //     <h1>${this.name}</h1>
    //     <div class="movies">
    //         Lista de filmes
    //     </div>
    // </section>`

    const section = document.createElement('section')
    section.className = 'category'

    const h1 = document.createElement('h1')
    h1.innerText = this.name
    section.appendChild(h1)

    const divMovies = document.createElement('div')
    divMovies.className = 'movies'

    for (const movie of this.movies) {
      const card = new MovieCard(movie)
      const cardRendered = card.render()

      

      divMovies.appendChild(cardRendered)
    }
    section.appendChild(divMovies)

    return section
  }
}

module.exports = Category
