import React from "react";

const Card = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="card w-96 bg-base-100 border border-gray-200 shadow-sm">
        <div className="card-body">
          <h3 className="bg-amber-200  text-right">Most Popular</h3>
          <div className="flex  mb-4">
            <div className="w-10 h-10 border-2 border-amber-600 rounded-full flex items-center justify-center bg-amber-50">
              <img className="w-8 h-8 rounded-full object-cover" src="/src/assets/writing_2327400 1.png" alt="logo" />
            </div>
          </div>
          <div className="">
            <h2 className="text-3xl font-bold">Premium</h2>
            <p className="font-normal text-[16] text-[#627382]">Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
            <span className="text-md flex justify-start">
              <span className="text-xl">$29/</span>mo
            </span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>High-resolution image generation</span>
            </li>
          </ul>
          <div className="mt-6">
            <button className="btn w-full rounded-full text-white bg-linear-to-r from-indigo-600 to-violet-500">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
