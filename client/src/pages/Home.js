import Post from './Post'
import { useEffect } from 'react'

const Home = ({ postList, getAllPosts }) => {
  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline text-center"></h1>
      </div>
      <Post postList={postList} />
      <div className="cool-post-logo">
        <img src="" />
      </div>
    </div>
  )
}

export default Home
