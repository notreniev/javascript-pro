console.log('olá!')
const MovieCard = require('./components/MovieCard')

const movieList = [
    {
        title: 'Mindhunter',
        description: 'Boa série',
        img: 'https://i.ytimg.com/vi/PHlJQCyqiaI/maxresdefault.jpg'
    },
    {
        title: 'Friends',
        description: 'Outra série muito boa',
        img: 'https://img.quizur.com/f/img5e1e00216c4873.55629946.jpg?lastEdited=1579024421'
    }
]

for (const movie of movieList) {
    const card = new MovieCard(movie)
    const html = card.render()
    
    document.querySelector('.movies').innerHTML += html
}
    
