import React from 'react';
import Card from './components/Card';
import Forms from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: '',
      cardTrunfo: false,
      cards: [],
    };
  }

  isSaveButtonDisabled = () => {
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const sum = (+cardAttr1) + (+cardAttr2) + (+cardAttr3);
    const maxCard = 90;
    const maxLengthCard = 210;

    if (cardName.length <= 1
      || cardDescription.length <= 1
      || cardImage.length <= 1
      || cardRare.length <= 1
      || sum > maxLengthCard
      || cardAttr1 > maxCard
      || cardAttr2 > maxCard
      || cardAttr3 > maxCard
      || cardAttr1 < 0
      || cardAttr2 < 0
      || cardAttr3 < 0
    ) {
      return true;
    }
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3, cards } = this.state;
    this.setState({
      [cards]: [
        {
          name: cardName,
          description: cardDescription,
          image: cardImage,
          rare: cardRare,
          attr1: cardAttr1,
          attr2: cardAttr2,
          att3: cardAttr3,
        }],
    });
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: '',
      cardTrunfo: false,
    });
  };

  OnInputChange = ({ target }) => {
    this.isSaveButtonDisabled();
    const { name, value, checked } = target;
    this.setState({
      [name]: name === 'cardTrunfo' ? checked : value,
    });
  }

  render() {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2,
      cardAttr3, cardRare, cardTrunfo, cards } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Forms
          onInputChange={ this.OnInputChange }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
          onSaveButtonClick={ this.onSaveButtonClick }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }

        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }

        />
        <div>{cards}</div>
      </div>
    );
  }
}

export default App;
