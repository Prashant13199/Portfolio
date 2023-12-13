import colorSharp from "../assets/img/color-sharp.png"
import react from '../assets/img/react.png'
import mysql from '../assets/img/mysql.png'
import javascript from '../assets/img/javascript.png'
import firebase from '../assets/img/firebase.png'
import python from '../assets/img/pyhton.png'
import java from '../assets/img/java.png'
import mongodb from '../assets/img/mongodb.png'
import node from '../assets/img/node.png'
import nextjs from '../assets/img/nextjs.png'

export const Skills = () => {

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <br />
              <div className='skill_list'>
                <div className="item">
                  <img src={react} className="skill_img" alt="Image" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={javascript} className="skill_img" alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={node} className="skill_img" alt="Image" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={java} className="skill_img" alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={react} className="skill_img" alt="Image" />
                  <h5>React Native</h5>
                </div>
                <div className="item">
                  <img src={python} className="skill_img" alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={mysql} className="skill_img" alt="Image" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={mongodb} className="skill_img" alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={firebase} className="skill_img" alt="Image" />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src={nextjs} className="skill_img" alt="Image" />
                  <h5>Next.js</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
