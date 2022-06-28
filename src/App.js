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
      deck: [],
    };
  }

  // mock = [{
  //   cardName: 'Odin',
  //   cardDescription: 'Pai de Todos',
  //   cardAttr1: '56',
  //   cardAttr2: '36',
  //   cardAttr3: '67',
  //   cardImage: 'https://static.todamateria.com.br/upload/od/in/odintrono1-cke.jpg',
  //   cardRare: 'raro',
  //   cardTrunfo: false,
  // },
  // {
  //   cardName: 'Freya',
  //   cardDescription: 'Deusa Vanir do Amor, Magia e Morte',
  //   cardAttr1: '34',
  //   cardAttr2: '67',
  //   cardAttr3: '17',
  //   cardImage: 'https://i1.wp.com/caminhopagao.com.br/wp-content/uploads/2019/06/FReya-3-1.jpg?resize=570%2C886',
  //   cardRare: 'normal',
  //   cardTrunfo: false,
  // },
  // {
  //   cardName: 'Frigga',
  //   cardDescription: 'Deusa-mãe da dinastia de Aesir',
  //   cardAttr1: '6',
  //   cardAttr2: '54',
  //   cardAttr3: '34',
  //   cardImage: 'https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2021/05/frigga-a-deusa-mae-uma-das-mais-importantes-da-mitologia-nordica-4.jpg',
  //   cardRare: 'muito raro',
  //   cardTrunfo: false,
  // }]

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
    const { name, value } = target;
    if (name === 'cardTrunfo') {
      this.setState({
        cardTrunfo: true,
        hasTrunfo: true,
      });
    } else {
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
      deck: [...prevState.deck, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
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

  deleteCard = ({ target }) => {
    const { name } = target;
    const { cardtrunfo } = target.dataset;
    const { deck } = this.state;
    if (cardtrunfo === 'true') {
      this.setState({
        hasTrunfo: false,
      });
    }
    this.setState({
      deck: deck.filter((card) => card.cardName !== name),
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
        <Deck
          deck={ deck }
          deleteCard={ this.deleteCard }
        />
      </div>
    );
  }
}

export default App;
