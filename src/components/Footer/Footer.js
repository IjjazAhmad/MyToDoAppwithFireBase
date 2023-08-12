import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className='bg-primary text-white py-2 text-center'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className='m-0'>&copy; {year}. All Rigth Reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
