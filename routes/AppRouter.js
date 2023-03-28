const Router = require('express').Router()
const PostRouter = require('./PostRouter')
const CommentRouter = require('./CommentRouter')
const UserRouter = require('./UserRouter')
// const AuthRouter = require('./AuthRouter')

Router.use('/posts', PostRouter)
Router.use('/comment', CommentRouter)
Router.use('/user', UserRouter)
Router.use('/auth', AuthRouter)
module.exports = Router
