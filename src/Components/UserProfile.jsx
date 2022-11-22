import {useContext} from "react";
import {LoginContext} from "../Components/Context/LoginContext";

const UserProfile = () => {
  const {userName} = useContext(LoginContext);
  return (
    <>
      <h2 className="title__secondary">User Profile</h2>
      <h3 className="title__tertiary">User Name: {userName}</h3>
    </>
  )
}

export default UserProfile;
