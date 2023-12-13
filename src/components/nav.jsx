import logo from "../images/logo.svg";
export default function Nav() {
  return (
    <nav className="d-flex m-0 shadow align-items-center justify-content-between">
      <ul className="list-unstyled d-flex align-content-center m-0">
        <li>
          <i class="bi bi-house-fill"></i>
        </li>
        <li className="nav-act">
          <b class="bi bi-exclamation-triangle-fill position-relative">
            <span class="position-absolute text-center px-2 py-0 pb-1 top-0 ms-1 start-100 translate-middle badge rounded-circle bg-danger">
              <small className="fw-normal">2</small>
              <span class="visually-hidden">unread messages</span>
            </span>
          </b>
        </li>
        <li>
          <i class="bi bi-map"></i>
        </li>
        <li>
          <i class="bi bi-camera-video-fill"></i>
        </li>
        <li>
          <i class="bi bi-graph-up"></i>
        </li>
      </ul>
      <div className="logo me-3">
        <img src={logo} height="26px" alt="" srcset="" />
      </div>
    </nav>
  );
}
