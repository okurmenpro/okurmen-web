/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
const Navbar = ({ navlinks }) => {
  // const navigate = useNavigate();

  return (
    <nav className="hidden md:block max-w-[435px] w-full">
      <div className="sm:flex md:flex items-center justify-center  gap-8 text-base font-normal text-[#1B1A1A] ]">
        <div className="max-w-[435px] w-full">
          <ul className="flex justify-between max-w-[435px] w-full">
            {navlinks?.map((item) => (
              <li key={item.id}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
