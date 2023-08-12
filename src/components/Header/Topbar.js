import dayjs from 'dayjs'
import React, {  useState } from 'react'

export default function Topbar() {
  const [curentTime, setCurentTime] = useState()
  setInterval(() => {
    setCurentTime(dayjs().format("dddd MMMM YYYY hh:mm:ss A"))
  }
  )
  return (
    <>
      <div className="topbar bg-dark text-white py-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className='m-0 float-end'>
                {curentTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
