import ProfileList from "../components/ProfileList";
import ProfileWindow from "../components/ProfileWindow";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <h1>This is your profile page</h1>
      <ProfileList />
      <ProfileWindow />
    </div>
  );
};

export default ProfilePage;
