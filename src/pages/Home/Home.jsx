import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroSection from "./HeroSection";
import ServiceCards from "../../components/ServiceCards";
import styles from "../../styles/page/homepage.module.css";

const Home = () => {
  return (
    <>
      <nav className={styles.navBar}>
        <Navbar />
      </nav>
      <main>
        <section className={styles.heroSection}>
          <HeroSection />
        </section>
        <section className={styles.cardSections}>
          <ServiceCards />
        </section>
      </main>
      <footer className={styles.footerBar}>
        <Footer />
      </footer>
    </>
  );
};
export default Home;
