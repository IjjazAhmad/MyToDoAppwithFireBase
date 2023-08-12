import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Signin from './Signin'
import Forgetpassword from './Forgetpassword'

export default function index() {
  return (
    <>
    <Routes>
      <Route  path='/signin' element={<Signin/>}/>
      <Route  path='/signup' element={<Signup/>}/>
      <Route  path='/forget-password' element={<Forgetpassword/>}/>
    </Routes>
    </>
  )
}
