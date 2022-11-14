import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hello, my name is Eduardo Monje. I am currently 28 living in Seattle WA.
            I am a certified personal trainer with 8 years of experience helping people,
            and working leading a team of trainers to lead them to success in their bussines.
            I have been working out for 10 years and have done a few Body Building shows.
            I am currently certified with the University of Wa with the Coding Bootcamp, and 
            have worked with team mates in group projects as well as personal challenges. I been 
            living in seattle for about 11 years I am originally from Honduras 
            and currently naturalized American, I am currently fluent in spanish and english. 
            I love to exercise, I am passionate about setting goals and aspirations 
            in order to continue pushing myself. Finally, one of the things that sets me apart from 
            most people is my discipline and my desire to continue learning in order to achive new 
            horizons in my life.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
