import {useState} from "react";
import {LoginContext} from "./Components/Context/LoginContext";
import UserLogin from "./Components/User/UserLogin";
import UserProfile from "./Components/User/UserProfile";

const App = () => {

  const [userName, setUserName] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="content">
      <header className="header">
        <h1 className="title__primary">React Context</h1>
      </header>
      <LoginContext.Provider value={{userName, setUserName, setShowProfile}}>
        {showProfile ? <UserProfile /> : <UserLogin />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
