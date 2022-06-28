import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const initialState = {
  name: '',
  description: '',
  attack: '0',
  defence: '0',
  speed: '0',
  image: '',
  rare: 'normal',
  trunfo: false,
  buttonDisabled: true,
  cards: [],
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  saveButtonValidation = () => {
    const {
      name,
      description,
      image,
      attack,
      defence,
      speed,
    } = this.state;

    const maxPower = 210;
    const power = 90;
    const minPower = 0;

    const filled = name !== ''
    && description !== ''
    && image !== '';

    const sum = Number(attack)
    + Number(defence)
    + Number(speed)
    <= maxPower;

    const max = Number(attack) <= power
    && Number(defence) <= power
    && Number(speed) <= power;

    const min = Number(attack) >= minPower
    && Number(defence) >= minPower
    && Number(speed) >= minPower;

    if (filled && sum && max && min) {
      return false;
    }
    return true;
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      () => this.setState({
        buttonDisabled: this.saveButtonValidation(),
      }),
    );
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const {
      name,
      description,
      image,
      attack,
      defence,
      speed,
      rare,
      trunfo,
    } = this.state;

    const cardData = {
      name,
      description,
      image,
      attack,
      defence,
      speed,
      rare,
      trunfo,
    };

    this.setState((prevState) => ({
      cards: [...prevState.cards, cardData], ...initialState,
    }));
  }

  render() {
    const {
      name,
      description,
      attack,
      defence,
      speed,
      image,
      rare,
      trunfo,
      buttonDisabled,
    } = this.state;

    return (
      <main className="main">
        <h1>Tryunfo</h1>
        <div className="container">
          <Form
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attack }
            cardAttr2={ defence }
            cardAttr3={ speed }
            cardImage={ image }
            cardRare={ rare }
            cardTrunfo={ trunfo }
            hasTrunfo={ false }
            isSaveButtonDisabled={ buttonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attack }
            cardAttr2={ defence }
            cardAttr3={ speed }
            cardImage={ image }
            cardRare={ rare }
            cardTrunfo={ trunfo }
          />
        </div>
      </main>
    );
  }
}

export default App;
