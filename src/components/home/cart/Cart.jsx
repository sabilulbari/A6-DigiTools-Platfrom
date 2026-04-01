import { Recycle, ShoppingCart, Trash2 } from 'lucide-react';
import React from 'react';
import { FaRecycle } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCart }) => {

  const handleRemove =(item)=>{
    const filterArray = carts.filter((r) => r.id != item.id);
    setCart(filterArray);
    toast.error("Item remove done!")

  }

  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-[90%] mx-auto border-2 border-gray-100 rounded-xl p-10  ">
      <h1 className="py-4 font-bold text-[24px]"> Your Cart</h1>
      {carts.length === 0 ? (
        <div className=" flex  justify-center items-center py-14">
          <div className="space-y-4">
            <ShoppingCart className="w-max mx-auto w-14 h-14 text-gray-300"></ShoppingCart>
            <p className="text-gray-300 text-xl">Your cart is empty</p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {carts.map((cart, index) => (
            <div className="bg-gray-100 rounded-xl flex justify-between p-6" key={index}>
              <div className="flex gap-3 items-center ">
                <span className="w-15 h-15 p-2 border-2 border-gray-100 rounded-full flex items-center justify-center  bg-white">
                  <img src={cart.icon} alt="" />
                </span>
                <div>
                  <h4 className="font-semibold text-[20px]">{cart.name}</h4>
                  <p className="text-[#627382] font-medium">$ {cart.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <p onClick={() => handleRemove(cart)} className="text-[#FF3980] font-bold hover:text-[#ff3982a4] cursor-pointer">
                  REMOVE
                </p>
              </div>
            </div>
          ))}

          <div className="flex justify-between text-[#627382c1] font-semibold">
            <p>Total:</p>
            <p>${totalPrice}</p>
          </div>
          <button className="bg-linear-to-r from-blue-500 to-purple-600 rounded w-full text-white text-center py-4 rounded-full">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;