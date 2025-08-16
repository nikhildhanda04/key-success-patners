import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Services from "./components/services";
import Features from "./components/features";
import Quote from "./components/quote";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>

    <div className="flex flex-col">
        <div>
          <Navbar />
        </div>
        <div id="home">
          <Hero />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="quote">
          <Quote />
        </div>
        <div id="contact">
          <ContactUs />
        </div>
        <div>
          <Footer />
        </div>
    </div>


    </>
  );
}
