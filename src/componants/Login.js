import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";





function Login() {
    const [person, setPerson] = useState({email: "",password:""});
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
        console.log(newPerson);
        logInWithEmailAndPassword(person.email, person.password);
        setPerson({ password: "", email: ""});
      }
    };
    useEffect(() => {
      if (loading) {
        // maybe trigger a loading screen
        return ;
      }
      if (user) {
        console.log("going");
        navigate("/homepage");
    };
    }, [user, loading]);
    console.log(user);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <h1 style={{ color: "white" }}>Login</h1>
            <Button
              variant="success"
              style={{ marginBlockEnd: "10px", marginLeft: "100%" }}
              onClick={() => navigate("/register")}
            >
              Register
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
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Login
          </Button>
          {/* <Button
            style={{ margin: "20px 20%" }}
            variant="primary"
            type="submit"
            onClick={signInWithGoogle}
          >
            Login with Google
          </Button> */}
        </Form>
      </div>
    </>
  );
}

export default Login;
