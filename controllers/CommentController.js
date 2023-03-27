const { Comment, User, Post } = require('../models')

const GetAllComments = async (req, res) => {
  try {
    let comments = await Comment.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const GetAllCommentsForPost = async (req, res) => {
  try {
    let postsId = parseInt(req.params.post_id)
    const postComments = await Comment.findAll({ where: { post_id: postsId } })
    res.send(postComments)
  } catch (error) {
    throw error
  }
}

const CreateComment = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let postsId = parseInt(req.params.post_id)
    let commentBody = {
      userId,
      postsId,
      ...req.body
    }
    let comment = await Comment.create(commentBody)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    let updateComment = await Comment.update(req.body, {
      where: { id: commentId },
      returning: true
    })
    res.send(updateComment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    await Comment.destroy({ where: { id: commentId } })
    res.send({ message: `Deleted Comment with an id of ${commentId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllComments,
  UpdateComment,
  CreateComment,
  DeleteComment,
  GetAllCommentsForPost
}
