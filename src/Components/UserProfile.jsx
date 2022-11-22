import {useContext} from "react";
import {LoginContext} from "../Components/Context/LoginContext";

const UserProfile = () => {

  const {userName, setShowProfile} = useContext(LoginContext);

  return (
    <>
      <h2 className="title__secondary">User Profile</h2>
      <h3 className="title__tertiary">User Name: {userName}</h3>
      <button className="cta cta--start" onClick={() => setShowProfile(false)}><i className="fa-solid fa-chevron-left fa-xs"></i>Back</button>
    </>
  )
}

export default UserProfile;
