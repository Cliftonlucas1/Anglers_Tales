const { User, Post, Comment } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const GetAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: Comment, as: 'comments' }]
    })
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const FindPostByPk = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          as: 'comments',
          // required: true,
          include: { model: User, as: 'post' }
        },
        {
          model: User,
          as: 'owner'
        }
      ]
    })
    res.send(post)
    console.log(post)
  } catch (error) {
    throw error
  }
}

const GetAllPostsForUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    const userPosts = await Post.findAll({ where: { user_id: userId } })
    res.send(userPosts)
  } catch (error) {
    throw error
  }
}

const CreatePost = async (req, res) => {
  try {
    const post = await Post.create({ ...req.body })
    res.send(post)
  } catch (error) {
    throw error
  }
}

const DeletePost = async (req, res) => {
  try {
    await Post.destroy({ where: { id: req.params.post_id } })
    res.send({
      message: `Deleted Post with an id of ${req.params.post_id}`,
      payload: req.params.post_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

const UpdatePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.post_id)
    let updatePost = await Post.update(req.body, {
      where: { id: postId },
      returning: true
    })
    res.send(updatePost)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllPosts,
  CreatePost,
  DeletePost,
  GetAllPostsForUser,
  FindPostByPk,
  UpdatePost
}
