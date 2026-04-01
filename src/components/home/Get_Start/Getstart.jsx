import React, { use } from 'react';
import Cardgetstart from './Cardgetstart';

const Getstart = ({packPromise}) => {

    const data = use(packPromise);

  return (
    <div className=" py-30 bg-[#F9FAFC]">
      <div className="text-center space-y-4">
        <h1 className="font-extrabold text-5xl">Get Started In 3 Steps</h1>
        <p className="font-normal text-[16px] text-gray-500 ">Start using premium digital tools in minutes, not hours.</p>
      </div>
      <div className="w-[90%] mx-auto pt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((card, index) => (
          <Cardgetstart key={index} card={card}></Cardgetstart>
        ))}
      </div>
    </div>
  );
};

export default Getstart;