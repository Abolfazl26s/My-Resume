import React, { Component } from "react";
import data from "../data.json";
import Container from "react-bootstrap/Container";
import Fullpage from "../FullPage/FullPage";
import SkillCard from "./SkillCard/SkillCard";
import "./Skills.css";

class Skills extends Component {
  state = {};
  render() {
    return (
      <Container className="p-0" fluid={true}>
        <Fullpage className="skill p-0">
          <div className="our-webcoderskull padding-lg">
            <Container fluid={true}>
              <div
                className="row heading heading-icon wow animate__bounceInDown"
                data-wow-duration="2s"
              >
                <h2 className="text-lg-left text-md-center" id="skillTitle">{data.sections[1].title}</h2>
              </div>
              <Container fluid={false}>
                <ul className="row flex-container">
                  {data.sections[1].items.map((eachskill) => {
                    return <SkillCard Skill={eachskill} />;
                  })}
                </ul>
              </Container>
            </Container>
          </div>
        </Fullpage>
      </Container>
    );
  }
}

export default Skills;
