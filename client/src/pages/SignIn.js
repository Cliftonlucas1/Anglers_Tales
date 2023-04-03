import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignIn = ({ setUser }) => {
  let navigate = useNavigate()
  let initialState = { email: '', password: '' }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues(initialState)
    console.log(payload)
    setUser(payload)
    navigate('/')
  }

  return (
    <body className="body bg-white dark:bg-[#0F172A]">
      <div className="bg-black before:animate-pulse before:bg-gradient-to-b before:from-gray-900 overflow-hidden before:via-[#00FF00] before:to-gray-900 before:absolute">
        <div id="myDIV">
          <div className="w-[100vw] h-[100vh] px-3 sm:px-5 flex items-center justify-center absolute">
            <div className="w-full sm:w-1/2 lg:2/3 px-6 bg-gray-500 bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-sm text-white z-50 py-4 rounded-lg">
              <div className="w-full flex justify-center text-[#00FF00] text-xl mb-2 md:mb-5"></div>
              <form className="signinForm" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                  <div class="w-full flex justify-center text-[#00FF00] text-xl mb:2 md:mb-5">
                    Sign In
                  </div>
                  <div class="mb-6">
                    <label
                      htmlFor="email"
                      class="block mb-2 text-xs font-medium text-white"
                    >
                      Email
                    </label>
                    <input
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@neurolink.com"
                      onChange={handleChange}
                      name="email"
                      type="email"
                      value={formValues.email}
                      required
                    />
                  </div>
                </div>
                <div className="input-wrapper">
                  <div class="mb-6">
                    <label
                      htmlFor="password"
                      class="block mb-2 text-xs font-medium text-white"
                    >
                      Password
                    </label>
                    <input
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={handleChange}
                      type="password"
                      name="password"
                      value={formValues.password}
                      required
                    />
                  </div>
                </div>
                <div className="signInButton">
                  <button
                    class="mt-4 md:mt-10 w-full flex justify-center text-sm md:text-xl bg-[#00FF00] py-2 rounded-md"
                    className="w-full flex justify-center text-[#00FF00] text-xl mb:2 md:mb-5"
                    disabled={!formValues.email || !formValues.password}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default SignIn
