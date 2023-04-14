import React from "react";
import zozo from "../assets/images/zyro-image.png";
import "../assets/css/About.css";

function Home() {
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">welcome to our website.!</h1>
          <p className="text-lg mb-4">
            I'm Nhut Truong, a front-end developer and this is my personal
            website.
          </p>
          <p className="text-lg">
            The website is designed with a simple layout using the React
            framework
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src={zozo} alt="My Image" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Home;
