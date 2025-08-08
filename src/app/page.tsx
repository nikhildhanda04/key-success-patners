import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Services from "./components/services";
import Features from "./components/features";
import Quote from "./components/quote";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>

    <div className="flex flex-col">
        <div>
          <Navbar />
        </div>
        <div>
          <Hero />
        </div>
        <div>
          <Services />
        </div>
        <div>
          <Features />
        </div>
        <div>
          <Quote />
        </div>
        <div>
          <Footer />
        </div>
    </div>


    </>
  );
}
