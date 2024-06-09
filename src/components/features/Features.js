import React from 'react';
import nike from '../assests/nike.png';
import robot from '../assests/robot2.png';
import keyboard from '../assests/keyboard.png';
import ai from '../assests/ai.png';
import './features.css';

function Features() {
  return (
    <div className='flex flex-col' id='features'>
      <div className='bg-black flex flex-col lg:flex-row justify-center items-center'>
        <div className='flex flex-col justify-center items-center w-full lg:w-1/3 h-[480px] p-10 pb-0 bg-road m-4 lg:m-20 lg:mr-0 rounded-2xl'>
          <h1 className='text-gray-300 text-3xl'>AI</h1>
          <h1 className='text-gray-300 text-3xl'>Outfits</h1>
          <div className='flex-grow flex items-end w-full'>
            <div className='innerimg bg-pink-300 w-full h-64 relative'>
              <img src={nike} alt='' style={{ transform: 'rotate(-45deg)' }} className='absolute bottom-10' />
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center w-full lg:w-2/3 h-[480px] lg:ml-10 lg:mr-20 bg-road rounded-2xl m-4'>
          <div className='flex flex-col justify-center items-center mt-10'>
            <h1 className='text-gray-300 text-3xl'>Realistic AI</h1>
            <h1 className='text-gray-300 text-3xl'>Avatar</h1>
          </div>
          <div className='flex-grow flex items-end w-full'>
            <img src={robot} alt='rimg' className='w-full h-80 rounded-lg' />
          </div>
        </div>
      </div>
      <div className='bg-black flex flex-col lg:flex-row justify-center items-center'>
        <div className='flex flex-col justify-center items-center w-full lg:w-3/5 h-[480px] lg:ml-10 lg:mr-20 bg-road rounded-2xl m-4'>
          <div className='flex flex-col justify-center items-center mt-10'>
            <h1 className='text-gray-300 text-3xl'>Generate or Write your</h1>
            <h1 className='text-gray-300 text-3xl'>Script</h1>
          </div>
          <div className='flex-grow flex items-end w-full'>
            <img src={keyboard} alt='keyboard' className='w-full h-80' />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center w-full lg:w-1/3 h-[480px] pt-10 pb-0 bg-road lg:mr-20 rounded-3xl m-4'>
          <h1 className='text-gray-300 text-3xl'>AI-Powered Voice</h1>
          <h1 className='text-gray-300 text-3xl'>Generator</h1>
          <div className='flex-grow flex items-end w-full'>
            <img src={ai} alt='ai' className='h-60 w-full rounded-3xl' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
