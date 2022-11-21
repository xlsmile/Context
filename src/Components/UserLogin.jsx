import { useState } from "react";

const UserLogin = () => {

  const [userName, setUserName] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  }

  const handleShowProfile = () => {
    setShowProfile(true);
  }

  return (
    <>
      <div>
        <label className="form__label" htmlFor="username">User Name</label>
        <input className="form__input" id="username" type="text" onChange={handleUserName}/>
      </div>
      <div>
        <label  className="form__label" htmlFor="userpassword">User Password</label>
        <input  className="form__input" id="userpassword" type="password" />
      </div>
      <div className="form__group--buttons">
        <button className="cta cta--success" onClick={handleShowProfile}>Login</button>
      </div>
      <div>
        {showProfile && <p className="text">{userName}</p>}
      </div>
    </>
  )
}

export default UserLogin;
