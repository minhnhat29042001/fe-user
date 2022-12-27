import React from 'react'
import { Navigate } from 'react-router-dom'
import useUserSlice from '../hooks/useUserSlice'

const ProtectedRouter = ({children} : any) => {

    const {isLoggedIn} = useUserSlice()
  return (
    <div>
        {isLoggedIn ? children : <Navigate to={'/'}/> }
        
    </div>
  )
}

export default ProtectedRouter