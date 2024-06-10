import React, { useEffect } from 'react';
import './tokenomics.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Register the necessary elements with Chart.js
Chart.register(ArcElement, Tooltip, Legend);

function Tokenomics() {

  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });
  }, []);

  
  const data = {
    labels: ['Partnership/CEX Wallet (5%)', 'LP Pool (35%)', 'Burned (30%)', 'BNB LP Pool (30%)'],
    datasets: [
      {
        data: [5, 35, 30, 30],
        backgroundColor: ['#e74c3c', '#3498db', '#9b59b6', '#f39c12'],
        hoverBackgroundColor: ['#c0392b', '#2980b9', '#8e44ad', '#e67e22'],
      },
    ],
  };

  const options = {
    rotation: -0.5 * Math.PI, 
    cutout: '50%', 
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'right',
            labels: {
              font: {
                size: 16, // Increase font size for legend labels
              },
            },
          },
          tooltip: {
            titleFont: {
              size: 18, 
            },
            bodyFont: {
              size: 16, 
            },
          },
        
      },
     
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-900 flex flex-col items-center" id='tokenomics'>
      <h1 className='head-gradient text-5xl mt-24'>Tokenomics</h1>
      <div className="flex md:space-x-10 lg:space-x-60  text-white text-2xl mt-20 font-semibold details">
        <div className="space-y-8 details1">
          <div className="flex">
            <span className="w-36 values">Name</span>
            <span className="flex-1">: AI GEN</span>
          </div>
          <div className="flex">
            <span className="w-36 values">Total Supply</span>
            <span className="flex-1">: 1B</span>
          </div>
          <div className="flex">
            <span className="w-36 values">Contract</span>
            <span className="flex-1">: Lorem ipsum dolor sit a...</span>
          </div>
        </div>
        <div className="space-y-8 details2 ">
          <div className="flex">
            <span className="w-64 values2">Token Name</span>
            <span className="flex-1">: $AIGEN</span>
          </div>
          <div className="flex">
            <span className="w-64 values2">Circulating Supply</span>
            <span className="flex-1">: 1B</span>
          </div>
          <div className="flex">
            <span className="w-64 values2">Chain</span>
            <span className="flex-1">: Ethereum</span>
          </div>
        </div>
      </div>

      <div className=" relative w-[500px] h-[500px] flex tokenomics-chart" data-aos='flip-left' >
        <Doughnut data={data} options={options}  />
      </div>
    </div>
  );
}

export default Tokenomics;
