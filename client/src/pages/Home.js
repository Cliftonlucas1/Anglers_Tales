import Post from './Post'
import { useEffect } from 'react'

const Home = ({ postList, getAllPosts }) => {
  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <div>
      <Car carList={carList} />
      <div className="cool-post-logo">
        <img src="https://www.freepnglogos.com/uploads/zent-logo-png-car-22.png" />
      </div>
    </div>
  )
}

export default Home
