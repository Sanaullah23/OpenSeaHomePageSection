import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { SlEnvolope } from "react-icons/sl";
import { MdOutlineShoppingCart } from "react-icons/md";

const NavBar = () => {
  return (
    <section>
        <nav className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
            <img alt="" src="	https://opensea.io/static/images/logos/opensea-logo.svg" className='w-10 hover:animate-spin'/>
                <h1 className='font-poppins text-2xl font-black'>OpenSea</h1>
            </div>
            <span className='text-xl font-bold'>|</span>
            <div className='flex items-center gap-5 text-base font-bold'>
                <span>Drops</span>
                <span>Stats</span>
                <span>Create</span>
            </div>
            
            <div className=' flex items-center px-2 py-2 rounded-xl  shadow-gray-400 shadow-sm'>
                <IoSearchOutline className='text-lg'/>
                <input type="text"  className='px-4 py-1 w-[20rem]' placeholder='Search NFT' />
                <span className='px-4 py-[2px] text-xl bg-gray-200 rounded-xl'>/</span>
            </div>
            <div className='flex items-center gap-5  font-semibold'>
                <button className='flex  gap-3 items-center bg-gray-200 rounded-lg px-5 py-3 font-poppins'> <SlEnvolope className='h-6 w-6'/> <span>Login</span></button>
                <button className='bg-gray-200 rounded-lg px-4 py-3'>
                <svg fill="currentColor" height="28" role="img" viewBox="0 -960 960 960" width="28" xmlns="http://www.w3.org/2000/svg">
                <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"></path></svg>
                </button>
                <button className='bg-gray-200 rounded-lg px-4 py-3 '><MdOutlineShoppingCart className='w-7 h-7'/></button>
            </div>
        </nav>
        <nav className='font-bold mt-8'>
            <ul className='flex items-center gap-8 text-base '>
                <li className='bg-gray-200 rounded-lg px-4 py-2 text-white'>All</li>
                <li>Art</li>
                <li>Gaming</li>
                <li>Memberships</li>
                <li>PFPs</li>
                <li>Photography</li>
                <li>Music</li>
            </ul>
        </nav>
    </section>
  )
}

export default NavBar