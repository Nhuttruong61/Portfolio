import React from "react";
import zozo from "../assets/images/zyro-image.png";
import "./About";
function Home() {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2 ">
          <h1 className="text-4xl font-bold">Hi! I Am </h1>
          <h2 className="text-3xl font-bold my-2 text-orange-500 ">
            Nhut Truong
          </h2>
        </div>
        <div className="w-1/2">
          <img src={zozo} alt="" srcset="" className="w-2/3" />
        </div>
      </div>
    </div>
  );
}

export default Home;
