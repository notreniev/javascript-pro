const Api = require('./../../services/api')

class MovieDetails {
    constructor(movieId){
        this.movieId = movieId
    }
    render() {
        const oldMovieDetails = document.querySelector('main aside')
        if (oldMovieDetails){
            oldMovieDetails.remove()
        }
        const api = new Api()
        api.getAsPromise(`http://localhost:3001/api/movies/${this.movieId}`)
            .then(movie => {
                console.log(movie)
                const html = `<aside class="movie-details">
                                <h2>${movie.title}</h2>
                                <p>${movie.gender}</p>
                              </aside>`

                const h1 = document.createElement('h1')
                h1.append('Detalhes do filme')

                const aside = document.createElement('aside')
                aside.appendChild(h1)

                document.querySelector('main').appendChild(aside)
            })
    }
}

module.exports = MovieDetails
