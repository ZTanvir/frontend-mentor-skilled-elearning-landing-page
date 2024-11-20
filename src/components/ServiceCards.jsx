import ServiceCard from "./ServiceCard";
import cardsData from "../data/cardsData";
const ServiceCards = () => {
  return (
    <>
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
