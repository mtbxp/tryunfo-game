import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';

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
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [],
    };

    this.onInputChange = this.onInputChange.bind(this);

    this.buttonValidation = this.buttonValidation.bind(this);

    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, this.buttonValidation);
  }

  onSaveButtonClick(e) {
    e.preventDefault();

    const addCard = { ...this.state };

    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      hasTrunfo: [...prevState.cardList, addCard].some((elem) => elem.cardTrunfo),
      cardList: [...prevState.cardList, addCard],
    }));
  }

  buttonValidation() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const twoHundredTen = 210;
    const treeTributte = 90;
    const somTree = Number(cardAttr1)
                  + Number(cardAttr2)
                  + Number(cardAttr3);
    const validationSom = () => {
      if (
        somTree <= twoHundredTen
      && Number(cardAttr1) <= treeTributte
      && Number(cardAttr2) <= treeTributte
      && Number(cardAttr3) <= treeTributte
      && Number(cardAttr1) >= 0
      && Number(cardAttr2) >= 0
      && Number(cardAttr3) >= 0
      ) return true;
    };

    const valuesEmpty = [cardName, cardDescription, cardImage];

    const dontEmpty = valuesEmpty.every((e) => e !== '');

    if (validationSom() && dontEmpty) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      cardList,
    } = this.state;

    return (
      <div>
        <h1>Project Tryunfo</h1>
        <h2>Forms</h2>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          hasTrunfo={ hasTrunfo }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <h2> Preview Card </h2>
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
        <CardList
          cardList={ cardList }
          cardName={ cardName }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
