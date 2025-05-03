

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center justify-center text-center p-6 mt-20">
          <h1 className="text-sm text-[#898A8C]  mb-2 w-[188px] h-[20px] ">GITAM AERO ASTRO CLUB</h1>
          <h2 className="text-5xl font-bold mb-4">
            Kickstart your Career<br />Here
          </h2>
          <p className="max-w-2xl text-gray-300 mb-8">
            Welcome to the GITAM Aero Astro Club! We are a passionate community of curious individuals 
            dedicated to exploring, learning, and building exciting projects in the fields of 
            Robotics, Programming, and Astronomy.
          </p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter email"
              className="p-2 rounded-lg border-none text-[#AAAAAA] focus:outline-none bg-[#232426] w-[359px] h-[42px] text-xs"
            />
            <button className="bg-blue-500 text-sm hover:bg-blue-600 p-2 rounded-lg text-black w-[87px] h-[42px]  border">
              Join Us
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4 w-[456px] h-[20px]">
            We care about your data in our <a href="#" className="underline">privacy policy</a>.
          </p>
        </div>
      </main>
    </div>
  );
}