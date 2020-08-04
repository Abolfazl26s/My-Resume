import React, { Component } from 'react';
import Figure from "react-bootstrap/esm/Figure";

import './SkillCard.css'

class SkillCard extends Component {
  state = {};
  render() {
    const { Skill } = this.props;
    return (
      <li
        className="col-12 col-md-6 col-lg-3 wow animate__bounceInDown"
        data-wow-duration="2s"
        data-wow-offset="80"
      >
        <div className="cnt-block equal-hight Card">
          <Figure>
            <img
              src={Skill.content.image}
              className="img-responsive"
              alt={Skill.content.title}
            />
          </Figure>
          <h2>
            <a href="/">{Skill.content.title}</a>
          </h2>
        </div>
      </li>
    );
  }
}
export default SkillCard;
