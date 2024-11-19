import styles from "../styles/components/servicecard.module.css";
const ServiceCard = ({ imgSrc, title, descriptions }) => {
  return (
    <section className={styles.serviceCardContainer}>
      <img src={imgSrc} />
      <h3>{title}</h3>
      <p className={styles.description}>{descriptions}</p>
      <p>
        <a href="#">Get started</a>
      </p>
    </section>
  );
};
export default ServiceCard;
