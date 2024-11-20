import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroSection from "./HeroSection";
import ServiceCards from "../../components/ServiceCards";

const Home = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <section>
          <HeroSection />
        </section>
        <section>
          <ServiceCards />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default Home;
