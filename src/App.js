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
      deckCard: [],
      onSaveButtonClick: this.onSaveButtonClick,
    };
  }

  onInputChange = ({ target }) => {
    if (target.type === 'checkbox') {
      this.setState({
        [target.name]: target.checked,
      });
    } else {
      this.setState({
        [target.name]: target.value,
      }, () => this.validateButton());
    }
  }

  validateButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    // let ableButton = true;
    const maxSum = 210;
    const maxAttr = 90;
    const minAttr = 0;

    if (
      cardName.length
      && cardDescription.length
      && cardImage.length
      && cardRare.length !== 0
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSum
      && Number(cardAttr1) <= maxAttr
      && Number(cardAttr1) >= minAttr
      && Number(cardAttr2) <= maxAttr
      && Number(cardAttr2) >= minAttr
      && Number(cardAttr3) <= maxAttr
      && Number(cardAttr3) >= minAttr
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

onSaveButtonClick = () => {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
  } = this.state;
  const card = {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
  };

  this.setState((prev) => ({
    deckCard: [card, ...prev.deckCard],
  }));
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
    isSaveButtonDisabled,
    onSaveButtonClick,
  } = this.state;

  // Auxilio do colega Lucas Medeiros que me explicou melhor o conceito de props
  return (
    <div className="container-tryunfo">
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
        onInputChange={ this.onInputChange }
        onSaveButtonClick={ onSaveButtonClick }
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
        isSaveButtonDisabled={ isSaveButtonDisabled }
      />
    </div>
  );
}
}

export default App;
