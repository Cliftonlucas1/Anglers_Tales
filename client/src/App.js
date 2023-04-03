import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import About from './pages/About'
import SignIn from './pages/SignIn'
import { CheckSession } from './services/Auth'
import User from './pages/User'
import axios from 'axios'
import PostDetails from './pages/PostDetails'
import UpdateComment from './pages/UpdateComment'

import UserSettings from './pages/UserSettings'
import Client from './services/api'
import PostForm from './pages/PostForm'

const App = () => {
  const [userPostList, setUserPostList] = useState([])

  const [user, setUser] = useState(null)

  const [postList, setPostList] = useState([])

  const [comments, setComments] = useState([])

  const handleLogOut = () => {
    setUser(null)

    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const getUsersPosts = async () => {
    if (user !== null) {
      const posts = await axios.get(
        `http://localhost:3001/posts/user/${user.id}`
      )
      setUserPostList(posts.data)
    }
  }

  const getAllPosts = async () => {
    const response = await axios.get('http://localhost:3001/posts/all')
    setPostList(response.data)
  }

  const getAllComments = async () => {
    const response = await axios.get('http://localhost:3001/comment/all')
    setComments(response.data)
  }

  useEffect(() => {
    getUsersPosts()
    getAllPosts()
    getAllComments()
  }, [])

  return (
    <div>
      <Header user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                postList={postList}
                comments={comments}
                getAllPosts={getAllPosts}
                user={user}
              />
            }
          />

          <Route
            path="/User"
            element={
              <User
                user={user}
                userPostList={userPostList}
                getUsersPosts={getUsersPosts}
              />
            }
          />

          <Route path="/updateComment/" element={<UpdateComment />} />

          <Route path="/register" element={<Register />} />
          <Route path="/signIn" element={<SignIn setUser={setUser} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/PostDetails/:id"
            element={
              <PostDetails
                user={user}
                getUsersPosts={getUsersPosts}
                userPostList={userPostList}
              />
            }
          />

          <Route
            path="/UserSettings"
            element={<UserSettings user={user} handleLogOut={handleLogOut} />}
          />

          <Route
            path="/postForm"
            element={
              <PostForm
                user={user}
                getUsersPosts={getUsersPosts}
                userPostList={userPostList}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
