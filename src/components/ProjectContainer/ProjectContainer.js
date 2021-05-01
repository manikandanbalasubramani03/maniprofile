import React, { useState } from "react";
import Project from "../Project/Project";
import "./ProjectContainer.css";
import { Element } from "react-scroll";
import img2 from "../../assets/project2.png";
import img16 from "../../assets/nubelson-fernandes-seaYsE8lL4o-unsplash.jpg";

const ProjectContainer = () => {
  const [choosen, setChoosen] = useState(true);

  const client_projects = [
    {
      img: img16,
      title: "PROTON",
      desc:
        "Proton is productivity tracking helps managers or business owners determine how they can improve their overall business productivity.Tracking employee productivity also helps them identify which employees are the most productive, and which employees need more support to increase their output.",
      
    },
    {
      img: img2,
      title: "ON DEMAND SERVICE",
      desc:
        "On-demand self-service means that a consumer can request and receive access to a service offering, without an administrator or some sort of support staff having to fulfill the request manually. The request processes and fulfillment processes are all automated..",
     
    },

  ];

  return (
    <Element className="projectContainer" id="projects">
      <h1>PROJEC<span>TS</span></h1>
      <p>
        Here are some projects which are changing many people lives and some
        clone works of large tech tack companies.
      </p>
      

        
        <div className="projectContainer__projects">
        {client_projects.map((project, index) => (
          <Project
            key={index}
            img={project.img}
            desc={project.desc}
            title={project.title}
            link={project.link}
          />
        ))}
      </div>
    </Element>
  );
};

export default ProjectContainer;
