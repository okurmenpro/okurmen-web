import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import Logo from "/images/logo.png";
import { HashLink } from 'react-router-hash-link';

const navlinks = [
  {
    id: 1,
    title: "О компании",
    link: "#company-info"
  },
  {
    id: 2,
    title: "Курсы",
    link: "#course"
  },
  {
    id: 3,
    title: "Тренеры",
    link: "#trainers"
  },
  {
    id: 4,
    title: "Стажировка",
    link: "#internship"
  },
  {
    id: 5,
    title: "It-club",
    link: "#it-club"
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    function scrollBar() {
      setIsScroll(window.scrollY >= 50);
    }
    window.addEventListener("scroll", scrollBar);
    return () => window.removeEventListener("scroll", scrollBar);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        open &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-button")
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  const handleMenu = (event) => {
    event.stopPropagation();
    setOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed left-0 w-full bg-white z-40 top-0 ${isScroll ? "py-2 shadow-lg" : "py-5"
        } transition-all duration-150`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="ml-3 md:ml-0">
          <img className="cursor-pointer" width={80} src={Logo} alt="Logo" />
        </Link>
        <>
          <nav className="hidden md:flex gap-4">
            {navlinks.map((link) => (
              <HashLink
                key={link.id}
                smooth to={link.link}
                className="text-black py-2 px-3 text-base hover:text-gray-500"
              >
                {link.title}
              </HashLink>
            ))}
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            {/* <Button ButtonText="Зарегистрироваться" color="black" to="/registration" /> */}
          </div>
          <button className="md:hidden" onClick={handleMenu}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </>
      </div>

      {open && (
        <div className="absolute top-0 w-full bg-[#00000038] z-10">
          <div className="bg-white shadow-lg rounded-b-3xl space-y-1 py-4 px-4">
            {navlinks.map((link) => (
              <div key={link.id}>
                <HashLink
                  smooth
                  to={link.link}
                  className="block text-black py-2 px-3 text-base font-medium hover:bg-gray-700 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.title}
                </HashLink>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
