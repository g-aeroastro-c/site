// Be Part of the Future Tech Revolution
import React from "react";
import { ArrowUpRight } from "lucide-react";

const TechRev = () => {
  return (
    <section className="bg-[#1a1a1a] text-white px-6 py-16 md:px-20 lg:px-32 w-full mt-[500px]">
      <div className="w-full ">

        {/* Logo and Intro Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
          {/* Logo of out club  */}
          <img src="/logo.svg" alt="Logo" className="h-20 w-20 md:h-28 md:w-28" />

          {/* Text Content */}
          <div className="text-left">
            <p className="inline-block text-xs font-medium text-white bg-[#333333]  px-3 py-1 mb-3">
              Learn, Connect, and Innovate
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Be Part of the Future Tech Revolution</h1>
            <p className="text-[#7E7E81] max-w-2xl text-base md:text-lg inline">
Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.            </p>
          </div>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#141414] p-3 rounded-xl">
          {/* Card 1 */}
          <div className="bg-[#262626] rounded-xl p-6 text-left border border-[#2a2a2a]">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-semibold">Resource Access</h3>
              <ArrowUpRight className="w-6 h-6 text-black  font-bold bg-[#18B9EA] rounded-full" />
            </div>
            <p className="text-[#98989A] text-sm">Visitors can access a wide range of resources, including ebooks, whitepapers, reports.  </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#262626] rounded-xl p-6 text-left border border-[#2a2a2a]">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-semibold">Community Forum</h3>
              <ArrowUpRight className="w-6 h-6 text-black  font-bold bg-[#18B9EA] rounded-full" />
            </div>
            <p className="text-[#98989A] text-sm">Join our active community forum to discuss industry trends and collaborate with peers.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#262626] rounded-xl p-6 text-left border border-[#2a2a2a]">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-semibold">Tech Events</h3>
              <ArrowUpRight className="w-6 h-6 text-black  font-bold bg-[#18B9EA] rounded-full" />
            </div>
            <p className="text-[#98989A] text-sm">
              Stay updated on upcoming tech events, webinars and conferences to enhance your knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechRev;