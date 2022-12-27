import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Content = () => {

   const heading =  useLocation()?.state || useLocation().pathname

  return (
    <div>
      <div className="p-[50px_50px] shadow-sm bg-[#efefef] ">
        <div >
            <h1 className="text-2xl mb-10">{heading}</h1>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Content;
