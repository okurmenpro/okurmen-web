import ProfileDirector from "../../components/profileDirector/ProfileDirector";
import ProfileManager from "../../components/profileManger/ProfileManager";
import ProfileStudent from "../../components/profileStudent/ProfileStudent";

const ProfilePage = ({ role }) => {
  switch (role) {
    case "student":
      return <ProfileStudent />;
    case "manager":
      return <ProfileManager />;
    case "director":
      return <ProfileDirector />;
    default:
      return null;
  }
};

export default ProfilePage;
