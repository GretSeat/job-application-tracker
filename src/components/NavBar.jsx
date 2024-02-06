import logo from "../assets/imgs/sample-logo.jpg";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <div className="controls-container">
        <div className="icon" onClick={() => navigate("/")}>
          Home
        </div>
        <div className="icon" onClick={() => navigate("/jobboard")}>
          Jobs
        </div>
        <div className="icon" onClick={() => navigate("/profile")}>
          Profile
        </div>
        <div className="icon" onClick={() => navigate("/contacts")}>
          Contacts
        </div>
      </div>
    </nav>
  );
}
