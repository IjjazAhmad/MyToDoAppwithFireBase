import React, { useState } from 'react'

import { doc, setDoc } from "firebase/firestore";
import { useAuthContext } from '../../Context/AuthContext'
import { firestore } from '../../../config/firebase';
const initialState = { title: "", description: "", date: "" }

export default function Home() {
  const [state, setState] = useState(initialState)
  const [isApploading, setisApploading] = useState(false)
  const { user } = useAuthContext()

  const handleChange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleAddTodo = (e) => {
    e.preventDefault()
    const { title, description, date } = state
    if (title.length < 3) {
      return window.notify("Plz Enter Title minimum three char", "error")
    }
    if (description.length < 10) {
      return window.notify("Plz Enter Description minimum ten char", "error")
    }
    if (!date) {
      return window.notify("Plz select date", "error")
    }
    const todo = { title, description, date }
    todo.randumId = Math.random().toString(36).slice(2);
    todo.status = "active"
    todo.createdBy = {
      email: user.email,
      uid:user.uid,
    }
   
    addUserDoc(todo)

  }

  const addUserDoc = async (todo) => {
    console.log(todo);
    setisApploading(true)
    try {
      await setDoc(doc(firestore, "todos", todo.randumId), todo);
      setState(initialState)
     
      window.notify("Add ToDo successfull", "success")
    }
    catch (err) {
      console.error(err)
      window.notify("something wants wrong, ToDo not added", "error")
    }
    setisApploading(false)
  }




  return (
    <div className="home ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6  col-lg-6 ">

            <div className="card pt-4 px-2">
              <h2 className='text-center pb-3'>ADD TODO</h2>
              <div className="row">
                <div className="col-12">
                  <div className="mb-3">
                    <input type="text" className="form-control" id="title" placeholder='Title' name='title' value={state.title} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <input type="text" className="form-control" id="description" placeholder='Description' name='description' value={state.description} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <input type="date" className="form-control" id="date" name='date' value={state.date} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <input type="file" className="form-control" id="image" name='image' placeholder='Upload image' />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3  text-center">
                    <button className="btn btn-secondary text-white w-75 my-3" onClick={handleAddTodo} disabled={isApploading} >{
                      !isApploading ? "ADD TODO" : <div className="spinner-border btn-secondary   " role="status">
                      </div>
                    }</button>

                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
