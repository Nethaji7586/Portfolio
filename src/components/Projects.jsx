import { FaGithub } from "react-icons/fa";
import projects from "../data/projects.json";

function Projects() {
  return (
    <div
      className="container mt-5 pt-5 hfont"
      id="projects"
      style={{ scrollMarginTop: "80px" }}
    >
      <h2 className="text-center mb-4 hfont">Projects</h2>

      <div className="row g-4">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6">
            <div className="card border-0 shadow rounded-4 h-100 overflow-hidden">
              {/* Top: Iframe or GitHub Icon */}
              <div
                className="position-relative d-flex align-items-center justify-content-center"
                style={{
                  height: "200px",
                  backgroundColor: "#f8f9fa"
                }}
              >
                {project.live ? (
                  <iframe
                    src={project.live}
                    title={project.title}
                    className="w-100"
                    style={{
                      height: "200px",
                      border: "none",
                      borderRadius: "12px 12px 0 0"
                    }}
                  ></iframe>
                ) : (
                  <div
                    className="d-flex align-items-center justify-content-center w-100"
                    style={{
                      height: "200px",
                      backgroundColor: "#f0f0f0"
                    }}
                  >
                    <FaGithub size={48} />
                  </div>
                )}
              </div>

              {/* Bottom: Card Details */}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{project.title}</h5>
                <p className="card-text text-muted">{project.description}</p>

                <div className="mb-3 d-flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="badge bg-light text-dark border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Buttons */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-success w-100 mt-auto"
                  >
                    🔗 Visit Live
                  </a>
                )}

                {!project.live && project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark w-100 mt-2"
                  >
                    <FaGithub className="me-2" /> Visit on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
