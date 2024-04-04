import React from 'react'

const Dashboard = () => {
  return (
    <>
        <div className='bg-slate-100 '>
        {/* <h1 className="text-3xl font-bold underline text-center">
      Hello world! hgas
    </h1> */}
    <div className='flex'>
        <div className='w-96 border-r-2 border-black-900 bg-white'>
            <div className='flex border-2 m-9 rounded-lg '>
                <div className='m-3'>
                    <img className='w-20' src="https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png" alt="" />
                </div>
                <div className='m-3'>
                    <h6 className='font-bold'>Miya Hashim</h6>
                    <h6 className='' >Verification Level 6</h6>
                    <p>Ernamkulam india</p>
                </div>
            </div>
            <div className=' border-2 m-9 rounded-lg '>
            <h1 className='font-bold text-xl m-3'>Available for use</h1>
            <div className='flex'>
                <div className='m-3'>
                    <h1 className='text-4xl'>0.00</h1>
                    <p className='text-xl'>Being Cleared</p>
                    <h1 className='text-4xl'>0.00</h1>
                   
                </div>
                <div className='m-3 '>
                    <button className='border-2 border-dark-900 p-1 m-1'>
                        Withdraw
                        </button>
                        <br />
                        <button  className='border-2 border-dark-900  px-3 pt-1 pb-1 m-1'>
                            History
                        </button>
                </div>
            </div>
            </div>

            <menu className='flex justify-center items-center flex-col'>
                    <button className='mt-2 w-full flex justify-between items-center p-3  rounded hover:bg-cyan-500'>
                        <div className="flex items-center">
                            <i className="fa-solid fa-table"></i>
                            <span className='text-xl ml-2'>Overview</span>
                        </div>
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                    
                    <button  className='mt-2 w-full flex justify-between items-center p-3  rounded hover:bg-cyan-500'>
                        <div className="flex items-center">
                            <i className="fa-solid fa-table"></i>
                            <span className='text-xl ml-2'>Store</span>
                        </div>
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                    <button   className='mt-2 w-full flex justify-between items-center p-3  rounded hover:bg-cyan-500'>
                        <div className="flex items-center">
                            <i className="fa-solid fa-table"></i>
                            <span className='text-xl ml-2'>User Account</span>
                        </div>
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                    <button className='mt-3 w-full flex justify-between items-center p-3  rounded hover:bg-cyan-500'>
                        <div className="flex items-center">
                            <i className="fa-solid fa-table"></i>
                            <span className='text-xl ml-2'>Orders</span>
                        </div>
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                    <button className='mt-3 w-full flex justify-between items-center p-3  rounded hover:bg-cyan-500'>
                        <div className="flex items-center">
                            <i className="fa-solid fa-table"></i>
                            <span className='text-xl ml-2'>Contact & Support</span>
                        </div>
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                    <button className='mt-3 w-full flex justify-between items-center p-3  rounded hover:bg-cyan-500'>
                        <div className="flex items-center">
                            <i className="fa-solid fa-table"></i>
                            <span className='text-xl ml-2'>Terms & Condition</span>
                        </div>
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                </menu>
            
        </div>
        <div className='bg-slate-100 flex justify-between'>
            <div className='mt-40 ml-20'>
                <ul className='cursor-pointer'>
                    <li className='m-3 bg-blue-300 p-2 rounded-lg'>Products</li>
                    <li className='m-3'>Order</li>
                    <li className='m-3'>Store Settings</li>
                </ul>
            </div>
            <div>
                <div className='flex ml-60 mt-10'>
                    <input  className='ml-5  border-2 rounded border-black rounde-lg' type="text" placeholder='All' />
                    <input  className='ml-20 border-2 rounded border-black rounde' type="text"  placeholder='All' />
                    <input  className='ml-20 border-2 rounded border-black rounde' type="text" placeholder='All' />
                </div>
                <div className='border-2 border-black-900 bg-white mt-20 h-2/3 ml-20 rounded-lg'>
                    <div className='flex p-5'>
                        <input placeholder='Search products ' className='border-2 border-black-500 ml-80' type="text" />
                        {/* <i className='bg-blue c-white'>Sort</i> */}
                        <p className='bg-blue-600 text-white cursor-pointer rounded-lg px-4 py-1 ml-3'>Sort</p>
                        
                    </div>
                    <div className='flex m-10'>
                            <div className='w-40 border-2 border-black-900 rounded-lg  m-5 cursor-pointer'>
                                    <p className='text-center mt-20 text-sky-800'>➕ <br />
                                    Add Product</p>
                            </div>
                            <div className='m-5 rounded-lg shadow-md p-2'>
                                <img className='w-40'   src="https://th.bing.com/th/id/OIP._UV027OFd5VfUTbNs00I_QHaHa?rs=1&pid=ImgDetMain" alt="" />
                                  

                                    <p>Sony pxw-z90</p>
                                    <p>from <span className='text-sky-800'>₹ 1,00,000</span></p>
                            </div>
                            <div className='m-5 rounded-lg shadow-md p-2'>
                            <img className='w-40' src="https://th.bing.com/th/id/OIP._UV027OFd5VfUTbNs00I_QHaHa?rs=1&pid=ImgDetMain" alt="" />
                            <p>Sony pxw-z90</p>
                            <p>from <span className='text-sky-800'>₹ 1,00,000</span></p>
                            </div>
                            <div className='m-5 rounded-lg shadow-md p-2'>
                            <img className='w-40' src="https://th.bing.com/th/id/OIP._UV027OFd5VfUTbNs00I_QHaHa?rs=1&pid=ImgDetMain" alt="" />
                            <p>Sony pxw-z90</p>
                            <p>from <span className='text-sky-800'>₹ 1,00,000</span></p>
                            </div>
                        </div>

                </div>
            </div>

        </div>
        
    </div>
    </div>
    </>
  )
}

export default Dashboard
