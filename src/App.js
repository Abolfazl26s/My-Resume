import React, { Component } from "react";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Container from "react-bootstrap/Container";
import WOW from "wowjs";
import SecFirst from "./Component/Sections/SecFirst/SecFirst";
import SecSecend from "./Component/Sections/SecSecend/SecSecend";
import Skills from "./Component/Sections/SecSkills/Skills";
import NavBar from "./Component/NavBar/NavBar";
import { Element } from "react-scroll";

class App extends Component {
  state = {
    color: "Default",
  };
  componentDidMount() {
    new WOW.WOW().init();
  }

  onChangeHandler = (e) => {
    this.setState({
      color: e.target.value,
    });
  };
  render() {
    const styleObj = {
      background: this.state.color,
    };
    return (
      <Container fluid={true} className="App p-0" style={styleObj}>
        <Element name="ChangeColor" className="element align-items-center wow animate__headShake" data-wow-duration="2s" >
          <div className="container mb-2 w-50 rounded-bottom shadow content p-3">
            <div className="header w-100 mb-3 text-center ">
              Color Name: {this.state.color}
            </div>
            <div className="shadow w-100">
              <input
                className="w-100 text-center"
                type="text"
                placeholder="( Name Or #000 Or rgb(110,178,179) )"
                onChange={this.onChangeHandler}
              />
            </div>
          </div>
        </Element>

        <NavBar />

        <Element name="Home" className="element">
          <SecFirst />
        </Element>

        <Element name="About" className="element">
          <SecSecend />
        </Element>

        <Element name="Skills" className="element">
          <Skills />
        </Element>

        <Footer />
      </Container>
    );
  }
}

export default App;
