import { useState } from "react";

const UserLogin = () => {

  const [userName, setUserName] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
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
        <button className="cta cta--success">Login</button>
      </div>
      <div>{userName}</div>
    </>
  )
}

export default UserLogin;
