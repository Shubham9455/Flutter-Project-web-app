import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { addToFavourites } from "../firebase_";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase_";
const api_key = "pub_12307fb7955b1e1a3bcc5624d403e8b65582f";

const url = "https://newsdata.io/api/1/news?apikey=" + api_key + "&country=in";

const Data = () => {
  const [data, setData] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const getData = async () => {
    const response = await fetch(url);
    const mydata = await response.json();
    console.log("hello");
    console.log(mydata.results);
    setData(mydata.results);
    console.log(mydata.results);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{ margin: "10px 20%" }}>
      <h1>News</h1>
      {data ? (
        data.map((item, index) => {
          if (1)
            return (
              <div className="news" id={index}>
                <Card
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3,1fr)",
                    gridGap: "2rem",
                    gridAutoRows: "auto",
                    margin: "20px",
                  }}
                >
                  <Card.Img
                    style={{
                      borderRadius: "8px",
                      display: "block",
                      height: "15rem",
                    }}
                    variant="top"
                    src={
                      item.image_url ? item.image_url : "/icons8-news-480.png"
                    }
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{/* {item.description} */}</Card.Text>
                    <Button variant="primary" href={item.link}>
                      Visit Site
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => {
                        addToFavourites(
                          user.uid,
                          item.title,
                          item.image_url,
                          item.link
                        );
                      }}
                    >
                      Add To Favorites
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
        })
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default Data;
