import React from 'react';
import atom from '../assests/atom (2).png';
import mic from '../assests/mic.png';
import play from '../assests/play.png';
import './tag.css';

const tags = [
  "Technology",
  "Design",
  "Artificial Intelligence",
  "AI Chat Bot",
  "Customizable",
  "3D Model",
  "People",
  "Create Videos",
  "Analyze",
  "Outfits",
  "Voice Chat",
  "Marketing",
  'Research',
  "Customizable",
];

const gradientColors = [
  "bg-gradient-to-r from-black to-violet-400",
  "bg-gradient-to-r from-violet-400 to-gray-500",
  "bg-gradient-to-r from-gray-500 to-black",
];

function Tag() {
  return (
    <div className="tag bg-gradient-to-b from-createbg1 to-createbg2 flex flex-col items-center justify-center min-h-screen overflow-x-auto relative">
      <img src={atom} alt='atom' className='w-[50px] h-[50px] absolute top-[220px]' />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 lg:gap-9 animate-tags">
        {tags.map((tag, index) => (
          <div
            key={index}
            className={`text-white text-sm sm:text-md font-semibold py-2 px-4 h-12 sm:h-16 md:h-20 w-40 sm:w-50 flex items-center justify-center rounded-lg ${gradientColors[index % gradientColors.length]}`}
          >
            {tag}
          </div>
        ))}
      </div>
      <div className='flex gap-x-16 md:gap-x-48 lg:gap-x-96 relative mt-4'>
        <img src={play} alt='play' className='w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 origin-bottom -rotate-12' />
        <img src={mic} alt='mic' className='w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 origin-bottom -rotate-12' />
      </div>
    </div>
  );
}

export default Tag;
