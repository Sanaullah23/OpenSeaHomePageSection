import React from 'react'

const HeroCard = ({img, heading, para}) => {
  return (
    <div className='w-72 relative rounded-xl hover:shadow-xl  ease-in-out'>
        <img alt=""  src={img} className='w-72 rounded-xl' />
        <div className=' absolute bottom-4 left-4 text-white '>
            <h3 className='font-bold'>{heading}</h3>
            <p>{para}</p>
        </div>
    </div>
  )
}

export default HeroCard