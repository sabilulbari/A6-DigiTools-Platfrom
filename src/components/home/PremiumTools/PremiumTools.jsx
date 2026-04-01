
import React, { Suspense, useState } from "react";
import Cards from "../pricing-card/cards/Cards";
import Cart from "../cart/Cart";

const fetchModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const PremiumTools = () => {
  const modelPromise = fetchModels();
  const [activeTab, stateActiveTab] = useState("product");
  const [carts, setCart] = useState([]);
  return (
    <>
      <section className="flex justify-center py-5">
        <div className="tabs tabs-box w-max flex items-center   text-center border border-gray-100   justify-center rounded-full mt-8">
          <input
            onClick={() => {
              stateActiveTab("product");
            }}
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full w-40 text-lg"
            aria-label="Products"
            defaultChecked
          />
          <input
            onClick={() => {
              stateActiveTab("cart");
            }}
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full w-40 text-lg"
            aria-label="Cart"
          />
        </div>
      </section>
      <section>
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          {activeTab === "product" && <Cards carts={carts} setCart={setCart} modelPromise={modelPromise}></Cards>}
          {activeTab === "cart" && <Cart carts={carts} setCart={setCart}></Cart>}
        </Suspense>
      </section>
    </>
  );
};

export default PremiumTools;
