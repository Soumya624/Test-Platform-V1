import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  NavDropdown,
  NavbarBrand,
  Carousel,
  CarouselItem,
  CarouselControl,
  Card,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import Img_Registration from "./Images/Registration.png";
function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setShow1(false);
  };
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => {
    setShow1(true);
    setShow(false);
  };
  return (
    <div
      style={{
        padding: "0% 10%",
        fontSize: "90%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          boxShadow: "0 8px 6px -6px black",
          border: "none",
          padding: "2%",
          height: "50rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Col md="6">
            <img
              src={Img_Registration}
              alt="Registration"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
          <Col md="6">
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Control
                  type="email"
                  placeholder="Enter Your Name"
                  style={{ borderRadius: "20px" }}
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
              </Form.Group>
              <br />
              <Row>
                <Col md="6">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email ID"
                      style={{ borderRadius: "20px" }}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group controlId="formBasicNumber">
                    <Form.Control
                      type="email"
                      placeholder="Enter Phone Number"
                      style={{ borderRadius: "20px" }}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  style={{ borderRadius: "20px" }}
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Re-Enter Password"
                  style={{ borderRadius: "20px" }}
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Check if You Are a Student"
                />
              </Form.Group>
              <br />
              <center>
                <Button
                  variant="outline-primary"
                  style={{ margin: "1%", borderRadius: "20px", width: "30%" }}
                  onClick={handleShow}
                >
                  Submit
                </Button>
                <Button
                  variant="outline-primary"
                  style={{ margin: "1%", borderRadius: "20px", width: "30%" }}
                >
                  Cancel
                </Button>
                <p>
                  Already Have an Account?
                  <a href="/login" style={{ textDecoration: "none" }}>
                    {" "}
                    Login
                  </a>
                </p>
              </center>
            </Form>
          </Col>
        </Row>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <center>
            {" "}
            <p>
              <b>OTP Verification</b>
            </p>
          </center>

          <br />
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter the OTP"
              style={{ borderRadius: "20px" }}
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </Form.Group>
          <br />
          <center>
            <Button
              variant="outline-primary"
              style={{ margin: "1%", borderRadius: "20px", width: "30%" }}
              href="/login"
            >
              Submit
            </Button>
            <Button
              variant="outline-primary"
              style={{ margin: "1%", borderRadius: "20px", width: "30%" }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </center>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Login;
