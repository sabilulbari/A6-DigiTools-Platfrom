import React, { useState } from "react";

const Card = ({ card }) => {
  const { name, tag, price, period, description, features,icon } = card;

  const [isSubscribe, stateIsSubscribe] = useState(false);

  const handleSubscribe = ()=>{
    stateIsSubscribe(true);
  }

  return (
    <div className="">
      <div className="card bg-base-100 border border-gray-200 shadow-sm relative h-full">
        <div className="card-body ">
          <h3 className="bg-amber-200 text-amber-500 w-max rounded-full px-4 py-2 absolute right-3">{tag}</h3>
          <div className="flex  mb-4">
            <div className="w-15 h-15 border-2 border-amber-600 rounded-full flex items-center justify-center  bg-amber-50">
              <img className="w-8 h-8 rounded-full object-cover" src={icon} alt="logo" />
            </div>
          </div>
          <div className="">
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="font-normal text-[16] text-[#627382]">{description}</p>
            <span className="text-md flex justify-start">
              <span className="text-xl">${price}/</span>
              {period}
            </span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {features.map((feture, index) => {
              return (
                <div key={index}>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feture}</span>
                  </li>
                </div>
              );
            })}
          </ul>
          <div className="mt-6">
            <button onClick={handleSubscribe} className="btn w-full rounded-full text-white bg-linear-to-r from-indigo-600 to-violet-500">
              {isSubscribe ? "Subscribed" : "Subscribe Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
