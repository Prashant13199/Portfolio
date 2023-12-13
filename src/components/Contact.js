import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>Get In Touch</h2>
              <form method="POST">
                <input type="hidden" name="form-name" value="contact" />
                <Row>
                  <Col size={12} sm={6} className="px-2">
                    <input type="text" placeholder="First Name" name="firstname" id="firstname" />
                  </Col>
                  <Col size={12} sm={6} className="px-2">
                    <input type="text" placeholder="Last Name" name="lastname" id="lastname" />
                  </Col>
                  <Col size={12} sm={6} className="px-2">
                    <input type="email" placeholder="Email Address" name="email" id="email" />
                  </Col>
                  <Col size={12} sm={6} className="px-2">
                    <input type="tel" placeholder="Phone No." name="phone" id="phone" />
                  </Col>
                  <Col size={12} className="px-2">
                    <textarea rows="6" placeholder="Message" name="message" id="message" ></textarea>
                    <button type="submit"><span>Submit</span></button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
