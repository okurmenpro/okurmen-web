import { Link } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";  

const Navbar = ({ navlinks, open, handleMenu, hovered, setHovered }) => {
  return (
    <nav className="md:hidden flex flex-col justify-center w-full">
      {open && ( 
        <div
          className="absolute top-0 right-0 p-4"
          style={{
            zIndex: 9999, 
          }}
        >
          <button
            className="text-black"
            onClick={handleMenu}  
          >
            <FaTimes size={30} style={{ marginTop: "10px" }} />
          </button>
        </div>
      )}

      <ul className="flex flex-col gap-4 text-base font-normal text-[#1B1A1A] mt-10git push">
        {Array.isArray(navlinks) &&
          navlinks.map((item) => (
            <li
              key={item.id}
              className="relative"
              onMouseEnter={() => item.id === 2 && setHovered(true)}
              onMouseLeave={() => item.id === 2 && setHovered(false)}
            >
              

              {item.id === 2 && hovered && (
                <ul className="absolute top-full left-0 w-max bg-white shadow-lg rounded-md">
                  {Array.isArray(courses) &&
                    courses.map((course) => (
                      <li key={course.name}>
                        <Link
                          to={course.path}
                          className="block  px-4 py-2 text-black hover:text-gray-600 transition-colors"
                          onClick={handleMenu}  // Close the menu when clicked
                        >
                          {course.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navbar;
