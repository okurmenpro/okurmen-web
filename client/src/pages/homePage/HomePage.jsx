import CertificateSection from '../../components/certificateSection/CertificateSection';
import WorkSection from '../../components/workSection/WorkSection';
import CompanyPage from '../companyPage/CompanyPage';
import CoursePage from '../coursePage/CoursePage';
import Slider from '../../components/slider/Slider';
import MentorSlider from '../../components/slider/MentorSlider';
import HeroSection from '../../components/hero/HeroSection';

const HomePage = () => {
	return (
		<div>
			<HeroSection />
			<div className='bg-[#F4F4F4]'>
				<CoursePage />
				<CompanyPage />
				<Slider />
				<MentorSlider />
				<CertificateSection />
				<WorkSection />
			</div>
		</div>
	);
};

export default HomePage;
