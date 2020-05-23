import React, { Component } from "react";

import TextArea from "../Form/TextArea";

import Button from "../Form/Button";

class AddCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCategory: {
        nameCategory: "",
        descriptionCategory: ""
      },
 };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleTextName=this.handleTextName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
 
  }

  

  handleTextName(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newCategory: {
          ...prevState.newCategory,
          nameCategory: value
        }
      }),
      () => console.log(this.state.newCategory)
    );
  }



  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newCategory: {
          ...prevState.newCategory,
          descriptionCategory: value
        }
      }),
      () => console.log(this.state.newCategory)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newCategory;

    fetch("", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newCategory: {
        nameCategory: "",
        descriptionCategory: ""
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        
 
        <TextArea
          title={"Category's name"}
          rows={1}
          value={this.state.newCategory.nameCategory}
          name={"nameCategory"}
          handleChange={this.handleTextName}
          placeholder={"Category's name"}
        />
      

     
       
        <TextArea
          title={"Category's description"}
          rows={3}
          value={this.state.newCategory.descriptionCategory}
          name={"descriptionCategory"}
          handleChange={this.handleTextArea}
          placeholder={"Describe your category"}
        />
      
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Add Category"}
          style={buttonStyle}
        />{" "}
     
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
       
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default AddCategory;
