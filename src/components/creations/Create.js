import React, { useEffect } from 'react';

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
import './create.css'
import aos from 'aos'
import "aos/dist/aos.css";
const Create = () => {
  useEffect(() => {
    aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-createbg1 to-createbg2 flex justify-center items-center p-4" data-aos='fade-up'>
    
      <div className="grid grid-cols-7   place-items-center opacity-55 animate-pulse  " >
        <div className='flex flex-col gap-8 imageContainer'>
        <img src={image1} alt="Person 1" className="rounded-lg w-40 h-40 object-cover" />
        <img src={image2} alt="Person 2" className="rounded-lg w-40 h-40 object-cover" />
        <img src={image3} alt="Person 3" className="rounded-lg w-40 h-40  object-cover" />
        </div>
       <div className='flex flex-col gap-8 mt-[-90px] imageContainer'>
       <img src={image4} alt="Person 4" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image5} alt="Person 5" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image6} alt="Person 6" className="rounded-lg w-40 h-40  object-cover" />
       </div>
        <div className='flex flex-col gap-8 imageContainer'>
        <img src={image7} alt="Person 7" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image8} alt="Person 8" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image9} alt="Person 9" className="rounded-lg w-40 h-40  object-cover" />
        </div>
        <div className='flex flex-col gap-8 mt-[-90px] imageContainer' >
        <img src={image10} alt="Person 10" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image11} alt="Person 11" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image12} alt="Person 12" className="rounded-lg w-40 h-40 object-cover" />
        </div>
       <div className='flex flex-col gap-8 imageContainer'>
       <img src={image13} alt="Person 13" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image14} alt="Person 14" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image15} alt="Person 15" className="rounded-lg w-40 h-40  object-cover" />
       </div>
        <div className='flex flex-col gap-8 mt-[-90px] imageContainer'>
        <img src={image16} alt="Person 16" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image17} alt="Person 16" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image18} alt="Person 16" className="rounded-lg w-40 h-40  object-cover" />
        </div>
        <div className='flex flex-col gap-8 imageContainer'>
        <img src={image19} alt="Person 16" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image20} alt="Person 16" className="rounded-lg w-40 h-40  object-cover" />
        <img src={image21} alt="Person 16" className="rounded-lg w-40 h-40  object-cover" />
        </div>
      </div>

      <div className="absolute text-center inset-0 flex flex-col justify-center items-center">
      <h1 className="text-5xl createContent">
    <span className="text-gradient">Create, customize, and publish </span>
    <span className="text-white">your</span>
  </h1>
        <p className="text-5xl mt-2 text-white createContent"> digital persona to life effortlessly.</p>
      </div>
    </div>
  );
};

export default Create;
