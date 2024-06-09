import React from 'react'
import './filler.css'
import arrow from '../assests/Img - Arrow right.png'
import image1 from '../assests/create/image1.png';
import image2 from '../assests/create/image2.png';
import image3 from '../assests/create/image3.png';
import image4 from '../assests/create/image4.png';
import image5 from '../assests/create/image5.png';
import image6 from '../assests/create/image6.png';
import image7 from '../assests/create/image7.png';
import image8 from '../assests/create/image8.png';
import image9 from '../assests/create/image9.png';
import image10 from '../assests/create/image10.png';
import image11 from '../assests/create/image11.png';
import image12 from '../assests/create/image12.png';
import image13 from '../assests/create/image13.png';
import image14 from '../assests/create/image14.png';
import image15 from '../assests/create/image15.png';
import image16 from '../assests/create/image16.png';
import image17 from '../assests/create/image17.png';
import image18 from '../assests/create/image18.png';
import image19 from '../assests/create/image19.png';
import image20 from '../assests/create/image20.png';
import image21 from '../assests/create/image21.png';
function Filler() {
  return (
    <div className='bg-gradient-to-b from-black to-roadmap1'>

<div className="grid grid-cols-7   place-items-center opacity-55 animate-pulse overflow-x-hidden  " >
        <div className='flex flex-col gap-8 containerImage'>
        <img src={image1} alt="Person 1" className="rounded-lg w-40 h-40 object-cover" />
        <img src={image2} alt="Person 2" className="rounded-lg w-40 h-40 object-cover" />
        <img src={image3} alt="Person 3" className="rounded-lg w-40 h-40  object-cover" />
        </div>
       <div className='flex flex-col gap-8 mt-[-90px] containerImage'>
       <img src={image4} alt="Person 4" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image5} alt="Person 5" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image6} alt="Person 6" className="rounded-lg w-40 h-40  object-cover" />
       </div>
        <div className='flex flex-col gap-8 containerImage'>
        <img src={image7} alt="Person 7" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image8} alt="Person 8" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image9} alt="Person 9" className="rounded-lg w-40 h-40  object-cover" />
        </div>
        <div className='flex flex-col gap-8 mt-[-90px] containerImage' >
        <img src={image10} alt="Person 10" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image11} alt="Person 11" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image12} alt="Person 12" className="rounded-lg w-40 h-40 object-cover" />
        </div>
       <div className='flex flex-col gap-8 containerImage'>
       <img src={image13} alt="Person 13" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image14} alt="Person 14" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image15} alt="Person 15" className="rounded-lg w-40 h-40  object-cover" />
       </div>
        <div className='flex flex-col gap-8 mt-[-90px] containerImage'>
        <img src={image16} alt="Person 16" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image17} alt="Person 16" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image18} alt="Person 16" className="rounded-lg w-40 h-40  object-cover" />
        </div>
        <div className='flex flex-col gap-8 containerImage'>
        <img src={image19} alt="Person 16" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image20} alt="Person 16" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image21} alt="Person 16" className="rounded-lg w-40 h-40  object-cover" />
        </div>
      </div>
        <div className='w-full h-[-50px] bg-gradient-to-r from-fillerb1 to-fillerbg2 flex justify-between items-center p-6 rounded-lg getbtn'>
      <h1 className='text-white text-5xl ] getbtntext'>Get Started</h1>
        <img src={arrow} alt='arrow' className='w-16 arrow'/>
        </div>
    </div>
  )
}

export default Filler