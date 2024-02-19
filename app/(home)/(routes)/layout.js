import React from 'react';
import SideBarNav from '../_components/SideBarNav';
import Header from '../_components/Header';

function Homelayout({ children }) {
  return (
    <div className='h-full'>
      <div className='w-64 md:flex-col fixed inset-y-0 z-50 hidden md:block'>
        <SideBarNav />
      </div>
      <Header/>
      <div className='ml-64 p-5'>
      {children}
      </div>
    </div>
  );
}

export default Homelayout;
