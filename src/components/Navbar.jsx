import { Link } from "react-router-dom";
import { useState } from "react";

import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

// assests
import logo from "../assests/SVGs/logo.svg";

export default function Navbar() {
  const [toggleIcon, setToggleIcon] = useState(false);
  //   this function is to change the toggle state
  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <header className=" bg-purple flex flex-row justify-between items-center py-4 px-8">
      <Link>
        <img src={logo} alt="logo" className=" w-40 lg:w-[360px]" />
      </Link>

      <div onClick={handleToggle} className=" z-20 lg:hidden">
        {toggleIcon ? (
          <XMarkIcon width={35} />
        ) : (
          <Bars3BottomRightIcon width={35} />
        )}
      </div>

      <nav className=" hidden lg:flex lg:items-center lg:gap-x-[68px]">
        <a href="#about" className=" text-xl font-semibold font-['Inter']">
          About us
        </a>
        <a href="#talents">Find talent</a>
        <a href="#skills">Top skills</a>
        <a href="#testimonials">Testimonials</a>
      </nav>
      <div className=" hidden">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </header>
  );
}
