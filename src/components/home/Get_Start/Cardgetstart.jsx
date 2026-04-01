import React from "react";

const Cardgetstart = ({ card }) => {
  const { name, description2, icon } = card;
  return (
    <div>
      <div className="bg-[#F9FAFC] w-[90%] mx-auto  p-6  space-y-6 relative h-full">
        <div className=" text-center bg-white border border-amber-50 rounded-2xl  space-y-6 px-10 py-24">
          <div className="flex justify-center">
            <span className=" w-max rounded-full p-4 bg-[#9614fa1c] ">
              <img src={icon} alt="" />
            </span>
          </div>
          <h2 className="font-bold text-[24px]">{name}</h2>
          <p className=" text-[#627382] text-wrap">{description2}</p>
        </div>
      </div>
    </div>
  );
};

export default Cardgetstart;
