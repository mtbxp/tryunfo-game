import React from 'react';
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
      isSaveButtonDisabled: true,
      cardDeck: [],
      /* hasTrunfo: false, */
    };
  }

  /* Object length has been used according to this thread found in Slack:
  https://trybecourse.slack.com/archives/C03229WPQDA/p1652926420311429 */

  charactersCondition = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare } = this.state;

    if (cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0) { return true; }
  }

  pointsCondition = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;

    const maxTotalPoints = 210;
    const maxAttribute = 90;
    const minAttribute = 0;

    if (
      (parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10)) <= maxTotalPoints

    && parseInt(cardAttr1, 10) <= maxAttribute
    && parseInt(cardAttr2, 10) <= maxAttribute
    && parseInt(cardAttr3, 10) <= maxAttribute

    && parseInt(cardAttr1, 10) >= minAttribute
    && parseInt(cardAttr2, 10) >= minAttribute
    && parseInt(cardAttr3, 10) >= minAttribute) { return true; }
  }

  disableButton = () => {
    this.setState({
      isSaveButtonDisabled: true,
    });

    if (this.pointsCondition() && this.charactersCondition()) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  /* disableButton used as callback as discussed in this thread:
  https://trybecourse.slack.com/archives/C03229WPQDA/p1652897509403569 */

  onInputChange = ({ target }) => {
    const { name, type, value, checked } = target;
    if (type === 'checkbox') {
      this.setState({
        cardTrunfo: checked,
      });
    }

    if (type !== 'checkbox') {
      this.setState({
        [name]: value,
      }, () => this.disableButton());
    }
  }

  onSaveButtonClick = (event) => {
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
      cardDeck } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    cardDeck.push(newCard);

    if (cardTrunfo) {
      /* this.setState({
        hasTrunfo: true,
      }); */
    }

    this.resetForm();
  }

  resetForm = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      isSaveButtonDisabled: true,
    });
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, cardDeck } = this.state;
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
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
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
          onInputChange={ this.onInputChange }
        />
        {
          cardDeck.map((newCard) => (
            <Card
              key={ newCard }
              cardName={ newCard.cardName }
              cardDescription={ newCard.cardDescription }
              cardAttr1={ newCard.cardAttr1 }
              cardAttr2={ newCard.cardAttr2 }
              cardAttr3={ newCard.cardAttr3 }
              cardImage={ newCard.cardImage }
              cardRare={ newCard.cardRare }
              cardTrunfo={ newCard.cardTrunfo }
              onInputChange={ this.onInputChange }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
