import React, { use } from 'react';
import Pack from './pack';

const Packs = ({ packPromise }) => {
    const data = use(packPromise);
  return (
    <div className=' w-[90%] mx-auto space-y-20 py-30'>
      <div className="text-center space-y-4">
        <h1 className="font-extrabold text-5xl text-center">Simple, Transparent Pricing</h1>
        <p className="font-normal text-[16px] text-gray-500 ">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12">
        {data.map((pack, index) => (
          <Pack key={index} pack={pack}></Pack>
        ))}
      </div>
    </div>
  );
};

export default Packs;