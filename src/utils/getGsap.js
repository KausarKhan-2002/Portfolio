import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// Note_______________________________
// This is just a practice purpose file where I am learning gsap feature in add in my project.

const getGsap = () => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Write useGsap inside jsx not in normal function bcz it is a hook
    useGSAP(() => {
      gsap.to(".cardBody", {
        scrollTrigger: {
          trigger: ".cardBody",
          // restart | pause | resume,reverse | pause
          toggleActions: "restart none resume none",
          // markers: true,
        },
        // justifyContent: "Center",
        gap: "3rem",
        // justifyContent: "center",
        // border: "1px solid black",
        // margin: "0 auto",
        duration: 1,
        delay: 0.4,
      });
    });
  
    useGSAP(() => {
      gsap.to(".HTML", {
        scrollTrigger: {
          trigger: ".HTML",
          // scrub: true,
          // start: "-200px 10px",
        },
        // x: 470,
        duration: 0.3,
        delay: 0.5,
      });
    });
    useGSAP(() => {
      gsap.to(".Javascript", {
        scrollTrigger: {
          trigger: ".Javascript",
          scrub: true,
        },
        // x: 470,
        // duration: 0.5,
        // delay: 0.5,
      });
    });
    useGSAP(() => {
      gsap.to(".Bootstrap", {
        scrollTrigger: {
          trigger: ".Bootstrap",
          scrub: true,
        },
        // x: -470,
        // y: 360,
        // duration: 0.7,
        // delay: 0.5,
      });
    });
  
    useGSAP(() => {
      gsap.to(".Tailwind", {
        scrollTrigger: {
          trigger: ".Tailwind",
          scrub: true,
        },
        // x: 0,
        // y: 360,
        // duration: 0.9,
        // delay: 0.5,
      });
    });
    useGSAP(() => {
      gsap.to(".Sass", {
        scrollTrigger: {
          trigger: ".Sass",
          scrub: true,
        },
        // x: 470,
        // y: 360,
        // duration: 1.1,
        // delay: 0.5,
      });
    });
    useGSAP(() => {
      gsap.to(".React", {
        scrollTrigger: {
          trigger: ".React",
          scrub: true,
          delay: 0.1,
        },
        // x: -470,
        // y: 680,
        // duration: 1.3,
        // delay: 0.2,
      });
    });
    useGSAP(() => {
      gsap.to(".Python", {
        scrollTrigger: {
          trigger: ".Python",
          scrub: true,
        },
        // x: 0,
        // y: 680,
        // duration: 1.7,
        // delay: 0.2,
      });
    });
    // gsap.to(".card",  {
    //   y: 100,
    //   duration: 0.3,
    //   stagger: {
    //     each: 0.1,
    //     from: 3,
    //   },
    // })
}