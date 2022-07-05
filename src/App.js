import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
      alert: '',
      searchValue: '',
    };
  }

  checkAttrs = (obj) => {
    const { name } = obj;
    const NAMES = ['cardAttr1', 'cardAttr2', 'cardAttr3'];
    console.log(obj.target.value === '');
    if (NAMES.includes(name) && obj.target.value === '') obj.value = '0';
  }

  handleChange = ({ target }) => {
    const { name, type } = target;
    const MAX_ATT = 90;
    const MAX_POINTS = 210;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.checkAttrs({ target });
    this.setState(({ [name]: value }), () => {
      const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
        cardImage } = this.state;
      console.log('cardAtt1', parseInt(cardAttr1, 10));
      console.log('cardAtt2', parseInt(cardAttr2, 10));
      console.log('cardAtt3', parseInt(cardAttr3, 10));
      console.log('cardName', cardName.length);
      console.log('cardDescription', cardDescription.length);
      console.log('cardImage', cardImage.length);

      if (cardName.length > 0 && cardDescription.length > 0 && cardImage.length > 0
        && parseInt(cardAttr1, 10) <= MAX_ATT && parseInt(cardAttr2, 10) <= MAX_ATT
        && parseInt(cardAttr3, 10) <= MAX_ATT && parseInt(cardAttr1, 10) > 0
        && parseInt(cardAttr2, 10) > 0 && parseInt(cardAttr3, 10) > 0
        && cardAttr1 !== '' && cardAttr2 !== '' && cardAttr3 !== ''
        && parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10)
        <= MAX_POINTS) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  };

  hasTrunfo = () => {
    const { cards } = this.state;
    const newArr = cards.filter((card) => card.cardTrunfo === true);
    if (newArr.length > 0) {
      this.setState({ alert: 'Você já tem um Super Trunfo em seu baralho' });
      return false;
    }
    return true;
  }

  cardNotExist = (name) => {
    const { cards } = this.state;
    const newArr = cards.filter((card) => card.cardName === name);
    if (newArr.length > 0) {
      this.setState({ alert: 'Já existe uma carta com esse nome' });
      return false;
    }
    return true;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, cards } = this.state;
    if (cardTrunfo === true && this.hasTrunfo() === false) return;
    if (this.cardNotExist(cardName)) {
      cards.push({
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      });
      this.setState({ cardName: '' });
      this.setState({ cardDescription: '' });
      this.setState({ cardAttr1: '0' });
      this.setState({ cardAttr2: '0' });
      this.setState({ cardAttr3: '0' });
      this.setState({ cardImage: '' });
      this.setState({ cardRare: 'normal' });
      this.setState({ cardTrunfo: false });
      this.setState({ alert: '' });
    }
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, alert, cards,
      searchValue } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleSubmit }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <p className="alertText">{ alert }</p>
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
        <div className="allCards">
          {
            cards.filter((card) => card.cardName.toLowerCase().startsWith(searchValue))
              .map((card) => (
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                  key={ card.cardName }
                />
              ))
          }
        </div>
      </div>
    );
  }
}

export default App;
