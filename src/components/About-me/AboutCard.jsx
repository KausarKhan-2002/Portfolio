import { motion } from "framer-motion";
import { AiFillApi, AiOutlineSync } from "react-icons/ai";
import { RiCodeSSlashLine } from "react-icons/ri";
import { AiOutlineMobile } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import { FaTools } from "react-icons/fa";

// Mapping string icon names to actual components
const iconMapping = {
  AiFillApi,
  AiOutlineSync,
  RiCodeSSlashLine,
  AiOutlineMobile,
  MdSupportAgent,
  FaTools,
};

const AboutCard = ({ item, index }) => {
  const IconComponent = iconMapping[item.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1, // Stagger effect if in a list
      }}
      viewport={{ once: true }}
      className="p-6 bg-gradient-to-r from-cyan-500 to-blue-600 group rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
    >
      <div className="text-4xl mb-4 text-white group-hover:text-blue-100 transition">
        <IconComponent />
      </div>
      <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold text-white mb-3 group-hover:text-blue-100">
        {item.question}
      </h3>
      <p className="hidden sm:block sm:text-sm xl:text-base group-hover:block mt-2 text-slate-200 group-hover:text-blue-200 transition">
        {item.answer}
      </p>
    </motion.div>
  );
};

export default AboutCard;
