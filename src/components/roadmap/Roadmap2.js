import React from 'react';
import map2 from '../assests/road2graph.png';

export default function Roadmap2() {
  return (
    <div className='bg-gradient-to-b from-black to-roadmap1 min-h-screen flex flex-col items-center justify-center'>
      <div className='flex flex-col lg:flex-row items-center lg:space-x-10 gap-10 w-full mt-10'>
        <div className='flex flex-col items-center w-full lg:w-1/3 lg:ml-44'>
          <h1 className='text-white text-3xl sm:text-4xl md:text-5xl head-gradient mb-8'>PHASE 2</h1>
          <ul className='text-sm sm:text-base md:text-lg lg:text-xl text-white space-y-3 sm:space-y-4 md:space-y-6 list-disc sm:ml-8 md:ml-12 lg:ml-0'>
            <li>BitTorrent dai dogecoin crypto nexo nexo cosmos tezos ox PancakeSwap.</li>
            <li>Tether ethereum helium eCash IOTA. Litecoin enjin shiba-inu dash audius monero.</li>
            <li>Aave PancakeSwap loopring horizen neo uniswap avalanche litecoin celsius TRON.</li>
            <li>Hive stellar velas flow cardano.</li>
          </ul>
        </div>
        <div className='w-full lg:w-2/3 flex justify-center'>
          <img src={map2} alt='Roadmap' className='w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[48vw] h-auto rounded-xl' />
        </div>
      </div>
    </div>
  );
}
