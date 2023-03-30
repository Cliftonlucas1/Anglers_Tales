import { useState } from 'react'
import Client from '../services/api'

const BASE_URL = `http://localhost:3001/`

const PostForm = ({ user, getUsersPosts, userPostList }) => {
  let userId = user && user.id

  const initialState = {
    fishType: '',
    fishSpecies: '',
    fishSize: '',
    image: '',
    userId
  }

  const [formState, setFormState] = useState(initialState)
  const [post, setPost] = useState()

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
    setPost(formState.post)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.post(`${BASE_URL}posts/newpost`, formState)
    setFormState(initialState)
    getUsersPosts()
  }

  return (
    <div className="post-form-container">
      <div className="postForm">
        <form onSubmit={handleSubmit} className="post-form">
          <label htmlFor="fishType">fishType: </label>
          <input
            type="text"
            id="fishType"
            onChange={handleChange}
            value={formState.fishType}
          />
          <label htmlFor="fishSpecies">fishSpecies: </label>
          <input
            type="text"
            id="fishSpecies"
            onChange={handleChange}
            value={formState.fishSpecies}
          />
          <label htmlFor="fishSize">fishSize: </label>
          <input
            type="text"
            id="fishSize"
            onChange={handleChange}
            value={formState.fishSize}
          />
          <label htmlFor="image"> Image URL: </label>
          <input
            type="text"
            id="image"
            onChange={handleChange}
            value={formState.image}
          />
          <button className="postForm-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default PostForm
