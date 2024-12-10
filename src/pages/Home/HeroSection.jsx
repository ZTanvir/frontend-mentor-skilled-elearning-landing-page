import Button from "../../components/Button";
import desktopHero from "../../assets/image-hero-desktop.png";
import tabletHero from "../../assets/image-hero-tablet.png";
import mobileHero from "../../assets/image-hero-mobile.png";
import styles from "../../styles/components/heroSection.module.css";

const HeroSection = () => {
  return (
    <>
      <section className={styles.heroSectionContainer}>
        <h2>Maximize skill, minimize budget</h2>
        <p>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <Button
          text="get started"
          bgColor="linear-gradient(#FF6F48, #F02AA6)"
          color="white"
          hoverColor="linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(180deg, #ff6f48 0%, #f02aa6 100%)"
        />
      </section>
      <picture className={styles.heroImage}>
        <source media="(min-width:1025px )" srcSet={desktopHero} />
        <source media="(min-width:600px )" srcSet={tabletHero} />
        <img src={mobileHero} alt="" srcSet="" />
      </picture>
    </>
  );
};
export default HeroSection;
