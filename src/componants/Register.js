import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase_";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Register = () => {
  const [person, setPerson] = useState({ email: "", password: "" });
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user){ 
      toast("Successfully Registered");
      setTimeout(() => {
        navigate("/homepage");
      }, 1000);
    }
  }, [user, loading]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.password && person.email) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      registerWithEmailAndPassword(person.email, person.password);
      setPerson({ password: "", email: "" });
    }
  };
  return (
    <>
      <ToastContainer />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <h1 style={{ color: "white" }}>Register</h1>
            <Button
              variant="success"
              style={{ marginBlockEnd: "10px", marginLeft: "100%" }}
              onClick={() => navigate("/")}
            >
              Login
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Form style={{ margin: "20px 20%" }}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
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
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Register
          </Button>

          {/* <Button
            variant="primary"
            type="submit"
            onClick={signInWithGoogle}
            style={{ margin: "20px 20%" }}
          >
            Register with Google
          </Button> */}
        </Form>
      </div>
    </>
  );
};

export default Register;
