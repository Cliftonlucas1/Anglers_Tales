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
  const [showForm, setShowForm] = useState(false) // added state variable
  const [post, setPost] = useState(false)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.post(`${BASE_URL}posts/newpost`, formState)
    setFormState(initialState)
    getUsersPosts()
    setShowForm(false)
  }

  const handleShowForm = () => {
    setShowForm(true)
  }

  return (
    <body className="body bg-white dark:bg-[#0F172A]">
      <div className="bg-black before:animate-pulse before:bg-gradient-to-b before:from-gray-900 overflow-hidden before:via-[#00FF00] before:to-gray-900 before:absolute">
        <div id="myDIV">
          <div className="w-[100vw] h-[100vh] px-3 sm:px-5 flex items-center justify-center absolute">
            <div className="w-full sm:w-1/2 lg:2/3 px-6 bg-gray-500 bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-sm text-white z-50 py-4 rounded-lg ">
              <div className="w-full flex justify-center text-[#00FF00] text-xl mb-2 md:mb-5"></div>

              <form onSubmit={handleSubmit} className="">
                <div className="input-wrapper">
                  <div class="w-full flex justify-center text-[#00FF00] text-xl mb:2 md:mb-5">
                    Add Post
                  </div>
                  <div class="mb-6">
                    <label
                      htmlFor="fishType"
                      class="block mb-2 text-xs font-medium text-white"
                    >
                      fishType:{' '}
                    </label>
                    <input
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                      id="fishType"
                      onChange={handleChange}
                      value={formState.fishType}
                    />
                  </div>
                </div>
                <div className="input-wrapper">
                  <div class="mb-6">
                    <label
                      htmlFor="fishSpecies"
                      class="block mb-2 text-xs font-medium text-white"
                    >
                      fishSpecies:{' '}
                    </label>
                    <input
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                      id="fishSpecies"
                      onChange={handleChange}
                      value={formState.fishSpecies}
                    />
                  </div>
                </div>
                <div className="input-wrapper">
                  <div class="mb-6">
                    <label
                      htmlFor="fishSize"
                      class="block mb-2 text-xs font-medium text-white"
                    >
                      fishSize:{' '}
                    </label>
                    <input
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                      id="fishSize"
                      onChange={handleChange}
                      value={formState.fishSize}
                    />
                  </div>
                </div>
                <div className="input-wrapper">
                  <div class="mb-6">
                    <label
                      htmlFor="image"
                      class="block mb-2 text-xs font-medium text-white"
                    >
                      Image URL:{' '}
                    </label>
                    <input
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                      id="image"
                      onChange={handleChange}
                      value={formState.image}
                    />
                  </div>
                </div>
                <button
                  className="w-full flex justify-center text-[#00FF00] text-xl mb:2 md:mb-5"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default PostForm
