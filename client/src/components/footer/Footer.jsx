import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Logo from "/icons/logo.svg";
import { useTranslation } from "react-i18next";

const instagramLinks = [
  { href: "https://www.instagram.com/okurmen.jobs/", label: "okurmen.jobs" },
  { href: "https://www.instagram.com/okurmen_kids/", label: "okurmen_kids" },
  { href: "https://www.instagram.com/okurmen.studio/", label: "okurmen.studio" },
  { href: "https://www.instagram.com/okurmen_pro/", label: "okurmen_pro" },
];

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-orange-500 text-white py-8">
      <div className="container mx-auto">
        <div className="flex justify-center md:justify-start mb-8">
          <NavLink to={"/"}>
            <img src={Logo} alt="Okurmen Logo" className="w-32" />
          </NavLink>
        </div>
        <hr className="border-white-300 my-6" />
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left border-b border-white pb-6">
          <div>
            <h2 className="font-bold mb-6 text-xl md:text-2xl">{t('main')}</h2>
            <ul>
              <li className="mb-2 cursor-pointer hover:underline text-[#0f1f5e]">
                {t('company')}
              </li>
              <li className="mb-2 cursor-pointer hover:underline text-[#0f1f5e]">
                {t('courses')}
              </li>
              <li className="mb-2 cursor-pointer hover:underline text-[#0f1f5e]">
                {t('internship')}
              </li>
              <li className="cursor-pointer hover:underline text-[#0f1f5e]">
                {t('itClub')}
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-6 text-xl md:text-2xl "> {t('connection')}</h2>
            <a
              href="https://wa.me/996705677798"
              target="_blank"
              className="mb-2 flex items-center  hover:underline  justify-center md:justify-start cursor-pointer text-[#0f1f5e]"
            >
              <IoLogoWhatsapp className="mr-2 " /> +996705677798
            </a>
            <a
              href="https://www.instagram.com/okurmen_it/"
              target="_blank"
              className="flex items-center hover:underline justify-center md:justify-start text-[#0f1f5e]"
            >
              <IoLogoInstagram className="mr-2" /> okurmen_it
            </a>
          </div>
          <div>
            <h2 className="font-bold mb-6 text-xl md:text-2xl ">{t('address')}</h2>
            <a
              className=" hover:underline  text-[#0f1f5e]"
              target="_blank"
              href="https://2gis.kg/bishkek/inside/70030076155378888/firm/70000001075854813?m=74.585266%2C42.878822%2F17.27"
            >
              {t('street')} 109/1
            </a>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold mb-6 text-xl md:text-2xl">
              {t('resources')}
            </h2>
            <div className="">
              {instagramLinks.map(({ href, label }) => (
                <a key={href} href="href" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline decoration-[#0f1f5e] cursor-pointer">
                  <IoLogoInstagram/>
                  <span className="text-[#0f1f5e]">{label}</span>
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
