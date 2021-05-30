import React from 'react';
import { Row, Col, Nav, Button } from 'react-bootstrap';
import '../Footer/MyFooter.css';

import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { ImYoutube2 } from 'react-icons/im';
import { GiHummingbird } from 'react-icons/gi';

class MyFooter extends React.Component {
  render() {
    return (
      <Row className="mt-5 movieRow" style={{ background: 'black' }}>
        <Col>
          <Row className="justify-content-center">
            <FaFacebook className="icons" />
            <FiInstagram className="icons" />
            <ImYoutube2 className="icons" />
            <GiHummingbird className="icons" />
          </Row>
          <Nav.Link className="footer-links text-muted">
            Audio and Subtitles
          </Nav.Link>
          <Nav.Link className="footer-links text-muted">Media Center</Nav.Link>
          <Nav.Link className="footer-links text-muted">Privacy</Nav.Link>
          <Nav.Link className="footer-links text-muted">Contact Us</Nav.Link>
          <Button variant="outline-light" className="mb-3 mt-2 text-muted">
            Service Code
          </Button>
          <p className="footer-links text-muted">© 1997-2021 Netflix Inc</p>
        </Col>

        <Col>
          <p></p>
          <Nav.Link className="footer-links text-muted">
            Audio Description
          </Nav.Link>
          <Nav.Link className="footer-links text-muted">
            Investor Relations
          </Nav.Link>
          <Nav.Link className="footer-links text-muted">Legal Notices</Nav.Link>
        </Col>
        <Col>
          <p></p>
          <Nav.Link className="footer-links text-muted">Help Center</Nav.Link>
          <Nav.Link className="footer-links text-muted">Jobs</Nav.Link>
          <Nav.Link className="footer-links text-muted">
            Cookie Preference
          </Nav.Link>
        </Col>
        <Col>
          <p></p>
          <Nav.Link className="footer-links text-muted">Gift Cards</Nav.Link>
          <Nav.Link className="footer-links text-muted">Terms Of Use</Nav.Link>
          <Nav.Link className="footer-links text-muted">
            Corporate information
          </Nav.Link>
        </Col>
      </Row>
    );
  }
}
export default MyFooter;
