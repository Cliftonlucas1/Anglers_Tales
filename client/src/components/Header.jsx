import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import ReactSwitch from 'react-switch'

const Header = ({ user, handleLogOut, toggleTheme }) => {
  let userOptions
  if (user) {
    userOptions = (
      <div className="logoHomeAbout">
        <p className="welcomemessage">Welcome {user.userName}!</p>
        {/*  */}

<div>

<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex items-center">
      <img src="https://www.nawpic.com/media/2020/fishing-nawpic-17-e1656881463575.jpg" className="h-8 mr-3" alt="Anglers Tales Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Anglers Tales</span>
  </a>
  <p className="text-white text-lg font-bold">Welcome {user.email}!</p>
  <div className="flex md:order-2">
      <button type="button" onClick={handleLogOut} to="/"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Out</button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="/user" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My Feed</a>
      </li>
      <li>
        {/* <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a> */}
      </li>
      <li>
      <ReactSwitch onChange={toggleTheme} />
      </li>
    </ul>
  </div>
  </div>
</nav>

      </div>
      </div>
    )
  }
  const publicOptions = (
    <div className="logoHomeAbout">




<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="./" className="flex items-center">
      <img src="https://www.nawpic.com/media/2020/fishing-nawpic-17-e1656881463575.jpg" className="h-8 mr-3" alt="Anglers Tales Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Anglers Tales</span>
  </a>
  <div className="flex md:order-2">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <Link to="./SignIn">Sign In</Link> 
      </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="./" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="./about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="./register" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Register</a>
      </li>
      {/* <li>
        <a href="./signIn" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign In</a>
      </li> */}
    </ul>
  </div>
  </div>
</nav>


      {/* <div className="Nav">
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
      </div> */}
    </div>
  )







  return (
    <header>
      <nav>
        <div className="logoHomeAbout">
          
          {user ? userOptions : publicOptions}

         
        </div>
      </nav>
    </header>
  )
}

export default Header
