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

function Technology() {
  const technologies = [
    // Programming Languages
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "C", icon: SiC, color: "#555555" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Java", icon: FaJava, color: "#007396" },

    // Frontend
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "React.js", icon: FaReact, color: "#61DAFB" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "Sass", icon: SiSass, color: "#CC6699" },

    // Backend
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "Flask", icon: SiFlask, color: "#000000" },
    { name: "Django", icon: SiDjango, color: "#092E20" },

    // Databases
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "SQLite", icon: SiSqlite, color: "#003B57" },

    // Cloud & DevOps
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "Nginx", icon: SiNginx, color: "#009639" },

    // Tools
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  ];

  return (
    <>
      <center>
        <h4 className="hfont mt-3">Technologies Known</h4>
      </center>

      <div className="tech-grid mt-5">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <div key={index} className="text-center tech-item">
              <Icon size={45} color={tech.color} />
              <p className="mt-2 mb-0 fw-semibold">{tech.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Technology;