import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';

class App extends React.Component {
  constructor(props) {
    super(props);
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
      newCard: [],
      searchName: '',
      type: 'todas',
    };
  }

  verificaInputText = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const maxNumber = 210;
    const maxItem = 90;
    let text = false;
    let result = false;
    let sum = false;

    if (cardName.length
       && cardDescription.length
       && cardImage.length
       && cardRare.length) {
      text = true;
    }
    if (Number(cardAttr1) <= maxItem
      && Number(cardAttr2) <= maxItem
      && Number(cardAttr3) <= maxItem
      && Number(cardAttr1) >= 0
      && Number(cardAttr2) >= 0
      && Number(cardAttr3) >= 0) {
      result = true;
    }
    if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxNumber) {
      sum = true;
    }
    if (text && result && sum) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.verificaInputText());
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const card = this.state;
    if (card.cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
    this.setState((previous) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      newCard: [...previous.newCard, card],
    }));
  };

  removeCard = (item) => {
    const { newCard } = this.state;
    if (item.cardTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }
    this.setState({
      newCard: newCard.filter((card) => (item.cardName !== card.cardName
      )),
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
      newCard,
      isSaveButtonDisabled,
      searchName,
      type,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
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
        <Filter
          onInputChange={ this.onInputChange }
          searchName={ searchName }
          cardRare={ cardRare }
          type={ type }

        />
        {
          newCard
            .filter((card) => card.cardName.includes(searchName))
            .filter((card) => (type !== 'todas' ? type === card.cardRare : newCard))
            .map((card, index) => (

              <section className="cards-save" key={ index }>
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
                <button
                  data-testid="delete-button"
                  type="button"
                  onClick={ () => this.removeCard(card) }
                >
                  Excluir
                </button>
              </section>
            ))
        }
      </div>
    );
  }
}

export default App;
