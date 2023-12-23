import React from 'react'

const SingleNftSeller = ({num, img, name, heading1, heading2}) => {
  return (
    <div className='flex justify-around px-8 py-2 gap-4 items-center font-medium hover:bg-gray-100 hover:rounded-lg'>
        <span>{num}</span>
        <div className='flex pl-4 gap-4 items-center'>
            <img src={img} alt="seller-profile"  className='w-20 rounded-lg'/>
            <h2>{name}</h2>
        </div>
        <div className='flex gap-4 items-center'>
            <h2>{heading1}</h2>
            <h2>{heading2}</h2>
        </div>
        
    </div>
  )
}

export default SingleNftSeller