import { useState } from "react";
import UserLogin from "./Components/UserLogin";
import UserProfile from "./Components/UserProfile";

const App = () => {

  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="content">
      <header className="header">
        <h1 className="title__primary">React Context</h1>
      </header>
      {showProfile ? <UserProfile /> : <UserLogin />}
    </div>
  );
}

export default App;
