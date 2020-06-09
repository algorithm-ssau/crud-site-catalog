import React, { Component } from 'react';

import TextArea from '../Form/TextArea';

import Button from '../Form/Button';

class AddCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCategory: {
        name: '',
        description: '',
      },
    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleTextName = this.handleTextName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }


  handleTextName(e) {
    console.log('Inside handleTextArea');
    const { value } = e.target;
    this.setState(
      (prevState) => ({
        newCategory: {
          ...prevState.newCategory,
          name: value,
        },
      }),
      () => console.log(this.state.newCategory),
    );
  }


  handleTextArea(e) {
    console.log('Inside handleTextArea');
    const { value } = e.target;
    this.setState(
      (prevState) => ({
        newCategory: {
          ...prevState.newCategory,
          description: value,
        },
      }),
      () => console.log(this.state.newCategory),
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const userData = this.state.newCategory;

    fetch('http://buoyant-habitat-279114.df.r.appspot.com/category/create', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      response.json().then((data) => {
        console.log(`Successful${data}`);
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newCategory: {
        name: '',
        description: '',
      },
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>


        <TextArea
          title={"Category's name"}
          rows={1}
          value={this.state.newCategory.name}
          name="name"
          handleChange={this.handleTextName}
          placeholder={"Category's name"}
        />


        <TextArea
          title={"Category's description"}
          rows={3}
          value={this.state.newCategory.description}
          name="description"
          handleChange={this.handleTextArea}
          placeholder="Describe your category"
        />

        <Button
          action={this.handleFormSubmit}
          type="primary"
          title="Add Category"
          style={buttonStyle}
        />
        {' '}

        <Button
          action={this.handleClearForm}
          type="secondary"
          title="Clear"
          style={buttonStyle}
        />
        {' '}

      </form>
    );
  }
}

const buttonStyle = {
  margin: '10px 10px 10px 10px',
};

export default AddCategory;
