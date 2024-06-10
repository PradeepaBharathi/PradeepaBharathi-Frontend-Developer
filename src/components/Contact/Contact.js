import React, { useEffect } from 'react';
import './Contact.css';
import twitter from '../assests/twitter.png';
import linkedin from '../assests/linkedin.png';
import tiktok from '../assests/tiktok.png';
import youtube from '../assests/youtubeicon.png';
import aos from 'aos'
import 'aos/dist/aos.css'; 
function Contact() {
  useEffect(() => {
    aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className='bg-gradient-to-b from-black to-roadmap1 min-h-screen flex flex-col' data-aos='fade-up'>
   <div className='flex flex-col md:flex-row justify-between items-center p-5 md:p-24 mt-10 md:mt-32 contactcontainer'>
  <div className='heading-gradient text-3xl md:text-4xl w-full md:w-1/2 leading-loose text-center md:text-left'>
    Dash dash terraUSD neo uniswap kadena helium avalanche polymath bancor.
  </div>
  <div className='flex flex-col gap-4 w-full md:w-1/2'>
    <div className='text-white heading-gradient text-2xl text-center md:text-right'>Looking for help?</div>
    <div className={`flex ${window.innerWidth < 768 ? 'flex-col' : 'md:flex-row'} items-center gap-2 md:gap-4 justify-center md:justify-end`}>
      <input placeholder='Enter Your Name' className='border-2 border-white bg-transparent rounded-lg w-full md:w-96 p-3 md:p-5 text-lg md:text-2xl'/>
      <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full md:w-40 h-14 md:h-20 rounded-lg text-white text-lg md:text-2xl'>Submit</button>
    </div>
  </div>
</div>

        
      <hr className='breaker mt-10 md:mt-20 h-8 md:h-12'/>
      <footer className='flex justify-between p-5 md:p-10  mb-0 items-center'>
        <h1 className='text-white text-lg md:text-2xl mr-5 md:mr-10'>A.I <span className='ml-1 md:ml-3'>G.E.N</span></h1>
        <div className='flex gap-2 md:gap-4'>
          <img src={twitter} alt='twitter'/>
          <img src={linkedin} alt='linkedin'/>
          <img src={tiktok} alt='tiktok'/>
          <img src={youtube} alt='youtube'/>
        </div>
      </footer>  
    </div>
  );
}

export default Contact;
