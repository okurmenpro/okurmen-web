import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/homePage/HomePage";
import ItClubPage from "../pages/itCLubPage/ItClubPage";
import Management from "../pages/management/Management";
import { CourseListingPage } from "../pages/courseListingPage/CourseListingPage";
import { WorkListingPage } from "../pages/workListingPage/WorkListingPage";
import Register from "../pages/registrationPage/Register";
import ProfilePage from "../pages/profilePage/ProfilePage";
import ConfirmRegisterPage from "../pages/confirmRegisterPage/ConfirmRegisterPage";
import ManagerProfile from "../pages/managerProfilePage/ManagerProfile";
import BackendPage1 from "../pages/backendPage/BackendPage";
import UxUiPage from "../pages/uxuiPage/UxUiPage";
import GroupPage from "../pages/groupPage/GroupPage";
import StudentsPage from "../pages/studentsPage/StudentsPage";
import BackendFrontend from "../pages/backendFrontend/BackendFrontend";
import PythonPage from "../pages/pythonPage/PythonPage";
import ApplicatoinsPage from "../pages/applicationsPage/ApplicationsPage";
import ConsulationPage from "../components/consultationPage/ConsulationPage";
import Archive from "../components/archive/Archive";
import StudentProfile from "../pages/studentProfile/StudentProfile";

const AppRoutes = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/itclub" element={<ItClubPage />} />
          <Route path="/management" element={<Management />} />
          <Route path="/course/:id" element={<CourseListingPage />} />
          <Route path="/work/:id" element={<WorkListingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/manager-profile" element={<ManagerProfile />} />
          <Route path="/applications" element={<ApplicatoinsPage />} />
          <Route path="/backend" element={<BackendPage1 />} />
          <Route path="/group/:id" element={<GroupPage />} />
          <Route path="/frontendBackend" element={<BackendFrontend />} />
          <Route path="/python" element={<PythonPage />} />
          <Route path="/student-profile/:id" element={<StudentProfile />} />
          <Route path="/uxui" element={<UxUiPage />} />
        </Route>
        <Route path="/registration" element={<Register />} />
        <Route path="/register-confirm" element={<ConfirmRegisterPage />} />
        <Route path="/consultation" element={<ConsulationPage />} />
        <Route path="archive" element={<Archive />} />
      </>
    )
  );
};

export default AppRoutes;
