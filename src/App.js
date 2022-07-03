import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const INICIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: '',
  cardTrunfo: true,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
  saveCarList: [],
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = INICIAL_STATE;
  }

  validateButton = () => {
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;

    const minimo = 0;
    const maximo = 90;
    const sume = 210;

    const inputValidation = cardName !== ''
    && cardDescription !== '' && cardImage !== '';

    const min = Number(cardAttr1) >= minimo && Number(cardAttr2) >= minimo
    && Number(cardAttr3) >= minimo;
    const max = Number(cardAttr1) <= maximo && Number(cardAttr2) <= maximo
    && Number(cardAttr3) <= maximo;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= sume;

    if (inputValidation && sum && max && min) {
      return false;
    }
    return true;
  };

  onInputChange = ({ target }) => {
    const { name, type, checked, value } = target;
    const stateValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: stateValue,
    }, () => this.setState({
      isSaveButtonDisabled: this.validateButton(),
    }));
  };

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.state;
    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: prevState.cardTrunfo,
      saveCarList: [...prevState.saveCarList,
        { cardName,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
          cardRare,
          cardTrunfo }],
    }));
  };

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, saveCarList, isSaveButtonDisabled } = this.state;
    return (
      <div>

        <h1>Tryunfo</h1>
        <section>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
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

        <section>
          {saveCarList.map((cardList) => (
            <Card
              key={ cardList.id }
              cardName={ cardList.cardName }
              cardDescription={ cardList.cardDescription }
              cardAttr1={ cardList.cardAttr1 }
              cardAttr2={ cardList.cardAttr2 }
              cardAttr3={ cardList.cardAttr3 }
              cardImage={ cardList.cardImage }
              cardRare={ cardList.cardRare }
              cardTrunfo={ cardList.cardTrunfo }

            />
          ))}
        </section>

      </div>
    );
  }
}

export default App;
