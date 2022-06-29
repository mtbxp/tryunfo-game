import React from 'react';
import Card from './components/Card';
import Forms from './components/Form';
import data from './components/data';

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
      hasTrunfo: false,
      cards: data,
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
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3, cardRare, cardTrunfo } = this.state;
    this.setState((prevState) => ({
      cards: [...prevState.cards, {
        name: cardName,
        description: cardDescription,
        image: cardImage,
        attr1: cardAttr1,
        attr2: cardAttr2,
        attr3: cardAttr3,
        rare: cardRare,
        trunfo: cardTrunfo,
      }],
    }));
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: true,
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
      cardAttr3, cardRare, cardTrunfo, cards, hasTrunfo } = this.state;
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
          hasTrunfo={ hasTrunfo }

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
        <div>
          {
            cards.map((elemento) => (
              <div key={ elemento.name }>
                { elemento.name}
                <span>{elemento.trunfo}</span>
                <p>
                  {elemento.description}
                </p>
                <p>
                  {elemento.rare}
                </p>

                <ul>
                  <li>{elemento.attr1}</li>
                  <li>{elemento.attr2}</li>
                  <li>{elemento.attr3}</li>
                </ul>
                <input type="button" value="DELETAR" data-testid="delete-button" />
              </div>
            ))
          }

        </div>
      </div>

    );
  }
}

export default App;
