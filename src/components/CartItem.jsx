import React from 'react'

const CartItem = () => {
  return (
    <>
        <div className='flex items-center justify-between shadow pr-1 rounded-md'>
            <div className=''>
                <img className='object-cover h-20 w-20 rounded-md' src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            </div>
            <div className='p-2  flex flex-col'>
                <div className='text-md font-bold '>
                    <h1>Nike air force</h1>
                </div>
                <div className='bg-gray-200 w-fit p-1 rounded-md'>
                    <h1>99$</h1>
                </div>
            </div>
            <div className=' p-2 rounded-md w-8 h-8 items-center justify-center flex hover:bg-gray-200 cursor-pointer'>
                <button>X</button>
            </div>
        </div>
    </>
  )
}

export default CartItem