import "./Main.css";
import React, { Component } from "react";

class Main extends Component {
    state = {
        counter: 0 ,
    }
    addOneHandler = ()=>{
        this.setState({counter:this.state.counter+1})
    }
  render() {
    return (
      <main>
        <div className="container">
          <div className="circle">
            <div>
              <h1 className="counter">{this.state.counter}</h1>
            </div>
          </div>
        </div>

        <div className="btns">
          <button>Add Five</button>
          <button onClick={this.addOneHandler}>Add One</button>
          <button>Reset</button>
          <button>Remove One</button>
          <button>Remove Five</button>
        </div>
      </main>
    );
  }
}

export default Main;
