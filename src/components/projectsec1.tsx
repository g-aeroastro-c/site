'use client';

import React, { useState } from 'react';
import { Kumbh_Sans, Inter } from 'next/font/google';

// Font imports
const kumbhMedium = Kumbh_Sans({
  weight: '500',
  subsets: ['latin'],
});

const interRegular = Inter({
  weight: '400',
  subsets: ['latin'],
});

const interMedium = Inter({
  weight: '500',
  subsets: ['latin'],
});

const interSemiBold = Inter({
  weight: '600',
  subsets: ['latin'],
});

const ProjectSec1 = () => {
  const [activeTab, setActiveTab] = useState('Stargazers');

  return (
    <section className="text-white px-6 md:px-20 py-20">

      {/* Grid 1: Intro Section */}
      <div className="grid border-b border-gray-700 pb-12">
        <div className="text-center md:text-left">
          <h1 className={`text-4xl md:text-5xl font-bold leading-tight mb-4 ${kumbhMedium.className}`}>
            Unlock a World of <br />
            <span className="text-white">Knowledge</span>
          </h1>
          <p className={`text-gray-400 ${interRegular.className}`}>
            Explore Our Projects, Collaborate, Share and Be a part of Our Amazing Journey!
          </p>
        </div>
      </div>

      {/* Grid 2: Stats Section */}
<div className="grid border-b border-gray-700">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-0 text-center md:text-left">
    {[
      { number: '300+', label: 'Resources available' },
      { number: '12k+', label: 'Total Downloads' },
      { number: '10k+', label: 'Active Users' },
      { number: '100+', label: 'Countries Accesses Our Content' },
    ].map(({ number, label }, idx) => (
      <div
        key={label}
        className={`py-12 px-12 border-gray-700 ${idx !== 3 ? 'border-r' : ''}`}
        style={{
          display: 'grid',
          gridTemplateRows: '1fr auto',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h2 className={`text-3xl font-semibold ${interSemiBold.className}`}>
          {number.includes('+') ? (
            <>
              {number.replace('+', '')}
              <span className="text-sky-500">+</span>
            </>
          ) : (
            number
          )}
        </h2>
        <p
  className={`text-gray-400 text-sm m-0 ${interRegular.className} whitespace-nowrap`}
>
  {label}
</p>

      </div>
    ))}
  </div>
</div>

{/* Grid 3: Project Reports and Tabs */}
<div className="bg-[#1A1A1A] py-16 px-6 md:px-12 w-full">
  {/* Dive into Details Button */}
  <div className="mb-6">
    <button
      className={`bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-md ${interMedium.className}`}
    >
      Dive into the Details
    </button>
  </div>

  {/* Heading and Tabs side by side */}
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
    <h2 className={`text-3xl font-semibold text-white ${kumbhMedium.className}`}>
      Projects Reports and Analysis
    </h2>

    <div className="flex gap-2 border border-[#333] bg-[#111] rounded-lg p-1">
      {['Stargazers', 'Robusta', 'Others'].map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-md text-sm transition-all duration-300 ${interRegular.className} ${
            activeTab === tab
              ? 'bg-white text-black font-semibold'
              : 'text-white hover:bg-[#222]'
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  </div>
</div>

    </section>
  );
};

export default ProjectSec1;
