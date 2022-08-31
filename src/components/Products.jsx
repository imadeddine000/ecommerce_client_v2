import React from 'react'
import ProductCard from './ProductCard'

const products=[
    {name:'Nike air force',image:'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMGFpciUyMGZvcmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',price:'99',status:'available',rating:'4.3',address:'ouled aissa ,boumerdes algeria'},
    {name:'Nike air force',image:'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',price:'99',status:'not available',rating:'4.3',address:'ouled aissa ,boumerdes algeria'},
    {name:'Nike air force',image:'https://images.unsplash.com/photo-1617659512089-6fdec6c54406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',price:'99',status:'available',rating:'4.3',address:'ouled aissa ,boumerdes algeria'}

]

const Products = () => {
  return (
    <div className='bg-gray-100 md:px-20 flex flex-col md:flex-row p-5  '>
        <div>
            <div className='hidden lg:flex flex-col  bg-white rounded-md shadow-md'>
                <div className='p-4 flex justify-between border-b-[1px] border-gray-200 '>
                    <div>
                        <h1>Filter</h1>
                    </div>
                    <div className='border-2 border-gray-200 rounded-full  pr-2 pl-2 hover:bg-gray-200'>
                        <button>Reset</button>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex justify-between p-4'>
                        <div>
                            <h1>Price</h1>
                        </div>
                        <div className='border-2 border-gray-200 hover:bg-gray-200 pr-2 pl-2 rounded-full'>
                            <button>Hide</button>
                        </div>
                    </div>

                    <div className='p-2 '>
                        <input className='outline-none border-2 border-gray-200 rounded-full p-2' type="text" placeholder='value $'/>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col p-5 grow sm:justify-center'>
            <div className='flex justify-between items-center'>
                <div className='text-sm md:text-xl'>
                    Found <span className='text-red-600 font-bold'>100</span> items on search
                </div>
                <div className='flex space-x-5 items-center'>
                    <div className='text-sm md:text-xl'>
                        <h1>Sort by</h1>
                    </div>
                    <div className='bg-red-600 p-2 pr-3 pl-3 rounded-full  text-sm md:text-xl '>
                        <select className='bg-red-600 cursor-pointer'>
                            <option>Reviews</option>
                            <option>Reviews</option>
                            <option>Reviews</option>
                            <option>Reviews</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* product Card */}
                <div className='p-4 sm:grid-cols-2 grid gap-4  md:grid-cols-3 '>
                    {products&&products.map((product,index)=>(
                        <>
                            <ProductCard product={product} key={index}/>
                        </>
                    ))}
                </div>
        </div>
        
    </div>
  )
}

export default Products