import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
// iniciado
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nameInput: '',
      descriptionInput: '',
      attr1Input: 0,
      attr2Input: 0,
      attr3Input: 0,
      imageInput: '',
      rareInput: 'normal',
      trunfoInput: false,
      isButtonDisabled: true,
      hasAlreadyTrunfo: false,
      createdCards: [],
    };
  }

  handleInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const { nameInput, descriptionInput, attr1Input, attr2Input,
        attr3Input, imageInput, rareInput } = this.state;
      const sum = parseInt(attr1Input, 10)
      + parseInt(attr2Input, 10)
      + parseInt(attr3Input, 10);
      const maxAttrSum = 210;
      const maxAttr = 90;
      let disableButton = false;
      if (nameInput === ''
        || descriptionInput === ''
        || imageInput === ''
        || rareInput === ''
        || sum > maxAttrSum
        || attr1Input > maxAttr
        || attr2Input > maxAttr
        || attr3Input > maxAttr
        || attr1Input < 0
        || attr2Input < 0
        || attr3Input < 0) disableButton = true;
      this.setState({
        isButtonDisabled: disableButton,
      });
    });
  }

  handleButtonClick = (event) => {
    event.preventDefault();
    const { nameInput,
      descriptionInput,
      attr1Input,
      attr2Input,
      attr3Input,
      imageInput,
      rareInput,
      trunfoInput } = this.state;
    const cardInfo = { nameInput,
      descriptionInput,
      attr1Input,
      attr2Input,
      attr3Input,
      imageInput,
      rareInput,
      trunfoInput };
    this.setState((previousState) => ({
      createdCards: [...previousState.createdCards, cardInfo],
    }), () => {
      this.setState((previousState) => ({
        nameInput: '',
        descriptionInput: '',
        attr1Input: 0,
        attr2Input: 0,
        attr3Input: 0,
        imageInput: '',
        rareInput: 'normal',
        trunfoInput: false,
        isButtonDisabled: true,
        hasAlreadyTrunfo: previousState.hasAlreadyTrunfo || previousState.trunfoInput,
      }));
    });
  }

  render() {
    const { nameInput, descriptionInput, attr1Input, attr2Input,
      attr3Input, imageInput, rareInput, trunfoInput,
      isButtonDisabled, hasAlreadyTrunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.handleInputChange }
          isSaveButtonDisabled={ isButtonDisabled }
          onSaveButtonClick={ this.handleButtonClick }
          onSubmitFunc={ this.avoidPageLoad }
          cardName={ nameInput }
          cardDescription={ descriptionInput }
          cardAttr1={ attr1Input }
          cardAttr2={ attr2Input }
          cardAttr3={ attr3Input }
          cardImage={ imageInput }
          cardRare={ rareInput }
          cardTrunfo={ trunfoInput }
          hasTrunfo={ hasAlreadyTrunfo }
        />
        <Card
          cardName={ nameInput }
          cardImage={ imageInput }
          cardDescription={ descriptionInput }
          cardAttr1={ attr1Input }
          cardAttr2={ attr2Input }
          cardAttr3={ attr3Input }
          cardRare={ rareInput }
          cardTrunfo={ trunfoInput }
        />
      </div>
    );
  }
}

export default App;
