import { Suspense } from "react";
import "./App.css";
import Banner from "./components/home/banner/Banner";
import Navbar from "./components/home/navbar/Navbar";
import Pricingcard from "./components/home/pricing-card/Pricingcard";
import Rating from "./components/home/rating/Rating";

const fetchModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

function App() {
  const modelPromise = fetchModels();

  return (
    <>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
        <Rating></Rating>
      </header>
      <main>
        <section>
          <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
            <Pricingcard modelPromise={modelPromise}></Pricingcard>
          </Suspense>
        </section>
      </main>
    </>
  );
}

export default App;
