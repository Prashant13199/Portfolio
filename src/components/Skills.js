import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import react from '../assets/img/react.png'
import reactnative from '../assets/img/react-native.png'
import mysql from '../assets/img/mysql.png'
import javascript from '../assets/img/javascript.png'
import firebase from '../assets/img/firebase.png'
import python from '../assets/img/pyhton.png'
import java from '../assets/img/java.png'
import mongodb from '../assets/img/mongodb.png'
import node from '../assets/img/node.png'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <br />
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={react} className="skill_img" alt="Image" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={node} alt="Image" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={java} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={react} className="skill_img" alt="Image" />
                  <h5>React Native</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={mysql} className="skill_img" alt="Image" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={firebase} alt="Image" />
                  <h5>Firebase</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
