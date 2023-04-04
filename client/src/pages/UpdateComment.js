import { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Client from '../services/api'

const UpdateComment = ({ comment, getPostDetails, clicky, antiClicky }) => {
  const [updateComment, setUpdateComment] = useState({
    content: ''
  })
  console.log(comment)
  //
  const handleChangeUpdate = (event) => {
    setUpdateComment({
      ...updateComment,
      [event.target.id]: event.target.value
    })
  }
  //
  const handleSubmitUpdate = async (event) => {
    event.preventDefault()
    await Client.put(
      `http://localhost:3001/comment/update/${comment.id}`,
      updateComment
    )
    getPostDetails()
    clicky()
  }
  //
  return (
    <div className="comment-form-container">
      <form onSubmit={handleSubmitUpdate} className="comment-form">
        <label htmlFor="content">Update Your Comment</label>
        <textarea
          type="text"
          id="content"
          cols="80"
          rows="2"
          onChange={handleChangeUpdate}
          value={updateComment.content}
        />
        <div className="center-submit">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded submit-button"
            type="submit"
          >
            Confirm Submit
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded cancel-button"
            onClick={(e) => antiClicky(e)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateComment
