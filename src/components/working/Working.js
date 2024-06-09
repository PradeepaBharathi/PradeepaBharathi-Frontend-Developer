import React from 'react'
import robot from '../assests/robot.png'
import './working.css'
function Working() {
  return (
    <div className='  bg-gradient-to-b from-black to-customColor min-h-screen flex  items-center gap-7 workcontainer '>
        <div className='p-8  '>
            <img src={robot} alt='robot'/>
        </div>
        <div className='worksteps-container'>
            <ul className='text-white text-5xl flex flex-col gap-5  worksteps '>
                <li className='text-5xl question'>How it Works</li>
                <li className='hover:text-sky-500 text-gray-500'>
                    Select an Avatar
                </li>
                <li className='hover:text-sky-500 text-gray-500'>Create or Generate Script</li>
                <li className='hover:text-sky-500 text-gray-500'>Select AI Voices</li>
                <li className='hover:text-sky-500 text-gray-500'>Publish</li>
            </ul>
        </div>

    </div>
  )
}

export default Working