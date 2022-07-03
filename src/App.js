import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';
import cardList from './components/cardList';

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
      hasTrunfo: false,
      cards: cardList,
    };
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validateInputs);
  }

  onSaveButtonClick = (e) => {
    e.preventDefault();
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }, this.addNewCard(this.state));
    this.verifyHasTrunfo(this.setState);
  };

  validateInputs = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const attr1 = parseFloat(cardAttr1);
    const attr2 = parseFloat(cardAttr2);
    const attr3 = parseFloat(cardAttr3);
    const totalAt = attr1 + attr2 + attr3;
    const qtdmaxattr = 90;
    const qtdmaxtotal = 210;

    const fieldInputs = [
      cardName.length !== 0,
      cardDescription.length !== 0,
      cardImage.length !== 0,
      cardRare.length !== 0,
      cardAttr1.length !== 0,
      cardAttr1 <= qtdmaxattr,
      cardAttr1 >= 0,
      cardAttr2.length !== 0,
      cardAttr2 <= qtdmaxattr,
      cardAttr2 >= 0,
      cardAttr3.length !== 0,
      cardAttr3 <= qtdmaxattr,
      cardAttr3 >= 0,
      totalAt <= qtdmaxtotal,
    ];
    const habilitaBotao = fieldInputs.every((input) => input === true);
    this.setState({
      isSaveButtonDisabled: !habilitaBotao,
    });
  }

  verifyHasTrunfo = () => {
    const { cardTrunfo, hasTrunfo } = this.state;
    if (cardTrunfo === true && hasTrunfo === false) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  addNewCard = (card) => {
    this.setState((prevState) => ({
      cards: [card, ...prevState.cards],
    }));
  };

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
      hasTrunfo,
      cards,
    } = this.state;

    return (
      <div>
        <h1>Super Triumph</h1>
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
          hasTrunfo={ hasTrunfo }
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
        <div>
          <h2>Cartas Adcionadas</h2>
          <ul>
            {
              cards.map((card) => (
                <li key={ card.cardName }>
                  <div className="container-card ">
                    <p>{ `Nome: ${card.cardName}` }</p>
                    <p>{ `Descrição: ${card.cardDescription}` }</p>
                    <p>{ `Attr1: ${card.cardAttr1}` }</p>
                    <p>{ `Attr2: ${card.cardAttr2}` }</p>
                    <p>{ `Attr3: ${card.cardAttr3}` }</p>
                    <p>{ `Imagem: ${card.cardImage}` }</p>
                    <p>{ `Raridade: ${card.cardRare}` }</p>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
