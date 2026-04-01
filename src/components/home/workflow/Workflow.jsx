import React from "react";

const Workflow = () => {
  return (
    <div className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-16">
      <div className="text-center space-y-6 px-[200px] py-[120px]">
        <h1 className="font-bold text-[40px] text-white">Ready to Transform Your Workflow?</h1>
        <p className=" font-normal text-[14px] text-[#ffffffbc]">Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
        <div>
          <button className="bg-white text-blue-500 rounded-full py-3 px-12">Explore Products</button>
          <button className="bg-transparent border border-white  text-white rounded-full py-3 px-12 ml-5">View Pricing</button>
        </div>
        <p className="text-[14px] text-[#ffffffd2]">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default Workflow;
