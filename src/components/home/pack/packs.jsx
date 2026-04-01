import React, { use } from 'react';
import Pack from './pack';

const Packs = ({ packPromise }) => {
    const data = use(packPromise);
  return (
    <div className="space-y-20 py-30">
      <div className="text-center px-30 space-y-4">
        <h1 className="font-extrabold text-5xl">Simple, Transparent Pricing</h1>
        <p className="font-normal text-[16px] text-gray-500 ">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>
      <div className="flex justify-center gap-14">
        {data.map((pack, index) => (
          <Pack key={index} pack={pack}></Pack>
        ))}
      </div>
    </div>
  );
};

export default Packs;