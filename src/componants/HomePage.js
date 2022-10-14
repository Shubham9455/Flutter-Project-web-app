import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Mynavbar from "./Mynavbar";
import Card from "react-bootstrap/Card";
import Data from "./service/Data.js";


const HomePage = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
      if (loading) return;
      if (!user){
        console.log("Loging Out")
        navigate("/");
      };
    //   fetchUserName();
    }, [user, loading]);
  return (
    <div>
      <Mynavbar></Mynavbar>
      <div>
        <Data/>
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
