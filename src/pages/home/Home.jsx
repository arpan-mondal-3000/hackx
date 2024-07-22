import React from 'react'
import "./Home.css"
import {Thirdone} from '../../components/Assets/Thirdone';

const Home = () => {
  return (
    <>
      <div className=' grid place-content-center h-screen text-green-700 tracking-widest'>
        <span className='text-5xl mx-auto font-bold tracking-[0.15em]'>Hack X</span>
        <span className='text-white mt-5 tracking-[0.3em]'><span className='text-green-600'>Hack</span> The Limits,<span className='text-green-600'> Break</span> The Barriers</span>
      </div>
      <Thirdone/>
    </>
  )
}

export default Home