import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroSection from "./HeroSection";
import ServiceCard from "../../components/ServiceCard";
import photography from "../../assets/icon-photography.svg";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServiceCard
        imgSrc={photography}
        title={"Animation"}
        descriptions={
          "Learn the latest animation techniques to create stunning motion design and captivate your audience."
        }
      />
      <Footer />
    </>
  );
};
export default Home;
