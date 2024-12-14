import styles from "../styles/components/servicecard.module.css";
const ServiceCard = ({ imgSrc, title, descriptions, url }) => {
  return (
    <section className={styles.serviceCardContainer}>
      <img src={imgSrc} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{descriptions}</p>
      <p>
        <a href={`${url}`}>Get started</a>
      </p>
    </section>
  );
};
export default ServiceCard;
