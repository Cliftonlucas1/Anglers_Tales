import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import About from './pages/About'
import SignIn from './pages/SignIn'
import { CheckSession } from './services/Auth'
import UserSettings from './pages/UserSettings'
import axios from 'axios'
import Client from './services/api'
import PostForm from './pages/PostForm'

const App = () => {
  const [user, setUser] = useState(null)
  const [userPostList, setUserPostList] = useState([])

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
    try {
      const response = await axios.get(
        `http://localhost:3001/posts/user/${user.id}`
      )
      setUserPostList(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Header user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signIn" element={<SignIn setUser={setUser} />} />
          <Route path="/userSettings" element={<UserSettings />} />
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
