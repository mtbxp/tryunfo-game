import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    // this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
  }

  onInputChange({ target }) {
    this.setState({
      [target.name]: target.value,
    }, this.validateInputs);
  }

  /*   onSaveButtonClick() {
    if (cardName !== '') {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  } */

  validateInputs() {
    const maxTotalAttributs = 210;
    const maxAtribute = 90;
    const minAtribute = 0;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const parseAttr1 = parseInt(cardAttr1, 10);
    const parseAttr2 = parseInt(cardAttr2, 10);
    const parseAttr3 = parseInt(cardAttr3, 10);
    const sumAttributs = parseAttr1 + parseAttr2 + parseAttr3;
    if (
      cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare
      && parseAttr1 <= maxAtribute
      && parseAttr2 <= maxAtribute
      && parseAttr3 <= maxAtribute
      && parseAttr1 >= minAtribute
      && parseAttr2 >= minAtribute
      && parseAttr3 >= minAtribute
      && sumAttributs <= maxTotalAttributs
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
    } = this.state;

    return (
      <div className="Master-Content">
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
        <section className="Card-Container">
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
        </section>
      </div>
    );
  }
}

export default App;
