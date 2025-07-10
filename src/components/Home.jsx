import Owner from '../assets/owner.png'
import {
  SiC,
  SiJavascript,
  SiSass,
  SiDjango,
  SiFlask,
  SiBootstrap,
  SiTailwindcss,
  SiMongodb,
  SiDocker,
  SiGithub,
  SiAdobe,
  SiCanva,
  SiFigma
} from 'react-icons/si';

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaAws,
  FaJava,
  FaPhp,
  FaGitAlt
} from 'react-icons/fa';

function Home() {
  return (
<div
  className="container mt-5 pt-5"
  id="home"
  style={{ scrollMarginTop: "80px" }} // offset for fixed navbar
>
      <div className="row">
        <div className="col-md-4 text-center">
        <img
  src={Owner}
  alt="Nethaji V - Profile"
  className="img-fluid rounded-circle mx-auto d-block"
  style={{
    height: "300px",
    width: "300px",
    objectFit: "cover",
    border: "2px solid #000",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
  }}
/>



        </div>

        <div className="col-md-8 d-flex align-items-center">
          <div>

            <p>
              I’m <strong className='hfont'>Nethaji V</strong> from Cuddalore, Tamil Nadu — a passionate <strong className='hfont'>B.Tech - Artificial Intelligence & Data Science</strong> (2023–2027) at Shree Venkateshwara Hi-Tech Engineering College (Autonomous). I specialize in full-stack web development, UI/UX design, and data analytics.
            </p>
            <p>
              I’m an adaptive, creative thinker with strong problem-solving and collaboration skills, fluent in English and Tamil. I’m actively seeking to contribute to cutting-edge projects in a forward-thinking MNC while constantly upgrading my technical and professional abilities.
            </p>
            <p>
              I hold certifications in Blockchain Development and Basic Computer Studies, and have participated in a National Level Hackathon, presenting innovative AI solutions to real-world problems.
            </p>

            

            <h4 className='hfont'>Technologies i known</h4>
            <div className="d-flex flex-wrap gap-5 mt-4 justify-content-start">
  {/* High Demand Technologies */}
  <FaReact size={30} color="#61DBFB" title="React.js" />
  <FaNodeJs size={30} color="#3C873A" title="Node.js" />
  <SiJavascript size={30} color="#f7df1e" title="JavaScript" />
  <FaPython size={30} color="#3776AB" title="Python" />
  <SiTailwindcss size={30} color="#06B6D4" title="Tailwind CSS" />
  <SiMongodb size={30} color="#47A248" title="MongoDB" />
  <FaAws size={30} color="#FF9900" title="AWS" />
  <FaGitAlt size={30} color="#f34f29" title="Git" />
  <SiGithub size={30} color="#181717" title="GitHub" />
  <SiDjango size={30} color="#092e20" title="Django" />

  {/* Medium Demand */}
  <FaHtml5 size={30} color="#e34c26" title="HTML5" />
  <FaCss3Alt size={30} color="#1572B6" title="CSS3" />
  <SiBootstrap size={30} color="#7952B3" title="Bootstrap" />
  <SiFlask size={30} color="#000000" title="Flask" />
  <FaJava size={30} color="#007396" title="Java" />
  <FaPhp size={30} color="#8892BF" title="PHP" />

  {/* Niche/Creative/Support Tools */}
  <SiSass size={30} color="#CD6799" title="Sass" />
  <SiAdobe size={30} color="#FF0000" title="Adobe" />
  <SiFigma size={30} color="#F24E1E" title="Figma" />
  <SiCanva size={30} color="#00C4CC" title="Canva" />
  <SiDocker size={30} color="#0db7ed" title="Docker" />
  <SiC size={30} color="#555" title="C" />
</div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
