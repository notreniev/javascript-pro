class MovieCard {

  constructor ({ title, description, img }) {
    this.title = title
    this.description = description
    this.img = img
  }

  render () {
    const article = document.createElement('article')
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    
    return `
        <article class="movie" style="background-image: url('${this.img}')" title="${this.title}">
            <h1>${this.title}</h1>
            <p>${this.description}</p>
        </article>
    `
  }
}
module.exports = MovieCard
