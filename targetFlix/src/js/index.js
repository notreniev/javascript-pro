import Api from './services/api'
import { html, render } from 'htm/preact'
import Category from './components/category/Category'

const api = new Api()

async function loadCategories() {
    const categories = await api.getAsPromise('http://localhost:3001/api/categories')

    try {
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
    
    } catch (error) {
        console.error(error)
    }
}

loadCategories()
