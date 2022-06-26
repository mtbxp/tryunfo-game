import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      onSaveButtonClick: false,
    };
  }

  onSaveButtonClick = () => console.log('fufou');

  handle = ({ target }) => {
    const { id, checked, value } = target;
    if (id === 'cardTrundo') {
      this.setState({ [id]: checked }, () => this.validateButton());
    } else {
      this.setState({ [id]: value }, () => this.validateButton());
    }
  }

  validateButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);

    const textInput = (
      cardName.length > 0 && cardDescription.length > 0
      && cardImage.length > 0 && cardRare.length > 0
    );

    const attrTop = (
      attr1 >= 0 && attr1 <= '90'
      && attr2 >= 0 && attr2 <= '90'
      && attr3 >= 0 && attr3 <= '90'
    );
    const attrSum = (
      attr1 + attr2 + attr3 <= '210'
    );

    if (attrTop && attrSum && textInput) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.handle }
          // onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          { ...this.state }
        />
      </div>
    );
  }
}

export default App;
