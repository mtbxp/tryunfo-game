import React from 'react';
import Form from './components/Form';
// import Card from './components/Card2';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target: name, value }) {
    this.setState({
      [name]: value,
    });
  }

  // onSaveButtonClick() {
  //   this.setState({
  //     isSaveButtonDisabled: false,
  //   });
  // }

  render() {
    return (
      <div>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
