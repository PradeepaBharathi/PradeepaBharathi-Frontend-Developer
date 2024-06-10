import React, { useState } from 'react';
import robot from '../assests/robot.png';
import './working.css';

function Working() {
  const [activeLink, setActiveLink] = useState("Select an Avatar");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className='bg-gradient-to-b from-black to-customColor min-h-screen flex items-center gap-7 workcontainer'>
      <div className='p-8'>
        <img src={robot} alt='robot' />
      </div>
      <div className='worksteps-container'>
        <ul className='text-white text-5xl flex flex-col gap-5 worksteps'>
          <li className='text-5xl question'>How it Works</li>
          <li
            className={`${activeLink === 'Select an Avatar' ? 'text-cyan' : 'text-gray-500'}`}
            onClick={() => handleLinkClick('Select an Avatar')}
          >
            Select an Avatar
          </li>
          <li
            className={` ${activeLink === 'Create or Generate Script' ? 'text-cyan' : 'text-gray-500'}`}
            onClick={() => handleLinkClick('Create or Generate Script')}
          >
            Create or Generate Script
          </li>
          <li
            className={` ${activeLink === 'Select AI Voices' ? 'text-cyan' : 'text-gray-500'}`}
            onClick={() => handleLinkClick('Select AI Voices')}
          >
            Select AI Voices
          </li>
          <li
            className={` ${activeLink === 'Publish' ? 'text-cyan' : 'text-gray-500'}`}
            onClick={() => handleLinkClick('Publish')}
          >
            Publish
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Working;
