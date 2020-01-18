const Api = require('./services/api')
const Category = require('./components/category/Category')

const api = new Api()

api.getAsPromise('http://localhost:3001/api/categories')
    .then(categories => {
        console.table(categories)

        for (const category of categories) {
            const c = new Category(category)
            const html = c.render()
    
            document.querySelector('main').appendChild(html)
        }
    
    })
    .catch(error => console.error(error))
