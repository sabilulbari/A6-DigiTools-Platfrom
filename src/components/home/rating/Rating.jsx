import React from 'react';

const Rating = () => {
    return (
      <div className="mt-20 bg-linear-to-r from-indigo-600 to-violet-500">
        <div className="  flex justify-center gap-[250px] text-center">
          <div className=" ">
            <h2 className="font-extrabold text-[60px] text-white">50 K+</h2>
            <p className="text-[24px] font-medium text-white">Active User</p>
          </div>
          <span className="h-20 w-0.5 text-center items-center mt-6   bg-amber-50 text-white"></span>
          <div>
            <h2 className="font-extrabold text-[60px] text-white">200+</h2>
            <p className="text-[24px] font-medium text-white">Premium Tools</p>
          </div>
          <span className="h-20 w-0.5 text-center items-center mt-6   bg-amber-50 text-white"></span>
          <div>
            <h2 className="font-extrabold text-[60px] text-white">4.9</h2>
            <p className="text-[24px] font-medium text-white">Rating</p>
          </div>
        </div>
      </div>
    );
};

export default Rating;