import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()
  const initialState = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      userName: formValues.userName,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(initialState)
    navigate('/signin')
  }

  return (
    <div className="signinPage">
      <div className="signin">
        <div className="card-overlay centered">
          <form className="signinForm" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <h3>Register</h3>
              <label htmlFor="userName">Username</label>
              <input
                onChange={handleChange}
                name="userName"
                type="text"
                placeholder="Username"
                value={formValues.userName}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="example@example.com"
                value={formValues.email}
                required
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                value={formValues.password}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                required
              />
            </div>
            <div className="signIInButton">
              <button
                className="signinButton"
                disabled={
                  !formValues.email ||
                  (!formValues.password &&
                    formValues.confirmPassword === formValues.password)
                }
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
