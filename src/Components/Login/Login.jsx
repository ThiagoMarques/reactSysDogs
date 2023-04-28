import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" elemnt={<LoginForm />} />
        <Route path="/criar" elemnt={<LoginCreate />} />
        <Route path="/perdeu" elemnt={<LoginPasswordLost />} />
        <Route path="/resetar" elemnt={<LoginPasswordReset />} />
      </Routes>
    </div>
  )
}

export default Login