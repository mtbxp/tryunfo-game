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
      cardDeck: '',
    };
  }

  /* Object length used, according to this thread found in Slack:
  https://trybecourse.slack.com/archives/C03229WPQDA/p1652926420311429 */

  disableButton = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare } = this.state;
    const maxAttr = 90;
    const minAttr = 0;
    const maxPoints = 210;
    this.setState({
      isSaveButtonDisabled: true,
    });
    if (cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0
      && (parseInt(cardAttr1, 10)
      + parseInt(cardAttr2, 10)
      + parseInt(cardAttr3, 10)) <= maxPoints
      && parseInt(cardAttr1, 10) <= maxAttr
      && parseInt(cardAttr2, 10) <= maxAttr
      && parseInt(cardAttr3, 10) <= maxAttr
      && parseInt(cardAttr1, 10) >= minAttr
      && parseInt(cardAttr2, 10) >= minAttr
      && parseInt(cardAttr3, 10) >= minAttr) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  /* disableButton used as callback as discussed in this thread:
  https://trybecourse.slack.com/archives/C03229WPQDA/p1652897509403569 */

  onInputChange = ({ target }) => {
    const { name, type, value } = target;
    if (type === 'checkbox') {
      this.setState({
        cardTrunfo: target.checked,
      });
    }
    if (type !== 'checkbox') {
      this.setState({
        [name]: value,
      }, () => this.disableButton());
    }
  }

  onSaveButtonClick = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: true,
      isSaveButtonDisabled: true,
    });
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
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
      </div>
    );
  }
}

export default App;
