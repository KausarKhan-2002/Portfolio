import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AboutCard from "./AboutCard";
import { AiFillApi } from "react-icons/ai";
import { AiOutlineSync } from "react-icons/ai";
import { RiCodeSSlashLine } from "react-icons/ri";
import { AiOutlineMobile } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import { FaTools } from "react-icons/fa";

const cardItem = [
  {
    question: "Why should you hire me ?",
    answer:
      "because I am a skilled frontend developer with expertise in modern web technologies like HTML, CSS, JavaScript, React, Tailwind, and the MERN stack.",
    icon: <AiFillApi />,
  },
  {
    question: "What is your development process ?",
    answer:
      "My process includes understanding your requirements, planning, designing, developing, testing, and deploying. I also offer post-launch support for updates and maintenance.",
    icon: <AiOutlineSync />,
  },
  {
    question: "Can you handle both frontend and backend development ?",
    answer:
      "Yes, as a MERN stack expert, I specialize in full-stack development, covering both frontend (React) and backend (Node.js, Express) with database integration (MongoDB).",
    icon: <RiCodeSSlashLine />,
  },
  {
    question: "Are your web applications mobile-friendly ?",
    answer:
      "Absolutely! I create responsive designs that work seamlessly on desktops, tablets, and smartphones.",
    icon: <AiOutlineMobile />,
  },
  {
    question: "Do you offer support after project delivery ?",
    answer:
      "Yes, I provide ongoing support and maintenance services to ensure your application remains up-to-date and runs smoothly.",
    icon: <MdSupportAgent />,
  },
  {
    question: "What tools and libraries do you commonly use in MERN development ?",
    answer:
      "Alongside the MERN stack, I use tools like Redux, Tailwind CSS, GSAP, and more to enhance functionality and design.",
    icon: <FaTools />,
  }
];

const AboutSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="aboutSection mx-auto mt-20 gap-20 mb-20 px-5 sm:px-20">
      <div id="aboutCardContainer" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardItem.map((item, ind) => (
          <AboutCard key={ind} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AboutSection