"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <main
      className="relative flex flex-col items-center justify-start pb-xx"
      style={{
        display: "inline-flex",
        height: "900px",
        paddingRight: "0px",
        justifyContent: "center",
        alignItems: "center",
        gap: "168px",
        flexShrink: 0,
        marginTop: "300px", // Adjust this to position it just below the navbar
      }}
    >
        {/* Background Watermark */}
        <div
            className="absolute inset-0"
            style={{
                backgroundImage: "url('/ellipse_hero.png')", // Replace with the actual image path
                backgroundSize: "contain", // Adjust to fit the watermark
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: 1, // Set low opacity for watermark effect
                zIndex: -1, // Push the watermark behind the content
                marginTop: "350px",
                height: "900px",
                width: "100%",
            }}
        ></div>

      <div className="flex flex-col items-center justify-center text-center">
        {/* Title */}
        <h1
          className="text-sm text-[#898A8C] mb-4"
          style={{
            width: "188px",
            height: "25px",
          }}
        >
          GITAM AERO ASTRO CLUB
        </h1>

        {/* Subtitle */}
        <h2
          className="text-5xl font-bold mb-6"
          style={{
            lineHeight: "1.2",
          }}
        >
          Kickstart your Career
          <br />
          Here
        </h2>

        {/* Description */}
        <p
          className="text-gray-300 mb-8"
          style={{
            maxWidth: "600px",
            fontSize: "16px",
            lineHeight: "1.5",
          }}
        >
          Welcome to the GITAM Aero Astro Club! We are a passionate community of curious individuals
          dedicated to exploring, learning, and building exciting projects in the fields of
          Robotics, Programming, and Astronomy.
        </p>

        {/* Input and Button */}
        <div
          className="flex items-center gap-4"
          style={{
            width: "100%",
            justifyContent: "center",
          }}
        >
          <input
            type="email"
            placeholder="Enter email"
            className="p-3 rounded-lg border-none text-[#AAAAAA] focus:outline-none bg-[#232426] text-sm"
            style={{
              width: "400px",
              height: "50px",
            }}
          />
          <button
            className="bg-blue-500 text-white hover:bg-blue-600 rounded-lg"
            style={{
              width: "100px",
              height: "50px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Join Us
          </button>
        </div>

        {/* Privacy Policy */}
        <p
          className="text-xs text-gray-500 mt-4"
          style={{
            width: "456px",
            textAlign: "center",
          }}
        >
          We care about your data in our <a href="#" className="underline">privacy policy</a>.
        </p>
        <img
            src="/globe_hero.png"
            alt="Hero Image"
            className="absolute bottom-0 left-0 right-0 mx-auto"
            style={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                marginBottom: "-275px", // Adjust this to position the image correctly
            }}
        />
      </div>
    </main>
  );
};

export default Hero;