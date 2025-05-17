// import React from "react";
// import { ArrowUpRight } from "lucide-react";

// const Resources = () => {
//   return (
// <section className="bg-[#1a1a1a] text-white px-6 py-16 md:px-20 lg:px-32 mt-200 w-full">
//       <div className="max-w-6xl mx-auto text-center ">
//         <div className="flex justify-center mb-6">
//           <div className="flex items-center">
//           <img
//             src="/logo.svg" // Replace with the path to your logo image
//             alt="Logo"
//             className="h-40 w-40"
//           />
//         </div>
//         <div className="text-left">
//   <p className="inline-block text-sm font-medium text-white bg-[#333333] mb-3 mt-0 ml-0">
//     Learn, Connect, and Innovate
//   </p>
//   <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
//     Step Into the Future with <span className="text-white">GAAC's Vision</span>
//   </h1>
//   <p className="text-gray-400 max-w-3xl text-base md:text-lg mb-10">
//     Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.
//   </p>
// </div>
//         </div>

        

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#141414]">
//           <div className="bg-[#1a1a1a]  rounded-xl p-6 text-left ">
//             <div className="flex justify-between items-center mb-2">
//               <h3 className="text-xl font-semibold">Join this club</h3>
//               <ArrowUpRight className="w-5 h-5 text-blue-400" />
//             </div>
//             <p className="text-gray-400">
//               Join this club to access exclusive events, mentorship, resources, and a thriving tech community.
//             </p>
//           </div>

//           <div className="bg-[#1a1a1a]  rounded-xl p-6 text-left 0">
//             <div className="flex justify-between items-center mb-2">
//               <h3 className="text-xl font-semibold">Blogs</h3>
//               <ArrowUpRight className="w-5 h-5 text-blue-400" />
//             </div>
//             <p className="text-gray-400">
//               Explore insightful blogs written by our members from tech trends to personal growth stories.
//             </p>
//           </div>

//           <div className="bg-[#1a1a1a]  rounded-xl p-6 text-left ">
//             <div className="flex justify-between items-center mb-2">
//               <h3 className="text-xl font-semibold">Tech Events</h3>
//               <ArrowUpRight className="w-5 h-5 text-blue-400" />
//             </div>
//             <p className="text-gray-400">
//               Stay updated on upcoming tech events, webinars and conferences to enhance your knowledge.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Resources;


import React from "react";
import { ArrowUpRight } from "lucide-react";

const Resources = () => {
  return (
    <section className="bg-[#1a1a1a] text-white px-6 py-16 md:px-20 lg:px-32 w-full mt-200">
      <div className="w-full ">

        {/* Logo and Intro Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
          {/* Logo */}
          <img src="/logo.svg" alt="Logo" className="h-20 w-20 md:h-28 md:w-28" />

          {/* Text Content */}
          <div className="text-left">
            <p className="inline-block text-xs font-medium text-white bg-[#333333]  px-3 py-1 mb-3">
              Learn, Connect, and Innovate
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Step Into the Future with GAAC's Vision </h1>
            <p className="text-[#7E7E81] max-w-2xl text-base md:text-lg inline">
              Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.
            </p>
          </div>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#141414] p-3 rounded-xl">
          {/* Card 1 */}
          <div className="bg-[#262626] rounded-xl p-6 text-left border border-[#2a2a2a]">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-semibold">Join this club</h3>
              <ArrowUpRight className="w-6 h-6 text-black  font-bold bg-[#18B9EA] rounded-full" />
            </div>
            <p className="text-[#98989A] text-sm">
Join this club to access exclusive events, mentorship, resources, and a thriving tech community.            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#262626] rounded-xl p-6 text-left border border-[#2a2a2a]">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-semibold">Blogs</h3>
              <ArrowUpRight className="w-6 h-6 text-black  font-bold bg-[#18B9EA] rounded-full" />
            </div>
            <p className="text-[#98989A] text-sm">
Explore insightful blogs written by our members from tech trends to personal growth stories.            </p>
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

export default Resources;
