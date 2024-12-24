import { Link } from "react-router-dom";
import { useState } from "react";
import { courses } from "../../data/courses";

const Navbar = ({
  navlinks,
  clicked,
  hovered,
  handleMobileClick,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const handleEnter = () => {
    handleMouseEnter();
  };

  const handleLeave = () => {
    handleMouseLeave();
  };

  return (
    <nav className="hidden md:flex w-full justify-center">
      <ul className="flex gap-8 text-base font-normal text-[#1B1A1A]">
        {Array.isArray(navlinks) &&
          navlinks.map((item) => (
            <li
              key={item.id}
              className="relative"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <Link
                to={item.link}
                className="text-black hover:text-gray-700 transition-colors"
              >
                {item.title}
              </Link>

              {item.id === 2 && hovered && (
                <div className="absolute top-full left-0 w-max bg-white shadow-lg rounded-md">
                  {Array.isArray(courses) &&
                    courses.map((course) => (
                      <li key={course.name}>
                        <Link
                          to={course.path}
                          className="block text-left pl-[10px] py-2 pr-12 text-black hover:text-gray-600 transition-colors"
                        >
                          {course.name}
                        </Link>
                      </li>
                    ))}
                </div>
              )}

              {item.id === 2 && clicked === item.id && (
                <div className="absolute top-full left-0 w-max bg-white shadow-lg mt-2 rounded-md">
                  {Array.isArray(courses) &&
                    courses.map((course) => (
                      <li key={course.name}>
                        <Link
                          to={course.path}
                          className="block py-2 px-4 text-black hover:text-gray-600 transition-colors"
                          onClick={() => setClicked(null)}
                        >
                          {course.name}
                        </Link>
                      </li>
                    ))}
                </div>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navbar;
