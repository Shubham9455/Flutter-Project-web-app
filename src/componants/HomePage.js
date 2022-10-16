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
import { FaTv } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeroSection from "./HeroSection";
import LiveTV from "./LiveTV";

const HomePage = () => {
  const [user, loading, error] = useAuthState(auth);
  const [favbutton, setFavbutton] = useState(false);
  const [livetvButton, setLivetvButton] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (!user) {
      toast("Loging Out");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user, loading,livetvButton]);

  return (
    <>
      <div>
        <ToastContainer></ToastContainer>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          style={{ position: "fixed", width: "100%", zIndex: "1" }}
        >
          <Container>
            <img
              style={{ height: "50px", margin: "auto 8px " }}
              src="/icons8-news-48.png"
            />
            <Navbar.Brand
              href="#home"
              onClick={() => {
                setFavbutton(false);
                setLivetvButton(false);
              }}
            >
              News App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link
                  onClick={() => {
                    setFavbutton(false);
                    setLivetvButton(true);
                  }}
                >
                  <FaTv style={{ margin: "auto 20px" }} />
                  Live Tv
                </Nav.Link>

                <Nav.Link
                  onClick={() => {
                    setLivetvButton(false);
                    setFavbutton(true);
                  }}
                >
                  Favourites
                </Nav.Link>
                <Button variant="primary" type="submit" onClick={logout}>
                  LogOut
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <div>
          <HeroSection favbutton={favbutton} livetvButton={livetvButton} />
          <div>
            {livetvButton && <LiveTV />}
            <Data
              favbutton={favbutton}
              livetvButton={livetvButton}
              uid={user ? user.uid : ""}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;


