import React from 'react'

const SingleNotableCollection = () => {
  return (
    <div className='border-gray-200 border-[2px] shadow-lg shadow-gray-200 rounded-lg w-60'>
    <img
      src="https://i.seadn.io/gae/ibjUDVjAvvT4yN5uuplWVSL7q9SD3WdDhJWkpdkHtT-NkOCdnKIuFVzdntP4sQ2BcLyf2I2hwFI-IdaxUOqXBZ6g0jS_jcR9ud2Syg?auto=format&dpr=1&h=500&fr=1 1x, https://i.seadn.io/gae/ibjUDVjAvvT4yN5uuplWVSL7q9SD3WdDhJWkpdkHtT-NkOCdnKIuFVzdntP4sQ2BcLyf2I2hwFI-IdaxUOqXBZ6g0jS_jcR9ud2Syg?auto=format&dpr=1&h=500&fr=12x"
      alt=""
      className='rounded-tl-lg rounded-tr-lg w-full h-40 object-cover'
    />
    <h1 className='text-lg font-medium px-4 py-4'>FIFA+Collect</h1>
    <p className='px-2 flex gap-20 items-center text-sm text-gray-500'>
      <span>Floor</span>
      <span>Total Volume</span>
    </p>
    <h1 className='px-2 flex gap-20 items-center font-semibold'>
      <span>0.001 ETH</span>
      <span>12 ETH</span>
    </h1>
  </div>
  
  )
}

export default SingleNotableCollection