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
import PremiumTools from "./components/home/PremiumTools/PremiumTools";



const fetchPack = async () => {
  const res = await fetch("/pack.json");
  return res.json();
}

function App() {
  const packPromise = fetchPack();
  
  

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

          {/* name of each tab group should be unique */}
          

          <PremiumTools></PremiumTools>
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
