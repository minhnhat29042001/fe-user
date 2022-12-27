import React from 'react'
import Content from './Content'
import Sidebar from './Sidebar'

const UserInfo = () => {


  return (
    <div >
        <div className="flex  relative  ">
            <div className=" w-2/12 bg-slate-500/10 shadow-md">
                <Sidebar/>
            </div>
            <div className="w-10/12 px-10 ">

            <Content/>
            </div>
        </div>
    </div>
  )
}

export default UserInfo