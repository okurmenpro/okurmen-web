/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
const Navbar = ({ navlinks }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const path = e.target.value;
    navigate(path);
  };

  return (
    <nav className="hidden md:block">
      <div className="sm:flex md:flex items-center justify-center gap-8 text-base font-normal text-[#1B1A1A] ]">
        <div className="flex justify-between gap-5 ">
          {navlinks.map((link, idx) => (
            <a key={idx} href={link.link}>
              {link.title}
            </a>
          ))}
          <div>
            <select
              onChange={(e) => handleChange(e)}
              className="outline-none w-[120px] "
            >
              <option value="/">Ресурсы</option>
              <option value="/itclub">IT-club</option>
              <option value="/management">Управление</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
