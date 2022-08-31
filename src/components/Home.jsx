import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {AiFillCloseCircle} from 'react-icons/ai'
import Products from './Products'

const Home = () => {
  return (
    <div className='h-auto'>
        <div className='bg-red-500 flex justify-center relative w-full h-20'>
            <div className='bg-white rounded-md w-fit flex items-center absolute shadow p-4 top-[3.5rem] space-x-1 md:space-x-10 '>
               <div className='flex items-center border-r-2 border-gray-200 space-x-1 md:space-x-5'>
               <div className='text-xl p-1'>
                    <BiSearch/>
                </div>
                <div className='flex items-center space-x-2'>
                    <input className='text-sm md:text-xl outline-none pr-1 md:pr-8' type="text" placeholder='Type to Search ' />
                    <div className='text-xl p-1 cursor-pointer hover:bg-gray-200 rounded-full'>
                    <AiFillCloseCircle/>
                    </div>
                </div>
               </div>
                <div>
                    <select name='categories' className='bg-white cursor-pointer text-sm md:text-xl '>
                        <option className=''>Categories</option>
                        <option>shoes</option>
                        <option>cars</option>
                        <option>smartphones</option>

                    </select>
                </div>
            </div>
           
        </div>

        <div className='pt-20'>
                <div className='text-center font-bold text-xl md:text-2xl '>
                    <h1>Search Result</h1>
                </div>
                <div className='flex justify-center p-3'>
                    <ul className='flex space-x-5 overflow-auto scroll '>
                        <li className='border-2 border-gray-200 cursor-pointer rounded-full p-2 hover:bg-gray-200'>shoes </li>
                        <li className='border-2 border-gray-200 cursor-pointer rounded-full p-2 hover:bg-gray-200'>smartphones</li>
                        <li className='border-2 border-gray-200 cursor-pointer rounded-full p-2 hover:bg-gray-200'>shoes </li>
                        <li className='border-2 border-gray-200 cursor-pointer rounded-full p-2 hover:bg-gray-200'>smartphones</li>
                        <li className='border-2 border-gray-200 cursor-pointer rounded-full p-2 hover:bg-gray-200'>shoes </li>
                        <li className='border-2 border-gray-200 cursor-pointer rounded-full p-2 hover:bg-gray-200'>smartphones</li>
                        
                    </ul>
                </div>
        </div>

        <div>
            <Products/>
        </div>
    </div>
  )
}

export default Home