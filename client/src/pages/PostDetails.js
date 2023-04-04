import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CommentForm from './CommentForm'
import UpdateComment from './UpdateComment'
import Client from '../services/api'
const PostDetails = ({ user }) => {
  let { id } = useParams()

  const [showResults, setShowResults] = useState(null)

  const clicky = (e, commentId) => {
    e.preventDefault()
    if (!commentId) {
      setShowResults(null)
    } else setShowResults(commentId)
  }
  const antiClicky = (e) => {
    e.preventDefault()
    setShowResults(null)
  }

  const [postDetails, setPostDetails] = useState()

  const [isLoaded, setIsLoaded] = useState(false)

  const getPostDetails = async () => {
    const postDeets = await axios.get(`http://localhost:3001/posts/post/${id}`)
    setPostDetails(postDeets.data)
    setIsLoaded(true)
  }

  const deleteComment = async (e, commentId) => {
    e.preventDefault()
    await Client.delete(`http://localhost:3001/comment/delete/${commentId}`)
    getPostDetails()
  }
  useEffect(() => {
    getPostDetails()
  }, [])
  let userOptions
  if (user) {
    userOptions = (
      <div>
        <CommentForm
          postDetails={postDetails}
          user={user}
          getPostDetails={getPostDetails}
        />
      </div>
    )
  }
  const publicOptions = <div></div>
  if (isLoaded) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 ">
              {postDetails.fishType} {postDetails.fishSpecies}
            </h1>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 lg:w-1/3 mr-4 mb-4">
                <img
                  src={postDetails?.image}
                  alt="post"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="bg-white p-6 rounded-lg shadow-md mt-4 ">
                  <p className=" font-bold mb-2 ">
                    User Name: {postDetails?.owner?.userName}
                  </p>
                  <p className="text-gray-700 font-bold mb-2">
                    fishType: {postDetails?.fishType}
                  </p>
                  <p className="text-gray-700 font-bold mb-2">
                    fishSpecies: {postDetails?.fishSpecies}
                  </p>
                  <p className="text-gray-700 font-bold mb-2">
                    fishSize: {postDetails?.fishSize}
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 lg:w-2/3 mt-4 md:mt-0">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Comments</h3>
                  {postDetails.comments.map((comment) => (
                    <div className="flex mb-4" key={comment.id}>
                      <div className="mr-4">
                        <div className="text-gray-700 font-bold mb-2">
                          {comment.post.userName}:
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700">{comment.content}</p>
                        {user?.id === comment?.userId && (
                          <div className="mt-2">
                            <button
                              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2"
                              onClick={(e) => deleteComment(e, comment.id)}
                            >
                              Delete
                            </button>
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                              onClick={(e) => clicky(e, comment.id)}
                            >
                              Update
                            </button>
                            <div>
                              {comment?.id === showResults && (
                                <UpdateComment
                                  clicky={clicky}
                                  getPostDetails={getPostDetails}
                                  comment={comment}
                                  antiClicky={antiClicky}
                                />
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  <div></div>
                </div>
                <div className="mt-4">{user ? userOptions : publicOptions}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default PostDetails
