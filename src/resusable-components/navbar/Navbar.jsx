import React, {useState} from "react";
import { NavLink,useNavigate } from "react-router-dom";
import "./Navbar.css";
import addServicesIcon from "../../images/add-services.png";
import addLoginIcon from "../../images/add-login.png";
import { SignIn } from "../../features/features-exporter";

const Navbar = () => {

  const navigate = useNavigate();
  const [showModal,setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <h2>LOGO</h2>
      </div>

      <ul className="navbar-center">
        <li>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Service" activeClassName="active">Service</NavLink>
        </li>
        <li>
          <NavLink to="/Requests" activeClassName="active">Requests</NavLink>
        </li>
        <li>
          <NavLink to="/Professional">Professional</NavLink>
        </li>
        <li>
          <NavLink to="/Pages">
            <div className="dropdown" activeClassName="acive">
              <span>Pages &nbsp;</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                <path d="M1 1L8 7L15 1" stroke="black" strokeLinecap="round" />
              </svg>

              <div className="dropdown-content">
                <NavLink to="option1" activeClassName="acive" >Option 1</NavLink>
                <NavLink to="option2" activeClassName="acive" >Option 2</NavLink>
                <NavLink to="option3" activeClassName="acive">Option 3</NavLink>
              </div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Blog">Blog</NavLink>
        </li>
         <li>
          <div  className="sign-in-modal" onClick={() => setShowModal(true)}>
            Sign In &nbsp;
            <img className="login-icon" src={addLoginIcon} alt="loginicon" /></div>
            {showModal && <SignIn closeModal = {closeModal}/>}
        </li> 
      </ul>
      <div className="navbar-right">
        <button type="button" className="add-services-btn" onClick={()=>navigate("/addservice")}>Add Services</button>
        <div className="request-service">
          <img className="add-btn-icon" src={addServicesIcon} alt="btnicon"/>
          <button type="button" className="req-btn" onClick={()=>navigate("/addrequest")}> Request Service</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;