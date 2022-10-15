import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./firebase_";
import { query, collection, getDocs, where } from "firebase/firestore";
import Card from "react-bootstrap/Card";
import Data from "./service/Data.js";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";
import { Dots } from "loading-animations-react";

const HomePage = () => {
    const [user, loading, error] = useAuthState(auth);
    const [favbutton, setFavbutton] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
      if (loading) return;
      if (!user){
        console.log("Loging Out")
        navigate("/");
      };
    }, [user, loading]);


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <img
            style={{ height: "50px", margin: "auto 8px " }}
            src="/icons8-news-48.png"
          />
          <Navbar.Brand
            href="#home"
            onClick={() => {
              setFavbutton(false);
            }}
          >
            News App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              // <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link
                onClick={() => {
                  setFavbutton(true);
                }}
              >
                Favorites
              </Nav.Link>
              <Button variant="primary" type="submit" onClick={logout}>
                LogOut
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Data favbutton={favbutton} uid = {user?user.uid:""} />
      </div>
    </div>
  );
};

export default HomePage;


function ImageAndTextExample() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="holder.js/100px180" />
      </Card>
    </>
  );
}
