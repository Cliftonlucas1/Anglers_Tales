import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PostForm from './PostForm'
import Client from '../services/api'

const User = ({ user, userPostList, getUsersPosts }) => {
  const [addingPost, setAddingPost] = useState(false)

  const addPost = (event) => {
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
    <div class="bg-gray-100">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="max-w-3xl mx-auto space-y-8">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-gray-900">
            Your Collection
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {userPostList.map((post) => (
              <Link to={`/posts/${post.id}`} key={post.id}>
                {' '}
                <div class="bg-white shadow overflow-hidden sm:rounded-lg cursor-pointer">
                  <img
                    class="h-48 w-full object-cover"
                    src={post?.image}
                    alt="Post Image"
                  />
                  <div class="px-4 py-4">
                    <h3 class="text-lg font-medium leading-6 text-gray-900">
                      {post?.fishType}
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">
                      {post?.fishSpecies} | {post?.fishSize}
                    </p>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right">
                    <button
                      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      onClick={(e) => deletePost(e, post.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div class="flex justify-center">
            <button
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={addPost}
            >
              Add Post
            </button>
          </div>
          {addingPost && (
            <div>
              <PostForm
                user={user}
                getUsersPosts={getUsersPosts}
                userPostList={userPostList}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default User
