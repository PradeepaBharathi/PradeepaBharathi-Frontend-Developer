import React, { useEffect } from "react";
import map3 from "../assests/road3graph.png";
import aos from "aos";
import "aos/dist/aos.css";
function Roadmap3() {
  useEffect(() => {
    aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="bg-gradient-to-b from-black to-roadmap1 min-h-screen flex flex-col items-center
     justify-center" data-aos='fade-right'>
      <h1 className="text-white text-5xl sm:text-4xl md:text-5xl head-gradient mb-6">
        PHASE 3
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:space-x-10 gap-10 w-full mt-10">
        <div className="flex flex-col items-center w-full lg:w-1/3 lg:ml-44">
          <ul className="text-sm sm:text-base md:text-lg lg:text-xl text-white space-y-3 sm:space-y-4 md:space-y-6 list-disc sm:ml-8 md:ml-12 lg:ml-0">
            <li>
              Revain audius bitcoin revain PancakeSwap elrond ipsum ethereum.
            </li>
            <li>Waves TRON dogecoin bancor eCash quant secret.</li>
            <li>Celsius crypto bancor nexo litecoin decentraland crypto.</li>
          </ul>
        </div>
        <div className="w-full lg:w-2/3 flex justify-center" data-aos='fade-left'>
          <img
            src={map3}
            alt="Roadmap"
            className="w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[48vw] h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Roadmap3;
