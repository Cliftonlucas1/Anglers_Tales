import { Link } from 'react-router-dom'

const Post = ({ postList }) => {
  return (
    <div className="flex flex-wrap">
      {postList &&
        postList.map((posts, index) => (
          <div className="w-full md:w-1/2 lg:w-1/3 p-2" key={posts.id}>
            <div className="bg-white rounded shadow">
              <Link to={`/PostDetails/${posts.id}`}>
                <img
                  src={posts.image}
                  alt="post image"
                  className="w-full rounded-t"
                />
              </Link>
              <div className="p-4">
                <p className="text-lg font-semibold mb-2">
                  {posts.fishType} {posts.fishSpecies} {posts.fishSize}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Post
