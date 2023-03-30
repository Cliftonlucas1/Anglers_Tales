import { useEffect, useState } from 'react'
import PostForm from './PostForm'
import Client from '../services/api'

const User = ({ user, userPostList, getUsersPosts }) => {
  const [addingPost, setAddingPost] = useState(false)

  const addPost = () => {
    setAddingPost((current) => !current)
  }

  const deletePost = async (e, postsId) => {
    e.preventDefault()
    await Client.delete(`http://localhost:3001/posts/delete/${postsId}`)
    getUsersPosts()
  }

  useEffect(() => {
    getUsersPosts()
  }, [user])

  return (
    <div className="yourCollectionContainer">
      <h1>Your Collection</h1>
      <div className="yourCollection">
        {userPostList.map((posts) => (
          <div className="User-Post-Card">
            <img src={posts?.image} alt="post image" />
            <p className="fishType">fishType: {posts?.fishType}</p>
            <p className="fishSpecies">fishSpecies: {posts?.fishSpecies}</p>
            <p className="fishSize">fishSize: {posts?.fishSize}</p>

            <div>
              <button
                class="deletePost-btn"
                onClick={(e) => deletePost(e, posts.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <section>
        <button class="addPost-btn" onClick={addPost}>
          Add Post
        </button>
        {addingPost && (
          <PostForm
            user={user}
            getUsersPosts={getUsersPosts}
            userPostList={userPostList}
          />
        )}
      </section>
    </div>
  )
}

export default User
