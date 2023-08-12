import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../pages/Context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'

export default function Navbar() {
  const {  isAuth, user, dispatch } = useAuthContext()



  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" })

      })
      .catch((err) => {
        console.error(err)
      })
  }



  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
      <div className="container">
        <Link to="/ " className="navbar-brand" >{user.email}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/ " className="nav-link active" aria-current="page" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/todos " className="nav-link" >ToDos</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact " className="nav-link" >Contact</Link>
            </li>

          </ul>
          <div className="d-flex">
            {!isAuth ?
              <>
                <Link to="/auth/signin" className='btn btn-secondary text-white me-2'>Sign In</Link>
                <Link to="/auth/signup" className='btn btn-dark me-2'>Sign Up</Link>
              </>
              : <>
                <Link to="/dashboard/profile" className='btn btn-light me-2'>Profile</Link>
                <button className='btn btn-light me-2' onClick={handleSignout} >Signout</button>
              </>


            }
          </div>
        </div>
      </div>
    </nav>
  )
}
