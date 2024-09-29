import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/homePage/HomePage';
import ItClubPage from './pages/itCLubPage/ItClubPage';
import Management from './pages/management/Management';
import { CourseListingPage } from './pages/courseListingPage/CourseListingPage';
import { WorkListingPage } from './pages/workListingPage/WorkListingPage';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='/itclub' element={<ItClubPage />} />
				<Route path='/management' element={<Management />} />
				<Route path='/course/:id' element={<CourseListingPage />} />
				<Route path='/work/:id' element={<WorkListingPage />} />
			</Route>,
		),
	);
	return <RouterProvider router={router} />;
}

export default App;
