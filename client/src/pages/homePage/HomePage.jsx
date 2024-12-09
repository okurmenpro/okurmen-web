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

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="bg-[#F4F4F4]">
        <AboutSection />
        {/* <CompanyPage /> */}
        <Mentors />
        <Internshipsection />
        <AboutClub />
        {/* <Slider /> */}
        {/* <CertificateSection /> */}
        <Address/>
        <WorkSection />
        {/* <WorkSection /> */}
      </div>
    </div>
  );
};

export default HomePage;
