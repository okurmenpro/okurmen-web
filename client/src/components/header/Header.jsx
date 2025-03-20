import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Button from "../button/Button";
import Logo from "/images/logo.png";
import { useState, useEffect, useRef } from "react";
import { HashLink } from 'react-router-hash-link';
import { courses } from '../../data/courses';

const navlinks = [
  { id: 1, title: "О компании", link: "#company-info" },
  { id: 2, title: "Курсы", link: "#course" },
  { id: 3, title: "Тренеры", link: "#trainers" },
  { id: 4, title: "Стажировка", link: "#internship" },
  { id: 5, title: "It-club", link: "#it-club" },
]

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY >= 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setIsCoursesOpen(false);
  }, [location.pathname]);

  const handleMenu = () => setOpen(prev => !prev);
  const toggleCourses = () => setIsCoursesOpen(prev => !prev);

  return (
    <header className={`fixed left-0 w-full bg-white z-40 top-0 ${isScroll ? "py-2 shadow-lg" : "py-5"} transition-all duration-150`}>
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="ml-3 md:ml-0">
          <img className="cursor-pointer" width={80} src={Logo} alt="Logo" />
        </Link>

        <nav className="hidden md:flex gap-6 relative">
          {navlinks.map(link => (
            <HashLink key={link.id} smooth to={link.link} className="text-black py-2 px-3 text-base hover:text-gray-500">
              {link.title}
            </HashLink>
          ))}
        </nav>

        <button className="md:hidden menu-button" onClick={handleMenu}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {open && (
        <div className="absolute top-0 w-full bg-[#00000038] z-10">
          <div className="bg-white shadow-lg rounded-b-3xl py-4 px-4 relative mobile-menu">
            <button className="absolute right-4 top-4 text-black text-2xl" onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
            <div className="flex flex-col justify-start pt-7 space-y-2">
              {navlinks.map((link) => (
                <div key={link.id} className="relative">
                  {link.title === "Курсы" ? (
                    <div className="flex justify-between items-center py-2 px-3 text-base font-medium hover:bg-gray-100" onClick={toggleCourses}>
                      <span className="text-black">{link.title}</span>
                      <FaChevronDown className={`transition-transform ${isCoursesOpen ? "rotate-180" : "rotate-0"}`} />
                    </div>
                  ) : (
                    <HashLink smooth to={link.link} className="block text-black py-2 px-3 text-base font-medium hover:bg-gray-100" onClick={() => setOpen(false)}>
                      {link.title}
                    </HashLink>
                  )}
                  {isCoursesOpen && link.title === "Курсы" && (
                    <div className="bg-white shadow-md rounded-md p-2 ml-5">
                      <ul className="space-y-1">
                        {courses.map((course, index) => (
                          <li key={index}>
                            <Link to={course.path} className="block text-black py-2 px-2 text-left text-base hover:text-gray-500" onClick={() => setOpen(false)}>
                              {course.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
