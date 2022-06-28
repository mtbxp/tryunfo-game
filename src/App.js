import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      carta: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.buttonValidation = this.buttonValidation.bind(this);
  }

  onInputChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => { this.buttonValidation(); });
  }

  onSaveButtonClick(card) {
    this.setState((prevState) => ({
      carta: [card, ...prevState.carta],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  }

  buttonValidation() {
    const maxTotal = 210;
    const valorMax = 90;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    if (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
      && Number(cardAttr1) >= ''
      && Number(cardAttr1) <= valorMax
      && Number(cardAttr2) >= ''
      && Number(cardAttr2) <= valorMax
      && Number(cardAttr3) >= ''
      && Number(cardAttr3) <= valorMax
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxTotal
    ) {
      this.setState({
        isSaveButtonDisabled: false,
      }, () => {});
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
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
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <section className="principal">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>
      </div>
    );
  }
}

export default App;
