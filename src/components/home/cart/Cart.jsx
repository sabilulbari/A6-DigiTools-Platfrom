import React from 'react';

const Cart = () => {
    return (
      <div className="w-[90%] mx-auto border-2 border-gray-100 rounded-xl p-10 space-y-6">
        <h1 className="py-4 font-bold text-[24px]"> Your Cart</h1>
        <div className="bg-gray-100 rounded-xl flex justify-between p-6">
          <div className="flex gap-3 items-center ">
            <span className="w-15 h-15 p-2 border-2 border-gray-100 rounded-full flex items-center justify-center  bg-white">
              <img src="https://i.ibb.co.com/MqvFc6n/user.png" alt="" />
            </span>
            <div>
              <h4 className="font-semibold text-[20px]">AI Writing Pro</h4>
              <p className="text-[#627382] font-medium">$ 29</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-[#FF3980] font-bold hover:text-[#ff3982a4] cursor-pointer">REMOVE</p>
          </div>
        </div>
        <div className="flex justify-between text-[#627382c1] font-semibold">
          <p>Total:</p>
          <p>$78</p>
        </div>
        <button className="bg-linear-to-r from-blue-500 to-purple-600 rounded w-full text-white text-center py-4 rounded-full">Proceed to Checkout</button>
      </div>
    );
};

export default Cart;