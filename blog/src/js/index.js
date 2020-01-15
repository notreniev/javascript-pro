const Menu = require('./Menu')
const Post = require('./Post')
const Comments = require('./Comments')

const menu = new Menu()
menu.render()

const comments = new Comments()
comments.render()

const post = new Post()
post.render()