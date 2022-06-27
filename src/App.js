import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nameCard: '',
      descriptionCard: '',
      attr1: '',
      attr2: '',
      attr3: '',
      imageCard: '',
      rarity: 'normal',
      trunfo: false,
      isSaveButtonDisabled: true,
      onInputChange: this.handleChange,
    };
  }

  handleStringInput = () => {
    const { nameCard, descriptionCard, imageCard, rarity } = this.state;

    if (nameCard !== '' && descriptionCard !== '' && imageCard !== '' && rarity !== '') {
      return true;
    }

    return false;
  }

  handleAttrInput = () => {
    const { attr1, attr2, attr3 } = this.state;

    const totalAttr = parseInt(attr1, 10) + parseInt(attr1, 10) + parseInt(attr3, 10);
    const totalMaximumAttr = 210;
    const minimunAttr = 0;
    const maxAttr = 90;

    if (parseInt(attr1, 10) >= minimunAttr
    && parseInt(attr2, 10) >= minimunAttr
    && parseInt(attr3, 10) >= minimunAttr
    && parseInt(attr1, 10) <= maxAttr
    && parseInt(attr2, 10) <= maxAttr
    && parseInt(attr3, 10) <= maxAttr
    && totalAttr <= totalMaximumAttr) return true;

    return false;
  }

  handleEnableButton = (stringInput, attrInput) => {
    if (stringInput && attrInput) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: inputValue,
    }, () => {
      const stringsInput = this.handleStringInput();
      const attrInput = this.handleAttrInput();

      this.handleEnableButton(stringsInput, attrInput);
    });
  }

  render() {
    const {
      nameCard,
      descriptionCard,
      attr1,
      attr2,
      attr3,
      imageCard,
      rarity,
      trunfo,
      isSaveButtonDisabled,
      onInputChange,
    } = this.state;

    return (
      <>
        <h1>Tryunfo</h1>
        <Form
          cardName={ nameCard }
          cardDescription={ descriptionCard }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ imageCard }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ onInputChange }
        />
        <Card
          cardName={ nameCard }
          cardDescription={ descriptionCard }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ imageCard }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
        />
      </>
    );
  }
}

export default App;
