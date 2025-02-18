import { Link } from "react-router-dom";
import { useState } from "react";
import { courses } from "../../data/courses";

const Navbar = ({ navlinks }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <nav className="hidden md:flex w-full justify-center">
      <ul className="flex gap-8 text-base font-normal text-[#1B1A1A]">
        {Array.isArray(navlinks) &&
          navlinks.map((item) => (
            <li
              key={item.id}
              className="relative"
              onMouseEnter={() => item.id === 2 && setHovered(true)}
              onMouseLeave={() => item.id === 2 && setHovered(false)}
            >
              <Link
                to={item.link}
                className="text-black hover:text-gray-700 transition-colors"
              >
                {item.title}
              </Link>

              {item.id === 2 && hovered && (
                <ul className="absolute top-full left-0 w-max bg-white shadow-lg rounded-md ">
                  {Array.isArray(courses) &&
                    courses.map((course) => (
                      <li key={course.name}>
                        <Link
                          to={course.path}
                          className="block px-4 py-2 text-black hover:text-gray-600 transition-colors"
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
