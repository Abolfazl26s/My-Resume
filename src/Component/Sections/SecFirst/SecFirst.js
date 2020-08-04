import React, { Component } from "react";
import Fullpage from "../FullPage/FullPage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/esm/Figure";
import "./SecFirst.css";
import DownIcon from "../DownIcon/DownIcon";
import { Link} from 'react-scroll';

class SecFirst extends Component {
  state = {};
  render() {
    return (
      <Container fluid={true} className="p-0 mt-lg-n2 mt-sm-0 mt-xs-0">
        <Fullpage className="First align-items-center">
          <Col
            lg="6"
            md="6"
            sm="8"
            className="wow animate__fadeInLeft"
            data-wow-duration="2s"
            data-wow-offset="50"
          >
            <div>
              <Figure>
                <img
                  src={data.avatar}
                  className="img-fluid avatar"
                  alt={data.title}
                />
              </Figure>
              <div className="row heading">
                <h3 className="" id="title">
                  {data.title}
                </h3>
                <h3 className="">{data.subtitle}</h3>
              </div>

              <div
                className="wow fadeInDown"
                data-wow-duration="2s"
                data-wow-delay="5s"
              >
                {Object.keys(data.links).map((key) => {
                  return <SocialIcon className="icon" url={data.links[key]} />;
                })}
              </div>
            </div>
          </Col>

          <Col lg="6" md="6" sm="4">
            <img
              className="img-fluid w-100"
              alt={data.title}
              src={data.background}
            />
          </Col>
        </Fullpage>

        <Link
          className="DownIcon"
          to="About"
          spy={true}
          smooth={true}
          duration={500}
        >
          <DownIcon Icon={data.Icons} Click={this.scrollToBottom}/>
        </Link>
      </Container>
    );
  }
}

export default SecFirst;
