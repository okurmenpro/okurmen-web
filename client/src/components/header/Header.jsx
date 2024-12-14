import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const navlinks = [
  { id: 1, title: "О компании", link: "#company-info" },
  { id: 2, title: "Курсы", link: "#course" },
  { id: 3, title: "Менторы", link: "#mentors" },
  { id: 4, title: "Стажировка", link: "#internship" },
  { id: 5, title: "It-club", link: "#it-club" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    function scrollBar() {
      if (window.scrollY >= 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
    window.addEventListener("scroll", scrollBar);
  }, []);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed  left-0 w-full bg-white z-50  top-0 ${
        isScroll ? "py-2 duration-150 shadow-lg" : "py-5 duration-150"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="ml-3 md:ml-0 mx-[30px]">
          <Link to={"/"}>
            <img
              className="cursor-pointer"
              width={80}
              src="/images/logo.png"
              alt="Logo"
            />
          </Link>
        </div>
        <Navbar navlinks={navlinks} />
        <div className="md:flex gap-4 items-center s:hidden ">
          <Button
            ButtonText="Зарегестрироваться"
            color="black"
            to="/registration"
          />
        </div>
        <div className="flex md:hidden">
          <button onClick={handleMenu} className="w-7">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {open && (
        <>
          <div
            className={` ${
              open
                ? "s:absolute top-100 min-h-screen w-full  bg-[#00000038]"
                : "md:hidden s:relative"
            } `}
          >
            <div className="s:absolute top-0  w-full z-20 bg-white rounded-b-3xl  space-y-1 sm:px-3 md:px-0 shadow-lg py-4 px-4">
              {navlinks.map((link, idx) => (
                <a
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  key={idx}
                  href={link.link}
                >
                  {link.title}
                </a>
              ))}
              <div className="flex flex-col items-start pl-3">
                <Button ButtonText="Войти" color="border_black" />
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
