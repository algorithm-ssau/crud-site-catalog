import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "./FormContainer";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
 render() {
    return (
      <div className="col-md-6">
        <h3> Add product </h3>
        <FormContainer />
      </div>
    );
  }
}
export default App;
//render(<App />, document.getElementById("root"));