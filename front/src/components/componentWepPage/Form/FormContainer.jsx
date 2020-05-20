import React, { Component } from "react";



import Input from "./Input";
import TextArea from "./TextArea";
import Select from "./Select";
import Button from "./Button";

class FormContainer extends Component {

  state = {
    file: null,
    base64URL: ""
  };

  getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      
      let reader = new FileReader();

     
      reader.readAsDataURL(file);

     
      reader.onload = () => {
        
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };




  constructor(props) {
    super(props);

    this.state = {
      newProduct: {
       
        category: "",
        image:"",
        about: ""
      },

      categoryOptions: ["Category1", "Category2", "Category3"],
     
    };
    this.handleTextArea = this.handleTextArea.bind(this);
  
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFile=this.handleFile.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  


  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newProduct: {
          ...prevState.newProduct,
          [name]: value
        }
      }),
      () => console.log(this.state.newProduct)
    );
  }


  /*handleFile(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newProduct: {
          ...prevState.newProduct,
          image: value
        }
      }),
      () => console.log(this.state.newProduct)
    );
  }*/





  handleFile(e) {
    let { file } = this.state;

    file = e.target.files[0];



    this.getBase64(file)
    .then(result => {
      file["base64"] = result;
      console.log("File Is", file);
      this.setState(
        /*{
        base64URL: result,
        file
      },*/
      
      prevState => ({
        newUser: {
          ...prevState.newUser,
          image: result
        }
      }),
      () => console.log(this.state.newUser)
      
      
      );
    })
    .catch(err => {
      console.log(err);
    });



    this.setState(
    {
      file: e.target.files[0],
    }
    );
  }
       






  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newProduct: {
          ...prevState.newProduct,
          about: value
        }
      }),
      () => console.log(this.state.newProduct)
    );
  }

 

 

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newProduct;

    fetch("http://example.com", {
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
      newProduct: {
        
        category: "",
        image:"",
        about: ""
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
      
      
        <Select
          title={"Category"}
          name={"category"}
          options={this.state.categoryOptions}
          value={this.state.newProduct.category}
          placeholder={"Select Category"}
          handleChange={this.handleInput}
        />
       
       <Input
          inputType={"file"}
          title={"Select file"}
          name={"image"}
          value={this.state.newProduct.image}
          handleChange={this.handleFile}
        />{" "}
       
        <TextArea
          title={"Description"}
          rows={1}
          value={this.state.newProduct.about}
          name={"currentPetInfo"}
          handleChange={this.handleTextArea}
          placeholder={""}
        />
       
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Add product"}
          style={buttonStyle}
        />{" "}
      
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear form"}
          style={buttonStyle}
        />{" "}
       
      </form>
    );
  }
}

const buttonStyle = {
  margin: "3px 3px 3px 3px"
};

export default FormContainer;
