import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
      <div className='bg-pink-200 text-white p-4 h-screen flex justify-center items-center'>
        <Link to="/category" className='rounded-md font-bold p-4 m-4 bg-blue-400 text-black'>category</Link>
      </div>
  )
}
