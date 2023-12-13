import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from '../assets/img/github.svg'
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <br /><br /><br />
        <Row className="align-items-center">
          <Col size={12} sm={6}></Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/prashantkumar94/" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/Prashant13199" target="_blank"><img src={github} alt="" /></a>
              <a href="https://www.instagram.com/prashant.kumar.13199/" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
