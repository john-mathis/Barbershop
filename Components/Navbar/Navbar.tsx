import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openMenuClass, setOpenMenuClass] = useState<string>("flex");
  const [closeMenuClass, setCloseMenuClass] = useState<string>("hidden");
  const [navSliderClass, setNavSliderClass] =
    useState<string>("w-0 hidden md:flex");

  const handleNavMenu = () => {
    if (isMenuOpen) {
      setCloseMenuClass("hidden");
      setOpenMenuClass("flex");
      setIsMenuOpen(!isMenuOpen);
      setNavSliderClass("w-0 hidden md:flex");
    } else {
      setCloseMenuClass("flex");
      setOpenMenuClass("hidden");
      setIsMenuOpen(!isMenuOpen);
      setNavSliderClass("w-full flex");
    }
  };

  return (
    <section className="max-w-full flex justify-between items-center h-20 bg-black	px-4 py-2 text-white">
      <Link href="/" className="text-xl	">
        The Prime Cutz
      </Link>
      <GiHamburgerMenu
        onClick={handleNavMenu}
        className={`${openMenuClass} h-6 w-6 md:hidden cursor-pointer`}
      />
      <AiOutlineClose
        onClick={handleNavMenu}
        className={`${closeMenuClass} h-6 w-6 md:hidden cursor-pointer`}
      />

      <div
        className={`${navSliderClass} z-10 flex flex-col h-fit absolute top-20 left-0 bg-black md:flex-row md:w-fit md:h-fit md:relative md:top-0 z-10`}
      >
        <Link
          onClick={handleNavMenu}
          href="/"
          className="py-4 text-center uppercase cursor-pointer border-b w-full md:w-24 md:border-b-0 lg:hover:bg-stone-400"
        >
          Home
        </Link>

        <Link
          onClick={handleNavMenu}
          href="/about"
          className="py-4 text-center uppercase cursor-pointer border-b w-full md:w-24 md:border-b-0 lg:hover:bg-stone-400"
        >
          About
        </Link>

        <Link
          onClick={handleNavMenu}
          href="/gallery"
          className="py-4 text-center uppercase cursor-pointer border-b w-full md:w-24 md:border-b-0 lg:hover:bg-stone-400"
        >
          Gallery
        </Link>
        <Link
          onClick={handleNavMenu}
          href="/services"
          className="py-4 text-center uppercase cursor-pointer border-b w-full md:w-24 md:border-b-0 lg:hover:bg-stone-400"
        >
          Services
        </Link>
      </div>
    </section>
  );
}
