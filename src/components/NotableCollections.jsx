import React from 'react'
import SingleNotableCollection from './SingleNotableCollection'

const NotableCollections = () => {
  return (
    
      <div>
                <h1 className='font-bold mt-10 text-xl'>Notable collections</h1>
                <div className='mt-10 mb-8 grid grid-rows-1 grid-flow-col '>
                <SingleNotableCollection/>
                <SingleNotableCollection/>
                <SingleNotableCollection/>
                <SingleNotableCollection/>
                <SingleNotableCollection/>
                
                
                </div>

      </div>
    
  )
}

export default NotableCollections