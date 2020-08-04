import React, { Component } from "react";
import Fullpage from "../FullPage/FullPage";
import data from "../data.json";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./About.css";
import DownIcon from "../DownIcon/DownIcon";
import { Link} from 'react-scroll';

class SecSecend extends Component {
  state = {};
  render() {
    return (
      <Container fluid={true} className="About">
        <Fullpage>
          <Col
            className=" wow animate__fadeInLeft"
            data-wow-duration="2s"
            lg="6"
            md="6"
            sm="8"
          >
            <div className="padding-lg">
              <div className="About-content">
                <div className="row heading">
                  <h2 id="aboutTitle" className="">
                    {data.sections[0].title}
                  </h2>
                </div>
                <ul className="row AboutContent">
                  {data.sections[0].items.map((p) => {
                    return (
                      <p>{p.content}</p>
                    )
                  })}
                </ul>
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            md={6}
            sm={4}
            className="wow animate__fadeInRight"
            data-wow-duration="2s"
          >
            <img
              className="img-fluid w-80"
              src="https://i.ibb.co/J5W0wrm/back-about.png"
              alt={data.title}
            />
          </Col>
        </Fullpage>

        <Link
          to="Skills"
          spy={true}
          smooth={true}
          duration={500}
        >
          <DownIcon Icon={data.Icons}/>
        </Link>
      </Container>
    );
  }
}

export default SecSecend;
