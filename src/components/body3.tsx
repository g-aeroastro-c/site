
import Image from "next/image";
import React from "react";

const Body3 = () => {
  return (
    <section className="bg-[#141414] text-white px-6 py-16 md:px-20 lg:px-32 mt-[500px] w-full border-t border-b border-[#262626] relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#141414] p-3 rounded-xl relative">

        {/* Vertical dividers (absolute) */}
<div className="hidden md:block absolute inset-y-0 left-1/3 w-px bg-[#262626]"></div>
<div className="hidden md:block absolute inset-y-0 left-2/3 w-px bg-[#262626]"></div>

        {/* Card 1 */}
        <div className="p-6 flex flex-col items-start">
          <Image
            src="/futuretechtrends2024.png"
            alt="FutureTech Trends 2024"
            width={600}
            height={400}
            className="rounded-lg mb-4 w-full object-cover"
          />
          <h3 className="text-lg font-semibold mb-2">FutureTech Trends 2024</h3>
          <p className="text-sm text-[#98989A] mb-4">
            An ebook that predicts upcoming technology trends for the next year, including AI developments.
          </p>
          <div className="flex gap-3 mt-auto">
            <button className="border border-[#262626] bg-[#141414] rounded-md px-4 py-2 text-sm text-[#98989A] ">
              View Details
            </button>
            <button className="border border-[#262626] bg-[#1a1a1a] rounded-md px-4 py-2 text-sm text-[#98989A] ">
              Download PDF Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-6 flex flex-col items-start">
          <Image
            src="/spaceexplorationebook.png"
            alt="Space Exploration Ebook"
            width={600}
            height={400}
            className="rounded-lg mb-4 w-full object-cover"
          />
          <h3 className="text-lg font-semibold mb-2">Space Exploration Ebook</h3>
          <p className="text-sm text-[#98989A] mb-4">
            An ebook that predicts upcoming technology trends for the next year, including AI developments.
          </p>
          <div className="flex gap-3 mt-auto">
            <button className="border border-[#262626] bg-[#141414] rounded-md px-4 py-2 text-sm text-[#98989A] ">
              View Details
            </button>
            <button className="border border-[#262626] bg-[#1a1a1a] rounded-md px-4 py-2 text-sm text-[#98989A] ">
              Download PDF Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-6 flex flex-col items-start">
          <Image
            src="/quantumcomputingwhitepaper.png"
            alt="Quantum Computing Whitepaper"
            width={600}
            height={400}
            className="rounded-lg mb-4 w-full object-cover"
          />
          <h3 className="text-lg font-semibold mb-2">Quantum Computing Whitepaper</h3>
          <p className="text-sm text-[#98989A] mb-4">
            An in-depth whitepaper exploring the principles, applications.
          </p>
          <div className="flex gap-3 mt-auto">
            <button className="border border-[#262626] bg-[#141414] rounded-md px-4 py-2 text-sm text-[#98989A] ">
              View Details
            </button>
            <button className="border border-[#262626] bg-[#1a1a1a] rounded-md px-4 py-2 text-sm text-[#98989A] ">
              Download PDF Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body3;
