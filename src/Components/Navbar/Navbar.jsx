import React, { Component } from "react";
import logo from "./logo.svg";
import "./Navbar.css";

export class Navbar extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="nav">
        <img src={logo} alt="logo" />

        <div className="right">
          <ul id="rights">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">OurTeam</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            {/* <button className="button">Login</button>  */}
          </ul>
        </div>
        <button className="button ">Login</button>
        <div id="mobiles" onClick={this.handleclick}>
          <i
            id="bars"
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </div>
    );
  }
}

export default Navbar;
