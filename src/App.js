import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
      cardRare: 'normal',
      cardTrunfo: true,
      deck: [],
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.enableBtn = this.enableBtn.bind(this);
    this.validation = this.validation.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  onSaveButtonClick() {
    const { cardName, cardDescription, cardImage, cardRare, cardAttr1,
      cardAttr2, cardAttr3, cardTrunfo } = this.state;

    const cardMount = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };
    this.setState((oldState) => ({
      deck: [...oldState.deck, cardMount],
    }), () => this.clearState());
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.validation());
  };

  clearState() {
    console.log(this.state);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: true,
      isSaveButtonDisabled: true,
    });
  }

  validation() {
    const maxValue = 210;
    const maxAttr = 90;

    const { cardName, cardDescription, cardImage, cardRare, cardAttr1,
      cardAttr2, cardAttr3 } = this.state;

    const total = parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10);
    const validationInput = cardName !== ''
      && cardDescription !== '' && cardImage !== '' && cardRare !== '';

    const validationAttr = parseInt(cardAttr1, 10)
    >= 0 && parseInt(cardAttr1, 10) <= maxAttr
    && parseInt(cardAttr2, 10) >= 0 && parseInt(cardAttr2, 10) <= maxAttr
    && parseInt(cardAttr3, 10) >= 0 && parseInt(cardAttr3, 10) <= maxAttr;

    if (validationInput && total <= maxValue && validationAttr) {
      this.enableBtn(false);
    } else {
      this.enableBtn(true);
    }
  }

  enableBtn(valueOfVerity) {
    console.log('chamado');
    this.setState({
      isSaveButtonDisabled: valueOfVerity,
    });
  }

  render() {
    return (
      <div>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
