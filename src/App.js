import React from 'react';
import './styles/style.css';
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
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      listCard: [],
    };
  }

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const finalValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: finalValue,
    }, () => { this.buttonDisabled(); });
  }

  buttonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const maxAttributePoints = 90;
    const maxPoits = 210;

    if (
      cardName.length
      && cardDescription.length
      && cardImage.length
      && cardRare.length !== 0
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxPoits
      && Number(cardAttr1) <= maxAttributePoints
      && Number(cardAttr1) >= 0
      && Number(cardAttr2) <= maxAttributePoints
      && Number(cardAttr2) >= 0
      && Number(cardAttr3) <= maxAttributePoints
      && Number(cardAttr3) >= 0
    ) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
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

    if (cardTrunfo === true) { this.setState({ hasTrunfo: true }); }

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState(({ listCard }) => ({
      listCard: [...listCard, card],
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
      listCard,
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
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleSubmit }
          hasTrunfo={ hasTrunfo }
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
        {
          listCard.map((e) => (
            <Card
              key={ e.cardName }
              cardName={ e.cardName }
              cardDescription={ e.cardDescription }
              cardAttr1={ e.cardAttr1 }
              cardAttr2={ e.cardAttr2 }
              cardAttr3={ e.cardAttr3 }
              cardImage={ e.cardImage }
              cardRare={ e.cardRare }
              cardTrunfo={ e.cardTrunfo }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
