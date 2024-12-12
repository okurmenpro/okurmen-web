import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
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
      className={`fixed left-0 w-full bg-white z-50  top-0 ${
        isScroll ? "py-2 duration-150 shadow-lg" : "py-5 duration-150"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="ml-3 md:ml-0 ">
          <Link to={"/"}>
            <img
              className="cursor-pointer max-w-[70px] w-full"
              width={80}
              src="/images/logo.png"
              alt="Logo"
            />
          </Link>
        </div>
        <Navbar navlinks={navlinks} />
        <div className="flex w-fit gap-4 items-center">
          <Button
            ButtonText="Зарегестрироваться"
            color="black"
            to="/registration"
          />
        </div>
        <div className="flex md:hidden">
          <button className="w-7">
            <label>
              <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
                <input
                  checked={open}
                  onChange={handleMenu}
                  className="hidden peer"
                  type="checkbox"
                />
                <div className="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
                <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
                <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
              </div>
            </label>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute  bg-[#00000068] h-screen w-full ">
          <div className="absolute w-full z-20 bg-white rounded-b-3xl pb-3 space-y-1 sm:px-3 md:px-0 shadow-lg">
            {navlinks.map((link, idx) => (
              <a
                className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                key={idx}
                href={link.link}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
