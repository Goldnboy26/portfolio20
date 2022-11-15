import React from "react";
import passwordGImage from "../../assets/small/passwordG.png";
import TextEditorImage from "../../assets/small/TextEditor.png";
import weatherDashImage from "../../assets/small/Weather_Dash.png";
import noteTakerImage from "../../assets/small/NoteTaker.png";
import MVCTBlogImage from "../../assets/small/MVCTBlog.png";
import ApiMasterImage from "../../assets/small/ApiMaster.png";
import vinylImage from "../../assets/small/vinyl.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">A few of my Projects</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://vynil2.herokuapp.com/">
                {" "}
                <img
                  src={vinylImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="vinyl"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>vinyl</h4>
              <p>
              Project Vinyl that is a search engine that utilizes the itunes API to find songs. 
              The priority of this assignment was to add user creation that is connected to a Mysql database. 
              Node.js & Express.js were used for the backend API. 
              The dotenv & bcrypt npm packages were used for enviornment variables and password hashing to assist with login authentication. 
              Sequelize was used for model creation and database management.
              Express-Handlebars was the HTML templating engine used for the front end of this application.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Goldnboy26/API-MASTER">
                {" "}
                <img
                  src={ApiMasterImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="ApiMaster"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>API-Master</h4>
              <p>
              This is a set of API for a social network that uses a MongoDB database 
              so that the website can handle large amounts of unstructured data, 
              Express.js for routing, Mongoose ODM, and the moment package to format time stamps.
              {" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://mvc-master-heroku.herokuapp.com/">
                {" "}
                <img
                  src={MVCTBlogImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="MVCTBlog"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>MVC Tech Blog</h4>
              <p>
              A mysql database and CMS-style Blog built using Model View Controller MVC paradigm. 
              Built using MySQL2, Express, Sequelize, Bulma, Handlebars and dotenv.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://note-taker-app-main.herokuapp.com/notes">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note_Taker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taker</h4>
              <p>
                An application that provides the user the ability to add new
                notes, and to delete notes.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://goldnboy26.github.io/bookish-succotash/">
                {" "}
                <img
                  src={weatherDashImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather_Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
                A website that allows the user see the weather outlook for
                multiple cities. The user can enter a city and see a 5-Day
                Forecast. The user can see the temperature, humidity levels,
                wind speed as well as the UV index.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://text-main19.herokuapp.com/">
                {" "}
                <img
                  src={TextEditorImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="TextEditor"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Text Editor</h4>
              <p>
              The application is a web text editor where the user can create notes or code snippets with or without an internet connection and where the user can reliably retrieve them for later use.
              The integrated service worker and Cache API's ensure that the application will remain fully functional even without and active internet connection. 
              This application allows the user to access visited pages even if the application is offline.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://goldnboy26.github.io/Challenge3/">
                {" "}
                <img
                  src={passwordGImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="PasswordG"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Password Generator</h4>
              <p>
              This character generator allows people to create strong passwords
              in order to protect sensitive information for employes, social media, or 
              even for computer login. {" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
