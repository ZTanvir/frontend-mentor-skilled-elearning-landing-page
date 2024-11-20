import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroSection from "./HeroSection";
import ServiceCards from "../../components/ServiceCards";
import styles from "../../styles/page/homepage.module.css";

const Home = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <section className={styles.heroSection}>
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
