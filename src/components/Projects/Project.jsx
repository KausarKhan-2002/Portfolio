import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Project = (props) => {
  let { banner, description, link, repoLink, title, tools, completed } =
    props.data;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`card relative ${!completed && "cardBefore"} rounded-3xl shadow-lg overflow-hidden`}
    >
      {/* Banner Image */}
      <div>
        <img
          src={banner}
          alt={title}
          loading="lazy"
          className="w-full h-48 object-cover rounded-t-3xl brightness-[80%]"
        />
      </div>

      {/* Content on hover */}
      <div className="content opacity-0 text-white absolute w-full h-0 overflow-hidden rounded-t-3xl top-0 left-0 backdrop-blur-md backdrop-brightness-[70%] transition-all duration-300 group-hover:opacity-100 group-hover:h-full p-4">
        <h3 className="font-medium text-sm sm:text-base md:text-lg text-center">
          {title}
        </h3>
        <p className="text-slate-300 text-xs mt-1 line-clamp-4">
          {description}
        </p>
        <p className="mt-2 bg-blue-900 text-xs sm:text-sm text-center py-1 rounded-full">
          <span className="font-medium">Tools</span>: {tools}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-row-reverse justify-center gap-2 items-center py-2 bg-white">
        <a
          href={repoLink}
          target="_blank"
          className="text-xl text-blue-900 text-center px-4 py-2 hover:text-blue-800"
          title="Go to GitHub"
        >
          <FaGithub />
        </a>
        <a
          href={link}
          target="_blank"
          className="text-lg text-blue-900 px-4 py-2 hover:text-blue-800"
          title="Go to live site"
        >
          <FaExternalLinkAlt />
        </a>
      </div>
    </motion.div>
  );
};

export default Project;