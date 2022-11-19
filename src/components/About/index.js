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
          Hello, my name is Eduardo Monje. I am currently 28 and living in Seattle WA.
            I am a certified personal trainer with 8 years of experience helping people,
            and working leading a team of trainers to lead them to succeed in their businesses.
            I have been working out for 10 years and have done a few Body Building shows.
            I am currently certified with the University of Wa with the Coding Bootcamp and 
            have worked with teammates in group projects as well as personal challenges. I have been 
            living in Seattle for about 11 years I am originally from Honduras 
            and am currently a naturalized American, I am currently fluent in Spanish and English. 
            I love to exercise, I am passionate about setting goals and aspirations 
            to continue pushing myself. Finally, one of the things that set me apart from 
            most people is my discipline and my desire to continue learning to achieve new 
            horizons in my life.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
