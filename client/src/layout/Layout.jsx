import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ContactPage from '../pages/contactPage/ContactPage';
import Map from '../components/map/Map';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<ContactPage />
			<Map />
			<Footer />
		</>
	);
};

export default Layout;
