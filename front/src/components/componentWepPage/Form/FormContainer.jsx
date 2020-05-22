import React, { Component } from "react";

import "./styles.css";
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
        nameProduct: "",
        price: Number (""),
        category: "",
    
        description: "",
        file:""
      },

      categoryOptions: ["Category1", "Category2", "Category3"],
   
    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleProductName = this.handleProductName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);    
  }

  

  handleProductName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newProduct: {
          ...prevState.newProduct,
          nameProduct: value
        }
      }),
      () => console.log(this.state.newProduct)
    );
  }


  handleFile(e) {
   
    console.log(e.target.files[0]);
    let { file } = this.state;

    file = e.target.files[0];

    this.getBase64(file)
      .then(result => {
        file["base64"] = result;
        console.log("File Is", file);

this.setState(
    
      prevState => ({
        newProduct: {
          ...prevState.newProduct,

          file: result
        }
      }),
      () => console.log(this.state.newProduct)
    );
  })
  .catch(err => {
    console.log(err);
  });

this.setState({
  file: e.target.files[0]
});
};
  







  handlePrice(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newProduct: {
          ...prevState.newProduct,
          price: value
        }
      }),
      () => console.log(this.state.newProduct)
    );
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

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newProduct: {
          ...prevState.newProduct,
          description: value
        }
      }),
      () => console.log(this.state.newProduct)
    );
  }

 

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newProduct;

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
      newProduct: {
        nameProduct: "",
        price: Number (""),
        category: "",
        description: "",
        file:""
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>

<TextArea
          title={"Product's name: "}
          inputType={"text"}
          rows={1}
          value={this.state.newProduct.name}
          name={"nameProduct"}
          handleChange={this.handleInput}
          placeholder={"Enter product's name"}
        />
      



      <TextArea
          title={"Price: "}
         // inputType={"number"}
         inputType={Number("")}
          rows={1}
          value={this.state.newProduct.price}
          name={"price"}
          handleChange={this.handlePrice}
          placeholder={"Enter price"}
        />
      


       
        <Select
          title={"Category: "}
          name={"category"}
          options={this.state.categoryOptions}
          value={this.state.newProduct.category}
          placeholder={"Select category"}
          handleChange={this.handleInput}
        />{" "}
       
   
        <TextArea
          title={"Product's description: "}
          rows={1}
          value={this.state.newProduct.about}
          name={"currentPetInfo"}
          handleChange={this.handleTextArea}
          placeholder={"Describe your product"}
        />
      
    

      



      <Input
         input type="file"
          rows={1}
         
          name={"file"}
          handleChange={this.handleFile}
     
          
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
  margin: "10px 10px 10px 10px"
};

export default FormContainer;





