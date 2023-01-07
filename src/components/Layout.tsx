import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'

const Layout = ( {children} ) => {

  return (
    <div className='flex flex-row justify-start'>
        <Navbar />
        <div className='flex-1 p-4 border-dashed'>
        {children}
        </div>
    </div>
  )
}

export default Layout
