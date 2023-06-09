const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
const UserRouter = require('./routes/UserRouter')
const PostRouter = require('./routes/PostRouter')
const CommentRouter = require('./routes/CommentRouter')

const app = express()

// const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', AuthRouter)
app.use('/user', UserRouter)
app.use('/posts', PostRouter)
app.use('/comment', CommentRouter)

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
// .use('/api', AppRouter)
app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
