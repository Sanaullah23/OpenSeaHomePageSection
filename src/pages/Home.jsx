import React from 'react'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import TopNftSeller from '../components/TopNftSeller'
import NotableCollections from '../components/NotableCollections'


const Home = () => {
  return (
    <div className='pt-4 pb-1 px-8'>
       <NavBar/>
       <HeroSection/>
       <hr />
       <TopNftSeller/>
       <NotableCollections/>
    </div>
  )
}

export default Home