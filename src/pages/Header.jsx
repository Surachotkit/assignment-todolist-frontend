import React from 'react'
import SearchBar from '../features/SearchBar'

export default function Header() {
  return (
    <div className='flex justify-between px-5 items-center  '>
      <div className='font-bold '>
      <span >Time : </span>
      <span className='text-orange-500'>17.19 PM</span>
      </div>
      <span><SearchBar /></span>
    </div>
  )
}
