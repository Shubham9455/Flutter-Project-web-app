import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection(prop) {
  const favbutton = prop.favbutton;
  return (
    <div className={"hero-container"}>
      <video
        // src="/assets/Woman Reading Newspaper.mp4"
        src="/assets/production ID 3944853.mp4"
        autoPlay
        loop
        muted
      />
      <h1>Read Good</h1>
      <p>Scroll Down To Get {favbutton?"Your Favorites":"Top Headlines"}</p>
    </div>
  );
}

export default HeroSection;
