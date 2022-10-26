import "./Main.css";
import React, { Component } from "react";

class Main extends Component {
  state = {
    counter: 0,
  };

  addOneHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  addFiveHandler = () => {
    this.setState({ counter: this.state.counter + 5 });
  };
  removeOneHandler = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    } else {
      this.setState({ counter: 0 });
    }
  };
  removeFiveHandler = () => {
    if (this.state.counter > 5) {
      this.setState({ counter: this.state.counter - 5 });
    } else {
      this.setState({ counter: 0 });
    }
  };
  resetHandler = () => {
    this.setState({ counter: 0 });
  };
  render() {
    let circleClass=""
    if (this.state.counter === 0){
      circleClass="circle"
    } else if(this.state.counter % 2 === 0) {
      circleClass="circle even"
    } else {
      circleClass="circle odd"
    }
    return (
      <main>
        <div className="container">
          <div className={circleClass}>
            <div>
              <h1 className="counter">{this.state.counter}</h1>
            </div>
          </div>
        </div>

        <div className="btns">
          <button onClick={this.addFiveHandler}>Add Five</button>
          <button onClick={this.addOneHandler}>Add One</button>
          <button onClick={this.resetHandler}>Reset</button>
          <button onClick={this.removeOneHandler}>Remove One</button>
          <button onClick={this.removeFiveHandler}>Remove Five</button>
        </div>
      </main>
    );
  }
}

export default Main;
