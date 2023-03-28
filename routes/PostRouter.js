const router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

router.get('/all', controller.GetAllPosts)
router.get('/user/:user_id', controller.GetAllPostsForUser)

router.post('/newpost', controller.CreatePost)
router.delete(
  '/delete/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeletePost
)

router.put(
  '/update/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePost
)

router.get('/post/:id', controller.FindPostByPk)

module.exports = router
