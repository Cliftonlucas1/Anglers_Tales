import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <div className="logoHomeAbout">
        <p className="welcomemessage">Welcome {user.email}!</p>
        {/*  */}
        <div className="Nav">
          <Link to="/PostForm" className="homeLink">
          PostForm
          </Link>
        </div>
        {/*  */}
        <div className="Nav">
          <Link to="/" className="homeLink">
            Home
          </Link>
        </div>
        <div className="Nav">
          <Link to="/User" className="homeLink">
            My Page
          </Link>
        </div>
        <div className="Nav">
          <Link to="/UserSettings" className="UserSettings">
            User Settings
          </Link>
        </div>
        <div className="Nav">
          <Link onClick={handleLogOut} to="/">
            Sign Out
          </Link>
        </div>
      </div>
    )
  }
  const publicOptions = (
    <div className="logoHomeAbout">
      <div className="Nav">
        <Link to="/" className="homeLink">
          Home
        </Link>
      </div>
      <div className="Nav">
        <Link to="/register" className="registerNav">
          Register
        </Link>
      </div>
      <div className="Nav">
        <Link to="/signin">Sign In</Link>
      </div>
    </div>
  )
  return (
    <header>
      <nav>
        <div className="logoHomeAbout">
          <div className="logoTitle">
            <NavLink to="/" className="logo">
              {/* <img
                src="https://i.imgur.com/4EPiWVr.jpeg"
                alt="Car image"
                className="logoImage"
              /> */}
            </NavLink>
            <h1 className="car-show">Anglers Tales</h1>
          </div>
          {user ? userOptions : publicOptions}
          <div className="Nav">
            <NavLink to="/about" className="aboutLink">
              About
            </NavLink>
          </div>

          <div className="registerNav"></div>
        </div>
      </nav>
    </header>
  )
}

export default Header
