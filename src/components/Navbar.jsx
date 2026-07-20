import Image from '../assets/icon.png';

function Navbar() {
  const resumeLink =
    "https://drive.google.com/file/d/1N4yW_Fc4Jio7033jT7QZXEAPAh3yjKxM/view?usp=sharing";

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand hfont" href="#">
            <img
              src={Image}
              alt="Logo"
              style={{ height: '30px' }}
              className="d-inline-block align-text-top me-2"
            />
            <span className="text-danger">|</span> Nethaji Venkatesan
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
                <a className="nav-link ired" href="#projects">Projects</a>
              </li>

              <li className="nav-item me-5">
                <a className="nav-link ired" href="#certificates">Certificate</a>
              </li>

              <li className="nav-item me-5">
                <a className="nav-link ired" href="#contact">Contact</a>
              </li>

              <li className="nav-item me-5">
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Resume <i className="bi bi-download ms-2"></i>
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
