// import CertificateSection from "../../components/certificateSection/CertificateSection";
// import WorkSection from "../../components/workSection/WorkSection";
// import CompanyPage from "../companyPage/CompanyPage";
import AboutSection from "../../components/aboutSection/AboutSection";
// import Slider from "../../components/slider/Slider";
import HeroSection from "../../components/hero/HeroSection";
import Courses from "../../components/courses/Courses";
import Mentors from "../../components/mentors/Mentors";
import Trainers from "../../components/trainers/Trainers";
import AboutClub from "../../components/AboutClub/AboutClub";
import Address from "../../components/address/Address";
import Internshipsection from "../../components/internshipsection/Internshipsection";

// import MentorSlider from "../../components/slider/MentorSlider";
const HomePage = () => {
  return (
    <div className="mt-[100px]">
      <HeroSection />
      <div className="bg-white">
        <section id="company-info">
          <AboutSection />
        </section>
        <section id="course">
          <Courses />
        </section>
        {/* <CompanyPage /> */}
        {/* <Slider /> */}
        {/* <CertificateSection /> */}
        {/* <WorkSection /> */}
        {/* <CompanyPage /> */}

        <section id="trainers">
        <Trainers />
        </section>
          <Mentors />
        <section id="internship">
          <Internshipsection />
        </section>
        <section id="it-club">
          <AboutClub />
        </section>
        {/* <Slider /> */}
        {/* <CertificateSection /> */}
        <Address />
        {/* <WorkSection /> */}
        {/* <WorkSection /> */}

        {/* <MentorSlider /> */}
      </div>
    </div>
  );
};

export default HomePage;
