import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { auth } from '../../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'

const AuthContext = createContext()
const initialState = { isAuth: false }
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return {isAuth: true, user: payload.user }
    case "LOGOUT":
      return {isAuth: false}
    default:
      return state
  }

}
export default function AuthContextProvider(props) {

  const [state, dispatch] = useReducer(reducer , initialState)
useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
     dispatch({type:"LOGIN", payload:{user}})
    } else {
      
    }
  });
},[])

  let myname = "ToDoApp"
  return (
    <AuthContext.Provider value={{ myname, ...state, dispatch }} >
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)