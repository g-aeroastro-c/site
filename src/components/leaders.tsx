"use client";

import React from "react";

const Leaders: React.FC = () => {
  return (
    <main>
        <h1
            style={{
                width: "352px",
                height: "77px",
                marginTop: "900px", // Adjusted for top positioning
                marginLeft: "368px",
                fontFamily: "Actor",
                fontWeight: 400,
                fontSize: "65px",
                lineHeight: "77px",
                letterSpacing: "-2%",
                textAlign: "center",
                background: "linear-gradient(180deg, #FFFFFF 25%, #0C1711 343.26%)",
                WebkitBackgroundClip: "text",
                color: "transparent", // Makes the gradient apply to the text
            }}
        >
            Our Leaders
        </h1>
        <h2
            style={{
                width: "352px",
                height: "77px",
                marginTop: "6px", // Adjusted for spacing below "Our Leaders"
                marginLeft: "368px",
                fontFamily: "DM Sans",
                fontWeight: 350,
                fontSize: "20px",
                lineHeight: "35px",
                letterSpacing: "0%",
                textAlign: "center",
                background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 432.86%)",
                WebkitBackgroundClip: "text",
                color: "transparent", // Makes the gradient apply to the text
            }}
        >
            Executive Body 2025-26
        </h2>

        <div
            style={{
                display: "flex",
                justifyContent: "space-between", // Ensures the cards are spaced evenly
                alignItems: "center",
                marginTop: "20px", // Spacing below the h2
                gap: "515px", // Gap between the two cards
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end", // Align content to the bottom
                    marginTop: "20px", // Spacing below the h2
                    width: "300px",
                    height: "400px",
                    backgroundImage: "url('/sampath.jpg')", // Replace with the actual image path
                    backgroundSize: "cover", // Ensure the image covers the entire card
                    backgroundPosition: "center", // Center the image
                    borderRadius: "16px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                    padding: "20px",
                    textAlign: "center",
                    color: "#FFFFFF", // Ensure text is visible on the image
                }}
            >
                {/* transparent background for Text */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "bottom",
                        justifyContent: "space-between",
                        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
                        borderRadius: "8px",
                        padding: "10px",
                        width: "100%", // Full width of the card
                        height: "15%", // Full height of the card
                    }}
                >
                    {/* President's Name */}
                    <h3
                        style={{
                            fontFamily: "DM Sans",
                            fontWeight: 500,
                            fontSize: "16px",
                            lineHeight: "20px",
                            margin: "0",
                        }}
                    >
                        Datla Sampath Varma
                        <div>
                            <h4
                                style={{
                                    fontFamily: "DM Sans",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "14px",
                                    margin: "0",
                                }}
                        >President</h4>
                        </div>
                    </h3>

                    {/* Know More Button */}
                    <button
                        style={{
                            backgroundColor: "#15BFF5",
                            color: "black",
                            fontFamily: "DM Sans",
                            fontWeight: 500,
                            fontSize: "12px",
                            lineHeight: "14px",
                            padding: "2px 15px",
                            border: "none",
                            borderRadius: "10px",
                            cursor: "pointer",
                        }}
                        onClick={() => alert("More details about the president!")} // Replace with actual functionality
                    >
                        Know More
                    </button>
                </div>
            </div>
            {/* 1 */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end", // Align content to the bottom
                    marginTop: "20px", // Spacing below the h2
                    marginRight: "120px",
                    width: "300px",
                    height: "400px",
                    backgroundImage: "url('/raagni.jpg')", // Replace with the actual image path
                    backgroundSize: "cover", // Ensure the image covers the entire card
                    backgroundPosition: "center", // Center the image
                    borderRadius: "16px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                    padding: "20px",
                    textAlign: "center",
                    color: "#FFFFFF", // Ensure text is visible on the image
                }}
            >
                {/* transparent background for Text */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "bottom",
                        justifyContent: "space-between",
                        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
                        borderRadius: "8px",
                        padding: "10px",
                        width: "100%", // Full width of the card
                        height: "15%", // Full height of the card
                    }}
                >
                    {/* President's Name */}
                    <h3
                        style={{
                            fontFamily: "DM Sans",
                            fontWeight: 500,
                            fontSize: "16px",
                            lineHeight: "20px",
                            margin: "0",
                        }}
                    >
                        Raagni M
                        <h4
                            style={{
                                fontFamily: "DM Sans",
                                fontWeight: 400,
                                fontSize: "14px",
                                lineHeight: "14px",
                                margin: "0",
                            }}
                        >Secretary</h4>
                    </h3>

                    {/* Know More Button */}
                    <button
                        style={{
                            backgroundColor: "#15BFF5",
                            color: "black",
                            fontFamily: "DM Sans",
                            fontWeight: 500,
                            fontSize: "12px",
                            lineHeight: "14px",
                            padding: "2px 15px",
                            border: "none",
                            borderRadius: "10px",
                            cursor: "pointer",
                        }}
                        onClick={() => alert("More details about the president!")} // Replace with actual functionality
                    >
                        Know More
                    </button>
                </div>
            </div>
        </div>
        <div
            style={{
                display: "flex",
                justifyContent: "space-between", // Ensures the cards are spaced evenly
                alignItems: "center",
                marginTop: "20px", // Spacing below the h2
                gap: "218px", // Gap between the two cards
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end", // Align content to the bottom
                    marginTop: "20px", // Spacing below the h2
                    marginLeft: "150px",
                    width: "300px",
                    height: "400px",
                    backgroundImage: "url('/dil.jpg')", // Replace with the actual image path
                    backgroundSize: "cover", // Ensure the image covers the entire card
                    backgroundPosition: "center", // Center the image
                    borderRadius: "16px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                    padding: "20px",
                    textAlign: "center",
                    color: "#FFFFFF", // Ensure text is visible on the image
                }}
            >
                {/* transparent background for Text */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "bottom",
                        justifyContent: "space-between",
                        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
                        borderRadius: "8px",
                        padding: "10px",
                        width: "100%", // Full width of the card
                        height: "15%", // Full height of the card
                    }}
                >
                    {/* President's Name */}
                    <h3
                        style={{
                            fontFamily: "DM Sans",
                            fontWeight: 500,
                            fontSize: "16px",
                            lineHeight: "20px",
                            margin: "0",
                        }}
                    >
                        Dil Barash
                        <h4
                            style={{
                                fontFamily: "DM Sans",
                                fontWeight: 400,
                                fontSize: "14px",
                                lineHeight: "14px",
                                margin: "0",
                            }}
                        >Vice President Operations</h4>
                    </h3>

                    {/* Know More Button */}
                    <button
                        style={{
                            backgroundColor: "#15BFF5",
                            color: "black",
                            fontFamily: "DM Sans",
                            fontWeight: 500,
                            fontSize: "12px",
                            lineHeight: "14px",
                            padding: "2px 15px",
                            border: "none",
                            borderRadius: "10px",
                            cursor: "pointer",
                        }}
                        onClick={() => alert("More details about the president!")} // Replace with actual functionality
                    >
                        Know More
                    </button>
                </div>
            </div>
            {/* 1 */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end", // Align content to the bottom
                    marginTop: "20px", // Spacing below the h2
                    marginRight: "200px",
                    width: "300px",
                    height: "400px",
                    backgroundImage: "url('/gupta.jpg')", // Replace with the actual image path
                    backgroundSize: "cover", // Ensure the image covers the entire card
                    backgroundPosition: "center", // Center the image
                    borderRadius: "16px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                    padding: "20px",
                    textAlign: "center",
                    color: "#FFFFFF", // Ensure text is visible on the image
                }}
            >
                {/* transparent background for Text */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "bottom",
                        justifyContent: "space-between",
                        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
                        borderRadius: "8px",
                        padding: "10px",
                        width: "100%", // Full width of the card
                        height: "15%", // Full height of the card
                    }}
                >
                    {/* President's Name */}
                    <h3
                        style={{
                            fontFamily: "DM Sans",
                            fontWeight: 500,
                            fontSize: "16px",
                            lineHeight: "20px",
                            margin: "0",
                        }}
                    >
                        Narayana Gupta
                        <h4
                            style={{
                                fontFamily: "DM Sans",
                                fontWeight: 400,
                                fontSize: "14px",
                                lineHeight: "14px",
                                margin: "0",
                            }}
                        >Vice President Technical</h4>
                    </h3>

                    {/* Know More Button */}
                    <button
                        style={{
                            backgroundColor: "#15BFF5",
                            color: "black",
                            fontFamily: "DM Sans",
                            fontWeight: 500,
                            fontSize: "12px",
                            lineHeight: "14px",
                            padding: "2px 15px",
                            border: "none",
                            borderRadius: "10px",
                            cursor: "pointer",
                        }}
                        onClick={() => alert("More details about the president!")} // Replace with actual functionality
                    >
                        Know More
                    </button>
                </div>
            </div>
        </div>
        <div
            style={{
                alignItems: "center",
                marginTop: "50px",
                width: "1000px",
                textAlign: "center",
                marginLeft: "100px",
            }}
        >
            <p>The Gitam Aero Astro Club is a student organization at Gitam University focused on promoting astronomy, programming, and robotics. The club consists of three main teams: Team Stargazers, Team Robusta, and the programming team. These teams work on various projects, participate in competitions, and collaborate to enhance their skills and knowledge in their respective fields.</p>
        </div>
    </main>
  );
};

export default Leaders;