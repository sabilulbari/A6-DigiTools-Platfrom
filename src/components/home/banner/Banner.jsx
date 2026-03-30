import React from "react";
import { Play } from "lucide-react";

const Banner = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto mt-21.25">
        <div className=" flex justify-between">
          <div className="banner-heading  mt-12 space-y-4 ">
            <div className="btn rounded-full  bg-[#eaeeff]">
              <span className="flex font-medium text-[16px]  bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                <img className="mr-4 " src="/src/assets/group.png" alt="" />
                New: AI-Powered Tools Available
              </span>
            </div>
            <h1 className="text-7xl font-bold  ">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="py-6 text-[#627382FF] text-[18px] font-[400]">
              Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products
            </p>
            <div>
              <button className="btn text-white rounded-full bg-linear-to-r from-indigo-600 to-violet-500">Explore Products</button>

              <button class="btn btn-outline btn-primary rounded-full ml-4">
                <Play></Play> Watch Demo
              </button>
            </div>
          </div>
          <img  src="/src/assets/banner.png" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
