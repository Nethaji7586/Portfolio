import Image from '../assets/icon.png'
import Info from '../assets/resume.pdf'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand hfont" href="#">
            <img
              src={Image}
              alt="Logo"
              style={{ height: '30px' }}
              className="d-inline-block align-text-top me-4"
            />
            |Nethaji Venkatesan
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item me-5">
                <a className="nav-link ired" href="#home">Home</a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link ired" href="#certificates">Certificate</a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link ired" href="#projects">Projects</a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link ired" href="#contact">Contact</a>
              </li>
              <li className="nav-item me-5">
                <a href={Info} download className="btn btn-primary">
                  <i className="bi bi-download me-2"></i> Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
