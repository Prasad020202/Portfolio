import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import maa from "../assets/img/maa.png";
import calsi from "../assets/img/calsi.png";
import tpage from "../assets/img/tpage.png";
import todo from "../assets/img/todo.png";
import fb from "../assets/img/fb.png";
import ppage from "../assets/img/ppage.png";
import sforce from "../assets/img/sforce.png";
import bchain from "../assets/img/bchain.png";
import recognition from "../assets/img/recognition.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "NGO Landing Page",
      description: "HTML, CSS, JS, Bootstrap",
      imgUrl: maa,
    },
    {
      title: "Blockchain Based Auditing System",
      description: "Frontend ,Backend, Blockchain",
      imgUrl: bchain,
    },
    {
      title: "Simple To-Do Webpage ",
      description: "HTML, CSS, JS",
      imgUrl: todo,
    },
    
    
    
    {
      title: "Portfoio Page",
      description: "React , Tailwind CSS",
      imgUrl: ppage,
    },
    {
      title: "Custom Application usingSalesforce",
      description: "Salesforce",
      imgUrl: sforce,
    },
   
   
    {
      title: "Speech Emotion Recognition Using CNN",
      description: "Python",
      imgUrl: recognition,
    },
    {
      title: "Tribute Page",
      description: "HTML, CSS, JS",
      imgUrl: tpage,
    },
    {
      title: "Authentication System using Firebase and React",
      description: "React, Firebase",
      imgUrl: fb,
    },
    
    
    {
      title: "Simple Calculator",
      description: "HTML, CSS, JS",
      imgUrl: calsi,
    }
   
    
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p className="mb-5">In my portfolio, you will find a diverse range of projects centered around web development, with a focus on HTML, CSS, JavaScript, and specifically ReactJS. These projects showcase my proficiency in building dynamic and interactive web applications Additionally, I have worked on projects that leverage Firebase in some of my projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
