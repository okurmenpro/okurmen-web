// import CertificateSection from "../../components/certificateSection/CertificateSection";
// import WorkSection from "../../components/workSection/WorkSection";
// import CompanyPage from "../companyPage/CompanyPage";
import AboutSection from "../../components/aboutSection/AboutSection";
// import Slider from "../../components/slider/Slider";
// import MentorSlider from "../../components/slider/MentorSlider";
import HeroSection from "../../components/hero/HeroSection";
import Mentors from "../../components/mentors/Mentors";
import AboutClub from "../../components/AboutClub/AboutClub";
import Address from "../../components/address/Address";
import Internshipsection from "../../components/internshipsection/Internshipsection";
import Trainers from "../../components/trainers/Trainers";
const HomePage = () => {
  return (
    <div className="mt-[100px]">
      <HeroSection />
      <div className="bg-white">
        <AboutSection />
        {/* <CompanyPage /> */}
        <Trainers />
        <Mentors />
        <Internshipsection />
        <AboutClub />
        {/* <Slider /> */}
        {/* <CertificateSection /> */}
        <Address />
        {/* <WorkSection /> */}
        {/* <WorkSection /> */}
      </div>
    </div>
  );
};

export default HomePage;
