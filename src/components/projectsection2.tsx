import { ArrowUpRight } from "lucide-react";

const ProjectSection2 = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-6 py-16 flex flex-col gap-16">
      {/* Quantum Computing Whitepaper */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Text Block */}
        <div className="lg:w-1/2">
          <div className="w-8 h-8 bg-cyan-400 rounded-sm mb-4" />
          <h2 className="text-white text-2xl font-semibold mb-2">Quantum Computing Whitepaper</h2>
          <p className="text-gray-400">Provides technical specifications and requirements for implementing quantum computing systems.</p>
        </div>

        {/* Right Content Block */}
        <div className="lg:w-1/2 space-y-4">
          <img
            src="https://devstyler.io/wp-content/uploads/sites/3/2023/10/AIhallucinations-1.png"
            alt="Quantum Computing"
            className="w-full h-auto rounded-lg"
          />
          <h3 className="text-white font-semibold">Quantum Computing Whitepaper</h3>
          <p className="text-gray-400">
            An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.
          </p>

        <a
            href="https://drive.google.com/file/d/FILE_ID/view"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 bg-gray-800 px-4 py-2 text-sm text-white rounded-md hover:bg-blue-500 transition"
            >
        Download PDF Now
        <ArrowUpRight className="w-5 h-5" />
            </a>


          {/* Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className="bg-[#1F1F1F] p-4 rounded-md text-gray-400">
              <div className="text-xs">Publication Date</div>
              <div className="text-white font-semibold">July 2023</div>
            </div>
            <div className="bg-[#1F1F1F] p-4 rounded-md text-gray-400">
              <div className="text-xs">Category</div>
              <div className="text-white font-semibold">Quantum Computing</div>
            </div>
            <div className="bg-[#1F1F1F] p-4 rounded-md text-gray-400">
              <div className="text-xs">Author</div>
              <div className="text-white font-semibold">Dr. Quantum</div>
            </div>
          </div>
        </div>
      </div>
<div className="w-full h-[1px] bg-gray-500 opacity-40"></div>

      {/* Space Exploration Whitepaper */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Text Block */}
        <div className="lg:w-1/2">
          <div className="w-8 h-8 bg-cyan-400 rounded-sm mb-4" />
          <h2 className="text-white text-2xl font-semibold mb-2">Space Exploration Whitepaper</h2>
          <p className="text-gray-400">Explores Mars colonization, asteroid resource potential, and space tourism.</p>
        </div>

        {/* Right Content Block */}
        <div className="lg:w-1/2 space-y-4">
          <img
            src="https://theoryofgaming.net/wp-content/uploads/2023/09/3d-render-abstract-cyber-particles-background-with-shallow-depth-field-scaled.jpg"
            alt="Space Exploration"
            className="w-full h-auto rounded-lg"
          />
          <h3 className="text-white font-semibold">Space Exploration Whitepaper</h3>
          <p className="text-gray-400">
            An in-depth whitepaper covering the latest advancements in space exploration, including Mars missions and asteroid mining.
          </p>

        <a
            href="https://drive.google.com/file/d/FILE_ID/view"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 bg-gray-800 px-4 py-2 text-sm text-white rounded-md hover:bg-blue-500 transition"
            >
        Download PDF Now
        <ArrowUpRight className="w-5 h-5" />
            </a>

          {/* Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className="bg-[#1F1F1F] p-4 rounded-md text-gray-400">
              <div className="text-xs">Publication Date</div>
              <div className="text-white font-semibold">September 2023</div>
            </div>
            <div className="bg-[#1F1F1F] p-4 rounded-md text-gray-400">
              <div className="text-xs">Category</div>
              <div className="text-white font-semibold">Space Exploration</div>
            </div>
            <div className="bg-[#1F1F1F] p-4 rounded-md text-gray-400">
              <div className="text-xs">Author</div>
              <div className="text-white font-semibold">FutureTech Space Division</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection2;