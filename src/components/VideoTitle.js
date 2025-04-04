import React from 'react'

const VideoTitle = (props) => {
const {title, overview} = props

  return (
    <div className='pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-square'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div >
        <button className='bg-white text-black border-black p-4 px-16 text-xl bg-opacity-100 rounded-md hover:bg-opacity-80'>▶️ Play</button>
        <button className=' mx-2 bg-gray-500 text-white border-black p-4 px-16 text-xl bg-opacity-50 rounded-md hover:bg-opacity-100'>More Info</button>
      </div>
      
    </div>
  )
}

export default VideoTitle
