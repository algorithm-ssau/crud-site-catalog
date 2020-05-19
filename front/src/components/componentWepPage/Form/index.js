
import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "./FormContainer";
import Demo from './App';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  render() {
    return (
      <div className="col-md-6">
     
        <Demo />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));