import './AboutUs.css';
import { Github, Linkedin, Twitter } from "lucide-react"

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle">
          Conoce al equipo que realizo esta app
        </p>
      </div>

      <div className="team-grid">
        {/* Primer integrante */}
        <div className="team-card">
          <img src="src\assets\img_about\Juan.png" alt="Juan Trivino" className="team-image" />
          <div className="team-content">
            <h2 className="team-name">Juan Martin Triviño</h2>
            <p className="team-role">Sexto Semestre Ing Sistemas</p>
            <p className="team-description">
            Juan es un apasionado por la tecnología y el desarrollo de software. 
            Siempre busca aprender nuevas herramientas y mejorar sus habilidades.
            </p>
          </div>
          <div className="team-icons">
            <a href="https://www.linkedin.com/in/juan-mart%C3%ADn-trivi%C3%B1o-316a5028b/"><Linkedin className="h-4 w-4" /></a>
            <a href="https://github.com/jmtrivinop"><Github className="h-4 w-4" /></a>
          </div>
        </div>

        {/* Segundo integrante */}
        <div className="team-card">
          <img src="src\assets\img_about\Andres.png" alt="Andres Lasso" className="team-image" />
          <div className="team-content">
            <h2 className="team-name">Andres Felipe Lasso</h2>
            <p className="team-role">Sexto Semestre Ing Sistemas</p>
            <p className="team-description">
            Andres es un entusiasta de la programación y los sistemas inteligentes. 
            Le encanta trabajar en equipo y afrontar nuevos retos tecnológicos.
            </p>
          </div>
          <div className="team-icons">
          
            <a href="http://www.linkedin.com/in/andres-lasso-604759244"><Linkedin className="h-4 w-4" /></a>
            <a href="https://github.com/aflasso"><Github className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
