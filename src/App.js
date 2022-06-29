import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      describe: '',
      cardImage: '',
      firstAttribute: '',
      secondAttribute: '',
      thirdAttribute: '',
      rarity: 'normal',
      saveButtonDisabled: true,
      superTrunfo: false,
      savedCards: [],
    };
  }

handleSelection = () => {
  const
    {
      nome,
      describe,
      rarity,
      cardImage,
      firstAttribute,
      secondAttribute,
      thirdAttribute,
    } = this.state;

  const maxPoints = 91;
  const sumPoints = parseInt(firstAttribute, 10)
    + parseInt(secondAttribute, 10)
    + parseInt(thirdAttribute, 10);
  const isTrueFirstAttr = firstAttribute >= 0 && firstAttribute < maxPoints;
  const isTrueSecondAttr = secondAttribute >= 0 && secondAttribute < maxPoints;
  const isTrueThirdAttr = thirdAttribute >= 0 && thirdAttribute < maxPoints;
  const maxTotalPoints = 211;

  if (nome.length > 0
    && describe.length > 0
    && rarity.length > 0
    && cardImage.length > 0
    && (sumPoints) < maxTotalPoints
    && isTrueFirstAttr
    && isTrueSecondAttr
    && isTrueThirdAttr) {
    this.setState({
      saveButtonDisabled: false,
    });
  } else {
    this.setState({
      saveButtonDisabled: true,
    });
  }
};

onChange = ({ target }) => {
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  this.setState({
    [name]: value,
  }, () => this.handleSelection());
};

handleClear = () => {
  const zero = 0;

  this.setState(
    {
      nome: '',
      describe: '',
      cardImage: '',
      firstAttribute: zero.toString(),
      secondAttribute: zero.toString(),
      thirdAttribute: zero.toString(),
      rarity: 'normal',
      saveButtonDisabled: true,
      superTrunfo: false,
      savedCards: [],
    },
  );
};

handleSave = () => {
  const
    {
      nome,
      describe,
      cardImage,
      firstAttribute,
      secondAttribute,
      thirdAttribute,
      rarity,
      superTrunfo,
      savedCards,
    } = this.state;

  // const savedCards = JSON.parse(localStorage.getItem('savedCards') || '[]');
  const card = {
    nome,
    describe,
    cardImage,
    firstAttribute,
    secondAttribute,
    thirdAttribute,
    rarity,
    superTrunfo,
  };

  const updateSavedCards = [...savedCards];
  updateSavedCards.push(card);

  this.setState({
    savedCards: updateSavedCards,
  }, this.handleClear());
};

render() {
  const
    {
      nome,
      describe,
      cardImage,
      firstAttribute,
      secondAttribute,
      thirdAttribute,
      rarity,
      saveButtonDisabled,
      superTrunfo,
    } = this.state;

  return (
    <div className="App">
      <h1>Tryunfo</h1>
      <Form
        cardName={ nome }
        cardDescription={ describe }
        cardAttr1={ firstAttribute }
        cardAttr2={ secondAttribute }
        cardAttr3={ thirdAttribute }
        cardImage={ cardImage }
        cardRare={ rarity }
        cardTrunfo={ superTrunfo }
        hasTrunfo={ false }
        isSaveButtonDisabled={ saveButtonDisabled }
        handleSelection={ this.handleSelection }
        onInputChange={ this.onChange }
        onSaveButtonClick={ this.handleSave }
      />
      <Card
        cardName={ nome }
        cardDescription={ describe }
        cardAttr1={ firstAttribute }
        cardAttr2={ secondAttribute }
        cardAttr3={ thirdAttribute }
        cardImage={ cardImage }
        cardRare={ rarity }
        cardTrunfo={ superTrunfo }
      />
    </div>
  );
}
}

export default App;
