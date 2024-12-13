const Navbar = () => {
  return (
    <nav className="hidden md:block">
      <div className="sm:flex md:flex items-center justify-center gap-8 text-base font-normal text-[#1B1A1A] ]">
        <div>
          <ul className="flex justify-between gap-6">
            <li>
              <button
                onClick={() => {
                  const section = document.getElementById("");
                  if (section) {
                    window.scroll({
                      behavior: "smooth",
                      top: section.offsetTop,
                    });
                  }
                }}
              >
                О компании
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const section = document.getElementById("");
                  if (section) {
                    window.scroll({
                      behavior: "auto",
                      top: section.offsetTop,
                    });
                  }
                }}
              >
                Курсы
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const section = document.getElementById("mentors");
                  if (section) {
                    window.scrollTo({
                      behavior: "smooth",
                      top: section.offsetTop,
                    });
                  }
                }}
              >
                Менторы
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const section = document.getElementById("internship");
                  if (section) {
                    window.scroll({
                      behavior: "smooth",
                      top: section.offsetTop,
                    });
                  }
                }}
              >
                Стажировка
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const section = document.getElementById("itclub");
                  if (section) {
                    window.scroll({
                      behavior: "smooth",
                      top: section.offsetTop,
                    });
                  }
                }}
              >
                IT club
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
