import React from 'react';
import Card from './components/Card';
import Deck from './components/Deck';
import From from './components/Form';

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
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [{
        cardName: 'Odin',
        cardDescription: 'Pai de Todos',
        cardAttr1: '56',
        cardAttr2: '36',
        cardAttr3: '67',
        cardImage: 'https://static.todamateria.com.br/upload/od/in/odintrono1-cke.jpg',
        cardRare: 'raro',
        cardTrunfo: false,
      }],
    };
  }

  validaCampos = (value1, value2, value3) => {
    const valuesOfState = Object.values(this.state);
    value1 = parseInt(value1, 10);
    value2 = parseInt(value2, 10);
    value3 = parseInt(value3, 10);
    const maxPoints = 90;
    const totalPoints = 210;
    const somaValues = value1 + value2 + value3;
    if (valuesOfState.includes('')
      || value1 < 0
      || value1 > maxPoints
      || value2 < 0
      || value2 > maxPoints
      || value3 < 0
      || value3 > maxPoints
      || somaValues > totalPoints) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const { value } = target;
    if (type === 'checkbox') {
      this.setState({
        cardTrunfo: true,
        hasTrunfo: true,
      });
    }
    this.setState({
      [name]: value,
    }, () => {
      const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
      let valueAtt1 = cardAttr1;
      let valueAtt2 = cardAttr2;
      let valueAtt3 = cardAttr3;
      if (name === 'cardAttr1') valueAtt1 = value;
      if (name === 'cardAttr2') valueAtt2 = value;
      if (name === 'cardAttr3') valueAtt3 = value;
      this.validaCampos(valueAtt1, valueAtt2, valueAtt3);
    });
  }

  onSaveButtonClick = () => {
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

    this.setState((prevState) => ({
      deck: [{
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }, ...prevState.deck],
    }));

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
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
      hasTrunfo,
      isSaveButtonDisabled,
      deck,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <From
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
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
        <Deck deck={ deck } />
      </div>
    );
  }
}

export default App;
