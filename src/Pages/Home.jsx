import React from "react";
import security from "../assets/security.webm";

const Home = () => {
  return (
    <div>
      {/* min-h-screen creates white space why? find it out */}
      <div className="home_wrap flex-grow-0 min-h-[87vh]"> 
        <video
          src={security}
          autoPlay
          loop
          muted
          className="z-100 w-full h-full  object-cover absolute top-0 blur-0"
        />
        <div className="overlay absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.5)]"></div>
        <div className="content absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center z-200 text-center text-white w-full h-full">
          <h1 className="text-5xl font-bold">Cybersecure.in</h1>
          <p className="text-xl">Your go-to resource for understanding cybersecurity.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
