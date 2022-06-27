import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
      isSaveButtonDisabled: true,
      // deck: '',
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.buttonConditionsToEnable()); // Ponto de atenção/tirar dúvida
  }

  buttonConditionsToEnable = () => {
    const { cardName, cardImage, cardDescription, cardAttr1, cardAttr2,
      cardAttr3 } = this.state;
    const allAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3); // Necessario transformar em number
    const maxAttr = 90;
    const sunAllAttr = 210;
    console.log(allAttr);

    if (cardName === ''
      || cardImage === ''
      || cardDescription === ''
      || cardAttr1 > maxAttr || cardAttr1 < 0
      || cardAttr2 > maxAttr || cardAttr2 < 0
      || cardAttr3 > maxAttr || cardAttr3 < 0
      || allAttr > sunAllAttr
    ) {
      return this.setState({ isSaveButtonDisabled: true });
    }
    return this.setState({ isSaveButtonDisabled: false });
  }

  onSaveButtonClick = () => {
    document.querySelector('#text').value = '';
    document.querySelector('#descricao').value = '';
    document.querySelector('#image').value = '';
    document.querySelector('#attr1').value = 0;
    document.querySelector('#attr2').value = 0;
    document.querySelector('#attr3').value = 0;
    document.querySelector('#rarity').value = 'normal';
  }

  render() {
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3, cardRare,
      cardTrunfo, isSaveButtonDisabled } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          onSaveButtonClick={ this.onSaveButtonClick }
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
      </div>
    );
  }
}
// commit
export default App;
