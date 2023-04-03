import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'

const BASE_URL = `http://localhost:3001/`

const CommentForm = ({ postDetails, user, getPostDetails }) => {
  let { id } = useParams()
  let userId = user.id

  const initialState = {
    userId,
    content: ''
  }
  const [formState, setFormState] = useState(initialState)
  const [comment, setComment] = useState()

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
    setComment(formState.comment)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.post(
      `${BASE_URL}comment/newcomment/${postDetails.id}`,
      formState
    )
    setFormState(initialState)
    getPostDetails()
  }

  return (
    <div class="comment-form-container">
      <form
        onSubmit={handleSubmit}
        class="comment-form bg-gray-100 rounded-lg p-6"
      >
        <label for="content" class="text-lg font-medium mb-2 block">
          Comment
        </label>
        <textarea
          id="content"
          class="w-full h-24 p-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Enter your comment here"
          value={formState.content}
          onChange={handleChange}
        ></textarea>
        <div class="mt-4">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Comment
          </button>
        </div>
      </form>
    </div>
  )
}

export default CommentForm
