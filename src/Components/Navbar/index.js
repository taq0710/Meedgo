import {BsPerson} from 'react-icons/bs'
import './style.scss'
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="d-flex align-items-center navitems-left">
        <div className='logo'>Meedgo</div>
        <div className="d-flex navitem">
          <div>Home</div>
          <div>Meedgo Promise</div>
          <div>Philosophy</div>
          <div>Career</div>
        </div>
      </div>
      <div className="d-flex align-items-center navitems-right">
        <div className='nav-button'>Pharmacist Connect</div>
        <div className="d-flex align-items-center toggle-button">
          <div>IN</div>
          <div>US</div>
        </div>
        <div className="d-flex align-items-center login-button">
          <BsPerson />
          <div>Login</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
