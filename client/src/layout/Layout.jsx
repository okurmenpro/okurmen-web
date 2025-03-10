import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import RedirectHandler from "../components/redirectHandler";

const Layout = () => {
  return (
    <>
      <RedirectHandler />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
