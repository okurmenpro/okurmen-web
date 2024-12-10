import AdminAccountSetup from "../../components/registrationAdmin/AdminAccountSetup";
import AdminConfirmCode from "../../components/registrationAdmin/AdminConfirmCode";
import AdminContactInfo from "../../components/registrationAdmin/AdminContactInfo";

/* eslint-disable react/prop-types */
const RegistrationAdminPage = ({ role }) => {
  switch (role) {
    case "contact-info":
      return <AdminContactInfo />;
    case "account-setup":
      return <AdminAccountSetup />;
    case "confirm-code":
      return <AdminConfirmCode />;
  }
};

export default RegistrationAdminPage;
