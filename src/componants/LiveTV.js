import React from 'react'
import { FaTv } from "react-icons/fa";

const LiveTV = () => {
  return (
    <div style={{ maxWidth: "100%", zIndex: "1" }}>
      <h1
        style={{
          border: "8px solid green",
          borderRadius: "40px",
          margin: "10px auto",
          textAlign: "center",
          fontSize: "150%",
          position: "sticky",
          top: "70px",
          zIndex: "1",
          padding: "4px 8px",
          backgroundColor: "red",
          maxWidth: "30%",
          color: "white",
        }}
      >
        <FaTv style={{margin:"auto 20px"  } }/>
        Live TV
      </h1>
      <div
        class="ratio ratio-16x9"
        style={{
          maxHeight: "60%",
          maxWidth: "70%",
          margin: "auto",
          marginBottom: "200px",
        }}
      >
        <iframe
          width="960"
          height="540"
          src="https://www.youtube.com/embed/Cy_6-_XUW-c"
          title="AajTak LIVE: CBI Summons Manish Sisodia | Kashmiri Pandit | Murder in Delhi | LIVE News in Hindi"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div
        class="ratio ratio-16x9"
        style={{ maxWidth: "70%", margin: "auto", marginBottom: "200px" }}
      >
        <iframe
          width="960"
          height="540"
          src="https://www.youtube.com/embed/nyd-xznCpJc"
          title="ABP NEWS LIVE: 24*7 | Kashmiri Pandit | Gujarat Himachal Election Date | Live Breaking News"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div
        class="ratio ratio-16x9"
        style={{ maxWidth: "70%", margin: "auto", marginBottom: "200px" }}
      >
        <iframe
          width="960"
          height="540"
          src="https://www.youtube.com/embed/Xmm3Kr5P1Uw"
          title="India TV LIVE: Manish Sisodia | Amit Shah MP Visit | JP Nadda Delhi Rally | Delhi Liquor Case | AAP"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div
        class="ratio ratio-16x9"
        style={{ maxWidth: "70%", margin: "auto", marginBottom: "200px" }}
      >
        <iframe
          width="960"
          height="540"
          src="https://www.youtube.com/embed/qfrocHBy6RQ"
          title="Republic Bharat LIVE: CBI Summons Manish Sisodia | Nitesh Murder | Delhi News | Kashmiri Pandit"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default LiveTV
