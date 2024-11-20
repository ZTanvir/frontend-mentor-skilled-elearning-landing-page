import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroSection from "./HeroSection";
import ServiceCards from "../../components/ServiceCards";
import photography from "../../assets/icon-photography.svg";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServiceCards />
      <Footer />
    </>
  );
};
export default Home;
