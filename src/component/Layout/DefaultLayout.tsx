import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer.component'
import Header from '../Header/Header.component'

interface Props {
    children: JSX.Element
}

const DefaultLayout = ({children}: Props) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default DefaultLayout