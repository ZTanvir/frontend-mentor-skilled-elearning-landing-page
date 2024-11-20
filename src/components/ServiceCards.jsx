import ServiceCard from "./ServiceCard";
import cardsData from "../data/cardsData";
import styles from "../styles/components/serviceCards.module.css";
const ServiceCards = () => {
  return (
    <>
      <section className={styles.popularCourseCard}>
        <p>Check out our most popular courses!</p>
      </section>
      {cardsData.map((card) => (
        <ServiceCard
          key={card.id}
          imgSrc={card.iconSrc}
          title={card.title}
          descriptions={card.description}
          url={card.url}
        />
      ))}
    </>
  );
};
export default ServiceCards;
