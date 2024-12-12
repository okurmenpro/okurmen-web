import { useState } from "react";
import Navbar from "../navbar/Navbar";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../button/Button";


const navlinks = [
  { title: "Курстар", link: "#course" },
  { title: "Компания жөнүндө", link: "#company-info" },
  { title: "Менторлор", link: "#mentors" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (

    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-lg">
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
        <div className='flex gap-4'>
          <Button
            ButtonText="Войти"
            color="border_black"
          />
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
        <div className="md:hidden absolute bg-[#00000068] h-screen w-full mt-4">
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
      )

      }
    </header>
  );
};


export default Header