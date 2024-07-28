import Login from "./Form/Login";
import Signup from "./Form/Signup";
import ProfilIcon from "./Form/FormAssets/person.png";
import ViewIcon from "./Form/FormAssets/view.png";
import HiddenIcon from "./Form/FormAssets/hidden.png";
import AddUserIcone from "./Form/FormAssets/add-user.png"


function App() {

  return (
    <div className="App d-flex align-items-center justify-content-center">
      {false && <Login srcImageProfil={ProfilIcon} viewIcon={ViewIcon} hiddenIcon={HiddenIcon}></Login>}
      <Signup srcImageAddUser={AddUserIcone} viewIcon={ViewIcon} hiddenIcon={HiddenIcon}></Signup>
    </div>
  );
}

export default App;
