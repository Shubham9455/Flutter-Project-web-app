import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase_";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [person, setPerson] = useState({ email: "", password: "" });
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.password && person.email) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      logInWithEmailAndPassword(person.email, person.password);
      setPerson({ password: "", email: "" });
    }
  };
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      toast("Login Successful");
      setTimeout(() => {
        navigate("/homepage");
      }, 2000);
    }
  }, [user, loading]);
  return (
    <>
      <ToastContainer />
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Nav className="me-auto">
            <h1 style={{ color: "white" }}>Login</h1>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Button
                variant="dark"
                style={{
                  // right: "5%",
                  margin: "10px 0px",
                  border: "3px solid white",
                  padding: "5px",
                }}
                onClick={() => navigate("/register")}
              >
                
                <span style={{ fontSize: "0.8rem", paddingLeft: "10px" }}>
                  Not Registered ?
                </span>
                <span style={{ fontSize: "1.2rem", paddingRight: "10px" }}>
                  {" "}
                  Register
                </span>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <img
        src="/assets/undraw_Login_re_4vu2.png"
        alt="Login"
        style={{ objectFit: "cover", position: "fixed", zIndex: "-1" }}
      />
      <div style={{ margin: "20%" }}>
        <Form style={{ margin: "20px 20%" }}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              //   id="email"
              controlid="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              //   id="password"
              controlid="password"
              name="password"
              value={person.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            style={{
              border: "10px double black",
              padding: "5px 30px",
            }}
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
