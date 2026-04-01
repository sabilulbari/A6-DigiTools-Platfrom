import React from "react";

const Pack = ({ pack }) => {
  const { title, description, price, period, features, tag, istag } = pack;
  return (
    <div>
      <div className="bg-[#F9FAFC] w-96 mx-auto  p-6 rounded-2xl space-y-6 relative h-full">
        {istag && <p className="text-amber-600 bg-amber-100 w-max rounded-full py-2 px-4 font-semibold text-[14px] absolute right-36 -top-3">{tag}</p>}

        <div>
          <h2 className="font-bold text-[24px]">{title}</h2>
          <p className="text-[#627382] ">{description}</p>
        </div>
        <div className="flex items-baseline">
          <h4 className="font-bold text-[40px]">${price} </h4>
          <p className="text-[#627382]  text-[20px]">/{period}</p>
        </div>
        <div>
          {features.map((feature, index) => (
            <div className="flex items-center" key={index}>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[#627382]">{feature}</p>
            </div>
          ))}
        </div>
        <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-3.75 px-25.5 rounded-full  md:"> Get Started Free</button>
      </div>
    </div>
  );
};

export default Pack;
