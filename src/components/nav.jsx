import { NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';

export default function Nav() {
  return (
    <nav className="d-flex m-0 shadow align-items-center justify-content-between">
      <ul className="list-unstyled d-flex align-content-center m-0">
        <NavLink className="link" to="/" exact activeClassName="active">
          <b className="bi bi-exclamation-triangle-fill position-relative">
            <span className="position-absolute text-center px-2 py-0 pb-1 top-0 ms-1 start-100 translate-middle badge rounded-circle bg-danger">
              <small className="fw-normal">2</small>
              <span className="visually-hidden">unread messages</span>
            </span>
          </b>
        </NavLink>
        <NavLink className="link" to="/zones" activeClassName="active">
          <i className="bi bi-map"></i>
        </NavLink>
        <NavLink className="link" to="/cameras" activeClassName="active">
          <i className="bi bi-camera-video-fill"></i>
        </NavLink>
        <NavLink className="link" to="/analytics" activeClassName="active">
          <i className="bi bi-graph-up"></i>
        </NavLink>
        <NavLink className="link" to="/config" activeClassName="active">
          <i class="bi bi-gear-fill"></i>
        </NavLink>
        <NavLink className="link" to="/users" activeClassName="active">
          <i className="bi bi-person"></i>
        </NavLink>
      </ul>
      <div className="logo me-3">
        <img src={logo} height="26px" alt="" />
      </div>
    </nav>
  );
}
