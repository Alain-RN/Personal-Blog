import Login from "./Form/Login";
import Signup from "./Form/Signup";
import ProfilIcon from "./Form/FormAssets/person.png";
import ViewIcon from "./Form/FormAssets/view.png";
import HiddenIcon from "./Form/FormAssets/hidden.png";
import AddUserIcone from "./Form/FormAssets/add-user.png"
import { useState } from "react";


function App() {
  const [isLogin, setIsLogin] = useState(true)

  const toggleLogin = () => {
    setIsLogin(!isLogin)
  }
  return (
    <div className="App d-flex align-items-center justify-content-center">
      {(isLogin)?
        <Login srcImageProfil={ProfilIcon} viewIcon={ViewIcon} hiddenIcon={HiddenIcon} onClick={toggleLogin}></Login>
      :
        <Signup srcImageAddUser={AddUserIcone} viewIcon={ViewIcon} hiddenIcon={HiddenIcon} onClick={toggleLogin}></Signup>
      }
    </div>
  );
}

export default App;
