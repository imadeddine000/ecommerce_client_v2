import React from 'react'
import {FiSettings} from 'react-icons/fi'
import {BsHandbag} from 'react-icons/bs'
import {BiBell} from 'react-icons/bi'
import {FaHeadphones} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center  p-2  pl-2 bg-white shadow-md pr-2 '>
        <div className='text-sm p-2 font-bold border-r-2 border-gray-200 '>
            <Link to='/'>
                Shopping
            </Link>
        </div>
        <div className='flex items-center space-x-8 '>
            <div className='hidden md:flex border-2 border-gray-200 rounded-full p-1 '>
                <div className='flex space-x-2 font-bold text-md'>
                    <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                        <FiSettings/>
                    </div>
                    <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                        <BsHandbag/>
                    </div>
                    <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                        <BiBell/>
                    </div>
                    <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                        <FaHeadphones/>
                    </div>
                </div>
            </div>
            <div className='border-r-2 border-gray-200'>
                <div className='hidden md:flex  items-center p-1 mr-2 cursor-pointer hover:bg-gray-200 space-x-2 border-2 border-gray-200 rounded-full'>
                    <img className='h-8 w-8 rounded-full' src="https://images.unsplash.com/photo-1661768662059-4c4edfd09346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    <span>
                        imadeddine
                    </span>
                </div>
            </div>
            <div>
                <div className='bg-black  text-white shadow font-bold hover:bg-gray-800 p-2 cursor-pointer rounded-full '>
                    <Link to='signup'>
                        Become A Seller
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar