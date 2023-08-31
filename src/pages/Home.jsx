// import Header from "../components/Navbar/navbar";
import Hero from "../components/herosection/Hero";
import img1 from "../assets/image/cars1.jpg";
import img2 from "../assets/image/cars2.jpg";
import img3 from "../assets/image/cars3.jpg";
import img4 from "../assets/image/cars4.jpg";
import img5 from "../assets/image/cars5.jpg";
import img7 from "../assets/image/cars7.jpg";
import Powerwall from "../assets/image/powerwall.jpg";
import charger from "../assets/image/charger.jpg";
import Footer from "../components/Footer/Footer";
import "./Home.css";
import Reshead from "../components/Newheader/Reshead";
export default function Home() {
  return (
    <>
      <Reshead />
        <Hero
          className="demo"
          backgroundImg={img1}
          title="Model 3"
          para1="From $29,740*"
          para2="After Federal Tax Credit & Est. Gas Savings"
          btntext1="Order Now"
          btntext2="Demo Drive"
        />
        <Hero
          className="demo"
          backgroundImg={img4}
          title="Model Y"
          para1="From $36,640*"
          para2="After Federal Tax Credit & Est. Gas Savings"
          btntext1="Explore Inventory"
          btntext2="Custome Order"
        />
        <Hero
          className="demo"
          backgroundImg={img3}
          title="Model S"
          para2="Explore Inventory"
          btntext1="Custome Order"
          btntext2="Demo Drive"
        />
        <Hero
          className="demo"
          backgroundImg={img2}
          title="Model X"
          para2="Explore Inventory"
          btntext1="Custome Order"
          btntext2="Demo Drive"
        />
        <Hero
          className="demo"
          backgroundImg={img5}
          title="Experience Tesla"
          para2="Schedule a Demo Drive Today"
          btntext1="Custome Order"
          btntext2="Demo Drive"
        />
        <Hero
          className="demo"
          backgroundImg={img2}
          title="Solar Panels"
          para2="Schedule a Virtual Consultation"
          btntext1="Order Now"
          btntext2="Learn More"
        />
        <Hero
          className="demo"
          backgroundImg={img7}
          title="Solar Roof"
          para2="Produce Clean Energy From Your Roof"
          btntext1="Order Now"
          btntext2="Learn More"
        />
        <Hero
          className="demo"
          backgroundImg={Powerwall}
          title="Powerwall"
          btntext1="Order Now"
          btntext2="Learn More"
        />
        <Hero
          className="demo"
          backgroundImg={charger}
          title="Accessories"
          btntext1="Order Now"
          btntext2="Learn More"
        />
      <Footer />
    </>
  );
}
