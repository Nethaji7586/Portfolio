import certificates from "../data/certificates.json";

function Certificates() {
  return (
    <div className="container mt-5 pt-5" id="certificates" style={{ scrollMarginTop: "80px" }}>
      <h2 className="text-center mb-4 hfont">Certifications</h2>

      <div className="row">
        {certificates.map((cert, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-3 mb-4">
            <div className="card border border-dark  text-dark h-100 shadow-sm border-1 rounded-4">
              <div className="card-body d-flex flex-column">
                <h6 className="card-title fw-bold">{cert.title}</h6>
                <p className="card-text text-muted mb-2">
                  {cert.platform} <span className="text-secondary">({cert.year})</span>
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary mt-auto btn-sm"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
