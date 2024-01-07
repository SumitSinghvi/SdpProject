import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='bg-black text-white p-4 h-screen flex justify-center items-center'>
      <Link to="/form" className='p-4 m-4 bg-blue-400 text-black'>Generate UIDs</Link>
      <Link to="/search" className='p-4 m-4 bg-red-400 text-black'>Search UIDs</Link>
    </div>
  )
}
