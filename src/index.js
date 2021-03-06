
//This file renders the zoom effect for the projects section
import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import {motion} from 'framer-motion'

const styles = {
  outline: "none",
  border: "none",
  background:"none",
  cursor: "pointer"

};

class About_Me_Title_Fade extends React.Component
{
  render()
  {
    return(
      <div>
        <Fade top>
          <h1 id = "subtitle"> About Me </h1>
        </Fade>
      </div>

    );
  }
}

class About_Me_Content_Fade extends React.Component
{
  render()
  {

    return(
      <div>
        <Fade right>
          <div class = "experience-flex-box">

            <div class = "experience-resume-item">
                <div class ="experience-flex-left-item">
                  <div>
                  <img src ="images/self.jpg" id = "self_photo"/>
                  </div>
                </div>

                <div class = "experience-flex-right-item">
                  <body id = "paragraph" > Hi there! I'm a 3rd year Computer Science major at UCI that is based in Orange County.
                    My hobbies include reading, exercising, listening to music, and gaming.
                    I love constantly learning new things in computer science and furthering my skills in any way possible.

                  </body>
                  <br/>
                    <motion.button
                      style={styles}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                    >
                    <a href = "download/resume.pdf" download = "bchiangResume.pdf" id = "paragraph"> <div> <img src = "images/document.png" id = "contact_icons"/></div>  Resume </a>
                    </motion.button>
                </div>

              </div>
          </div>
        </Fade>
      </div>
    );

  }


}

class Experience_Title_Fade extends React.Component
{
  render()
  {
    return(
      <div>
        <Fade top>
          <h1 id = "subtitle"> Experience </h1>
        </Fade>
      </div>

    );


  }
}

class Experience_Content_Fade extends React.Component
{

  render()
  {
      return(
        <Fade right>

          <div class = "experience-flex-box">

            <div class = "experience-resume-item">

              <div class ="experience-flex-left-item">
                <h1 id = "experience-title">
                  Siemens PLM

                </h1>
                <br/>
                <body id = "paragraph" >
                  June 2019 - Present
                </body>
              </div>

              <div class = "experience-flex-right-item">
                <body id = "paragraph" >
                Currently, I am working as a Strategic Student Program Intern where I actively use
                C++ to develop an "Coatings" application in the company's NX software. Here, we actively
                utilize JIRA, Visual Studio, and DOUG, their source control tool, to maximize our
                efficiency.
                </body>
              </div>
            </div>

            <div class = "experience-resume-item">
              <div class ="experience-flex-left-item">

                <h1 id = "experience-title">
                VIZIO

                </h1>
                <br/>
                <body id = "paragraph" >
                June 2017 - August 2017
                </body>

              </div>
              <div class = "experience-flex-right-item">

                <body id = "paragraph" >
                  My second summer internship at VIZIO, I was in charge of designing intranet sites for
                  the Legal and I.T. teams using Sharepoint. I also developed a jQuery Page linked to Google
                  Analytics that would track the number of times a file had been downloaded.
                </body>

              </div>
            </div>

            <div class = "experience-resume-item">
              <div class ="experience-flex-left-item">

                <h1 id = "experience-title">
                  VIZIO

                </h1>
                <br/>
                <body id = "paragraph" >
                  June 2016 - August 2016
                </body>


              </div>
              <div class = "experience-flex-right-item">
                <body id = "paragraph" >
                  The first summer internship at VIZIO, I gathered data for each of the VIZIO products
                  into a .csv file where they would be input into a SAP database. Afterwards, I designed
                  basic webpages for each product using HTML and CSS.
                </body>
              </div>

            </div>


          </div>





      </Fade>


    );
  }
}

class Projects_Title_Fade extends React.Component
{
  render()
  {
    return (
      <div>
        <Fade top>
          <h1 id = "subtitle"> Projects </h1>
        </Fade>
      </div>
    );
  }

}

class Projects_Content_Fade extends React.Component
{
  render()
  {
    return(
      <div class = "return_value">

        <div class = "content">
         <Fade right>
             <div  id = "projects">

                 <div class = "experience-resume-item">
                   <div class ="experience-flex-left-item">


                     <motion.button
                      style = {styles}
                       whileHover={{ scale: 1.1 }}
                       whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                     >
                       <a href = "https://planeater.appspot.com/" target="_blank" >
                          <div>
                         <img src = "images/planeater.png" alt = "Planeater" id = "project_items"></img>
                         </div>
                       </a>
                    </motion.button>
                   </div>
                   <div class = "experience-flex-right-item">
                     <h1 id = "experience-title">
                       Planeater
                       <br></br>
                     </h1>
                     <body id = "paragraph" >
                       Planeater was a project that me and my friend undertook in our sophomore year of college.
                       It was created with the purpose of solving all of our pesky four year plan problems. So after hours of free time utilized throughout the school year
                       we created a working product that is linked to UCI's list of classes, allows logins through Google and lets the user save and load their 4 year plan.
                     </body>
                   </div>
                 </div>
                 <div class = "experience-resume-item">
                   <div class ="experience-flex-left-item">

                     <div>
                       <motion.button
                         style={styles}
                         whileHover={{ scale: 1.1 }}
                         whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                       >
                          <a href = "https://github.com/brianchiang2012/personal_website"   target = "_blank">


                              <  img src = "images/personal_website_project.png" alt = "Personal Website" id = "project_items"/>

                          </a>
                      </motion.button>
                      </div>
                   </div>
                   <div class = "experience-flex-right-item">
                     <h1 id = "experience-title">
                       Personal Website
                       <br></br>
                     </h1>

                     <body id = "paragraph" >
                       This website is my intro into React, JavaScript, and front end development. It is going to be constantly updated, so please
                       keep an eye out!
                     </body>
                   </div>
                 </div>
             </div>
           </Fade>
         </div>

        </div>
    );
  }
}

class Navbar_Content extends React.Component
{
  render(){
    return(
      <div class = "container">


            <a href="mailto:brianchiang2012@gmail.com" target= "_blank">

                <motion.button
                  style={styles}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                >
                  <img src="images/email.png" alt="Gmail" id = "contact_icons"/>
                </motion.button>
            </a>




            <a href="https://www.linkedin.com/in/brian-chiang-596347145/" target = "_blank">


            <motion.button
              style={styles}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            >
              <img src="images/linkedin.png" alt="LinkedIn" id = "contact_icons"/>

              </motion.button>
            </a>




            <a href="https://github.com/brianchiang2012" target = "_blank">


            <motion.button
              style={styles}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            >
              <img src="images/github.png" alt="GitHub" id = "contact_icons"/>

              </motion.button>
            </a>

      </div>
    );
}
}
ReactDOM.render(React.createElement(Navbar_Content), document.getElementById('navbar-content'));
ReactDOM.render(React.createElement(About_Me_Title_Fade), document.getElementById('about_me_title'));
ReactDOM.render(React.createElement(About_Me_Title_Fade), document.getElementById('about_me_title'));
ReactDOM.render(React.createElement(About_Me_Content_Fade), document.getElementById('about_me_content'));
ReactDOM.render(React.createElement(Experience_Title_Fade), document.getElementById('experience_title'));
ReactDOM.render(React.createElement(Experience_Content_Fade), document.getElementById('experience_content'));
ReactDOM.render(React.createElement(Projects_Title_Fade), document.getElementById('projects_title'));
ReactDOM.render(React.createElement(Projects_Content_Fade), document.getElementById('projects_content'));
