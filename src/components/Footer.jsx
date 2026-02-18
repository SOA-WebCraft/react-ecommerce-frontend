import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={3} className="mb-4 mb-md-0">
            <h5>Jumia Clone</h5>
            <p className="text-muted">
              Your one-stop shop for all your shopping needs.
            </p>
          </Col>
          <Col md={3} className="mb-4 mb-md-0">
            <h5>Shop</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="text-muted">All Products</Link>
              </li>
              <li>
                <Link className="text-muted">Featured Items</Link>
              </li>
              <li>
                <Link className="text-muted">New Arrivals</Link>
              </li>
              <li>
                <Link className="text-muted">Special Offers</Link>
              </li>
            </ul>
          </Col>
          <Col md={3} className="mb-4 mb-md-0">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="text-muted">Contact Us</Link>
              </li>
              <li>
                <Link className="text-muted">FAQs</Link>
              </li>
              <li>
                <Link className="text-muted">Shipping Policy</Link>
              </li>
              <li>
                <Link className="text-muted">Returns & Refunds</Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Connect With Us</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="text-muted">Facebook</Link>
              </li>
              <li>
                <Link className="text-muted">Twitter</Link>
              </li>
              <li>
                <Link className="text-muted">Instagram</Link>
              </li>
              <li>
                <Link className="text-muted">LinkedIn</Link>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} Jumia Clone. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
