import React, { useState } from 'react'


const initialState = {  password: "", confirmPassword: "" }
export default function Signup() {
  const [state, setState] = useState(initialState)

  const handleChange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleForget = e => {
    e.preventDefault()
const {password, confirmPassword} =state
console.log(password, confirmPassword);
  }
  return (
    <div className="formDiv">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6  col-lg-4 ">
            <div className="card pt-4 px-2">
              <h2 className='text-center pb-3'>Reset Account Password</h2>
              <form>
                <div className="row">
                  <div className="col-12">
                    <div className="mb-3">
                      <input type="password" className="form-control" id="password" placeholder='Password' name='password' value={state.password} onChange={handleChange} />

                    </div>
                    <div className="mb-3">
                      <input type="password" className="form-control" id="confirmPassword" placeholder='Confirm Password' name='confirmPassword' value={state.confirmPassword} onChange={handleChange} />

                    </div>
                    <div className="mb-3  text-center ">
                      <button className="btn btn-secondary text-white w-50 my-3" onClick={handleForget}>Reset Password</button>
                    </div>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
