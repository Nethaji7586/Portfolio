import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="container text-center mt-5 mb-5" id="contact">
      <h2 className="mb-4 hfont">Contact</h2>

      <div className="mt-4">
        <p className="mb-1 hfont"><strong>Mobile:</strong> +91 90252 60868</p>
        <p className="mb-1 hfont"><strong>Email:</strong> nethajisiva1503@gmail.com</p>
      </div>

      <div className="row justify-content-center mb-4 mt-5">
        {/* GitHub */}
        <div className="col-6 col-sm-3 mb-4 d-flex flex-column align-items-center">
          <FaGithub className="fs-1 mb-2 text-dark" />
          <a
            href="https://github.com/Nethaji7586"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark btn-sm"
          >
            Follow on GitHub
          </a>
        </div>

        {/* LinkedIn */}
        <div className="col-6 col-sm-3 mb-4 d-flex flex-column align-items-center">
          <FaLinkedin className="fs-1 mb-2 text-primary" />
          <a
            href="https://www.linkedin.com/in/nethaji7586/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary btn-sm"
          >
            Connect on LinkedIn
          </a>
        </div>

        {/* WhatsApp */}
        <div className="col-6 col-sm-3 mb-4 d-flex flex-column align-items-center">
          <FaWhatsapp className="fs-1 mb-2 text-success" />
          <a
            href="https://wa.me/919025260868"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-success btn-sm"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Instagram */}
        <div className="col-6 col-sm-3 mb-4 d-flex flex-column align-items-center">
          <FaInstagram className="fs-1 mb-2 text-danger" />
          <a
            href="https://instagram.com/_sullan.__"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-danger btn-sm"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
