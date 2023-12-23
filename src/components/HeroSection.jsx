import React from 'react'
import HeroCard from './HeroCard'
import { FaChevronDown } from "react-icons/fa";


const HeroSection = () => {
  return (
    <section className='mt-6'>
        <div className='flex items-center gap-4'>
            <HeroCard img="https://i.seadn.io/s/production/4870c89c-3244-4e6e-beff-4ad966fac124.png?auto=format&dpr=1&w=1920" heading="Editions x Teexels" para="Floor: 0.01 ETH"/>
            <HeroCard img="https://i.seadn.io/s/production/425524a4-71a3-4e58-87a9-d3f70c6941b7.png?auto=format&dpr=1&w=1920" heading="Editions x Teexels" para="Floor: 0.01 ETH" />
            <HeroCard img="https://i.seadn.io/s/production/e65481f8-2478-42d8-a230-0f09dffe8384.png?auto=format&dpr=1&w=1920" heading="Editions x Teexels" para="Floor: 0.01 ETH" />
            <HeroCard img="https://i.seadn.io/s/production/3e27931e-07c1-43b7-9771-95f72f764e16.png?auto=format&dpr=1&w=1920" heading="Editions x Teexels" para="Floor: 0.01 ETH" />
            {/* <HeroCard img="https://i.seadn.io/s/production/8e4489a5-5e79-4a59-b87e-255ac29d2fac.png?auto=format&dpr=1&w=1920" heading="Editions x Teexels" para="Floor: 0.01 ETH" />
            <HeroCard img="https://i.seadn.io/s/production/1cb5ee9f-2c71-455b-8c81-f2c032c434b1.png?auto=format&dpr=1&w=1920" heading="Editions x Teexels" para="Floor: 0.01 ETH" />
            <HeroCard img="https://i.seadn.io/s/production/8e4489a5-5e79-4a59-b87e-255ac29d2fac.png?auto=format&dpr=1&w=1920" heading="Editions x Teexels" para="Floor: 0.01 ETH" />
            <HeroCard img="https://i.seadn.io/s/production/1cb5ee9f-2c71-455b-8c81-f2c032c434b1.png?auto=format&dpr=1&w=1920" heading="Editions x Teexels" para="Floor: 0.01 ETH" /> */}  
        </div>
        <div className='flex mt-10 justify-between items-center text-xl font-medium'>
            <div className='flex items-center gap-6 py-[3px] pl-1 pr-4 bg-gray-200 rounded-xl'>
                <button className='bg-white rounded-xl py-2 px-4'>Trending</button>
                <h3>Top</h3>
            </div>
            <div className='flex gap-4 items-center'>
                  <div className='flex gap-8  px-8 py-1 items-center bg-gray-200 rounded-xl'>
                    <span>1h</span>
                    <span>6h</span>
                    <span className='bg-white rounded-xl px-6 py-2'>24h</span>
                    <span>7d</span>
                  </div>
                   
                <button className='flex items-center gap-4 py-3 px-4 bg-gray-200 rounded-xl'>All chains<FaChevronDown/></button>
                <button className='py-3 px-4 bg-gray-200 rounded-xl'>View all</button>
            </div>
           
        </div>
        <div>
                <p className='flex justify-between items-center px-8 text-sm py-2'>
                    <span>Rank Collection</span>
                     <span>
                     <span>Floor Price</span>
                    <span>Volume</span>
                     </span>
                    <span>Rank Collection</span>
                    <span>
                    <span>Floor Price</span>
                    <span>Volume</span>
                    </span>

                </p>
            </div>

    </section>
  )
}

export default HeroSection