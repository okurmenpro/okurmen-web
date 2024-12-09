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
import BackendPage1 from "../pages/backendPage/BackendPage";
import UxUiPage from "../pages/uxuiPage/UxUiPage";
import GroupPage from "../pages/groupPage/GroupPage";
import StudentsPage from "../pages/studentsPage/StudentsPage";
import BackendFrontend from "../pages/backendFrontend/BackendFrontend";
import PythonPage from "../pages/pythonPage/PythonPage";
import ApplicatoinsPage from "../pages/applicationsPage/ApplicationsPage";
import ConsulationPage from "../components/consultationPage/ConsulationPage";
import Archive from "../components/archive/Archive";
import FrontendPage from "../pages/frontendPage/FrontendPage";
import ConfirmRegisterPage from "../pages/confirmRegisterPage/ConfirmRegisterPage";
import RegistrationAdminPage from "../pages/registrationAdminPage/registrationAdminPage";

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
          <Route path="/profile" element={<ProfilePage role="student" />} />
          <Route
            path="/student-profile/:id"
            element={<ProfilePage role="student" />}
          />
          <Route
            path="/manager-profile"
            element={<ProfilePage role="manager" />}
          />
          <Route
            path="/director-profile"
            element={<ProfilePage role="director" />}
          />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/applications" element={<ApplicatoinsPage />} />
          <Route path="/backend" element={<BackendPage1 />} />
          <Route path="/group/:id" element={<GroupPage />} />
          <Route path="/frontendBackend" element={<BackendFrontend />} />
          <Route path="/python" element={<PythonPage />} />
          <Route path="/frontend" element={<FrontendPage />} />
          <Route path="/uxui" element={<UxUiPage />} />
        </Route>
        <Route path="/registration" element={<Register />} />
        <Route path="/register-confirm" element={<ConfirmRegisterPage />} />
        <Route path="/consultation" element={<ConsulationPage />} />
        <Route
          path="/register/admin/contact-info"
          element={<RegistrationAdminPage role="contact-info" />}
        />
        <Route
          path="/register/admin/account-setup"
          element={<RegistrationAdminPage role="account-setup" />}
        />
        <Route
          path="/register/admin/confirm-code"
          element={<RegistrationAdminPage role="confirm-code" />}
        />

        <Route path="/archive" element={<Archive />} />
      </>
    )
  );
};

export default AppRoutes;
