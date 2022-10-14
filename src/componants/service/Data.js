import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
const api_key = "b442ebb0e33946faa86665f2a136d83a";

const url = "http://newsapi.org/v2/top-headlines?country=in&apiKey=" + api_key;

export const data = () => {
  return <div>data</div>;
};

const Data = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.articles);
    console.log(data.articles);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{margin:"10px 20%"}}>
      <h1>News</h1>
      {data?data.map((item,index) => {
        if(item.urlToImage)
        return (
          <div className="news" id = {index}>
            <Card
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gridGap: "2rem",
                gridAutoRows: "auto",
                margin: "20px"
                
              }}
            >
              <Card.Img style={{borderRadius:"8px" ,display:"block"}} variant="top" src={item.urlToImage} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <Button variant="primary" href={item.url}>Visit Site</Button>
              </Card.Body>
            </Card>
          </div>
        );
      }):<h1>Loading</h1>}
    </div>
  );
};

export default Data;

// <Card
//   style={{
//     display: "grid",
//     gridTemplateColumns: "repeat(3,1fr)",
//     gridGap: "2rem",
//     gridAutoRows: "auto",
//     margin: "20px",
//   }}
// >
//   <Card.Img variant="top" src={item.urlToImage} />
//   <Card.Body>
//     <Card.Text>
//       <h3>{item.title}</h3>
//     </Card.Text>
//   </Card.Body>
// </Card>;
