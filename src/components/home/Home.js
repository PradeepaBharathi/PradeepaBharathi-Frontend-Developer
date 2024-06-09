import React from 'react';
import './home.css';
import elon from '../assests/elon musk.webp';
import billgates from '../assests/bill gates.webp';
import tim from '../assests/tim cook.png';
import trump from '../assests/trump.png';
import mark from '../assests/mark-zuckerberg.jpg';
import buterin from '../assests/buterin.jpeg';
import biden from '../assests/joe-biden.png';
import einstein from '../assests/einstein.png';
import obama from '../assests/obama.png';
import 'animate.css';

function Home() {
  return (
    <div className="bg-gradient-to-b from-black to-customColor min-h-screen w-full">
      <div className='content flex flex-col lg:flex-row flex-1 justify-center items-center lg:justify-start lg:items-start pt-10 lg:pt-20'>
        <div className="flex flex-col p-4 lg:p-16 mt-10 lg:mt-16 min-h-screen w-full lg:w-[60%] gap-4 text-white text-container">
          <div className="iota bg-new text-white rounded-md h-8 p-2 lg:h-9 lg:p-4 w-max mb-6 lg:mb-9 flex items-center text-sm lg:text-base">
            🎉New in AI.GEN: Real Time Interaction
          </div>
          <h1 className='text-2xl lg:text-5xl text-white mr-8'>
            IOTA polygon serum ipsum
          </h1>
          <h1 className='text-lg lg:text-5xl text-wax'>
            WAX terraUSD gala THETA
          </h1>
          <div className='text-lg text-wax'>
            Chillz serum TRON dash aavecardano crypto celo.Golem
          </div>
          <div className='text-lg text-wax'>
            ankr bancor horizen ethereum quant bitcoin
          </div>
          <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 p-1 w-1/2 lg:w-1/5 h-14 rounded-md text-lg'>
            Get Started
          </button>
        </div>
        <div className="flex flex-col w-full lg:w-[40%] mt-5 text-white ">
          <div className="grid grid-cols-3 gap-4">
            <div className='grid animate__animated animate__fadeInDown animate__slow img-container1'>
              <img src={elon} alt="Elon Musk" className="rounded-lg h-[120px] lg:h-[160px] object-cover" />
              <img src={billgates} alt="Bill Gates" className="rounded-lg h-[120px] lg:h-[160px] object-cover mt-4" />
              <img src={tim} alt="Tim Cook" className="rounded-lg h-[120px] lg:h-[160px] object-cover mt-4" />
            </div>
            <div className='grid ml-4 lg:ml-[50px] img-container2'>
              <img src={trump} alt="Donald Trump" className="rounded-lg mt-[-60px] lg:mt-[-90px] h-[140px] lg:h-[190px]" />
              <img src={mark} alt="Mark Zuckerberg" className="rounded-lg  lg:mt-[-50px] h-[140px] lg:h-[190px] mt-4" />
              <img src={buterin} alt="Vitalik Buterin" className="rounded-lg  lg:mt-[-50px] h-[140px] lg:h-[190px] mt-4" />
            </div>
            <div className='mt-[-20px] animate__animated animate__fadeInDown animate__slow img-container3'>
              <img src={biden} alt="Joe Biden" className="rounded-lg h-[140px] mb-10 lg:h-[190px]" />
              <img src={einstein} alt="Albert Einstein" className="rounded-lg mb-10 lg:mt-[-50px] h-[140px] lg:h-[190px] mt-4" />
              <img src={obama} alt="Barack Obama" className="rounded-lg mb-10 lg:mt-[-50px] h-[140px] lg:h-[190px] mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
