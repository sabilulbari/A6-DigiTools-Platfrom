import React, { use } from "react";
import Card from "./card/card";

const Pricingcard = ({modelPromise}) => {
  const jsonData = use(modelPromise);

  return (
    <div>
      <div className="text-center pt-[120px] pb-10">
        <h1 className="font-extrabold text-[48px]">Premium Digital Tools</h1>
        <p className="font-normal text-[16px] ">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
        <div className="btn border-2 cursor-auto py-8  bg-white border-amber-100 rounded-full hover:bg-white">
          <button className="btn text-white rounded-full p-5 font-bold text-[20px] bg-linear-to-r from-indigo-600 to-violet-500">Products</button>
          <button className="btn text-white rounded-full p-5 font-bold text-[20px] bg-linear-to-r from-indigo-600 to-violet-500 ">Cart</button>
        </div>
      </div>
      <div className="grid grid-cols-3 w-[90%] mx-auto gap-[30px]">
        {jsonData.map((card, index) => (
          <Card key={index} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Pricingcard;
