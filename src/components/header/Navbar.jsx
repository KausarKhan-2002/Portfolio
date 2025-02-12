import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SocialLinks from "../../utils/HOC/SocialLinks";
import { headerLink } from "../../utils/links";

const Navbar = ({ isToggle }) => {
  const [activeTitle, setActiveTitle] = useState("Home");

  const activeBorderBottom = (ind) => {
    setActiveTitle(headerLink[ind].title);
  };

  useGSAP(() => {
    gsap.from(".list_item", {
      opacity: 0,
      delay: 0.7,
      x: 20,
    });
  });

  return (
    <div
      id="navbar"
      className={`${isToggle ? "fixed block" : "hidden"} top-[111px] right-0 sm:visible w-[35%] shadow-lg sm:shadow-none sm:w-auto sm:flex sm:items-center sm:static`}
    >
      <div className="sm:hidden p-3">
        <SocialLinks color="text-slate-800" linkGap="gap-3" />
      </div>

      <nav className="mt-5 sm:mt-0">
        <ul className="flex flex-col gap-3 sm:gap-10 sm:flex-row text-center">
          {headerLink.map((link, ind) => (
            <li key={ind} className="list_item">
              <a
                href={link.linkTo}
                onClick={() => activeBorderBottom(ind)}
                className={`${
                  activeTitle == link.title ? "text-blue-500" : "text-slate-800"
                } py-4 inline-block w-full font-bold lg:text-[1.1rem] hover:text-blue-500`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
