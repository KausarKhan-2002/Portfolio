import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to("#home", {
      scrollTrigger: {
        trigger: "#home",
        scrub: true,
      },
    });
  });

  useGSAP(() => {
    gsap.from(".home_content", {
      x: "-300px",
      delay: 0.4,
      duration: 1,
      opacity: 0,
    });
  });

  useGSAP(() => {
    gsap.from(".home_line", {
      x: "-300px",
      delay: 0.4,
      duration: 1,
      opacity: 0,
    });
  });

  useGSAP(() => {
    gsap.from(".home_img", {
      x: "300px",
      delay: 0.4,
      duration: 1,
      opacity: 0,
    });
  });



  return (
    <section
      id="home"
      className="pt-[100px] lg:pt-0 bg-[url('/sectionBG/home2.svg')] bg-cover  lg:[120vh] lg:h-[100vh] flex justify-center items-center"
    >
      <div className="w-[87%] mx-auto flex flex-col justify-between items-center lg:flex-row lg:justify-between">
        <div className="hidden lg:block">
          <div className="home_line flex flex-col justify-end items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full" />
            <div className="w-1 h-60 bg-blue-500" />
          </div>
        </div>

        <div className="home_content lg:w-[60%] p-5">
          <p className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-blue-500 flex items-center">
            <span>Hello</span>
            <img src="/appImg/star.png" className="star w-[100px]" />
          </p>
          <h3 className="banner_title text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[3.5rem] mt-2">
            I Am Kausar Khan
          </h3>
          <p className="font-medium text-slate-700 mt-1 text-[.9rem] sm:text-[1rem]">
            I design and build interactive, high-performance, and user-friendly
            web experiences using modern technologies like React, Tailwind CSS,
            and JavaScript. My focus is on clean code, responsiveness, and
            performance optimization, ensuring that every project delivers a
            seamless user experience.
          </p>
          <button
            onClick={() => window.open("/public/pdf/resume.pdf", "_blank")}
            className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-3 rounded-lg shadow-md font-semibold mt-7 hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Download Resume
          </button>
        </div>

        <div className="home_img">
          <img
            className="earth w-[300px] sm:w-[350px] md:w-[400px] lg:w-[330px] lg:translate-x-36 xl:w-[370px]"
            src="/appImg/earth.png"
            alt="Earth"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
