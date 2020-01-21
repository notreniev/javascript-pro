const Api = require('./services/api')
const { html, render } = require('htm/preact')
const Category = require('./components/category/Category')

const api = new Api()

api.getAsPromise('http://localhost:3001/api/categories')
    .then((categories) => {

        const categoriesHtml = html`<section class="categories">
            ${categories.map(category => {
                const c = new Category(category)
                return c.render()
            })}
        </section>`

        render(categoriesHtml, document.querySelector('main'))

        // for (const category of categories) {
        //     const c = new Category(category)
        //     const html = c.render()

        //     render(html, document.querySelector('main'))
        // }
    })
    .catch(error => console.error(error))
