import {
  SiC,
  SiJavascript,
  SiSass,
  SiDjango,
  SiFlask,
  SiBootstrap,
  SiMongodb,
  SiDocker,
  SiGithub,
  SiExpress,
  SiMysql,
  SiSqlite,
  SiKubernetes,
  SiNginx,
  SiPostman,
  SiAngular,
} from "react-icons/si";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaAws,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

function Home() {
  return (
    <div
      className="container mt-5 pt-5"
      id="home"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="row">
        {/* Profile Image */}
        <div className="col-md-4 text-center">
          <img
            src="/owner.jpg"
            alt="Nethaji V - Profile"
            className="img-fluid rounded-circle mx-auto d-block"
            style={{
              height: "300px",
              width: "300px",
              objectFit: "cover",
              border: "2px solid #000",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>

        {/* About */}
        <div className="col-md-8 d-flex align-items-center">
          <div>
            <p>
              I'm <strong className="hfont">Nethaji V</strong> from Cuddalore,
              Tamil Nadu — a passionate{" "}
              <strong className="hfont">
                B.Tech - Artificial Intelligence & Data Science
              </strong>{" "}
              (2023–2027) at Shree Venkateshwara Hi-Tech Engineering College
              (Autonomous). I specialize in MERN Stack development and enjoy
              building scalable web applications.
            </p>

            <p>
              I'm actively seeking opportunities to contribute to innovative
              projects in a forward-thinking organization while continuously
              improving my technical and professional skills.
            </p>

            <p>
  Currently looking for opportunities to start my professional career and contribute my skills to real-world projects.
</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;