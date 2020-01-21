const { html, render } = require('htm/preact')
const Api = require('./../../services/api')

class MovieDetails {
    constructor(movieId){
        this.movieId = movieId
    }
    render() {
        const api = new Api()

        document.querySelector('aside#movie-details').innerHTML = ''

        api.getAsPromise(`http://localhost:3001/api/movies/${this.movieId}`)
            .then(movie => {
                const movieDetailsHtml = html`<aside class="movie-details">
                                <h1>Detalhes do Filme</h1>
                                <h2>${movie.title}</h2>
                                <p>Gênero: ${movie.gender}</p>
                              </aside>`

                // const h1 = document.createElement('h1')
                // h1.append('Detalhes do filme')

                // const aside = document.createElement('aside')
                // aside.appendChild(h1)

                render(movieDetailsHtml, document.querySelector('aside#movie-details'))
            })
    }
}

module.exports = MovieDetails
