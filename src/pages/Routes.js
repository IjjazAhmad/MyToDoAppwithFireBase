import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'


import Frontend from './Frontend'
import Authentication from './Authentication'
import Dashboard from './Dashboard'
import { useAuthContext } from './Context/AuthContext'
import PrivateRoute from '../components/PrivateRoute'
import { ToastContainer } from 'react-toastify';

export default function Index() {
    const { isAuth } = useAuthContext()
    return (
        <>

            <Routes>
                <Route path='/*' element={<PrivateRoute Component={Frontend} />} />
                <Route path='/auth/*' element={!isAuth ? <Authentication /> : <Navigate to='/' />} />
                <Route path='/dashboard/*' element={<PrivateRoute Component={Dashboard} />} />
            </Routes>
            <ToastContainer />
        </>
    )
}
