import React, { useState } from "react";
import { Suspense } from "react";
import "./App.css";
import Banner from "./components/home/banner/Banner";
import Navbar from "./components/home/navbar/Navbar";
import Rating from "./components/home/rating/Rating";
import Cards from "./components/home/pricing-card/cards/Cards";
import Headercard from "./components/home/pricing-card/Cardheader/Headercard";
import Cart from "./components/home/cart/Cart";
import Getstart from "./components/home/Get_Start/Getstart";
import Packs from "./components/home/pack/packs";
import Footer from "./components/home/footer/Footer";
import Workflow from "./components/home/workflow/Workflow";

const fetchModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const fetchPack = async () => {
  const res = await fetch("/pack.json");
  return res.json();
}

function App() {
  const modelPromise = fetchModels();
  const packPromise = fetchPack();
  const [activeTab, stateActiveTab] = useState("Product");

  return (
    <>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
        <Rating></Rating>
      </header>
      <main>
        <section>
          <Headercard></Headercard>

          <section className="flex justify-center">
            {/* name of each tab group should be unique */}
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
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>{activeTab === "product" && <Cards modelPromise={modelPromise}></Cards>}</Suspense>
            {activeTab === "cart" && <Cart></Cart>}
          </section>
          <section>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
              <Getstart packPromise={packPromise}></Getstart>
            </Suspense>
          </section>
          <section>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
              <Packs packPromise={packPromise}></Packs>
            </Suspense>
          </section>
        </section>
        <section>
          <Workflow></Workflow>
        </section>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
