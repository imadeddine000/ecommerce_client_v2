import React from 'react'
import {FiSettings} from 'react-icons/fi'
import {BsHandbag} from 'react-icons/bs'
import {BiBell} from 'react-icons/bi'
import {FaHeadphones} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center  p-1  pl-2 bg-white shadow-md pr-2  '>
        <div className='text-sm p-2 font-bold border-r-2 border-gray-200 '>
            <Link to='/'>
                Shopping
            </Link>
        </div>
        <div className='flex space-x-8 flex-col md:flex-row '>
            <div className='flex border-2 border-gray-200 rounded-full p-1 '>
                <div className='flex space-x-2 font-bold text-md'>
                    <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer flex items-center'>
                        <button>
                        <FiSettings/>
                        </button>
                    </div>
                    <div className='p-2 relative hover:bg-gray-200 rounded-full cursor-pointer flex items-center'>
                        <button className=''>
                            <BsHandbag/>
                        </button>
                        <div className='text-[12px] text-white  absolute  top-0 right-0 bg-red-600 rounded-full w-4 h-4 items-center flex justify-center'>
                            <span className='font-bold'>2</span>
                        </div>

                    </div>
                    <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer flex items-center'>
                        <button>
                            <BiBell/>
                        </button>
                    </div>
                    <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer flex items-center'>
                        <button>
                            <FaHeadphones/>
                        </button>
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
           
        </div>
    </div>
  )
}

export default Navbar