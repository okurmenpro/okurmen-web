import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import Logo from "/images/logo.png";

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
  const [clicked, setClicked] = useState(null);  
  const [hovered, setHovered] = useState(false); 

  useEffect(() => {
    function scrollBar() {
      if (window.scrollY >= 50) setIsScroll(true);
      else setIsScroll(false);
    }
    window.addEventListener("scroll", scrollBar);
  }, []);

  const handleMenu = () => setOpen((prev) => !prev);
  
  const handleMobileClick = (id) => {
    setClicked((prev) => (prev === id ? null : id));  
  };

  const handleMouseEnter = () => {
    setHovered(true);  
  };

  const handleMouseLeave = () => {
    setHovered(false); 
  };

  return (
    <header
      className={`fixed left-0 w-full bg-white z-50 top-0 ${
        isScroll ? "py-2 shadow-lg" : "py-5"
      } transition-all duration-150`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="ml-3 md:ml-0">
          <img className="cursor-pointer" width={80} src={Logo} alt="Logo" />
        </Link>

        <Navbar
          navlinks={navlinks}
          clicked={clicked}
          hovered={hovered}
          handleMobileClick={handleMobileClick}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />

        <div className="hidden md:flex gap-4 items-center">
          <Button ButtonText="Зарегестрироваться" color="black" to="/registration" />
        </div>

        <button className="md:hidden" onClick={handleMenu}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="absolute top-0 w-full bg-[#00000038] z-10">
          <div className="bg-white shadow-lg rounded-b-3xl space-y-1 py-4 px-4">
            {navlinks.map((link) => (
              <div key={link.id}>
                <Link
                  to={link.link}
                  className="block text-black py-2 px-3 text-base font-medium hover:bg-gray-700 hover:text-white"
                  onClick={() => handleMobileClick(link.id)}
                >
                  {link.title}
                </Link>
                {link.id === 2 && clicked === link.id && (
                  <ul className="pl-4 space-y-2">
                    {['C#', 'JS', 'React', 'Python', 'Figma', 'Java'].map((subItem) => (
                      <li key={subItem}>
                        <Link
                          to={`/${subItem.toLowerCase()}`}
                          className="block text-black py-2 px-3 hover:bg-gray-200"
                          onClick={() => setClicked(null)}  
                        >
                          {subItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;