import {useContext} from "react";
import {LoginContext} from "../Components/Context/LoginContext";

const UserLogin = () => {

  const {setUserName, setShowProfile} = useContext(LoginContext);

  return (
    <>
      <div>
        <label className="form__label" htmlFor="username">User Name</label>
        <input className="form__input" id="username" type="text" onChange={(e) => setUserName(e.target.value)}/>
      </div>
      <div>
        <label  className="form__label" htmlFor="userpassword">User Password</label>
        <input  className="form__input" id="userpassword" type="password" />
      </div>
      <div className="form__group--buttons">
        <button className="cta cta--success" onClick={() => setShowProfile(true)}>Login</button>
      </div>
    </>
  )
}

export default UserLogin;
