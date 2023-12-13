import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import beesocio from '../assets/img/beesocio.png'
import siyacine from '../assets/img/siyacine.png'
import siyagames from '../assets/img/siyagames.png'
import siyafoods from '../assets/img/siyafoods.png'
import siyarawg from '../assets/img/siyarawg.png'
import quotes4u from '../assets/img/quotes4u.png'
import colorSharp2 from "../assets/img/color-sharp2.png";
import book1 from '../assets/img/book1.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "BeeSocio",
      description: "Social media app",
      imgUrl: beesocio,
      url: 'https://beesocio.netlify.app'
    },
    {
      title: "SiyaCine",
      description: "Movie organizer app",
      imgUrl: siyacine,
      url: 'https://siyacine.netlify.app'
    },
    {
      title: "Quotes4u",
      description: "Random Quote generator",
      imgUrl: quotes4u,
      url: 'https://dailyquotes4u.netlify.app'
    },
    {
      title: "SiyaRAWG",
      description: "Games organizer app",
      imgUrl: siyarawg,
      url: 'https://siyarawg.netlify.app'
    },
    {
      title: "SiyaFoods",
      description: "Digital Restaurant Menu",
      imgUrl: siyafoods,
      url: 'https://siyafoods.netlify.app'
    },
    {
      title: "SiyaGames",
      description: "Gaming sponsorship app",
      imgUrl: siyagames,
      url: 'https://siyagames.netlify.app'
    },
  ];

  const books = [
    {
      title: "Sometime Someday",
      description: "A tale of mother and son's bond",
      imgUrl: book1,
      url: 'https://drive.google.com/file/d/1GBbmX2T3horwr9blxUeirSAfL9kv1XnR/view?usp=share_link'
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Web Apps</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Mobile Apps</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Books</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="section">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {
                        books.map((book, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...book}
                            />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
