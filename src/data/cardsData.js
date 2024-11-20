import animationIcon from "../assets/icon-animation.svg";
import designIcon from "../assets/icon-design.svg";
import photographyIcon from "../assets/icon-photography.svg";
import cryptoIcon from "../assets/icon-crypto.svg";
import businessIcon from "../assets/icon-business.svg";

const cardsData = [
  {
    id: crypto.randomUUID(),
    iconSrc: animationIcon,
    title: "Animation",
    description:
      "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
    url: "/animation",
  },
  {
    id: crypto.randomUUID(),
    iconSrc: designIcon,
    title: "Design",
    description:
      "Create beautiful, usable interfaces to help shape the future of how the web looks.",
    url: "/design",
  },
  {
    id: crypto.randomUUID(),
    iconSrc: photographyIcon,
    title: "Photography",
    description:
      "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
    url: "/photography",
  },
  {
    id: crypto.randomUUID(),
    iconSrc: cryptoIcon,
    title: "Crypto",
    description:
      "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
    url: "/crypto",
  },
  {
    id: crypto.randomUUID(),
    iconSrc: businessIcon,
    title: "Business",
    description:
      "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
    url: "/business",
  },
];
export default cardsData;
