import React, { useState } from 'react'
import './nav.css'
function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <div>
        <nav className='navbar flex p-10 pb-5 w-full justify-between items-center fixed '>
         <div className='nav-left flex items-center ml-2'>
       <div className='text-white text-lg font-bold mr-10 heading'>A I .G E N</div>
       <div className='nav-links  '>
         <ul className='text-white flex space-x-8'>
         <li id='feature'>
                <a href="#features" onClick={() => setActiveNav('#features')} className={activeNav === '#features' ? 'active' : ''}>Features</a>
              </li>
              <li>
                <a href="#roadmaps" onClick={() => setActiveNav('#roadmaps')} className={activeNav === '#roadmaps' ? 'active' : ''}>Road Maps</a>
              </li>
              <li>
                <a href="#tokenomics" onClick={() => setActiveNav('#tokenomics')} className={activeNav === '#tokenomics' ? 'active' : ''}>Tokenomics</a>
              </li>
         </ul>
       </div>
     </div>
     <div className='nav-right text-white flex space-x-4 ml-[-10px] mr-10'>
       <button className='bg-gradient-to-r from-gray-500 to-whitegradient h-10 w-28 p-1 rounded-sm'>Whitepaper</button>
       <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 p-1 h-10 w-28 rounded-sm'>Get Started</button>
     </div>
    </nav>
    <hr className='breaker'/>
    </div>
  )
}

export default Nav