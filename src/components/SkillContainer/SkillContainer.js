import React from "react";
import "./SkillContainer.css";
import skillImg from "../../assets/skill.jpg";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Element } from "react-scroll";

const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
      <div className="skillContainer__image">
        <img src={skillImg} alt="" />
      </div>
      <div className="skillContainer__text">
        <h2>SKILLS<span>ET</span></h2>
        <div className="skillContainer__skillSet">
          <h5>Java</h5>
          <div className="skillContainer__slider skillContainer__slider1">
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>Spring Boot</h5>
          <div className="skillContainer__slider skillContainer__slider2">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>Mongo DB & My sql</h5>
          <div className="skillContainer__slider skillContainer__slider3">
            <LinearProgress variant="determinate" value={75} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>Docker</h5>
          <div className="skillContainer__slider skillContainer__slider4">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>Jasper Report</h5>
          <div className="skillContainer__slider skillContainer__slider5">
            <LinearProgress variant="determinate" value={65} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>Jenkins</h5>
          <div className="skillContainer__slider skillContainer__slider6">
            <LinearProgress variant="determinate" value={65} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>Kafka</h5>
          <div className="skillContainer__slider skillContainer__slider6">
            <LinearProgress variant="determinate" value={65} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer;
