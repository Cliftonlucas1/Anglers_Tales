import { Link } from 'react-router-dom'

const Post = ({ postList }) => {
  return (
    <div class="flex flex-wrap">
      {postList &&
        postList.map((posts, index) => (
          <div class="w-full md:w-1/2 lg:w-1/3 p-2">
            <div class="bg-white rounded shadow">
              <Link to={`/PostDetails/${posts.id}`}>
                <img
                  src={posts.image}
                  alt="post image"
                  class="w-full rounded-t"
                />
              </Link>
              <div class="p-4">
                <p class="text-lg font-semibold mb-2">
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
