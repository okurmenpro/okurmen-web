import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({ navlinks, hovered, handleMouseEnter, handleMouseLeave }) => {

  return (
    <nav className="hidden md:block max-w-[435px] w-full">
      <div className="sm:flex md:flex items-center justify-center gap-8 text-base font-normal text-[#1B1A1A]">
        <div className="max-w-[435px] w-full">
          <ul className="flex justify-between max-w-[435px] w-full">
            {navlinks?.map((item) => (
              <li
                key={item.id}
                className="relative"
                onMouseEnter={() => item.id === 2 && handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.link}
                  className="flex items-center text-black hover:text-gray-700"
                >
                  {item.title}
                </Link>
                {item.id === 2 && hovered === item.id && (
                  <ul className="absolute px-14 py-2  top-full bg-white shadow-lg sm:block hidden">
                    <li><Link to="/csharp" className="block py-2 text-black">C#</Link></li>
                    <li><Link to="/frontend" className="block  py-2 text-black">JS</Link></li>
                    <li><Link to="/frontend" className="block py-2 text-black">React</Link></li>
                    <li><Link to="/python" className="block py-2 text-black">Python</Link></li>
                    <li><Link to="/uxui" className="block py-2 text-black">Figma</Link></li>
                    <li><Link to="/backend" className="block py-2 text-black">Java</Link></li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;