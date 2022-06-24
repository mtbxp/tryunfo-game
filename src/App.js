import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const {
      name, value, checked, type,
    } = target;
    this.setState({ [name]: (type === 'checkbox' ? checked : value) });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    return (
      <>
        <Form { ...this.state } onInputChange={ this.onInputChange } />
        <Card
          { ...{
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          } }
        />
      </>
    );
  }
}

export default App;
